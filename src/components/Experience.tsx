"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Built scalable Playwright Automation Frameworks from scratch.",
  "Implemented Page Object Model (POM) Architecture for maintainability.",
  "Executed Cross Browser Testing across Chrome, Firefox, and WebKit.",
  "Automated comprehensive Regression and Smoke test suites.",
  "Developed REST API Testing Frameworks using Playwright and Postman.",
  "Integrated automated tests into CI/CD pipelines (GitHub Actions, Jenkins).",
  "Conducted Performance Optimization for test execution speed.",
  "Collaborated in Agile Development environments with cross-functional teams.",
  "Managed Defect Tracking and reporting using Jira.",
  "Performed continuous Automation Maintenance and refactoring.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative md:ml-8 md:flex gap-8 items-start"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[1.05rem] md:-left-[2.55rem] top-1 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
              <Briefcase size={14} className="text-primary" />
            </div>

            <div className="glass-card p-6 md:p-8 w-full hover:border-primary/50 transition-colors ml-6 md:ml-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">QA Automation Engineer</h3>
                  <p className="text-primary font-medium mt-1">Tech Content Creator & AI Enthusiast</p>
                </div>
                <div className="flex items-center gap-2 text-muted bg-white/5 px-3 py-1 rounded-full text-sm font-medium border border-white/10">
                  <Calendar size={14} />
                  <span>2+ Years</span>
                </div>
              </div>

              <div className="space-y-3">
                {responsibilities.map((resp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-muted/90 text-sm md:text-base leading-relaxed">{resp}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
