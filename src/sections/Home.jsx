import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-purple-400">Harsh Thakur</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-300">
          A passionate Frontend Developer creating beautiful and functional web experiences
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-lg inline-flex items-center gap-2"
          >
            <i className="bi bi-code-slash"></i>
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition duration-300 inline-flex items-center gap-2"
          >
            <i className="bi bi-envelope"></i>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;