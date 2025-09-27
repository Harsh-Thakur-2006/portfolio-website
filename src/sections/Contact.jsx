import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic (EmailJS, Netlify Forms, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <i className="bi bi-envelope text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href="mailto:harsh06072006@gmail.com" className="text-white hover:text-purple-400 transition">
                    harsh06072006@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <i className="bi bi-telephone text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:+919678317801" className="text-white hover:text-purple-400 transition">
                    +91 96783 17801
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <i className="bi bi-geo-alt text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Harsh-Thakur-2006" className="bg-slate-700 p-3 rounded-full hover:bg-purple-600 transition duration-300">
                  <i className="bi bi-github text-white text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/harsh-thakur-599630331" className="bg-slate-700 p-3 rounded-full hover:bg-purple-600 transition duration-300">
                  <i className="bi bi-linkedin text-white text-xl"></i>
                </a>
                <a href="https://twitter.com/yourusername" className="bg-slate-700 p-3 rounded-full hover:bg-purple-600 transition duration-300">
                  <i className="bi bi-twitter text-white text-xl"></i>
                </a>
                <a href="https://instagram.com/harshthakur7862" className="bg-slate-700 p-3 rounded-full hover:bg-purple-600 transition duration-300">
                  <i className="bi bi-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105"
              >
                <i className="bi bi-send mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;