"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (This is a demo)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Email</p>
                    <a href="mailto:hello@satheeshsiva.com" className="text-white hover:text-primary transition-colors">
                      hello@satheeshsiva.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-primary transition-all group"
                >
                  <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-white transition-all group"
                >
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-red-500 transition-all group"
                >
                  <FaYoutube size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">YouTube</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-accent transition-all group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
