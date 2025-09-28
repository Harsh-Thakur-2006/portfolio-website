import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import './App.css';

function App() {
  return (
    <div className="App bg-slate-900 min-h-screen">
      <Header />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;