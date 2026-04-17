import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

function WrenchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

export default function Header() {
    const { dark, setDark } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className={`sticky top-0 z-[60] w-full transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-2xl border-b border-border py-3' : 'bg-transparent py-6'} text-foreground`}>
            <div className="container mx-auto px-6 flex justify-between items-center h-14">
                
                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
                    <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/20 group-hover:rotate-12 transition-all duration-300">
                        <WrenchIcon />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black leading-none tracking-tighter bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent">
                            Matt's
                        </span>
                        <span className="text-[12px] font-extrabold uppercase tracking-[.3em] text-primary mt-1">
                            Repair
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8 text-sm font-bold tracking-wide">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-1px] active:translate-y-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="h-6 w-[1px] bg-border mx-2" />
                    <div className="flex items-center gap-4">
                        <button
                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all border border-transparent hover:border-border"
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle theme"
                        >
                            {dark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-slate-700" />}
                        </button>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-primary hover:opacity-90 text-primary-foreground text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 duration-200"
                        >
                            Book Now <ArrowRight size={15} />
                        </Link>
                    </div>
                </nav>

                {/* Mobile Controls */}
                <div className="flex lg:hidden items-center gap-3">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`w-11 h-11 flex items-center justify-center rounded-2xl outline-none active:scale-90 transition-all ${isMenuOpen ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-accent border border-border text-foreground'}`}
                        aria-label="Menu toggle"
                    >
                        {isMenuOpen ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}>
                {/* Backdrop Layer */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl" />
                
                {/* Menu Content */}
                <div className={`relative h-full flex flex-col justify-center px-10 gap-10 transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : 'translate-y-10'}`}>
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-4xl font-black tracking-tighter text-foreground hover:text-primary transition-all transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                                style={{ transitionDelay: `${100 + i * 100}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Theme toggle in mobile nav */}
                        <button
                            onClick={() => {
                                setDark(!dark);
                                setIsMenuOpen(false);
                            }}
                            className={`flex items-center gap-3 text-4xl font-black tracking-tighter text-foreground hover:text-primary transition-all transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                            style={{ transitionDelay: `${100 + navLinks.length * 100}ms` }}
                        >
                            Theme
                            {dark ? <Sun size={32} className="text-yellow-500" /> : <Moon size={32} className="text-slate-500" />}
                            
                        </button>
                    </div>
                    
                    <div className={`flex flex-col gap-4 mt-10 transition-all duration-500 delay-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <a 
                            href="tel:+15551234567" 
                            className="flex items-center justify-center gap-3 bg-accent border border-border py-6 rounded-[2rem] text-xl font-bold tracking-tight active:scale-95 transition-transform text-foreground"
                        >
                            <Phone className="text-primary" strokeWidth={2.5} size={20} /> Call Support
                        </a>
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-primary py-6 rounded-[2rem] text-xl font-black text-center shadow-2xl shadow-primary/40 active:scale-95 transition-all text-primary-foreground"
                        >
                            Schedule Repair
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
