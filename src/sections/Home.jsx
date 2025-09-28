import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "Harsh Thakur";
  const titles = ["Frontend Developer", "Mobile App Developer", "React Specialist"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Typing effect for name
  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setCurrentIndex(0);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 50);
      }
    } else {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, displayText, fullText, titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center text-white px-4 relative z-10 w-full max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 min-h-[84px] md:min-h-[112px] flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="text-purple-400 relative ml-2">
            {displayText}
            <motion.span
              className="ml-0.5 w-0.5 bg-purple-400 inline-block h-12"
              style={{ height: '1em' }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-300 min-h-[32px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          key={currentTitleIndex}
        >
          {titles[currentTitleIndex]}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-lg inline-flex items-center gap-2 group"
          >
            <i className="bi bi-code-slash group-hover:scale-110 transition duration-300"></i>
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition duration-300 inline-flex items-center gap-2 group"
          >
            <i className="bi bi-envelope group-hover:scale-110 transition duration-300"></i>
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <i className="bi bi-chevron-down text-xl"></i>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;