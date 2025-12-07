'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  photo: string;
  github: string;
  linkedin: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const members: Member[] = [
    {
      name: 'Mayank Bisht',
      role: 'Full Stack Developer',
      photo: '/mayank.jpg',
      github: 'https://github.com/mayankbisht-tech',
      linkedin: 'https://www.linkedin.com/in/mayank-bisht-a68491325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      bio: 'Specializes in Next.js, Socket.io, and React.js. Focuses on end-to-end development and system integration.',
    },
    {
      name: 'Himanshu Tiwari',
      role: 'Frontend Developer',
      photo: '/himanshu.jpg',
      github: 'https://github.com/himanshu200430',
      linkedin: 'https://www.linkedin.com/in/himanshu-tiwari-b83294374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      bio: 'Expert in React.js, CSS Frameworks, Framer Motion. Builds awesome looking Faces of Websites.',
    },
    {
      name: 'Dhruv Sharma',
      role: 'Full Stack Developer',
      photo: '/dhruv.jpg',
      github: 'https://github.com/CodeDhruv06',
      linkedin: 'https://www.linkedin.com/in/dhruv-sharma-283855322',
      bio: 'Versatile developer with expertise across the entire stack. Passionate about creating pixel-perfect, responsive user interfaces.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Three developers. One mission: build exceptional software that matters.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.3)',
              }}
            >
              <div className="text-center mb-5">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-cyan-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {member.role}
                </motion.p>
              </div>
              <motion.p
                className="text-gray-300 text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {member.bio}
              </motion.p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.github}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={member.linkedin}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
