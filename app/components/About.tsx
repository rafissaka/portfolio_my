"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Heart, Target, Award, Coffee, Sparkles, Users } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+", icon: Award, color: "text-blue-500", gradient: "from-blue-500 to-cyan-500" },
    { label: "Projects Completed", value: "20+", icon: Rocket, color: "text-purple-500", gradient: "from-purple-500 to-pink-500" },
    { label: "Happy Clients", value: "15+", icon: Users, color: "text-green-500", gradient: "from-green-500 to-emerald-500" },
    { label: "Cups of Coffee", value: "∞", icon: Coffee, color: "text-orange-500", gradient: "from-orange-500 to-yellow-500" },
];

const values = [
    {
        title: "Clean Code",
        description: "I believe in writing clean, maintainable, and scalable code that other developers can easily understand and work with.",
        icon: Code,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20"
    },
    {
        title: "Innovation",
        description: "Always exploring new technologies and approaches to solve problems more efficiently and create better user experiences.",
        icon: Sparkles,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20"
    },
    {
        title: "User-Focused",
        description: "Every project starts with understanding user needs. I create solutions that are intuitive, accessible, and delightful to use.",
        icon: Heart,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/20"
    },
    {
        title: "Goal-Oriented",
        description: "Committed to delivering projects on time and exceeding expectations. I focus on results that matter to the business and users.",
        icon: Target,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20"
    }
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                            Passionate developer dedicated to creating exceptional digital experiences
                        </p>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div 
                            className="relative glass p-8 rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Animated corner accents */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/10 rounded-tr-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 1.5
                                }}
                            />

                            <motion.h3 
                                className="text-2xl lg:text-3xl font-black mb-4 relative z-10"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Hi, I'm <motion.span 
                                    className="text-gradient"
                                    whileHover={{ 
                                        scale: 1.05,
                                        display: "inline-block"
                                    }}
                                >
                                    Raffat Hammed Issaka
                                </motion.span>
                                <motion.span
                                    animate={{
                                        rotate: [0, 14, 0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block ml-2"
                                >
                                    👋
                                </motion.span>
                            </motion.h3>
                            
                            <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
                                {[
                                    <>I'm a <span className="text-foreground font-bold">Full Stack Developer</span> and <span className="text-foreground font-bold">ICT Technician</span> based in Ghana, with a passion for building scalable web and mobile applications that solve real-world problems.</>,
                                    <>My journey into tech began at <span className="text-primary font-semibold">Kwame Nkrumah University of Science and Technology (KNUST)</span>, where I earned my BSc in Computer Science. Since then, I've worked on diverse projects ranging from e-commerce platforms to educational management systems.</>,
                                    <>I specialize in <span className="text-foreground font-bold">Flutter</span>, <span className="text-foreground font-bold">React.js</span>, <span className="text-foreground font-bold">Next.js</span>, and modern backend technologies like <span className="text-foreground font-bold">FastAPI</span> and <span className="text-foreground font-bold">Node.js</span>. I love creating seamless user experiences and writing clean, maintainable code.</>,
                                    <>Currently, I'm working as an <span className="text-primary font-semibold">ICT Technician at Godfirst Education and Tours Agency</span>, where I manage IT infrastructure and develop custom solutions to streamline operations.</>,
                                    <>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.</>
                                ].map((text, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        whileHover={{ 
                                            x: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Stats & Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: index * 0.15,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15
                                        }}
                                        whileHover={{ 
                                            scale: 1.1, 
                                            y: -10,
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                        className="relative glass p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 text-center group overflow-hidden cursor-pointer"
                                    >
                                        {/* Animated background gradient */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        />
                                        
                                        {/* Floating particles */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`absolute w-1 h-1 ${stat.color} rounded-full`}
                                                    initial={{ opacity: 0 }}
                                                    animate={{
                                                        y: [0, -40],
                                                        x: [0, (i - 1) * 15],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.3
                                                    }}
                                                    style={{
                                                        left: `${30 + i * 20}%`,
                                                        bottom: 0
                                                    }}
                                                />
                                            ))}
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 relative z-10`} />
                                        </motion.div>
                                        
                                        <motion.div 
                                            className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 relative z-10`}
                                            animate={{
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            {stat.value}
                                        </motion.div>
                                        
                                        <div className="text-sm text-muted-foreground font-medium relative z-10">
                                            {stat.label}
                                        </div>

                                        {/* Shine effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Quick Facts */}
                        <motion.div 
                            className="glass p-8 rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.h4 
                                className="text-xl font-black mb-6 flex items-center gap-2"
                                animate={{
                                    x: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </motion.div>
                                Quick Facts
                            </motion.h4>
                            <ul className="space-y-3">
                                {[
                                    { emoji: "🎓", text: "BSc Computer Science - KNUST" },
                                    { emoji: "💼", text: "ICT Technician & Full Stack Developer" },
                                    { emoji: "📱", text: "Flutter & React Native Expert" },
                                    { emoji: "🌐", text: "Web Development Specialist" },
                                    { emoji: "🚀", text: "2+ Years Remote Freelancing" },
                                    { emoji: "🏆", text: "20+ Completed Projects" },
                                    { emoji: "📍", text: "Based in Ghana" },
                                    { emoji: "☕", text: "Coffee-powered coder" }
                                ].map((fact, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: 0.8 + index * 0.1,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 12
                                        }}
                                        className="group"
                                    >
                                        <motion.div
                                            whileHover={{ 
                                                x: 8,
                                                transition: { 
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10
                                                }
                                            }}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 cursor-default"
                                        >
                                            <motion.span 
                                                className="text-2xl inline-block"
                                                whileHover={{
                                                    scale: 1.4,
                                                    rotate: 15,
                                                    transition: { 
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 10
                                                    }
                                                }}
                                            >
                                                {fact.emoji}
                                            </motion.span>
                                            <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                                {fact.text}
                                            </span>
                                        </motion.div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl lg:text-4xl font-black mb-4">
                            My Core <span className="text-gradient">Values</span>
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide my work and approach to development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }}
                                    whileHover={{ 
                                        y: -12, 
                                        scale: 1.05,
                                        rotate: [0, -2, 2, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                    className={`relative glass p-6 rounded-2xl border-2 ${value.borderColor} hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden`}
                                >
                                    {/* Animated background */}
                                    <motion.div
                                        className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />

                                    {/* Floating particles on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`absolute w-1 h-1 ${value.color} rounded-full`}
                                                animate={{
                                                    y: [0, -60],
                                                    x: [(i - 2) * 10, (i - 2) * 15],
                                                    opacity: [0, 1, 0],
                                                    scale: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }}
                                                style={{
                                                    left: `${20 + i * 15}%`,
                                                    bottom: 0
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <motion.div 
                                        className={`relative w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10`}
                                        whileHover={{ 
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: 1.2
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            <Icon className={`w-7 h-7 ${value.color}`} />
                                        </motion.div>
                                    </motion.div>

                                    <h4 className="relative text-xl font-black mb-3 group-hover:text-primary transition-colors z-10">
                                        {value.title}
                                    </h4>
                                    <p className="relative text-sm text-muted-foreground leading-relaxed z-10">
                                        {value.description}
                                    </p>

                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.p 
                        className="text-lg text-muted-foreground mb-6"
                        animate={{
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Want to work together or learn more about my journey?
                    </motion.p>
                    <motion.a
                        whileHover={{ 
                            scale: 1.08,
                            boxShadow: "0 20px 60px rgba(var(--primary-rgb), 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="relative inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all overflow-hidden group"
                    >
                        <motion.span
                            className="relative z-10"
                            animate={{
                                x: [0, 2, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            Let's Connect 🚀
                        </motion.span>
                        
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ["-100%", "100%"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
