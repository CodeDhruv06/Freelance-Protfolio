'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GreetingScreenProps {
  onComplete: () => void;
}

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Namaste', lang: 'Hindi' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Konnichiwa', lang: 'Japanese' },
  { text: 'Olá', lang: 'Portuguese' },
];

const GreetingScreen: React.FC<GreetingScreenProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If we are still showing greetings
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 900); // increased so each greeting actually stays visible

      return () => clearTimeout(timer);
    }

    // After completing all greetings
    const exitTimer = setTimeout(() => setIsExiting(true), 400);
    const completeTimer = setTimeout(() => onComplete(), 900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [currentIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1,
        backgroundColor: isExiting ? '#111827' : '#000000',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Greetings */}
      <AnimatePresence mode="wait">
        {currentIndex < greetings.length && (
          <motion.div
            key={currentIndex}
            className="relative z-10 text-center"
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              filter: 'blur(20px)',
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold"
              style={{
                background:
                  'linear-gradient(135deg, #ffffff 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {greetings[currentIndex].text}
            </motion.h1>

            <motion.p
              className="text-gray-400 text-sm md:text-base mt-4 tracking-widest uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {greetings[currentIndex].lang}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GreetingScreen;
