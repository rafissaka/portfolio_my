"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Globe,
    Smartphone,
    Palette,
    Cloud,
    GitBranch,
    Boxes,
    Network,
    Sparkles
} from "lucide-react";

const skillCategories = [
    {
        category: "Frontend Development",
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        technologies: [
            { name: "React.js", icon: "⚛️", color: "#61DAFB" },
            // { name: "Next.js", icon: "▲", color: "#000000" },
            // { name: "Vue.js", icon: "🖖", color: "#42B883" },
            { name: "TypeScript", icon: "📘", color: "#3178C6" },
            { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4" },
            { name: "HTML5 & CSS3", icon: "🌐", color: "#E34F26" },
            { name: "Redux", icon: "🔮", color: "#764ABC" }
        ]
    },
    {
        category: "Backend Development",
        icon: Database,
        color: "text-green-500",
        bg: "bg-green-500/10",
        borderColor: "border-green-500/20",
        technologies: [
            { name: "Node.js", icon: "🟢", color: "#339933" },
            { name: "Django", icon: "🎸", color: "#092E20" },
            { name: "Fastapi", icon: "🐘", color: "#777BB4" },
            { name: "REST APIs", icon: "🔌", color: "#009688" },

        ]
    },
    {
        category: "Mobile Development",
        icon: Smartphone,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        technologies: [
            { name: "Flutter", icon: "🦋", color: "#02569B" },
            { name: "React Native", icon: "📱", color: "#61DAFB" },
            { name: "Dart", icon: "🎯", color: "#0175C2" },
            { name: "iOS Development", icon: "🍎", color: "#000000" },
            { name: "Android Development", icon: "🤖", color: "#3DDC84" },
            { name: "Mobile UI/UX", icon: "📲", color: "#FF6B6B" },
            { name: "App Optimization", icon: "⚡", color: "#FFA500" },
            { name: "Firebase", icon: "🔥", color: "#FFCA28" }
        ]
    },
    {
        category: "Database & Storage",
        icon: Boxes,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        technologies: [
            { name: "MongoDB", icon: "🍃", color: "#47A248" },
            { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
            { name: "MySQL", icon: "🐬", color: "#4479A1" },
            { name: "Firebase", icon: "🔥", color: "#FFCA28" },
            { name: "Redis", icon: "📮", color: "#DC382D" },
            { name: "Supabase", icon: "⚡", color: "#3ECF8E" },
            { name: "Prisma", icon: "💎", color: "#2D3748" },
            { name: "SQL", icon: "💾", color: "#CC2927" }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        borderColor: "border-cyan-500/20",
        technologies: [
            { name: "AWS", icon: "☁️", color: "#FF9900" },
            { name: "Google Cloud", icon: "🌤️", color: "#4285F4" },
            { name: "Docker", icon: "🐳", color: "#2496ED" },
            { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
            { name: "Vercel", icon: "▲", color: "#000000" },
            { name: "Netlify", icon: "💠", color: "#00C7B7" },
            { name: "CI/CD", icon: "🔄", color: "#2088FF" },
            { name: "Linux", icon: "🐧", color: "#FCC624" }
        ]
    },
    {
        category: "Version Control & Tools",
        icon: GitBranch,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
        technologies: [
            { name: "Git", icon: "📦", color: "#F05032" },
            { name: "GitHub", icon: "🐙", color: "#181717" },
            { name: "GitLab", icon: "🦊", color: "#FC6D26" },
            { name: "Bitbucket", icon: "🪣", color: "#0052CC" },
            { name: "VS Code", icon: "💻", color: "#007ACC" },
            { name: "Postman", icon: "📬", color: "#FF6C37" },
            { name: "Figma", icon: "🎨", color: "#F24E1E" },
            { name: "Jira", icon: "📋", color: "#0052CC" }
        ]
    },
    {
        category: "UI/UX Design",
        icon: Palette,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
        technologies: [
            { name: "Photoshop", icon: "🎨", color: "#31A8FF" },
            { name: "Figma", icon: "🖌️", color: "#F24E1E" },
            { name: "Adobe XD", icon: "🎭", color: "#FF61F6" },
            { name: "Illustrator", icon: "✨", color: "#FF9A00" },
            { name: "Sketch", icon: "💎", color: "#F7B500" },
            { name: "Photo Editing", icon: "📸", color: "#00D9FF" },
            { name: "Wireframing", icon: "📐", color: "#6C63FF" },
            { name: "Prototyping", icon: "🔧", color: "#00D4FF" },
            { name: "User Research", icon: "🔍", color: "#FF6B6B" },
            { name: "Design Systems", icon: "🧩", color: "#4ECDC4" },
            { name: "Responsive Design", icon: "📱", color: "#95E1D3" }
        ]
    },
    {
        category: "Web Technologies",
        icon: Globe,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        technologies: [
            { name: "WebSockets", icon: "🔌", color: "#010101" },
            { name: "PWA", icon: "📲", color: "#5A0FC8" },
            { name: "SEO", icon: "🔎", color: "#47A248" },
            { name: "Web Performance", icon: "⚡", color: "#FFA500" },
            { name: "Accessibility", icon: "♿", color: "#0078D4" },
            { name: "Web Security", icon: "🔒", color: "#E74C3C" },
            { name: "Browser APIs", icon: "🌐", color: "#4285F4" },
            { name: "Webpack", icon: "📦", color: "#8DD6F9" }
        ]
    },
    {
        category: "Network Management",
        icon: Network,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        technologies: [
            { name: "TCP/IP", icon: "🌐", color: "#0066CC" },
            { name: "DNS", icon: "🔍", color: "#4285F4" },
            { name: "DHCP", icon: "📡", color: "#00AA88" },
            { name: "VPN", icon: "🔐", color: "#FF6B35" },
            { name: "Firewall", icon: "🛡️", color: "#E74C3C" },
            { name: "Load Balancing", icon: "⚖️", color: "#8E44AD" },
            { name: "Network Security", icon: "🔒", color: "#C0392B" },
            { name: "Routing", icon: "🧭", color: "#27AE60" },
            { name: "Switching", icon: "🔀", color: "#3498DB" },
            { name: "Network Monitoring", icon: "📊", color: "#E67E22" }
        ]
    },
    {
        category: "AI & Automation Tools",
        icon: Sparkles,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        borderColor: "border-violet-500/20",
        technologies: [
            { name: "ChatGPT", icon: "🤖", color: "#10A37F" },
            { name: "GitHub Copilot", icon: "🚀", color: "#000000" },
            { name: "Claude AI", icon: "🧠", color: "#CC9B7A" },
            { name: "Midjourney", icon: "🎨", color: "#000000" },
            { name: "DALL-E", icon: "🖼️", color: "#412991" },
            { name: "AI Code Generation", icon: "💻", color: "#6366F1" },
            { name: "AI Prompt Engineering", icon: "✍️", color: "#8B5CF6" },
            { name: "AI-Assisted Development", icon: "⚡", color: "#A855F7" }
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skillCategories.map((category, i) => {
                    const Icon = category.icon;
                    return (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`group glass p-6 lg:p-8 rounded-2xl border ${category.borderColor} hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-16 h-16 ${category.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-8 h-8 ${category.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                                        {category.category}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {category.technologies.length} technologies
                                    </p>
                                </div>
                            </div>

                            {/* Technologies Grid */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.technologies.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: i * 0.1 + index * 0.05,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -5,
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                        className={`group/tech relative px-4 py-2.5 rounded-lg ${category.bg} border ${category.borderColor} font-medium text-sm hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden`}
                                    >
                                        {/* Animated background gradient on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.6 }}
                                        />

                                        {/* Content */}
                                        <div className="relative flex items-center gap-2">
                                            <motion.span
                                                className="text-xl"
                                                whileHover={{
                                                    scale: 1.3,
                                                    rotate: 360,
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {tech.icon}
                                            </motion.span>
                                            <span className={category.color}>{tech.name}</span>
                                        </div>

                                        {/* Sparkle effect on hover */}
                                        <motion.div
                                            className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full opacity-0 group-hover/tech:opacity-100"
                                            animate={{
                                                scale: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative gradient line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                                className={`h-1 ${category.bg} rounded-full mt-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all duration-300`}
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-center"
            >
                <p className="text-muted-foreground">
                    Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape 🚀
                </p>
            </motion.div>
        </section>
    );
}
