import { Link } from "react-router-dom";
import { Wrench, Smartphone, Monitor, Cpu, CheckCircle, Star, PhoneCall, MapPin, Clock, ArrowRight, Shield, Zap } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary/30">

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
                {/* Background glow effects - softer in light mode */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[160px]" />
                    <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Left: Content */}
                        <div className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 shadow-xl shadow-primary/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Trusted Repair Experts Since 2015
                            </div>
                            
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
                                Excellence in <br className="hidden sm:block" />
                                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                    Device Repair
                                </span>
                            </h1>
                            
                            <p className="text-muted-foreground text-base sm:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Professional restoration for phones, laptops, and tablets. We combine manufacturer-grade precision with same-day service and an industry-leading <strong className="text-foreground font-bold">90-day warranty</strong>.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="tel:+15551234567"
                                    className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/80 border border-border text-foreground font-bold px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-md"
                                >
                                    <PhoneCall size={20} className="text-primary" /> +1 (555) 123-4567
                                </a>
                            </div>

                            {/* Social proof */}
                            <div className="flex flex-wrap gap-8 mt-14 justify-center lg:justify-start items-center opacity-60">
                                {[
                                    { icon: <CheckCircle size={18} className="text-primary" />, text: "15k+ Repairs" },
                                    { icon: <Star size={18} className="text-primary fill-primary" />, text: "4.9 Google Rating" },
                                    { icon: <Shield size={18} className="text-primary" />, text: "Genuine Parts" },
                                ].map((b, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-muted-foreground whitespace-nowrap">
                                        {b.icon} {b.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Visual Element */}
                        <div className="flex-1 w-full max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
                            <div className="relative group">
                                {/* Decorative elements */}
                                <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-primary/40 rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
                                
                                <div className="relative bg-card/50 backdrop-blur-2xl border border-border rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                        {[
                                            { icon: <Smartphone size={32} />, label: "Smartphones", price: "From $49" },
                                            { icon: <Monitor size={32} />, label: "Laptops", price: "From $89" },
                                            { icon: <Cpu size={32} />, label: "Consoles", price: "From $79" },
                                            { icon: <Zap size={32} />, label: "Express Fix", price: "Within 1hr" },
                                        ].map((s, i) => (
                                            <div key={i} className="bg-background/20 dark:bg-white/5 border border-border rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-background/40 dark:hover:bg-white/10 transition-all duration-300 cursor-default group/card">
                                                <div className="text-primary mb-4 transform transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3">
                                                    {s.icon}
                                                </div>
                                                <p className="text-sm sm:text-base font-black text-foreground mb-1 tracking-tight">{s.label}</p>
                                                <p className="text-[10px] sm:text-xs font-bold text-primary/70 uppercase tracking-widest">{s.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl px-5 py-4 flex items-center justify-center gap-4">
                                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                                        <span className="text-xs sm:text-sm font-bold text-muted-foreground tracking-tight">Active repairs in progress · Shop is <span className="text-green-500 font-black">Open Now</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                            <a
                                href="tel:+15551234567"
                                className="group inline-flex items-center gap-4 bg-primary hover:opacity-90 text-primary-foreground font-black px-12 py-6 rounded-[2rem] text-xl transition-all duration-300 hover:scale-[1.05] shadow-2xl shadow-primary/40"
                            >
                                Start Your Repair <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="pb-12 border-t border-border pt-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                            <Wrench size={16} strokeWidth={3} />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-foreground">Matt's Repair Shop</span>
                    </div>
                    <div className="flex gap-8 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors">Safety</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    </div>
                    <p className="text-muted-foreground text-xs font-bold tracking-widest text-center">© {new Date().getFullYear()} REPAIR EXCELLENCE COLLABORATIVE</p>
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
