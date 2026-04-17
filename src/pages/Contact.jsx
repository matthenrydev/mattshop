import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        device: "",
        issue: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", device: "", issue: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            details: ["123 Tech Lane, Silicon Valley", "CA 94025, United States"],
            action: "Get Directions",
            href: "https://maps.google.com",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "Text-friendly service"],
            action: "Call Now",
            href: "tel:+15551234567",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Opening Hours",
            details: ["Mon - Sat: 9AM - 8PM", "Sunday: Emergency only"],
            action: null,
            href: null,
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: ["hello@mattsrepair.com", "support@mattsrepair.com"],
            action: "Send Email",
            href: "mailto:hello@mattsrepair.com",
        },
    ];

    const devices = [
        "iPhone",
        "Samsung Phone",
        "iPad/Tablet",
        "MacBook/Laptop",
        "Gaming Console",
        "Smartwatch",
        "Audio Equipment",
        "Other",
    ];

    const issues = [
        "Screen/Digitizer",
        "Battery Issue",
        "Water Damage",
        "Won't Power On",
        "Charging Problem",
        "Software/OS Issue",
        "Data Recovery",
        "Other",
    ];

    return (
        <div className="bg-background text-foreground min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                            <Send size={16} />
                            Get In Touch
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            Let&apos;s Fix Your <span className="text-primary">Device</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Visit our shop, call us, or fill out the form. We&apos;ll get back to you within the hour.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, i) => (
                            <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                                <div className="space-y-1 mb-4">
                                    {info.details.map((detail, j) => (
                                        <p key={j} className="text-muted-foreground text-sm">{detail}</p>
                                    ))}
                                </div>
                                {info.action && (
                                    <a
                                        href={info.href}
                                        className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                                    >
                                        {info.action} <ArrowRight size={14} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content: Form + Map */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-card border border-border rounded-3xl p-8 sm:p-10">
                            <h2 className="text-2xl font-bold mb-6">Request a Repair</h2>
                            
                            {submitted ? (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground">We&apos;ll contact you within the hour.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="john@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Device Type</label>
                                            <select
                                                name="device"
                                                value={formData.device}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            >
                                                <option value="">Select device...</option>
                                                {devices.map((d, i) => (
                                                    <option key={i} value={d}>{d}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Issue Type</label>
                                        <select
                                            name="issue"
                                            value={formData.issue}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        >
                                            <option value="">Select issue...</option>
                                            {issues.map((issue, i) => (
                                                <option key={i} value={issue}>{issue}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Describe the Problem</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                            placeholder="Tell us what happened to your device..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        Send Repair Request
                                    </button>

                                    <p className="text-xs text-muted-foreground text-center">
                                        We&apos;ll respond within 1 hour during business hours.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Map & Info */}
                        <div className="space-y-6">
                            {/* Map Placeholder */}
                            <div className="bg-card border border-border rounded-3xl overflow-hidden h-[300px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                                    alt="Location map"
                                    className="w-full h-full object-cover opacity-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-card border border-border rounded-2xl p-6 shadow-xl text-center">
                                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                                            <MapPin size={24} />
                                        </div>
                                        <p className="font-bold">123 Tech Lane</p>
                                        <p className="text-muted-foreground text-sm">Silicon Valley, CA 94025</p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3 hover:underline"
                                        >
                                            Open in Maps <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="bg-accent/30 border border-border rounded-3xl p-6">
                                <h3 className="font-bold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Free diagnosis & quote",
                                        "Same-day service available",
                                        "90-day warranty on all repairs",
                                        "OEM-quality parts",
                                        "Certified expert technicians",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Emergency Note */}
                            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Emergency Repairs</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Need urgent help? Call us directly. We prioritize emergency repairs 
                                            for business-critical devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
