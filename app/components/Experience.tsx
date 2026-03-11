"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Code, Users, Plane } from "lucide-react";

const timeline = [
    {
        type: "work",
        title: "ICT Technician",
        organization: "Godfirst Education and Tours Agency",
        location: "Ghana",
        period: "2023 - Present",
        duration: "Current",
        icon: Plane,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        description: "Managing IT infrastructure and digital systems for a travel and tour agency. Developing and maintaining booking systems, customer management platforms, and internal tools to streamline operations.",
        highlights: [
            "IT infrastructure management",
            "Custom software development",
            "Digital systems optimization",
            "Technical support and training"
        ]
    },
    {
        type: "work",
        title: "Freelance Software Developer",
        organization: "Remote Work",
        location: "Remote",
        period: "2021 - 2023",
        duration: "2 Years",
        icon: Code,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        description: "Worked remotely as a freelance developer, building custom web and mobile applications for clients worldwide. Specialized in full-stack development with Flutter, React, and modern backend technologies.",
        highlights: [
            "Built 7+ production applications",
            "Flutter & React development",
            "Client relationship management",
            "Remote team collaboration"
        ]
    },
    {
        type: "work",
        title: "Mathematics & ICT Tutor",
        organization: "Bedeku Technical School",
        location: "Ada, Ghana",
        period: "2022 - 2023",
        duration: "1 Year (National Service)",
        icon: Users,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        description: "Completed mandatory national service teaching mathematics and ICT at a technical school. Developed teaching materials, mentored students in mathematical concepts and computer literacy, and integrated technology in education.",
        highlights: [
            "Mathematics & ICT instruction",
            "Computer literacy training",
            "Student mentorship & guidance",
            "Educational technology integration"
        ]
    },
    {
        type: "education",
        title: "BSc. Computer Science",
        organization: "Kwame Nkrumah University of Science and Technology",
        location: "Kumasi, Ghana",
        period: "2018 - 2022",
        duration: "4 Years",
        icon: GraduationCap,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        description: "Earned Bachelor of Science degree in Computer Science with focus on software engineering, algorithms, database systems, and web technologies. Participated in coding competitions and tech projects.",
        highlights: [
            "Software Engineering",
            "Database Systems",
            "Web Development",
            "Algorithm Design"
        ]
    },
    {
        type: "education",
        title: "High School Education - General Science",
        organization: "Mfantsipim School",
        location: "Cape Coast, Ghana",
        period: "2015 - 2018",
        duration: "3 Years",
        icon: GraduationCap,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
        description: "Completed senior high school education offering General Science program with strong focus on science and mathematics. Developed foundational knowledge that led to pursuing Computer Science at university level.",
        highlights: [
            "General Science program",
            "Core Mathematics & Physics",
            "Academic excellence",
            "Foundation for tech career"
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            My <span className="text-gradient">Journey</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                            From student to professional developer - a timeline of education, growth, and achievement
                        </p>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Center Timeline Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full" />

                        {timeline.map((item, i) => {
                            const Icon = item.icon;
                            const isLeft = i % 2 === 0;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className={`relative mb-12 lg:mb-16 flex flex-col lg:flex-row items-center ${
                                        isLeft ? 'lg:flex-row-reverse' : ''
                                    }`}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                        <motion.div
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className={`glass p-6 lg:p-8 rounded-2xl border-2 ${item.borderColor} hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-primary/10`}
                                        >
                                            {/* Type Badge */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                                                    {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                                                </span>
                                                <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                                    {item.duration}
                                                </span>
                                            </div>

                                            {/* Title & Organization */}
                                            <h3 className="text-xl lg:text-2xl font-black mb-2 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <h4 className={`text-base lg:text-lg font-bold mb-2 ${item.color}`}>
                                                {item.organization}
                                            </h4>
                                            
                                            {/* Location & Period */}
                                            <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span>📍</span>
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="space-y-2">
                                                {item.highlights.map((highlight, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.1 + idx * 0.05 }}
                                                        className="flex items-start gap-2 text-sm"
                                                    >
                                                        <span className={`${item.color} mt-1`}>▸</span>
                                                        <span className="text-muted-foreground">{highlight}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 items-center justify-center z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-full h-full rounded-2xl ${item.bgColor} border-4 ${item.borderColor} flex items-center justify-center shadow-xl backdrop-blur-sm`}
                                        >
                                            <Icon className={`w-10 h-10 ${item.color}`} />
                                        </motion.div>
                                    </div>

                                    {/* Mobile Icon */}
                                    <div className="lg:hidden flex items-center justify-center w-16 h-16 mb-4">
                                        <div className={`w-full h-full rounded-2xl ${item.bgColor} border-4 ${item.borderColor} flex items-center justify-center shadow-lg`}>
                                            <Icon className={`w-8 h-8 ${item.color}`} />
                                        </div>
                                    </div>

                                    {/* Spacer for other side on desktop */}
                                    <div className="hidden lg:block w-[calc(50%-3rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
