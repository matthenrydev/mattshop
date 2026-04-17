'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { io } from 'socket.io-client';
import { toast } from 'sonner';

const SESSION_STORAGE_KEY = 'bot_session_id';

const ChatWidget = ({
    apiBaseUrl = '',
    apiKey,
    apiSecret,
    apiUrl,
    socketUrl,
    socketPath = '/api/socket',
    title = 'Customer Support',
    subtitle = 'AI Support Bot',
    greeting = 'Hello!, How can I help you today?',
}) => {
    // Derive URLs from base URL if provided, otherwise use individual URLs
    const finalApiUrl = apiUrl || (apiBaseUrl ? `${apiBaseUrl}/api/chat` : '/api/chat');
    const finalSocketUrl = socketUrl || apiBaseUrl || undefined;

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { role: 'bot', text: greeting, timestamp: new Date() }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [isTakenOver, setIsTakenOver] = useState(false);
    const [socket, setSocket] = useState(null);
    const [isListening, setIsListening] = useState(false);
    const chatEndRef = useRef(null);
    const recognitionRef = useRef(null);
    const processedMessages = useRef(new Set());
    const sessionIdRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // Initialize socket connection
    useEffect(() => {
        const initSocket = () => {
            const newSocket = io(finalSocketUrl, {
                path: socketPath,
                addTrailingSlash: false,
            });

            newSocket.on('connect', () => {
                console.log('Socket connected:', newSocket.id);
            });

            newSocket.on('new-message', (msg) => {
                console.log('Received new-message:', msg);

                // Ignore messages from other sessions
                if (msg.sessionId && msg.sessionId !== sessionIdRef.current) {
                    console.log('Message from different session, ignoring:', msg.sessionId);
                    return;
                }

                // Use messageId for deduplication if available (for admin messages)
                const msgKey = msg.messageId
                    ? `msgid:${msg.messageId}`
                    : `${msg.role}:${msg.text}:${new Date(msg.timestamp || Date.now()).getTime()}`;

                if (processedMessages.current.has(msgKey)) {
                    console.log('Duplicate message ignored:', msg);
                    return;
                }
                processedMessages.current.add(msgKey);

                setChatHistory(prev => [...prev, msg]);
            });

            newSocket.on('session-taken-over', () => {
                setIsTakenOver(true);
                toast.info('An admin has joined the conversation');
            });

            newSocket.on('session-closed', () => {
                setIsTakenOver(false);
                toast.info('The conversation has been closed by the admin');
                setChatHistory(prev => [...prev, {
                    role: 'bot',
                    text: 'The admin has closed this conversation. The AI assistant is now available to help you again.',
                    timestamp: new Date()
                }]);
            });

            setSocket(newSocket);

            return () => {
                newSocket.disconnect();
            };
        };

        initSocket();
    }, [finalSocketUrl, socketPath]);

    // Initialize or restore session
    useEffect(() => {
        const initSession = async () => {
            try {
                // Check localStorage for existing session
                const storedSessionId = localStorage.getItem(SESSION_STORAGE_KEY);

                const headers = {};
                if (apiKey) headers['X-API-Key'] = apiKey;
                if (apiSecret) headers['X-API-Secret'] = apiSecret;

                const queryParam = storedSessionId ? `?sessionId=${storedSessionId}` : '';
                const response = await fetch(`${finalApiUrl}${queryParam}`, {
                    headers: Object.keys(headers).length > 0 ? headers : undefined
                });
                const data = await response.json();

                if (data.sessionId) {
                    setSessionId(data.sessionId);
                    sessionIdRef.current = data.sessionId;
                    localStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
                    setIsTakenOver(data.takenOver);

                    // Join socket room for this session
                    if (socket) {
                        socket.emit('join-session', data.sessionId);
                    }

                    // Restore chat history if available
                    if (data.messages && data.messages.length > 0) {
                        const messages = data.messages.map((m) => ({
                            role: m.role,
                            text: m.text,
                            timestamp: new Date(m.timestamp),
                            messageId: m.messageId,
                        }));
                        // Pre-populate processed messages with messageId or timestamp-based key
                        messages.forEach((m) => {
                            const key = m.messageId
                                ? `msgid:${m.messageId}`
                                : `${m.role}:${m.text}:${new Date(m.timestamp || Date.now()).getTime()}`;
                            processedMessages.current.add(key);
                        });
                        setChatHistory(messages);
                    }
                }
            } catch (error) {
                console.error('Failed to initialize session:', error);
            }
        };

        if (socket) {
            initSession();
        }
    }, [socket, apiKey, apiSecret, finalApiUrl]);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [chatHistory, isOpen, scrollToBottom]);

    const sendMessage = useCallback(async (msgToSend) => {
        if (!msgToSend.trim() || isLoading || !sessionId || !socket) return;

        setMessage('');
        setIsLoading(true);

        // Generate unique message ID for deduplication
        const messageId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Add optimistically so it shows up immediately
        const optimisticMsg = {
            role: 'user',
            text: msgToSend,
            timestamp: new Date(),
            messageId
        };

        // Add to processed immediately to prevent duplicate from socket broadcast
        processedMessages.current.add(`msgid:${messageId}`);

        setChatHistory(prev => [...prev, optimisticMsg]);

        // Emit message via socket - server will broadcast to all clients
        if (socket) {
            socket.emit('user-message', { sessionId, message: msgToSend, messageId });
        }

        if (isTakenOver) {
            // Session is taken over, don't get AI response
            setIsLoading(false);
            return;
        }

        try {
            const headers = { 'Content-Type': 'application/json' };
            if (apiKey) headers['X-API-Key'] = apiKey;
            if (apiSecret) headers['X-API-Secret'] = apiSecret;

            // Get AI response
            const response = await fetch(finalApiUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    message: msgToSend,
                    sessionId,
                    noSave: true
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();

            if (data.takenOver) {
                setIsTakenOver(true);
                toast.info('An admin has taken over this conversation');
            } else if (data.reply) {
                // Generate unique message ID for bot message deduplication
                const botMessageId = `bot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

                // Add bot message to local state immediately
                const botMsg = {
                    role: 'bot',
                    text: data.reply,
                    timestamp: new Date(),
                    messageId: botMessageId
                };

                // Mark as processed to prevent duplicate when socket broadcasts back
                processedMessages.current.add(`msgid:${botMessageId}`);

                setChatHistory(prev => [...prev, botMsg]);

                // Emit bot response via socket for admin and other clients
                socket.emit('bot-message', { sessionId, message: data.reply, messageId: botMessageId });
            }
        } catch (error) {
            console.error('Chat error:', error);
            toast.error('Failed to get response. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, sessionId, socket, isTakenOver, apiKey, apiSecret, finalApiUrl]);

    const startListening = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            toast.error('Speech Recognition not supported in this browser');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        recognitionRef.current = recognition;

        let finalTranscript = '';

        recognition.onstart = () => {
            setIsListening(true);
            finalTranscript = '';
        };

        recognition.onresult = (event) => {
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            // Show interim results in input
            const displayText = finalTranscript + interimTranscript;
            setMessage(displayText);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            if (event.error !== 'aborted') {
                toast.error(`Speech recognition error: ${event.error}`);
            }
        };

        recognition.onend = () => {
            setIsListening(false);
            recognitionRef.current = null;

            // Auto-send the message if we have text
            if (finalTranscript.trim() && sessionId && socket) {
                // Small delay to ensure UI updates first
                setTimeout(() => {
                    const trimmedMessage = finalTranscript.trim();
                    sendMessage(trimmedMessage);
                }, 100);
            }
        };

        recognition.start();
    }, [sessionId, socket, sendMessage]);

    const stopListening = useCallback(() => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    }, []);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading || !sessionId || !socket) return;
        const userMessage = message.trim();
        await sendMessage(userMessage);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300 transform scale-100 origin-bottom-right">
                    {/* Header */}
                    <div className="p-4 bg-emerald-600 text-white flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-emerald-400">
                                {isTakenOver ? '👤' : '🤖'}
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">
                                    {isTakenOver ? 'Support Agent' : title}
                                </h3>
                                <p className="text-[10px] opacity-90 uppercase tracking-wider">
                                    {isTakenOver ? 'Live Support' : subtitle}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-emerald-500 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Admin indicator */}
                    {isTakenOver && (
                        <div className="px-4 py-2 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
                            <p className="text-xs text-amber-700 dark:text-amber-400 text-center">
                                An admin is handling your conversation
                            </p>
                        </div>
                    )}

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-zinc-50 dark:bg-black/20">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${chat.role === 'user'
                                    ? 'bg-emerald-600 text-white rounded-tr-none shadow-sm'
                                    : chat.role === 'admin'
                                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100 rounded-tl-none border border-amber-200 dark:border-amber-800 shadow-sm'
                                        : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-100 dark:border-zinc-700 shadow-sm'
                                    }`}
                                    style={{ overflowWrap: 'break-word', wordBreak: 'normal' }}
                                >
                                    {chat.role === 'admin' && (
                                        <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Admin</p>
                                    )}
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            /* eslint-disable no-unused-vars */
                                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                            a: ({ node, ...props }) => <a className="text-emerald-400 hover:underline break-all" target="_blank" rel="noopener noreferrer" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2" {...props} />,
                                            ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                            strong: ({ node, ...props }) => <strong className="font-bold text-emerald-300" {...props} />,
                                            /* eslint-enable no-unused-vars */
                                        }}
                                    >
                                        {chat.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-100 dark:border-zinc-700 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={isTakenOver ? "Type your message..." : "Ask me anything..."}
                                className="w-full p-3 pr-20 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-emerald-500 text-md text-black dark:text-white"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={isListening ? stopListening : startListening}
                                    className={`p-1.5 transition-all duration-200 ${isListening ? 'text-blue-500 scale-110' : 'text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400'}`}
                                    title={isListening ? 'Listening... Click to stop' : 'Click and speak to send message'}
                                >
                                    {isListening ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="p-1.5 text-emerald-600 hover:text-emerald-700 disabled:opacity-50 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${isOpen
                    ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50'
                    : isTakenOver
                        ? 'bg-amber-500 text-white'
                        : 'bg-emerald-600 text-black animate-bounce-slow'
                    }`}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

        </div>
    );
};

export default ChatWidget;
