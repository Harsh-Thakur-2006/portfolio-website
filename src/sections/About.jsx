import React from 'react';
import profilePic from '../assets/profilePic.jpg';

const About = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git/GitHub', 'Responsive Design'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500">
                <img
                  src={profilePic}
                  alt="My Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* You can replace the emoji with an actual image later */}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-white">Hello! I'm Harsh Thakur</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer with a love for creating beautiful,
              user-friendly web applications. I enjoy turning complex problems into
              simple, intuitive solutions that provide great user experiences.
            </p>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Currently, I'm focused on mastering modern web technologies and
              building projects that solve real-world problems. I believe in
              continuous learning and staying updated with the latest trends
              in web development.
            </p>

            {/* Skills Section */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-600 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                Download Resume
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition duration-300"
              >
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