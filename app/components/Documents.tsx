"use client";

import { motion } from "framer-motion";
import { FileText, Download, Award, GraduationCap, Briefcase, Eye, ExternalLink } from "lucide-react";
import { useState } from "react";

const documentCategories = [
    {
        title: "Curriculum Vitae",
        icon: FileText,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        documents: [
            {
                name: "Professional CV",
                description: "Comprehensive CV with work experience, education, and skills",
                fileUrl: "/documents/lastest_cv.pdf",
                fileSize: null,
                lastUpdated: "2025",
                comingSoon: false
            }
        ]
    },
    {
        title: "Academic Certificates",
        icon: GraduationCap,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        documents: [
            {
                name: "BSc Computer Science - KNUST",
                description: "Bachelor of Science degree certificate from Kwame Nkrumah University of Science and Technology",
                fileUrl: null,
                fileSize: null,
                lastUpdated: "2022",
                comingSoon: true
            },
        ]
    },
    {
        title: "Work Documents",
        icon: Briefcase,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        documents: [
            {
                name: "National Service Certificate",
                description: "Certificate of completion from Bedeku Technical School",
                fileUrl: null,
                fileSize: null,
                lastUpdated: "2023",
                comingSoon: true
            },
            {
                name: "Professional References",
                description: "Letters of recommendation and professional references",
                fileUrl: null,
                fileSize: null,
                lastUpdated: "2024",
                comingSoon: true
            }
        ]
    }
];

export function Documents() {
    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

    return (
        <section id="documents" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            Documents & <span className="text-gradient">Credentials</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                            Download my CV, certificates, and other professional documents
                        </p>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
                    </motion.div>
                </div>

                {/* Quick Download CV */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="glass p-8 rounded-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                                    <FileText className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-1">Download My CV</h3>
                                    <p className="text-muted-foreground">Complete professional resume — latest version</p>
                                </div>
                            </div>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/documents/lastest_cv.pdf"
                                download
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Document Categories */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {documentCategories.map((category, catIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className={`glass p-6 lg:p-8 rounded-2xl border-2 ${category.borderColor} hover:border-primary/50 transition-all duration-300 group`}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center`}
                                    >
                                        <Icon className={`w-7 h-7 ${category.color}`} />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl lg:text-2xl font-black">{category.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {category.documents.length} document{category.documents.length > 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>

                                {/* Documents List */}
                                <div className="space-y-4">
                                    {category.documents.map((doc, docIndex) => (
                                        <motion.div
                                            key={doc.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: catIndex * 0.1 + docIndex * 0.1 }}
                                            whileHover={doc.comingSoon ? {} : { x: 5 }}
                                            className={`p-4 rounded-xl border transition-all duration-300 ${doc.comingSoon ? "bg-secondary/10 border-border/40 opacity-60 cursor-not-allowed" : "bg-secondary/30 hover:bg-secondary/50 border-border hover:border-primary/30 cursor-pointer"}`}
                                            onClick={() => !doc.comingSoon && setSelectedDoc(doc.name)}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="font-bold mb-1 flex items-center gap-2 flex-wrap">
                                                        {doc.name}
                                                        {doc.comingSoon ? (
                                                            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-full border border-yellow-500/30">
                                                                Coming Soon
                                                            </span>
                                                        ) : doc.lastUpdated.includes("2025") ? (
                                                            <span className="px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded-full border border-green-500/30">
                                                                Latest
                                                            </span>
                                                        ) : null}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        {doc.description}
                                                    </p>
                                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                        {doc.fileSize && <span>📄 {doc.fileSize}</span>}
                                                        <span>📅 {doc.lastUpdated}</span>
                                                    </div>
                                                </div>
                                                {!doc.comingSoon && doc.fileUrl && (
                                                    <div className="flex flex-col gap-2">
                                                        <motion.a
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            href={doc.fileUrl}
                                                            download
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                                            title="Download"
                                                        >
                                                            <Download className="w-5 h-5" />
                                                        </motion.a>
                                                        <motion.a
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            href={doc.fileUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                                                            title="Preview"
                                                        >
                                                            <Eye className="w-5 h-5" />
                                                        </motion.a>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <p className="text-sm text-muted-foreground">
                            All documents open in a new tab. Click download to save locally.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
