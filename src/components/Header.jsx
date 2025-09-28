import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../context/ActiveSectionContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useActiveSection();
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Harsh_Thakur_Resume.pdf';
    link.download = 'Harsh_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'projects', label: 'Projects', icon: 'bi-briefcase' },
    { id: 'achievements', label: 'Achievements', icon: 'bi-trophy' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-800 bg-opacity-90 backdrop-blur-lg z-50 border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Frontend Developer
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-900 bg-opacity-50 rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 rounded-full text-slate-300 hover:text-white transition duration-300 flex items-center gap-2"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <i className={`bi ${item.icon}`}></i>
                  {item.label}
                </span>
              </button>
            ))}
            <button 
              onClick={handleResumeDownload}
              className="relative bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300 ml-2"
            >
              <i className="bi bi-download mr-2"></i>
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-slate-900 bg-opacity-95 backdrop-blur-lg mt-4 rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-4 rounded-lg transition duration-300 flex items-center gap-3 ${
                    activeSection === item.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <i className={`bi ${item.icon}`}></i>
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </button>
              ))}
              <button 
                onClick={handleResumeDownload}
                className="bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-purple-700 transition duration-300 text-center flex items-center justify-center gap-2"
              >
                <i className="bi bi-download"></i>
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;