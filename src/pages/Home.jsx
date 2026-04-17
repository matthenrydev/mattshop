import { Link } from "react-router-dom";
import { Wrench, Smartphone, Monitor, Cpu, CheckCircle, Star, PhoneCall, MapPin, Clock, ArrowRight, Shield, Zap, Cog, Microchip } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

// Animated Laptop Component
function AnimatedLaptop() {
    return (
        <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
            {/* Background Circuit Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <defs>
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" />
                        <path d="M20 0 L20 18 M20 22 L20 40 M0 20 L18 20 M22 20 L40 20" stroke="currentColor" strokeWidth="0.5" className="text-primary" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            {/* Main Laptop SVG */}
            <div className="relative z-10 w-64 sm:w-80 animate-float-slow">
                <svg viewBox="0 0 200 140" className="w-full drop-shadow-2xl">
                    {/* Laptop Base */}
                    <defs>
                        <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e8e8e8" />
                            <stop offset="50%" stopColor="#d0d0d0" />
                            <stop offset="100%" stopColor="#a0a0a0" />
                        </linearGradient>
                        <linearGradient id="screen" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1a1a2e" />
                            <stop offset="100%" stopColor="#0f0f1a" />
                        </linearGradient>
                        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Bottom Chassis */}
                    <path
                        d="M20 80 L180 80 L190 100 L10 100 Z"
                        fill="url(#metal)"
                        className="animate-pulse-subtle"
                    />

                    {/* Keyboard Area */}
                    <rect x="30" y="85" width="140" height="10" rx="2" fill="#404040" opacity="0.8" />

                    {/* Screen Back */}
                    <rect x="25" y="10" width="150" height="70" rx="5" fill="#2a2a3a" />

                    {/* Screen Display */}
                    <rect x="30" y="15" width="140" height="60" rx="2" fill="url(#screen)" />

                    {/* Code Lines Animation */}
                    <g className="text-primary">
                        {[...Array(5)].map((_, i) => (
                            <rect
                                key={i}
                                x="35"
                                y={20 + i * 10}
                                width={80 - i * 10}
                                height="3"
                                rx="1.5"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </g>

                    {/* Floating Components */}
                    <g className="animate-orbit text-primary">
                        <circle cx="180" cy="50" r="8" fill="currentColor" opacity="0.8" />
                        <rect x="176" y="46" width="8" height="8" fill="#fff" opacity="0.3" />
                    </g>

                    <g className="animate-orbit-reverse text-secondary" style={{ animationDelay: '-2s' }}>
                        <circle cx="20" cy="40" r="6" fill="currentColor" opacity="0.6" />
                        <Microchip size="8" x="16" y="36" />
                    </g>

                    {/* Connection Lines */}
                    <path
                        d="M45 50 L60 35 M155 50 L140 35"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                        className="text-primary animate-dash"
                        fill="none"
                    />

                    {/* CPU Glow */}
                    <circle cx="100" cy="45" r="15" fill="url(#glow)" className="text-primary animate-pulse" />
                    <rect x="92" y="37" width="16" height="16" rx="2" fill="currentColor" className="text-primary" />
                </svg>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-10 left-10 animate-bounce-slow">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-primary shadow-lg">
                    <Cog size={24} className="animate-spin-slow" />
                </div>
            </div>
            <div className="absolute bottom-20 right-10 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-primary shadow-lg">
                    <Cpu size={24} />
                </div>
            </div>
            <div className="absolute top-1/2 right-5 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
            </div>

            {/* Teardown Layer Labels */}
            <div className="absolute top-20 left-0 sm:left-10 space-y-2">
                {['Screen', 'Battery', 'Logic Board', 'SSD'].map((layer, i) => (
                    <div
                        key={layer}
                        className="flex items-center gap-2 text-xs font-bold text-muted-foreground animate-slide-in-left"
                        style={{ animationDelay: `${i * 0.3}s` }}
                    >
                        <div className="w-6 h-[2px] bg-primary" />
                        <span>{layer}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary/30">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
                }
                @keyframes orbit-reverse {
                    0% { transform: rotate(360deg) translateX(25px) rotate(-360deg); }
                    100% { transform: rotate(0deg) translateX(25px) rotate(0deg); }
                }
                @keyframes dash {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 12; }
                }
                @keyframes pulse-subtle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                @keyframes slide-in-left {
                    0% { opacity: 0; transform: translateX(-20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                .animate-orbit { animation: orbit 8s linear infinite; }
                .animate-orbit-reverse { animation: orbit-reverse 6s linear infinite; }
                .animate-dash { animation: dash 1s linear infinite; }
                .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
                .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; opacity: 0; }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
            `}</style>

            {/* Hero Section - Dramatic Redesign */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,var(--border)_1px),linear-gradient(to_bottom,transparent_1px,var(--border)_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-subtle" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-subtle" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                        {/* Left: Content */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6 animate-slide-in-left">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider">Trusted Since 2015</span>
                            </div>

                            {/* Main Headline with Character Animation */}
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-black leading-[1.05] mb-6 tracking-tighter">
                                <span className="block">We Don&apos;t Just</span>
                                <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                                    Fix Devices
                                </span>
                                <span className="block text-muted-foreground">We Restore Them</span>
                            </h1>

                            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Precision microsoldering. Board-level diagnostics. Same-day turnaround.
                                <span className="text-foreground font-semibold"> 15,000+ devices</span> brought back to life.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <a
                                    href="tel:+15551234567"
                                    className="group inline-flex items-center justify-center gap-2 bg-card border-2 border-border hover:border-primary/50 text-foreground font-bold px-8 py-4 rounded-2xl transition-all duration-300"
                                >
                                    <PhoneCall size={18} className="text-primary" />
                                    +1 (555) 123-4567
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                {[
                                    { icon: <CheckCircle size={16} />, text: "15k+ Repairs" },
                                    { icon: <Star size={16} className="fill-primary" />, text: "4.9 Rating" },
                                    { icon: <Shield size={16} />, text: "90-Day Warranty" },
                                    { icon: <Clock size={16} />, text: "Same-Day Service" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card/50 border border-border/50 px-4 py-2 rounded-full"
                                    >
                                        <span className="text-primary">{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Animated Laptop Teardown */}
                        <div className="flex-1 w-full max-w-xl">
                            <AnimatedLaptop />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 relative bg-accent/20 dark:bg-gray-900/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-20 text-center mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter italic">Expert Services</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">From precision microsoldering to complex motherboard restoration, we handle the repairs others won't touch.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: <Smartphone size={28} />,
                                title: "Premium Phone Care",
                                desc: "OLED screen restoration, high-capacity battery calibration, and advanced water damage mitigation for all flagship devices.",
                                tag: "Flagship First"
                            },
                            {
                                icon: <Monitor size={28} />,
                                title: "Enterprise Computing",
                                desc: "Workstation upgrades, thermal management overhaul, and logical board diagnostics for MacBooks and PCs.",
                                tag: "Pro Performance"
                            },
                            {
                                icon: <Cpu size={28} />,
                                title: "Specialist Electronics",
                                desc: "Component-level repair for gaming consoles, audio gear, and custom industrial controllers.",
                                tag: "Precision Lab"
                            },
                        ].map((s, i) => (
                            <div key={i} className="group relative bg-card/40 backdrop-blur-sm border border-border hover:border-primary/40 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.05)] overflow-hidden">
                                <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                                <div className="relative z-10 font-bold">
                                    <span className="inline-block bg-primary/10 text-primary text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-full mb-8 border border-primary/20">
                                        {s.tag}
                                    </span>
                                    <div className="w-14 h-14 bg-accent/50 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner shadow-primary/10">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight leading-none">{s.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="py-32 border-y border-border relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                            <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter">The Standard in <br /><span className="text-primary italic">Repair Integrity</span></h2>
                            <p className="text-muted-foreground text-lg mb-12 font-medium">We don't just fix devices; we restore them to their original performance standards using a process focused on longevity.</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Price Lock", desc: "Upfront quotes that never change." },
                                    { icon: <Shield />, title: "3 Month Warranty", desc: "Full coverage on all repairs." },
                                    { icon: <Wrench />, title: "OEM Grade Parts", desc: "Highest quality components." },
                                    { icon: <CheckCircle />, title: "Master Techs", desc: "Certified industry experts." },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-6 bg-card border border-border hover:border-primary/20 rounded-3xl transition-all shadow-sm">
                                        <div className="text-primary">
                                            <CheckCircle size={24} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <p className="font-black text-foreground tracking-tight mb-1">{item.title}</p>
                                            <p className="text-muted-foreground text-sm font-medium leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats / Proof */}
                        <div className="grid gap-6">
                            {[
                                { name: "Sarah K.", role: "Professional Photographer", review: "Recovery of my failed SSD saved thousands of dollars in client work. Truly world-class expertise." },
                                { name: "James M.", role: "Software Engineer", review: "The board-level repair on my MacBook was flawless. They fixed what three other shops called 'unfixable'." },
                            ].map((t, i) => (
                                <div key={i} className="group bg-card/80 backdrop-blur-xl border border-border rounded-[2rem] p-8 sm:p-10 hover:border-primary/30 transition-all duration-300 shadow-xl">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} size={16} className="text-primary fill-primary" />
                                        ))}
                                    </div>
                                    <p className="text-foreground text-lg italic leading-relaxed mb-8 font-medium">"{t.review}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-xl text-primary-foreground">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-black text-foreground text-lg leading-none mb-1">{t.name}</p>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest leading-none">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="location" className="py-24 md:py-40">
                <div className="container mx-auto px-6">
                    <div className="relative bg-card border border-border rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter text-foreground">Ready for a <span className="text-primary italic">Proper Fix?</span></h2>
                            <p className="text-muted-foreground text-lg mb-12 max-w-xl font-medium leading-relaxed">No appointments necessary for diagnostics. Stop by our lab or call us to discuss your device's issues.</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-16">
                                {[
                                    { icon: <MapPin />, label: "Find Us", value: "123 Tech Lane, Silicon Valley", sub: "Free Parking Available" },
                                    { icon: <Clock />, label: "Hours", value: "Mon-Sat: 9AM - 8PM", sub: "Emergency fixes on Sun" },
                                    { icon: <PhoneCall />, label: "Direct Line", value: "+1 (555) 123-4567", sub: "Text friendly service" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 group">
                                        <div className="w-14 h-14 bg-accent/80 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-border shadow-sm">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">{item.label}</p>
                                            <p className="text-foreground font-bold mb-1">{item.value}</p>
                                            <p className="text-muted-foreground text-[10px] font-bold uppercase">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center justify-center gap-4 bg-primary hover:opacity-90 text-primary-foreground font-black px-12 py-6 rounded-[2rem] text-xl transition-all duration-300 hover:scale-[1.05] shadow-2xl shadow-primary/40"
                                >
                                    Start Your Repair <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                                </Link>
                                <a
                                    href="tel:+15551234567"
                                    className="inline-flex items-center justify-center gap-3 bg-accent border border-border hover:border-primary/30 font-black px-12 py-6 rounded-[2rem] text-xl transition-all"
                                >
                                    <PhoneCall size={20} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                            <Wrench size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-black tracking-tighter">Matt&apos;s Repair Shop</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>

            {/* Chat Widget */}
            <ChatWidget
                apiBaseUrl={import.meta.env.VITE_API_BASE_URL}
                apiKey={import.meta.env.VITE_API_KEY}
                apiSecret={import.meta.env.VITE_API_SECRET}
                title="Matt's Repair Shop"
                subtitle="Expert AI Support"
                greeting="Welcome to Matt's Repair Lab. How can I assist with your device restoration today?"
            />
        </div>
    );
}
