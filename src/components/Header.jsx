import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-800 shadow-lg z-50 border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Harsh Thakur</h1>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-blue-400 transition">Projects</button>
            <button onClick={() => scrollToSection('achievements')} className="text-slate-300 hover:text-blue-400 transition">Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400 transition">Contact</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;