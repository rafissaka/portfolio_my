"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Home, Code2, Briefcase, Mail, Zap, FileText, LayoutDashboard } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about", icon: Home },
    { name: "Skills", href: "#skills", icon: Zap },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Documents", href: "#documents", icon: FileText },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Detect active section
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <nav
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
                    isScrolled ? "py-2" : "py-4"
                }`}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className={`flex items-center justify-between px-6 lg:px-10 py-5 rounded-2xl transition-all duration-300 ${
                            isScrolled 
                                ? "bg-background/95 backdrop-blur-xl shadow-xl border border-primary/20" 
                                : "bg-background/80 backdrop-blur-md shadow-lg border border-border/50"
                        }`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="relative group flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Icon badge */}
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
                                <LayoutDashboard className="w-5 h-5 text-white" />
                            </div>
                            {/* Name */}
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-gradient">Raffat</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Portfolio</span>
                            </div>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
                        </motion.a>

                        {/* Desktop Navigation - Bold Style */}
                        <div className="hidden lg:flex items-center gap-3">
                            {navLinks.map((link, i) => {
                                const isActive = activeSection === link.href.substring(1);
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`relative px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2.5 group ${
                                            isActive 
                                                ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30" 
                                                : "hover:bg-primary/10 hover:text-primary"
                                        }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className={`w-4 h-4 transition-transform duration-300 ${!isActive && 'group-hover:rotate-12'}`} />
                                        <span>{link.name}</span>
                                        
                                        {/* Glow effect on hover */}
                                        {!isActive && (
                                            <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
                                        )}
                                    </motion.a>
                                );
                            })}
                            
                            <div className="ml-4 pl-4 border-l-2 border-border">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isMobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                        >
                                            <X className="w-6 h-6 text-primary" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                        >
                                            <Menu className="w-6 h-6 text-primary" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Menu - Bold Style */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden mt-3 mx-4 rounded-2xl overflow-hidden bg-background/95 backdrop-blur-xl shadow-2xl border border-primary/20"
                        >
                            <div className="flex flex-col p-3 gap-2">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-3 px-5 py-4 rounded-xl font-bold text-base uppercase tracking-wide transition-all duration-300 ${
                                                isActive 
                                                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg" 
                                                    : "hover:bg-primary/10 hover:text-primary"
                                            }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{link.name}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
