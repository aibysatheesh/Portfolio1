"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import Hero3D from "./Hero3D";

const titles = [
  "QA Automation Engineer",
  "Playwright Expert",
  "AI Enthusiast",
  "Tech Content Creator",
];

const floatingIcons = [
  { name: "Playwright", color: "text-[#2EAD33]", pos: "top-[10%] left-[10%]", duration: 5.2 },
  { name: "TypeScript", color: "text-[#3178C6]", pos: "top-[20%] right-[10%]", duration: 4.8 },
  { name: "JavaScript", color: "text-[#F7DF1E]", pos: "bottom-[20%] right-[15%]", duration: 5.5 },
  { name: "GitHub", color: "text-white", pos: "bottom-[15%] left-[15%]", duration: 4.6 },
  { name: "VS Code", color: "text-[#007ACC]", pos: "top-[40%] -left-[5%]", duration: 5.8 },
  { name: "Jenkins", color: "text-[#D33833]", pos: "bottom-[40%] -right-[5%]", duration: 4.2 },
  { name: "API", color: "text-primary", pos: "top-[50%] right-[30%]", duration: 5.0 },
  { name: "AI", color: "text-accent", pos: "top-[30%] left-[40%]", duration: 4.4 },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                {"Hi, I'm"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Satheesh Siva
                </span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={titleIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl md:text-3xl font-mono text-secondary font-medium"
                  >
                    &gt; {titles[titleIndex]}_
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              I build scalable automation frameworks, modern testing solutions, and AI-powered workflows to deliver reliable, high-quality software.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-white border border-secondary/50 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Download Resume <Download size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 text-white hover:text-primary px-4 py-3 rounded-full font-medium transition-colors"
              >
                Contact Me <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Animated Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center h-[500px]"
          >
            {/* Center Glass Card */}
            <div className="glass-card w-80 h-80 flex flex-col justify-center items-center p-8 relative z-20 shadow-[0_0_50px_rgba(124,58,237,0.2)] border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
              <div className="text-center z-10 space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-primary to-secondary rounded-full p-1 shadow-lg relative">
                  <div className="w-full h-full bg-background rounded-full overflow-hidden relative">
                    <Image
                      src="/satheesh.png"
                      alt="Satheesh Siva"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Automation Hub</h3>
                  <p className="text-sm font-mono text-accent mt-1">Status: Running... 🚀</p>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons around */}
            {floatingIcons.map((icon, index) => (
              <motion.div
                key={icon.name}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: icon.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className={`absolute ${icon.pos} glass-card px-4 py-2 flex items-center gap-2 z-10 hover:border-primary/50 cursor-default transition-colors`}
              >
                <div className={`w-2 h-2 rounded-full bg-current ${icon.color} shadow-[0_0_10px_currentColor]`} />
                <span className="text-sm font-semibold text-white/90 tracking-wide">{icon.name}</span>
              </motion.div>
            ))}

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full z-0 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
