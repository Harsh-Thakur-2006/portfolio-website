import React from 'react';
import profilePic from '../assets/profilePic.jpg';

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Harsh_Thakur_Resume.pdf';
    link.download = 'Harsh_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git/GitHub', 'Responsive Design', 'React Native'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500">
              <img
                src={profilePic}
                alt="Harsh Thakur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Hello! I'm <span className="text-purple-400">Harsh Thakur</span>
            </h3>

            <p className="text-slate-300 mb-4 text-lg leading-relaxed">
              A passionate frontend developer dedicated to creating beautiful, user-friendly web applications.
              I love transforming complex challenges into elegant, intuitive solutions.
            </p>

            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Currently mastering modern web technologies with a focus on React ecosystem and responsive design.
              Committed to continuous learning and staying at the forefront of web development trends.
            </p>

            {/* Skills Section */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-600 transition duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleResumeDownload}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <i className="bi bi-download"></i>
                Download Resume
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <i className="bi bi-chat-dots"></i>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;