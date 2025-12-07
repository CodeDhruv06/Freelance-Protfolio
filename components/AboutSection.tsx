'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    { title: 'Expertise', desc: 'Modern stacks & best practices' },
    { title: 'Communication', desc: 'Clear, proactive, timely' },
    { title: 'Ownership', desc: 'End-to-end responsibility' },
    { title: 'Professionalism', desc: 'Reliable & deadline-driven' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Hire{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Us</span>?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.3)',
                }}
              >
                <motion.h3
                  className="font-bold text-cyan-400 mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            We started with curiosity about blockchain and never stopped building. Today, we deliver production-grade
            applications that solve real problems — with clean code, thoughtful design, and relentless attention to
            detail.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
