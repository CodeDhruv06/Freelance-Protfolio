'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import TeamSection from './TeamSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'team', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation activeSection={activeSection} isScrolled={isScrolled} />
      <HeroSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <ContactSection />

      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} DekuDev Labs. Crafted with code and coffee.</p>
      </footer>
    </motion.div>
  );
};

export default Portfolio;
