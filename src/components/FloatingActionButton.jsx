import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    { icon: 'bi-house', label: 'Home', section: 'home' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: 'bi-download', label: 'Resume', action: () => {
      const link = document.createElement('a');
      link.href = '/Harsh_Thakur_Resume.pdf';
      link.download = 'Harsh_Thakur_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }},
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (action.section) {
                    document.getElementById(action.section)?.scrollIntoView({ behavior: 'smooth' });
                  } else if (action.url) {
                    window.open(action.url, '_blank');
                  } else if (action.action) {
                    action.action();
                  }
                  setIsOpen(false);
                }}
                className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300 flex items-center gap-2 group"
              >
                <i className={`bi ${action.icon}`}></i>
                <span className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded whitespace-nowrap">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.i
          className={`bi ${isOpen ? 'bi-x' : 'bi-plus'} text-2xl`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;