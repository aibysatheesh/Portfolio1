"use client";

import { motion } from "framer-motion";
import { ExternalLink, Box, Bot, Server, Workflow } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Playwright Automation Framework",
    tech: "Playwright + TypeScript",
    description: "Scalable Enterprise E2E Automation Framework with Page Object Model and robust reporting.",
    icon: Box,
    color: "from-primary to-blue-500",
    badges: ["Playwright", "TypeScript", "E2E", "POM"],
  },
  {
    title: "AI Self-Healing Automation",
    tech: "AI + Playwright",
    description: "AI Powered Smart Locator Healing system that dynamically updates broken selectors during test execution.",
    icon: Bot,
    color: "from-accent to-primary",
    badges: ["AI", "Playwright", "Self-Healing", "OpenAI"],
  },
  {
    title: "API Automation Suite",
    tech: "Playwright + Postman",
    description: "Comprehensive REST API Testing Framework for robust backend verification and schema validation.",
    icon: Server,
    color: "from-green-500 to-emerald-400",
    badges: ["API", "Playwright", "Postman", "REST"],
  },
  {
    title: "CI/CD Test Pipeline",
    tech: "GitHub Actions + Jenkins",
    description: "Fully Automated Testing Pipeline ensuring continuous integration and reliable deployment gates.",
    icon: Workflow,
    color: "from-secondary to-purple-500",
    badges: ["CI/CD", "GitHub Actions", "Jenkins", "DevOps"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card group relative overflow-hidden flex flex-col h-full"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="p-8 flex flex-col flex-grow relative z-10">
                {/* Illustration / Icon Header */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <project.icon size={32} />
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-mono text-accent mb-2">{project.tech}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map(badge => (
                      <span key={badge} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <FaGithub size={18} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
