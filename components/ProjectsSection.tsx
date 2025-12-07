'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
 
interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
  url?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ChitChat',
      description: 'A decentralized chat application using MERN framework and socket connectivity.',
      tools: ['Next.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Socket.io'],
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://chit-chat-1ze4.vercel.app'
    },
    {
      title: 'Grouply',
      description: 'A Financial Assistant for managing group expenses and settlements.',
      tools: ['React', 'Tailwind', 'TypeScript', 'MongoDB', 'Node', 'Framer Motion' , 'GSAP'],
      image: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://grouply.netlify.app/'
    },
    {
      title: 'Chatzee',
      description: 'Real-time chat Application for seamless communication with friends and family.',
      tools: ['Socket.io', 'React', 'MongoDB', 'Node', 'Express', 'GSAP'],
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
      url:'https://chat-app-project-five.vercel.app/'
    },
    {
      title: 'Monetra',
      description: 'An Online Payment System with secure transactions, mobile optimization, and simple, user-friendly interface.',
      tools: ['React', 'MongoDB', 'Express', 'JWT', 'REST', 'Mongoose'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      url:'https://monetra.netlify.app/'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
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
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We craft innovative solutions, creating modern and user-friendly digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
      whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.3)' }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 4).map((tool, i) => (
            <motion.span
              key={i}
              className="px-2.5 py-1 bg-gray-700 rounded text-xs text-cyan-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tool}
            </motion.span>
          ))}
          {project.tools.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-700 rounded text-xs text-gray-400">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
        <motion.a href={project.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}>
          View Project <ExternalLink className="ml-2" size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
