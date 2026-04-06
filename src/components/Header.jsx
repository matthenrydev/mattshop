import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Lock, EyeClosed, User, LogOut, ChevronDown, LayoutDashboard } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function WrenchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

export default function Header() {
    const { user, logout } = useAuth();
    const { dark, setDark } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-950/80 backdrop-blur-xl text-white transition-colors duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center h-16">

                {/* Brand */}
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
                        <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                            <WrenchIcon />
                        </span>
                        <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                            Matt's Repair
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                        <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    </nav>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle theme"
                    >
                        {dark ? <EyeClosed size={18} className="text-yellow-400" /> : <Moon size={18} />}
                    </button>

                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                                    <User size={15} />
                                </div>
                                <span className="text-sm font-medium hidden sm:block text-gray-200">{user.username}</span>
                                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
                                    <div className="p-4 border-b border-white/5">
                                        <p className="text-sm font-bold text-white truncate">{user.username}</p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </div>
                                    <div className="p-2">
                                        {user.role === 'admin' && (
                                            <Link
                                                to="/dashboard"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-xl hover:bg-white/5 transition-colors"
                                            >
                                                <LayoutDashboard size={15} className="text-orange-400" />
                                                Dashboard
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 rounded-xl hover:bg-red-500/10 transition-colors"
                                        >
                                            <LogOut size={15} />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
                        >
                            <Lock size={14} /> Book Repair
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
