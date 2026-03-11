"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) {
            console.error("❌ Audio element not found");
            return;
        }

        console.log("🔘 Button clicked! Current state:", {
            paused: audio.paused,
            currentTime: audio.currentTime,
            volume: audio.volume,
            muted: audio.muted
        });

        try {
            if (!audio.paused && !audio.ended) {
                // Music is playing - FORCE STOP IT
                audio.pause();
                audio.currentTime = 0;
                audio.volume = 0.3; // Ensure volume is set
                setIsPlaying(false);
                console.log("⏹️ STOPPED - Forced pause, reset to 0, state set to false");
            } else {
                // Music is paused - START IT
                audio.volume = 0.3;
                audio.play();
                setIsPlaying(true);
                console.log("▶️ PLAYING - Started playing, state set to true");
            }
        } catch (error) {
            console.error("❌ Error toggling music:", error);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            const newMutedState = !isMuted;
            audioRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
            console.log("Muted:", newMutedState);
        }
    };

    // Auto-play on mount (may be blocked by browser)
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.3; // Set volume to 30%

        // Event listeners to sync state with actual audio state
        const handlePlay = () => {
            setIsPlaying(true);
            console.log("🎵 Audio state: PLAYING");
        };
        const handlePause = () => {
            setIsPlaying(false);
            console.log("⏸️ Audio state: PAUSED");
        };
        const handleEnded = () => {
            setIsPlaying(false);
            console.log("🔚 Audio ended");
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        // Attempt to autoplay
        audio.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            // Autoplay was prevented
            setIsPlaying(false);
        });

        // Cleanup
        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                loop
                src="/music/in-slow-motion-inspiring-ambient-lounge-219592 (1).mp3"
            />

            {/* Floating Music Control */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-8 right-8 z-[9999]"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => {
                    console.log("🖱️ Mouse entered music player");
                    setIsExpanded(true);
                }}
                onMouseLeave={() => {
                    console.log("🖱️ Mouse left music player");
                    setIsExpanded(false);
                }}
            >
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Main Button */}
                    <motion.button
                        type="button"
                        onClick={(e) => {
                            console.log("🖱️ BUTTON CLICKED!");
                            e.preventDefault();
                            e.stopPropagation();
                            handlePlayPause();
                        }}
                        onMouseDown={() => console.log("🖱️ Mouse down")}
                        onMouseUp={() => console.log("🖱️ Mouse up")}
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-lg border-2 transition-all duration-300 cursor-pointer select-none relative z-[100] ${
                            isPlaying
                                ? "bg-gradient-to-r from-primary to-purple-600 border-primary/50 shadow-primary/30"
                                : "bg-background/90 border-border hover:border-primary/50"
                        }`}
                        style={{ pointerEvents: 'auto' }}
                        title={isPlaying ? "Stop Music" : "Play Music"}
                        aria-label={isPlaying ? "Stop Music" : "Play Music"}
                    >
                        <AnimatePresence mode="wait">
                            {isPlaying ? (
                                <motion.div
                                    key="pause"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Pause className={`w-7 h-7 ${isPlaying ? "text-white" : "text-foreground"}`} fill="currentColor" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="play"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Play className={`w-7 h-7 ${isPlaying ? "text-white" : "text-foreground"} ml-1`} fill="currentColor" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Animated Ring */}
                    {isPlaying && (
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-primary"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    )}

                    {/* Music Waves Animation */}
                    {isPlaying && (
                        <div className="absolute -top-2 -right-2 flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 bg-primary rounded-full"
                                    animate={{
                                        height: ["8px", "16px", "8px"],
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Expanded Controls */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-20 right-0 bg-background/95 backdrop-blur-lg border-2 border-border rounded-2xl p-4 shadow-2xl min-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Music className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-bold">Background Music</span>
                                </div>

                                <div className="space-y-3">
                                    {/* Mute/Unmute Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleMute}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-5 h-5 text-muted-foreground" />
                                        ) : (
                                            <Volume2 className="w-5 h-5 text-primary" />
                                        )}
                                        <span className="text-sm font-medium">
                                            {isMuted ? "Unmute" : "Mute"}
                                        </span>
                                    </motion.button>

                                    {/* Status */}
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <div className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-500 animate-pulse" : "bg-gray-500"}`} />
                                        <span>{isPlaying ? "Playing" : "Paused"}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </>
    );
}
