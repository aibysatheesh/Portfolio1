"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Automation Scripts" },
  { value: 100, suffix: "+", label: "Test Cases" },
  { value: 20, suffix: "+", label: "Projects" },
];

const skillPills = [
  "Playwright",
  "TypeScript",
  "JavaScript",
  "API Testing",
  "CI/CD",
  "AI Tools",
  "Problem Solving",
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            if (nodeRef.current) {
              nodeRef.current.innerText = Math.ceil(Number(this.targets()[0].innerText)).toString() + suffix;
            }
          },
        }
      );
    }
  }, [isInView, value, suffix]);

  return <span ref={nodeRef} className="text-4xl lg:text-5xl font-bold text-white tracking-tight">0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Professional About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Engineering Quality with Code & AI
            </h3>
            <p className="text-muted leading-relaxed text-lg">
              I am a passionate QA Automation Engineer specializing in modern web and API testing. My focus is on building resilient, scalable automation architectures that accelerate delivery while maintaining the highest quality standards.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Beyond traditional testing, I actively explore and integrate AI-powered workflows to enable smart locator healing, intelligent test generation, and streamlined CI/CD pipelines.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-3">
              {skillPills.map((pill, index) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 glass-card text-sm font-medium text-white/90 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted font-medium mt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
