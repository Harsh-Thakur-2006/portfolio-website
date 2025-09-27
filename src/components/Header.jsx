import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-800 shadow-lg z-50 border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Harsh Thakur</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-blue-400 transition">Projects</button>
            <button onClick={() => scrollToSection('achievements')} className="text-slate-300 hover:text-blue-400 transition">Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400 transition">Contact</button>
            <a 
              href="/assets/Harsh_Thakur_Resume.pdf"
              download="Harsh_Thakur_Resume.pdf"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition duration-300"
            >
              Resume
            </a>
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
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-blue-400 transition text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400 transition text-left">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-blue-400 transition text-left">Projects</button>
              <button onClick={() => scrollToSection('achievements')} className="text-slate-300 hover:text-blue-400 transition text-left">Achievements</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400 transition text-left">Contact</button>
              <a 
                href="/assets/Harsh_Thakur_Resume.pdf"
                download="Harsh_Thakur_Resume.pdf"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;