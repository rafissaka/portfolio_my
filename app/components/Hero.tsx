"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Animated Background SVG Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />

                {/* Floating Code Symbols */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-[10%] opacity-20"
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[30%] right-[15%] opacity-15"
                >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" className="text-purple-500" />
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-500" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-[20%] left-[20%] opacity-10"
                >
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-primary" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        rotate: [0, 15, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute top-[60%] right-[25%] opacity-20"
                >
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-purple-500" />
                    </svg>
                </motion.div>

                {/* Geometric Shapes */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[15%] right-[8%] opacity-10"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[30%] right-[10%] opacity-10"
                >
                    <svg width="90" height="90" viewBox="0 0 100 100">
                        <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-500" />
                    </svg>
                </motion.div>

                {/* Grid Pattern */}
                <motion.div
                    animate={{
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgb(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(var(--primary) / 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating Dots */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                        className="absolute w-2 h-2 rounded-full bg-primary/30"
                        style={{
                            left: `${10 + (i * 6)}%`,
                            top: `${20 + (i * 4)}%`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 text-sm font-medium"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-primary font-bold">AVAILABLE FOR WORK</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
                        >
                            Hi, I'm <span className="text-gradient">Raffat Hammed Issaka</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl lg:text-4xl font-bold text-muted-foreground mb-6"
                        >
                            Full Stack & Mobile Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
                        >
                            I build end-to-end digital products — from cross-platform Flutter apps to
                            high-performance FastAPI backends and React web platforms. 5+ years turning
                            complex requirements into clean, scalable systems.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold flex items-center gap-2 shadow-lg shadow-primary/30"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:rhissaka@gmail.com"
                                className="px-8 py-4 rounded-xl border-2 border-primary/30 hover:border-primary font-bold flex items-center gap-2 hover:bg-primary/5 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://github.com/rafissaka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                                title="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.linkedin.com/in/raffat-hammed-issaka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                href="/documents/lastest_cv.pdf"
                                download
                                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                                title="Download CV"
                            >
                                <Download className="w-6 h-6" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Decorative elements behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-3xl blur-3xl opacity-50" />

                            {/* Image container with border and effects */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/10 to-purple-500/10"
                            >
                                <Image
                                    src="/profile.jpg"
                                    alt="Raffat Hammed Issaka"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Floating badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-lg"
                            >
                                <p className="text-sm font-bold">5+ Years Experience</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, type: "spring" }}
                                className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-lg"
                            >
                                <p className="text-sm font-bold">💼 Open to Opportunities</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
