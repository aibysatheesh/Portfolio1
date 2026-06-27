"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Automation",
    color: "from-[#4F46E5] to-[#7C3AED]",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Selenium", level: 85 },
      { name: "Cypress", level: 80 },
    ],
  },
  {
    title: "Programming",
    color: "from-[#06B6D4] to-[#3B82F6]",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Testing",
    color: "from-[#10B981] to-[#3B82F6]",
    skills: [
      { name: "UI Testing", level: 95 },
      { name: "API Testing", level: 90 },
      { name: "Regression", level: 95 },
      { name: "Smoke/Functional", level: 90 },
    ],
  },
  {
    title: "Tools",
    color: "from-[#F59E0B] to-[#EF4444]",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "Jira", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
    ],
  },
  {
    title: "Artificial Intelligence",
    color: "from-[#EC4899] to-[#8B5CF6]",
    skills: [
      { name: "ChatGPT", level: 90 },
      { name: "Claude", level: 85 },
      { name: "Gemini", level: 80 },
      { name: "GitHub Copilot", level: 90 },
      { name: "AI Automation", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 hover:border-white/30 transition-all duration-300 group"
            >
              <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-background/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
