import { Smartphone, Laptop, Gamepad2, Headphones, Watch, Tv, Battery, Cpu, Droplets, Shield, Clock, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Services() {
    const mainServices = [
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Smartphone Repair",
            description: "From screen replacements to complex motherboard repairs for all major brands.",
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=400&fit=crop",
            features: ["Screen & OLED Replacement", "Battery Replacement", "Water Damage Repair", "Charging Port Fix", "Camera Repair", "Back Glass Replacement"],
            price: "From $49",
            popular: true,
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Laptop & Computer",
            description: "MacBooks, PCs, and workstations. Hardware fixes, upgrades, and optimization.",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
            features: ["Screen Replacement", "Keyboard Repair", "SSD Upgrades", "RAM Installation", "Logic Board Repair", "Thermal Cleaning"],
            price: "From $89",
            popular: true,
        },
        {
            icon: <Gamepad2 className="w-8 h-8" />,
            title: "Gaming Consoles",
            description: "PlayStation, Xbox, Nintendo repairs. HDMI fixes, disc drive issues, overheating.",
            image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
            features: ["HDMI Port Replacement", "Disc Drive Repair", "Overheating Fix", "Controller Repair", "Power Supply Fix", "Firmware Recovery"],
            price: "From $79",
            popular: false,
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "Audio Equipment",
            description: "Headphones, earbuds, speakers, and professional audio gear restoration.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
            features: ["Driver Replacement", "Cable Repair", "Jack Replacement", "Bluetooth Fix", "ANC Repair", "Ear Pad Replacement"],
            price: "From $39",
            popular: false,
        },
        {
            icon: <Watch className="w-8 h-8" />,
            title: "Smartwatches",
            description: "Apple Watch, Samsung Galaxy Watch, Fitbit repairs with precision tools.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
            features: ["Screen Replacement", "Battery Service", "Crown/Button Fix", "Water Damage", "Sensor Repair", "Band Replacement"],
            price: "From $59",
            popular: false,
        },
        {
            icon: <Tv className="w-8 h-8" />,
            title: "Tablets & iPads",
            description: "Screen repairs, battery service, and software issues for all tablet brands.",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
            features: ["Screen Replacement", "Digitizer Repair", "Battery Service", "Charging Port", "Software Recovery", "Data Transfer"],
            price: "From $69",
            popular: false,
        },
    ];

    const specializedServices = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Microsoldering",
            desc: "Board-level component replacement and BGA rework",
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: "Water Damage",
            desc: "Ultrasonic cleaning and corrosion treatment",
        },
        {
            icon: <Battery className="w-6 h-6" />,
            title: "Battery Service",
            desc: "High-capacity replacements with calibration",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Data Recovery",
            desc: "Deleted file recovery and dead drive extraction",
        },
    ];

    const process = [
        { step: "01", title: "Diagnosis", desc: "Free assessment of your device's condition" },
        { step: "02", title: "Quote", desc: "Transparent pricing with no hidden fees" },
        { step: "03", title: "Repair", desc: "Expert work with quality parts" },
        { step: "04", title: "Warranty", desc: "90-day coverage on all repairs" },
    ];

    return (
        <div className="bg-background text-foreground min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                            <Wrench size={16} />
                            Expert Solutions
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            Professional <span className="text-primary">Repair Services</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            From screen replacements to complex board-level repairs, 
                            we handle it all with manufacturer-grade precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, i) => (
                            <div
                                key={i}
                                className={`group bg-card border ${service.popular ? 'border-primary/30 shadow-lg shadow-primary/10' : 'border-border'} rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                                    <div className="absolute top-4 left-4 w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg">
                                        {service.icon}
                                    </div>
                                    {service.popular && (
                                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                            Popular
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        <span className="text-primary font-bold">{service.price}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 4).map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 size={14} className="text-primary" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="py-20 bg-accent/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Specialized Repairs</h2>
                        <p className="text-muted-foreground">Advanced services for complex issues other shops can&apos;t handle.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specializedServices.map((service, i) => (
                            <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            <Clock size={16} />
                            How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Simple 4-Step Process</h2>
                        <p className="text-muted-foreground">From drop-off to pickup, we make repairs hassle-free.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-black text-primary/10 mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.desc}</p>
                                {i < 3 && (
                                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 text-border" size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warranty Banner */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-3xl p-8 sm:p-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">90-Day Warranty</h3>
                                    <p className="text-muted-foreground">Every repair backed by our quality guarantee</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-primary">Same Day</div>
                                    <div className="text-sm text-muted-foreground">Most Repairs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-primary">OEM Parts</div>
                                    <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Not Sure What You Need?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Bring your device in for a free diagnosis. We&apos;ll identify the issue and provide a transparent quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-primary-foreground font-bold px-8 py-4 rounded-2xl transition-all"
                        >
                            Get Free Quote <ArrowRight size={18} />
                        </a>
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center justify-center gap-2 bg-accent border border-border hover:border-primary/30 font-bold px-8 py-4 rounded-2xl transition-all"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12">
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
