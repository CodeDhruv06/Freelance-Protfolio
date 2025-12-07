'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const members = [
    {
      name: 'Mayank Bisht',
      photo: '/mayank.jpg',
    },
    {
      name: 'Himanshu Tiwari',
      photo: '/himanshu.jpg',
    },
    {
      name: 'Dhruv Sharma',
      photo: '/dhruv.jpg',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'Full Stack Projects' },
    { value: 'Launching', label: 'Clients Served' },
    { value: '100%', label: 'On-Time Delivery' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900"></div>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We&apos;re{' '}
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            DekuDev Labs
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          A team of three passionate freelance web developers building cutting-edge full-stack applications for
          global clients.
        </motion.p>

        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex -space-x-4">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-cyan-500/30 bg-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, zIndex: 10, rotate: [0, 5, -5, 0] }}
              >
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.3)' }}
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
