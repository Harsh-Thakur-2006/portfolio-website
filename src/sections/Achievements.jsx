import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "App Development Internship",
      issuer: "Launched Global x Kshitij IIT Kharagpur",
      date: "Feb - Mar 2025",
      description: "2-month intensive mentorship program in mobile app development, focusing on React Native and Expo",
      icon: "bi bi-briefcase",
      type: "internship"
    },
    {
      id: 2,
      title: "Designathon 2025 - National Hackathon",
      issuer: "SRM Institute of Science & Technology",
      date: "Aug 2025",
      description: "Participated in Round 2 of National Level 24-Hour Hackathon 'Crack the Complexity'",
      icon: "bi bi-trophy",
      type: "hackathon"
    },
    {
      id: 3,
      title: "Hackathon 9.0 Participant",
      issuer: "Department of Networking & Communications, SRM",
      date: "Apr 2025",
      description: "Competed in hackathon hosted by Team SRM Hackathon, School of Computing",
      icon: "bi bi-code-slash",
      type: "hackathon"
    },
    {
      id: 4,
      title: "Pythoneers Event Participant",
      issuer: "ACM SIGCHI, SRM",
      date: "Aug 2024",
      description: "Participated in 'Code, Create and Conquer' programming event organized by ACM SIGCHI",
      icon: "bi bi-python",
      type: "competition"
    },
    {
      id: 5,
      title: "MyAnimeList Clone App",
      issuer: "Personal Project",
      date: "2024",
      description: "Built and published a React Native mobile app cloning MyAnimeList features with Firebase backend",
      icon: "bi bi-phone",
      type: "project"
    },
    {
      id: 6,
      title: "B.Tech Computer Science",
      issuer: "SRM Institute of Science & Technology",
      date: "2024 - Present",
      description: "Currently in 3rd semester with active participation in tech events and hackathons",
      icon: "bi bi-mortarboard",
      type: "academic"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship': return 'bg-purple-500';
      case 'hackathon': return 'bg-green-500';
      case 'competition': return 'bg-blue-500';
      case 'project': return 'bg-yellow-500';
      case 'academic': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeText = (type) => {
    switch (type) {
      case 'internship': return 'Internship';
      case 'hackathon': return 'Hackathon';
      case 'competition': return 'Competition';
      case 'project': return 'Project';
      case 'academic': return 'Academic';
      default: return 'Achievement';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'internship': return 'bi bi-award-fill';
      case 'hackathon': return 'bi bi-trophy-fill';
      case 'competition': return 'bi bi-star-fill';
      case 'project': return 'bi bi-rocket-fill';
      case 'academic': return 'bi bi-mortarboard-fill';
      default: return 'bi bi-trophy';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Achievements & Certifications</h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          My journey through B.Tech CSE at SRM Institute of Science & Technology
        </p>
        
        {/* Timeline Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="bi bi-mortarboard text-3xl text-purple-400"></i>
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech Computer Science & Engineering</h3>
                <p className="text-slate-300">SRM Institute of Science & Technology, Kattankulathur</p>
                <p className="text-slate-400 text-sm">2024 - Present (Currently 3rd Semester)</p>
              </div>
            </div>
            <p className="text-slate-300">
              Active participant in coding events, hackathons, and tech festivals with a focus on mobile app development 
              and full-stack technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-slate-800 rounded-xl p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 border-l-4 border-purple-500">
              
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-full">
                  <i className={`${achievement.icon} text-white text-xl`}></i>
                </div>
                <span className={`${getTypeColor(achievement.type)} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                  <i className={getTypeIcon(achievement.type)}></i>
                  {getTypeText(achievement.type)}
                </span>
              </div>
              
              {/* Achievement Content */}
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <i className="bi bi-building text-slate-400 text-sm"></i>
                <span className="text-slate-400 text-sm">{achievement.issuer}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <i className="bi bi-calendar text-slate-400 text-sm"></i>
                <span className="text-slate-400 text-sm">{achievement.date}</span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{achievement.description}</p>
              
              {/* Certificate ID if available */}
              {achievement.certificateId && (
                <div className="bg-slate-700 rounded p-2 mb-3">
                  <p className="text-slate-400 text-xs">Certificate ID: <span className="text-purple-300">{achievement.certificateId}</span></p>
                </div>
              )}
              
              {/* Action Button */}
              <button className="w-full bg-slate-700 text-purple-400 py-2 rounded-lg text-sm font-medium hover:bg-slate-600 transition duration-300 flex items-center justify-center gap-2">
                <i className="bi bi-eye"></i>
                View Certificate
              </button>
            </div>
          ))}
        </div>
        
        {/* Current Focus */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 max-w-2xl mx-auto">
            <i className="bi bi-rocket-takeoff text-4xl text-white mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-2">Currently Building</h3>
            <p className="text-white mb-4">
              Working on <strong>StudyMate</strong> - A cross-platform study tracker app using React Native, Expo, and Java Spring Boot
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">React Native</span>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">Expo</span>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">Java Spring Boot</span>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">SQLite</span>
            </div>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              <i className="bi bi-arrow-up-right"></i>
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;