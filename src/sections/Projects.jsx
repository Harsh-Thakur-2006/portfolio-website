import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
      icon: "bi bi-briefcase",
      githubLink: "https://github.com/Harsh-Thakur-2006/portfolio-website",
      liveLink: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "MyAnimeList Clone",
      description: "A React Native mobile app cloning MyAnimeList features - browse anime, track watchlists, manage favorites with real-time Firebase sync.",
      technologies: ["React Native", "Expo", "Firebase", "User Auth", "Real-time DB"],
      icon: "bi bi-film",
      githubLink: "#",
      liveLink: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "StudyMate - Study Tracker",
      description: "Cross-platform mobile app for students to plan, track, and analyze study progress with goals, timers, and analytics.",
      technologies: ["React Native", "Expo", "Java", "Spring Boot", "SQLite"],
      icon: "bi bi-journal-bookmark",
      githubLink: "https://github.com/Harsh-Thakur-2006/StudyMate",
      liveLink: "#",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Weather App",
      description: "A clean weather application showing current conditions and forecasts with location-based services.",
      technologies: ["React", "Weather API", "Geolocation", "CSS"],
      icon: "bi bi-cloud-sun",
      githubLink: "#",
      liveLink: "#",
      status: "Planning Phase"
    },
    {
      id: 5,
      title: "Task Manager",
      description: "Simple and intuitive task management application with add, delete, and mark complete functionality.",
      technologies: ["React", "Local Storage", "State Management", "UI/UX"],
      icon: "bi bi-check2-square",
      githubLink: "#",
      liveLink: "#",
      status: "Planning Phase"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A content management system for writing and publishing blog posts with rich text editing.",
      technologies: ["React", "Node.js", "MongoDB", "Authentication"],
      icon: "bi bi-pencil",
      githubLink: "#",
      liveLink: "#",
      status: "Future Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">My Projects</h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Showcasing my development journey - {projects.filter(p => p.status === "Completed").length} completed • {projects.filter(p => p.status === "In Progress").length} in progress
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`bg-slate-800 rounded-xl shadow-2xl overflow-hidden hover:transform hover:scale-105 transition duration-300 border-l-4 ${
              project.status === "Completed" ? "border-green-500" : 
              project.status === "In Progress" ? "border-yellow-500" : 
              project.status === "Planning Phase" ? "border-blue-500" : 
              "border-purple-500"
            }`}>
              
              {/* Project Header */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${project.icon} text-2xl text-purple-400`}></i>
                  <h3 className="text-lg font-bold text-white flex-1">{project.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  project.status === "Completed" ? "bg-green-500 text-white" : 
                  project.status === "In Progress" ? "bg-yellow-500 text-black" : 
                  project.status === "Planning Phase" ? "bg-blue-500 text-white" : 
                  "bg-purple-500 text-white"
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-slate-700 text-purple-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-3">
                  <a 
                    href={project.githubLink}
                    className={`flex-1 text-center py-2 rounded-lg text-xs font-medium transition duration-300 ${
                      project.status === "Completed" 
                        ? "bg-gray-700 text-white hover:bg-gray-600" 
                        : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={(e) => project.status !== "Completed" && e.preventDefault()}
                  >
                    {project.status === "Completed" ? <><i className="bi bi-github mr-1"></i> Code</> : "Coming Soon"}
                  </a>
                  <a 
                    href={project.liveLink}
                    className={`flex-1 text-center py-2 rounded-lg text-xs font-medium transition duration-300 ${
                      project.status === "Completed" 
                        ? "bg-purple-600 text-white hover:bg-purple-700" 
                        : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={(e) => project.status !== "Completed" && e.preventDefault()}
                  >
                    {project.status === "Completed" ? <><i className="bi bi-play-circle mr-1"></i> Demo</> : "Preview"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
  <p className="text-slate-400 mb-4">Like what you see? Let's build something together</p>
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="inline-flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition duration-300"
  >
    <i className="bi bi-chat-dots"></i>
    Start a Conversation
  </button>
</div>
      </div>
    </section>
  );
};

export default Projects;