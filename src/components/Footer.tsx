"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              Satheesh<span className="text-primary">.</span>
            </h3>
            <p className="text-muted max-w-xs">
              Building scalable automation frameworks and modern testing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Experience", "Projects", "Services"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted hover:text-primary transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-colors text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-colors text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-colors text-white">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-colors text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Satheesh Siva. All rights reserved.
          </p>
          
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-white/10"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
