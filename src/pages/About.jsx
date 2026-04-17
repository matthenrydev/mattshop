import { Wrench, Users, Award, Clock, Shield, Zap, Heart, Target } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function About() {
    const stats = [
        { value: "15K+", label: "Repairs Completed" },
        { value: "9+", label: "Years Experience" },
        { value: "4.9", label: "Google Rating" },
        { value: "98%", label: "Success Rate" },
    ];

    const values = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Quality First",
            desc: "We use only OEM-grade parts and industry-leading tools for every repair."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Turnaround",
            desc: "Most repairs completed same-day. We respect your time."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Customer Care",
            desc: "Transparent pricing, clear communication, no hidden fees."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Precision Work",
            desc: "Microsoldering to board-level repairs done with surgical precision."
        },
    ];

    const team = [
        {
            name: "Matt Henry",
            role: "Founder & Master Technician",
            bio: "Certified electronics engineer with 15+ years in component-level repair.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Sarah Chen",
            role: "Senior Repair Specialist",
            bio: "Apple & Samsung certified. Expert in water damage recovery.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "James Rodriguez",
            role: "Console & Gaming Expert",
            bio: "PlayStation & Xbox certified technician. Board repair specialist.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
    ];

    return (
        <div className="bg-background text-foreground min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                            <Award size={16} />
                            Trusted Since 2015
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            We Fix What Others <span className="text-primary">Can&apos;t</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Matt&apos;s Repair Shop started with a simple mission: bring manufacturer-level 
                            repair expertise to local communities. Today, we&apos;re the trusted choice for 
                            complex device restoration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-border">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl sm:text-5xl font-black text-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
                            <img
                                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop"
                                alt="Electronics repair workshop"
                                className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    It began in a small garage in 2015. Matt, frustrated with throwaway culture 
                                    and overpriced manufacturer repairs, started fixing devices for friends and family.
                                </p>
                                <p>
                                    Word spread. Soon, local businesses were bringing their critical equipment. 
                                    What started as a side project became Silicon Valley&apos;s premier repair destination.
                                </p>
                                <p>
                                    Today, our state-of-the-art lab handles everything from vintage audio equipment 
                                    to the latest flagship smartphones. But our approach remains the same: treat 
                                    every device like it&apos;s our own.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Wrench size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">Still Independent</div>
                                    <div className="text-sm text-muted-foreground">Family-owned, community-focused</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-accent/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">What We Stand For</h2>
                        <p className="text-muted-foreground">Our core values guide every repair, every interaction, every day.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div key={i} className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            <Users size={16} />
                            The Experts
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Meet The Team</h2>
                        <p className="text-muted-foreground">Certified professionals with decades of combined experience.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                </div>
                                <div className="p-6 -mt-12 relative">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Certifications & Partners</h3>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60">
                        {["Apple Authorized", "Samsung Certified", "Microsoft Partner", "iFixit Pro", "CompTIA A+"].map((cert, i) => (
                            <div key={i} className="flex items-center gap-2 text-foreground font-bold">
                                <Award size={18} className="text-primary" />
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                            <Wrench size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-black tracking-tighter">Matt&apos;s Repair Shop</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                        <a href="/services" className="hover:text-primary transition-colors">Services</a>
                        <a href="/about" className="hover:text-primary transition-colors">About</a>
                        <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>

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
