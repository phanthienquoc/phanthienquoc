import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Briefcase,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// Import data and components
import { personalInfo, experiences, education, skills, projects, certifications } from './data/profileData';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Certifications', 'Contact'];
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">{personalInfo.name}</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 relative z-50 mobile-menu-container"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-slate-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-slate-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-slate-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out mobile-menu-container ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top: '64px' }}
          >
            <div
              className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-6 pt-8  bg-white">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 ${
                        activeSection === item.toLowerCase()
                          ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                
                {/* Contact info in mobile menu */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Mail size={20} />
                      <span className="text-sm">{personalInfo.email}</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-6">
                {personalInfo.title}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-500 mb-6">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <p className="text-lg text-slate-500 mb-8 max-w-2xl">
                {personalInfo.summary}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600" size={24} />
                    <span className="text-slate-700">Frontend Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="text-green-600" size={24} />
                    <span className="text-slate-700">Full-stack Capable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-purple-600" size={24} />
                    <span className="text-slate-700">Modern Web Technologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-orange-600" size={24} />
                    <span className="text-slate-700">Professional Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {personalInfo.summary}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {personalInfo.sortDescription}
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {personalInfo.sortDescription_2}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{experiences.length}+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working setup"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Education Section */}
      <EducationSection education={education} />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of recent projects demonstrating my skills in modern web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My professional journey in web development, working with various technologies and teams.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar size={18} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-slate-600 mb-4">{exp.company}</h4>
                    {exp.location && (
                      <div className="flex items-center space-x-1 text-sm text-slate-500 mb-3">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-slate-800">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-slate-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection certifications={certifications} />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always interested in new opportunities and exciting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-blue-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors"
                  >
                    <Linkedin size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2024 {personalInfo.name}. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;