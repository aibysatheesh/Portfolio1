"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Network, MonitorCheck, Gauge, Sparkles } from "lucide-react";

const services = [
  {
    title: "Automation Framework Development",
    description: "Custom, scalable E2E test automation frameworks built from the ground up using Playwright and TypeScript.",
    icon: Code2,
    color: "group-hover:text-primary",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]",
  },
  {
    title: "QA Consulting",
    description: "Strategic guidance on quality assurance processes, test strategy, and improving software delivery life cycles.",
    icon: Lightbulb,
    color: "group-hover:text-accent",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
  },
  {
    title: "API Testing",
    description: "Comprehensive backend verification and contract testing to ensure robust and secure data exchange.",
    icon: Network,
    color: "group-hover:text-secondary",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
  },
  {
    title: "Website Testing",
    description: "Thorough UI/UX and functional testing across multiple browsers and devices for flawless user experiences.",
    icon: MonitorCheck,
    color: "group-hover:text-[#10B981]",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
  },
  {
    title: "Performance Testing",
    description: "Load, stress, and scalability testing to ensure applications perform optimally under high traffic conditions.",
    icon: Gauge,
    color: "group-hover:text-[#F59E0B]",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
  },
  {
    title: "AI Automation Consulting",
    description: "Integrating AI tools to enhance testing, from smart locators and self-healing to automated test generation.",
    icon: Sparkles,
    color: "group-hover:text-[#EC4899]",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 ${service.bgGlow}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`mb-6 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-white/70 transition-colors duration-300 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
