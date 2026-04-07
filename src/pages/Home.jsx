import { Link } from "react-router-dom";
import { Wrench, Smartphone, Monitor, Cpu, CheckCircle, Star, PhoneCall, MapPin, Clock, ArrowRight, Shield, Zap } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
    return (
        <div className="bg-gray-950 text-white min-h-screen font-sans">

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-32">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600/10 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Text */}
                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                                <Wrench size={12} /> Trusted Repair Experts Since 2015
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                                We Fix It <br />
                                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                                    Fast &amp; Right
                                </span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-10 max-w-xl">
                                Professional repair services for phones, laptops, tablets &amp; more. Same-day repairs, manufacturer-grade parts, and a <strong className="text-white">90-day warranty</strong> on every fix.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/login"
                                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
                                >
                                    Book a Repair <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="tel:+15551234567"
                                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200"
                                >
                                    <PhoneCall size={18} className="text-orange-400" /> Call Us Now
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                                {[
                                    { icon: <CheckCircle size={16} className="text-orange-400" />, text: "5,000+ Repairs Done" },
                                    { icon: <Star size={16} className="text-orange-400 fill-orange-400" />, text: "4.9 Rating" },
                                    { icon: <Shield size={16} className="text-orange-400" />, text: "90-Day Warranty" },
                                ].map((b, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                        {b.icon} {b.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image card */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="bg-gray-900 border border-white/5 rounded-3xl p-6 shadow-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { icon: <Smartphone size={32} />, label: "Phone Repair", time: "~1 hr" },
                                            { icon: <Monitor size={32} />, label: "Laptop Repair", time: "~2 hrs" },
                                            { icon: <Cpu size={32} />, label: "Electronics", time: "~3 hrs" },
                                            { icon: <Wrench size={32} />, label: "Custom Fix", time: "Varies" },
                                        ].map((s, i) => (
                                            <div key={i} className="bg-gray-800/60 hover:bg-gray-800 border border-white/5 rounded-2xl p-5 text-center transition-colors cursor-pointer group">
                                                <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-200">
                                                    {s.icon}
                                                </div>
                                                <p className="text-sm font-semibold text-white">{s.label}</p>
                                                <p className="text-xs text-gray-500 mt-1">{s.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl px-4 py-3 flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-sm text-gray-300">Shop is <strong className="text-white">Open</strong> · Mon–Sat, 9 AM – 7 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 border-t border-white/5 bg-gray-900/40">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">From cracked screens to dead motherboards — we handle it all with precision and care.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Smartphone size={28} />,
                                title: "Phone Repair",
                                desc: "Screen replacements, battery swaps, charging port fixes, water damage recovery — all major brands covered.",
                                tag: "Most Popular"
                            },
                            {
                                icon: <Monitor size={28} />,
                                title: "Laptop & PC Repair",
                                desc: "Keyboard replacements, RAM/SSD upgrades, OS reinstallation, overheating fixes and more.",
                                tag: null
                            },
                            {
                                icon: <Cpu size={28} />,
                                title: "Electronics",
                                desc: "Circuit board diagnostics, soldering, console repairs (PlayStation, Xbox, Nintendo) and custom projects.",
                                tag: null
                            },
                            {
                                icon: <Shield size={28} />,
                                title: "Data Recovery",
                                desc: "Lost your files? Our specialists can recover data from failed drives, phones, and corrupted storage.",
                                tag: null
                            },
                            {
                                icon: <Zap size={28} />,
                                title: "Express Service",
                                desc: "Need it done fast? Our express lane gets your device fixed and back in your hands within the hour.",
                                tag: "Priority"
                            },
                            {
                                icon: <Wrench size={28} />,
                                title: "Custom Builds",
                                desc: "Planning a custom PC or IoT project? We source parts and assemble to your exact specifications.",
                                tag: null
                            },
                        ].map((s, i) => (
                            <div key={i} className="relative bg-gray-900 border border-white/5 hover:border-orange-500/30 rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group">
                                {s.tag && (
                                    <span className="absolute top-5 right-5 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-orange-500/20">
                                        {s.tag}
                                    </span>
                                )}
                                <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                                    {s.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Why Matt's Repair Shop?</h2>
                            <p className="text-gray-400 mb-10">We've been fixing devices in this community for over a decade. We treat your gear like it's our own.</p>
                            <div className="space-y-5">
                                {[
                                    { title: "Transparent Pricing", desc: "No hidden fees. You get a quote before we start — always." },
                                    { title: "Genuine Parts", desc: "We use quality, manufacturer-grade components on every repair." },
                                    { title: "90-Day Warranty", desc: "If the same issue comes back, we fix it again for free." },
                                    { title: "Certified Technicians", desc: "Our team is trained and certified across all major brands and platforms." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 w-5 h-5 shrink-0 flex items-center justify-center">
                                            <CheckCircle size={20} className="text-orange-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{item.title}</p>
                                            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="grid gap-5">
                            {[
                                { name: "Sarah K.", rating: 5, review: "Got my iPhone screen replaced in 45 mins. Perfect quality, fair price. Won't go anywhere else!" },
                                { name: "James M.", rating: 5, review: "Recovered 3 years of photos from my dead laptop. I honestly thought it was gone forever. Amazing team." },
                                { name: "Priya L.", rating: 5, review: "Fixed my MacBook motherboard when Apple wanted to charge me 3x more. Saved me a fortune." },
                            ].map((t, i) => (
                                <div key={i} className="bg-gray-900 border border-white/5 rounded-2xl p-6">
                                    <div className="flex gap-1 mb-3">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star key={j} size={14} className="text-orange-400 fill-orange-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.review}"</p>
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location / CTA Section */}
            <section className="py-24 border-t border-white/5 bg-gray-900/40">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-orange-500/10 to-orange-700/5 border border-orange-500/20 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold mb-4">Visit Us or Book Online</h2>
                        <p className="text-gray-400 mb-10 max-w-lg mx-auto">Drop in anytime or book a slot online. We're here to help you get back up and running.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin size={20} className="text-orange-400" />
                                <span>123 Repair Lane, Tech City, TC 45678</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Clock size={20} className="text-orange-400" />
                                <span>Mon – Sat: 9 AM – 7 PM</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <PhoneCall size={20} className="text-orange-400" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
                        >
                            Book a Repair Now <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <Wrench size={20} className="text-orange-400" /> Matt's Repair Shop
                    </div>
                    <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Matt's Repair Shop. All rights reserved.</p>
                </div>
            </footer>

            {/* Chat Widget */}
            <ChatWidget
                apiBaseUrl={import.meta.env.VITE_API_BASE_URL}
                apiKey={import.meta.env.VITE_API_KEY}
                apiSecret={import.meta.env.VITE_API_SECRET}
                title="Matt's Repair Shop"
                subtitle="AI Support Bot"
                greeting="Hello! Need a repair? I can help..."
            />
        </div>
    );
}
