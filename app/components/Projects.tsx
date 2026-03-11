"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Building2, Globe, ShoppingCart, Truck, Languages, Home, Package, BookOpen, Sparkles, X, CheckCircle2, Layout, Database, Shield, Zap, GraduationCap } from "lucide-react";
import Image from "next/image";

// Category definitions
const categories = [
    { id: "all", name: "All Projects", icon: "🚀" },
    { id: "education", name: "Education", icon: "📚" },
    { id: "ecommerce", name: "E-Commerce", icon: "🛒" },
    { id: "logistics", name: "Logistics", icon: "📦" },
    { id: "entertainment", name: "Entertainment", icon: "🎮" },
];

const projects = [
    {
        title: "Logistics Construction Sales Platform",
        description: "A comprehensive multi-role logistics platform for construction materials with real-time tracking, order management, and push notifications. Features separate interfaces for customers, vendors, couriers, and administrators.",
        tags: ["Flutter", "FastAPI", "PostgreSQL", "FCM Notifications", "REST API"],
        gradient: "from-orange-500 via-red-500 to-pink-500",
        icon: Package,
        image: "/projects/logistics.JPG",
        category: "logistics",
        isComplex: true,
        isBest: true,
        galleryImages: Array.from({ length: 18 }, (_, i) => `/foxrand/${i + 1}.jpeg`),
        highlights: [
            "Comprehensive Multi-role Architecture (4 distinct apps)",
            "Real-time Geolocation tracking for Couriers",
            "FCM-driven Push Notification Engine",
            "Complex SQL aggregation for Vendor Analytics",
            "Secure ESCROW Payment workflow orchestration",
            "Optimized Document Management System"
        ]
    },
    {
        title: "E-Library Management System",
        description: "Digital library platform built for Obuasi College of Integrated Healthcare. Features comprehensive book cataloging, student/staff management, digital borrowing system, and advanced search capabilities with real-time availability tracking.",
        tags: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        icon: BookOpen,
        image: "/projects/library.JPG", // Updated from elibrary.jpg to match library.JPG
        category: "education",
        featured: true,
        liveUrl: "https://elibrary-rosy.vercel.app/",
        highlights: [
            "Digital book catalog & management system",
            "Student & staff borrowing portal",
            "Real-time book availability tracking",
            "Advanced search & filter system",
            "Responsive design for all devices"
        ]
    },
    {
        title: "E-Commerce Multi-Platform System",
        description: "Complete e-commerce solution with web and mobile versions. Includes separate mobile apps for buyers, sellers, and courier agents with real-time order synchronization and payment integration.",
        tags: ["Flutter", "React.js", "Node.js", "MongoDB", "Payment Gateway"],
        gradient: "from-blue-600 to-cyan-500",
        icon: ShoppingCart,
        image: "/projects/zipohub.JPG", // Using zipohub.JPG for ecommerce
        category: "ecommerce",
        featured: false,
        liveUrl: null,
        highlights: [
            "Web & Mobile platforms (Buyer, Seller, Courier)",
            "Integrated payment gateway",
            "Real-time inventory management",
            "Order tracking and notifications"
        ]
    },
    {
        title: "Hostel Management System",
        description: "Comprehensive hostel management solution for streamlining student accommodations, room allocations, fee payments, and hostel administration. Features automated room assignments and payment tracking.",
        tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT Auth"],
        gradient: "from-purple-600 to-indigo-600",
        icon: Building2,
        image: "/projects/hostel.JPG",
        category: "education",
        featured: false,
        liveUrl: null,
        highlights: [
            "Automated room allocation system",
            "Fee payment & tracking",
            "Student & admin dashboards",
            "Report generation"
        ]
    },
    {
        title: "Travel & Tour Agency System",
        description: "Modern travel booking platform for tour packages, hotel reservations, and itinerary management. Includes customer booking portal and agency management dashboard with payment processing.",
        tags: ["Vue.js", "Laravel", "MySQL", "Payment API", "Google Maps API"],
        gradient: "from-green-500 to-teal-500",
        icon: Globe,
        image: "/projects/travel.JPG",
        category: "entertainment",
        featured: false,
        liveUrl: null,
        highlights: [
            "Tour package management",
            "Hotel & flight booking",
            "Itinerary builder",
            "Integrated payment system"
        ]
    },
    {
        title: "E-Learning Management Platform",
        description: "A comprehensive digital learning ecosystem featuring interactive courses, student progress tracking, live virtual classrooms, and automated grading systems. Designed for modern educational institutions.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
        gradient: "from-indigo-500 to-blue-600",
        icon: GraduationCap,
        image: "/projects/regular.JPG",
        category: "education",
        featured: false,
        liveUrl: null,
        highlights: [
            "Interactive course management system",
            "Real-time student progress tracking",
            "Live virtual classroom with Socket.io",
            "Automated quizzes & certificate generation",
            "Secure file storage for study materials"
        ]
    },
    {
        title: "Pet Lovers Den E-Commerce",
        description: "Full-featured e-commerce website for pet products, accessories, and pet care services. A comprehensive online shopping platform with product catalog, secure checkout, order management, and customer portal.",
        tags: ["React.js", "Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
        gradient: "from-pink-500 via-rose-500 to-red-500",
        icon: Home,
        image: "/projects/petloversden.JPG",
        category: "ecommerce",
        featured: false,
        liveUrl: "https://www.petloversden.co.uk/",
        highlights: [
            "Comprehensive pet products catalog",
            "Secure Stripe payment integration",
            "Customer account & order management",
            "Responsive design for all devices",
            "SEO optimized for better visibility"
        ]
    }
];

function ProjectDetailsModal({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    if (!project) return null;

    const hasGallery = project.galleryImages && project.galleryImages.length > 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => lightboxIndex === null && onClose()}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`relative w-full ${hasGallery ? "max-w-6xl" : "max-w-5xl"} max-h-[90vh] bg-background border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-md"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Left: Image / Visuals */}
                        <div className={`relative w-full ${hasGallery ? "md:w-2/5" : "md:w-1/2"} h-64 md:h-auto overflow-hidden shrink-0`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Project Icon Overlay */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-xl`}>
                                    <project.icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-black text-white drop-shadow-lg leading-tight">{project.title}</h2>
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="flex-1 overflow-y-auto bg-card">
                            <div className="p-8 lg:p-10 space-y-8">
                                {/* Description */}
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-3">Overview</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                                        "{project.description}"
                                    </p>
                                </div>

                                {/* Architecture & Tech */}
                                {project.isComplex && (
                                    <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-secondary/50 border border-border/50">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                                                <Layout className="w-4 h-4" />
                                                Frontend
                                            </div>
                                            <p className="text-xs text-muted-foreground">Flutter, React-Admin, Tailwind Design System</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                                                <Database className="w-4 h-4" />
                                                Backend
                                            </div>
                                            <p className="text-xs text-muted-foreground">FastAPI, PostgreSQL, Redis, FCM Push</p>
                                        </div>
                                    </div>
                                )}

                                {/* Features List */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">Core Capabilities</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {project.highlights.map((item: string, i: number) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <p className="text-sm font-medium">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Tags */}
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase transition-all hover:scale-105">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Masonry Screenshot Gallery */}
                                {hasGallery && (
                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">
                                            App Screenshots <span className="text-muted-foreground font-normal normal-case tracking-normal">({project.galleryImages.length} screens)</span>
                                        </h3>
                                        <div
                                            style={{
                                                columnCount: 3,
                                                columnGap: "8px",
                                            }}
                                        >
                                            {project.galleryImages.map((src: string, idx: number) => (
                                                <div
                                                    key={src}
                                                    className="relative overflow-hidden rounded-xl mb-2 cursor-zoom-in group/img"
                                                    style={{ breakInside: "avoid" }}
                                                    onClick={() => setLightboxIndex(idx)}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Screenshot ${idx + 1}`}
                                                        width={300}
                                                        height={500}
                                                        className="w-full h-auto object-cover transition-transform duration-300 group-hover/img:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">View</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex gap-4 pt-6 border-t border-border">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-4 rounded-xl bg-primary text-white font-black text-center shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Globe className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                    <a
                                        href="https://github.com/rafissaka"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-6 py-4 rounded-xl border-2 border-primary/30 font-black hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {lightboxIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-[200] flex items-center justify-center bg-black/95"
                                onClick={() => setLightboxIndex(null)}
                            >
                                {/* Prev */}
                                <button
                                    className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => i !== null ? (i - 1 + project.galleryImages.length) % project.galleryImages.length : 0); }}
                                >
                                    ‹
                                </button>
                                <motion.div
                                    key={lightboxIndex}
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.85, opacity: 0 }}
                                    className="relative max-h-[85vh] max-w-[60vw]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={project.galleryImages[lightboxIndex]}
                                        alt={`Screenshot ${lightboxIndex + 1}`}
                                        width={600}
                                        height={1000}
                                        className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                                        {lightboxIndex + 1} / {project.galleryImages.length}
                                    </div>
                                </motion.div>
                                {/* Next */}
                                <button
                                    className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => i !== null ? (i + 1) % project.galleryImages.length : 0); }}
                                >
                                    ›
                                </button>
                                <button
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    onClick={() => setLightboxIndex(null)}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </AnimatePresence>
    );
}

// Pre-generated static star data to avoid SSR/client hydration mismatch from Math.random()
const STAR_DATA = [
    { opacity: 0.36, scale: 0.72, x: 86.9, y: 74.7, w: 2.78, h: 2.07, dur: 0.9, delay: 0.1 },
    { opacity: 0.52, scale: 0.57, x: 33.4, y: 68.4, w: 2.03, h: 1.02, dur: 0.7, delay: 0.3 },
    { opacity: 0.28, scale: 0.99, x: 72.4, y: 72.7, w: 1.92, h: 1.74, dur: 1.1, delay: 0.0 },
    { opacity: 0.23, scale: 0.92, x: 83.6, y: 85.2, w: 2.43, h: 1.44, dur: 0.8, delay: 0.4 },
    { opacity: 0.44, scale: 0.82, x: 84.0, y: 76.2, w: 2.39, h: 1.89, dur: 1.0, delay: 0.2 },
    { opacity: 0.54, scale: 0.64, x: 27.2, y: 69.2, w: 1.51, h: 1.23, dur: 0.6, delay: 0.5 },
    { opacity: 0.56, scale: 0.66, x: 95.5, y: 85.2, w: 2.49, h: 3.74, dur: 0.9, delay: 0.1 },
    { opacity: 0.44, scale: 0.80, x: 21.6, y: 13.0, w: 2.88, h: 3.26, dur: 1.2, delay: 0.3 },
    { opacity: 0.56, scale: 0.94, x: 32.8, y: 86.9, w: 2.88, h: 3.52, dur: 0.7, delay: 0.0 },
    { opacity: 0.46, scale: 0.85, x: 43.6, y: 4.5,  w: 2.81, h: 3.62, dur: 1.0, delay: 0.4 },
    { opacity: 0.25, scale: 0.57, x: 27.5, y: 9.4,  w: 2.57, h: 3.21, dur: 0.8, delay: 0.2 },
    { opacity: 0.27, scale: 0.70, x: 33.1, y: 8.5,  w: 1.41, h: 1.77, dur: 1.1, delay: 0.5 },
    { opacity: 0.26, scale: 0.56, x: 39.9, y: 96.7, w: 1.54, h: 3.22, dur: 0.6, delay: 0.1 },
    { opacity: 0.20, scale: 0.82, x: 63.9, y: 22.5, w: 3.24, h: 1.72, dur: 0.9, delay: 0.3 },
    { opacity: 0.21, scale: 0.63, x: 0.3,  y: 26.6, w: 3.91, h: 2.76, dur: 1.2, delay: 0.0 },
    { opacity: 0.35, scale: 0.62, x: 45.2, y: 59.4, w: 3.97, h: 1.76, dur: 0.7, delay: 0.4 },
    { opacity: 0.20, scale: 0.69, x: 65.1, y: 94.6, w: 1.51, h: 3.82, dur: 1.0, delay: 0.2 },
    { opacity: 0.29, scale: 0.88, x: 89.9, y: 85.3, w: 3.62, h: 3.56, dur: 0.8, delay: 0.5 },
    { opacity: 0.12, scale: 0.89, x: 94.3, y: 73.1, w: 1.67, h: 2.79, dur: 1.1, delay: 0.1 },
    { opacity: 0.38, scale: 0.54, x: 70.6, y: 7.5,  w: 2.66, h: 1.87, dur: 0.9, delay: 0.3 },
];

function ProjectCard({ project, index, categories, onOpenDetails }: { project: any, index: number, categories: any[], onOpenDetails: (project: any) => void }) {
    const Icon = project.icon;
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top, width, height } = currentTarget.getBoundingClientRect();
        let x = (clientX - left) / width;
        let y = (clientY - top) / height;
        setMouseX(x);
        setMouseY(y);
    }

    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`group relative ${project.isComplex ? "md:col-span-2" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setMouseX(0.5);
                setMouseY(0.5);
            }}
            style={{
                perspective: "1000px"
            }}
        >
            {/* Best Project badge */}
            {project.isBest && (
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="absolute -top-3 -left-3 z-30 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-black shadow-lg flex items-center gap-2"
                >
                    <Star className="w-4 h-4 fill-white animate-spin" style={{ animationDuration: "3s" }} />
                    <span>BEST PROJECT</span>
                </motion.div>
            )}

            {/* Featured badge */}
            {project.featured && (
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className={`absolute -top-3 -right-3 z-30 bg-gradient-to-r ${project.isComplex ? "from-indigo-600 via-purple-600 to-pink-600 px-6" : "from-yellow-500 to-orange-500 px-4"} text-white py-2 rounded-full text-sm font-black shadow-lg flex items-center gap-2`}
                >
                    {project.isComplex ? (
                        <>
                            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                            <span>COMPLEX SYSTEM ARCHITECTURE</span>
                        </>
                    ) : (
                        <>
                            <Star className="w-4 h-4 fill-white" />
                            <span>Featured</span>
                        </>
                    )}
                </motion.div>
            )}

            <motion.div
                style={{
                    rotateY: (mouseX - 0.5) * 15,
                    rotateX: (mouseY - 0.5) * -15,
                    transformStyle: "preserve-3d"
                }}
                className={`relative glass rounded-3xl overflow-hidden border-2 border-border hover:border-primary/60 transition-all duration-300 h-full shadow-xl hover:shadow-2xl hover:shadow-primary/20 bg-background/50 backdrop-blur-xl ${project.isComplex ? "ring-2 ring-primary/20" : ""}`}
            >
                {/* Dynamic Shining Stars Background for Standout Projects */}
                {project.isComplex && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
                        {STAR_DATA.map((star, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full"
                                initial={{
                                    opacity: star.opacity,
                                    scale: star.scale,
                                    x: star.x + "%",
                                    y: star.y + "%"
                                }}
                                animate={{
                                    opacity: [0.1, 0.8, 0.1],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: star.dur,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: star.delay
                                }}
                                style={{
                                    width: star.w + "px",
                                    height: star.h + "px",
                                    boxShadow: "0 0 10px 2px rgba(255,255,255,0.4)"
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Animated Gradient Border Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(var(--primary-rgb, 99, 102, 241), 0.1), transparent 40%)`
                    }}
                />

                {/* Glassy reflection element */}
                <div className="glass-reflection pointer-events-none z-10" />

                {/* Corner accent glow */}
                <motion.div
                    className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(50px)" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(50px)" }}
                />

                {/* Project Image Header */}
                <div className="relative h-64 overflow-hidden group/image" style={{ transform: "translateZ(20px)" }}>
                    {/* Project Image */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`} />

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Inner Glass Glow */}
                    <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-t-3xl m-[1px]" />

                    {/* Category badge */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-black border-2 border-white/30 shadow-lg uppercase z-10"
                    >
                        {categories.find(cat => cat.id === project.category)?.name || project.category}
                    </motion.div>

                    {/* Live indicator for projects with URLs */}
                    {project.liveUrl && (
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold border-2 border-white/40 shadow-lg flex items-center gap-1.5 z-10"
                        >
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            LIVE
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8" style={{ transform: "translateZ(40px)" }}>
                    <h3 className="text-2xl lg:text-3xl font-black mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm lg:text-base mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                    </p>

                    {project.isComplex && (
                        <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <Building2 className="w-4 h-4 text-primary" />
                                <span className="text-xs font-black uppercase tracking-tighter text-primary">System Architecture</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-[10px] text-muted-foreground space-y-1">
                                    <p className="font-bold text-foreground">Backend:</p>
                                    <p>FastAPI Microservices</p>
                                    <p>PostgreSQL Cluster</p>
                                </div>
                                <div className="text-[10px] text-muted-foreground space-y-1">
                                    <p className="font-bold text-foreground">Frontend:</p>
                                    <p>Flutter Multi-role App</p>
                                    <p>Admin React Dashboard</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-6 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Key Features:</p>
                        <ul className={`grid ${project.isComplex ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-x-4 gap-y-1.5`}>
                            {project.highlights.map((highlight: string, idx: number) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                    <span className="text-primary mt-1">•</span>
                                    <span>{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string, idx: number) => (
                                <motion.span
                                    key={tag}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold hover:bg-primary/20 transition-all cursor-default backdrop-blur-sm"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                        {project.liveUrl ? (
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live Site
                            </motion.a>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onOpenDetails(project)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all font-black"
                            >
                                <Zap className="w-4 h-4" />
                                View Details
                            </motion.button>
                        )}
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/rafissaka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-primary/30 hover:border-primary font-bold text-sm hover:bg-primary/5 transition-all backdrop-blur-sm"
                        >
                            <Github className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Modal */}
            <ProjectDetailsModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                            Real-world applications built with modern technologies, solving complex business challenges
                        </p>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
                    </motion.div>
                </div>

                {/* Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30"
                                : "bg-secondary/50 hover:bg-secondary text-foreground border-2 border-border hover:border-primary/30 backdrop-blur-md"
                                }`}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                            {activeCategory === category.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-8"
                >
                    <p className="text-muted-foreground">
                        Showing <span className="font-bold text-primary">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </p>
                </motion.div>

                {/* Projects Grid - 3 columns */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={i}
                                categories={categories}
                                onOpenDetails={setSelectedProject}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl font-bold text-muted-foreground mb-2">No projects found</p>
                        <p className="text-muted-foreground">Try selecting a different category</p>
                    </motion.div>
                )}

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground mb-4">Interested in working together?</p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                    >
                        Let's Talk About Your Project
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
