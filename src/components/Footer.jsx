import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Harsh Thakur. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;