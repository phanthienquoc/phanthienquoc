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

const skills = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'Next.js', level: 90, color: 'bg-gray-800' },
  { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
  { name: 'Node.js', level: 85, color: 'bg-green-600' },
  { name: 'MongoDB', level: 80, color: 'bg-green-500' },
  { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
  { name: 'Docker', level: 75, color: 'bg-blue-400' },
  { name: 'AWS', level: 78, color: 'bg-orange-500' },
  { name: 'Git', level: 92, color: 'bg-red-500' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    github: 'https://github.com/example/ecommerce',
    live: 'https://ecommerce-demo.example.com',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
    tech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'AWS'],
    github: 'https://github.com/example/taskmanager',
    live: 'https://taskmanager-demo.example.com',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Weather Analytics Dashboard',
    description: 'Real-time weather data visualization platform with predictive analytics and customizable reporting features.',
    tech: ['React', 'D3.js', 'Node.js', 'Redis', 'Chart.js'],
    github: 'https://github.com/example/weather-dashboard',
    live: 'https://weather-analytics.example.com',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Social Media Aggregator',
    description: 'Multi-platform social media management tool with scheduled posting, analytics, and engagement tracking.',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/example/social-aggregator',
    live: 'https://social-manager.example.com',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Led development of enterprise web applications using React and Next.js. Architected scalable frontend solutions serving 100K+ users. Mentored junior developers and established best practices for code quality and performance.',
    achievements: ['Improved app performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
  },
  {
    company: 'Digital Innovations Ltd.',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with UX designers to create responsive, user-friendly interfaces. Implemented RESTful APIs and optimized database performance.',
    achievements: ['Built 3 major client applications', 'Reduced API response time by 60%', 'Introduced automated testing']
  },
  {
    company: 'StartupHub',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Created responsive web applications for various startup clients. Focused on modern JavaScript frameworks and mobile-first design principles. Worked in agile environment with rapid prototyping and iteration.',
    achievements: ['Delivered 10+ projects on time', 'Achieved 98% client satisfaction', 'Implemented modern dev tools']
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Alex Johnson</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-4 py-2 space-y-1">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block p-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mb-8">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Alex Johnson"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Alex Johnson
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-6">
                Frontend Developer | Full-Stack Capable
              </p>
              <p className="text-lg text-slate-500 mb-8 max-w-2xl">
                Passionate about creating exceptional digital experiences with modern web technologies. 
                Specialized in React ecosystem with full-stack development capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-teal-600" size={24} />
                    <span className="text-slate-700">5+ years of experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="text-blue-600" size={24} />
                    <span className="text-slate-700">Full-stack development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-green-600" size={24} />
                    <span className="text-slate-700">50+ projects delivered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-purple-600" size={24} />
                    <span className="text-slate-700">Enterprise solutions</span>
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
              I'm a passionate frontend developer with full-stack capabilities, dedicated to creating 
              beautiful and functional web applications that solve real-world problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in building modern, 
                responsive applications using React, Next.js, and the latest web technologies. My 
                expertise extends to backend development with Node.js, database design, and cloud deployment.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I'm passionate about writing clean, maintainable code and staying updated with the latest 
                industry trends. I enjoy collaborating with cross-functional teams and mentoring junior 
                developers to help them grow in their careers.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Core Skills</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of recent projects demonstrating my skills in full-stack development and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                        className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
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
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-teal-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar size={18} className="text-teal-600" />
                      <span className="text-sm font-medium text-teal-600">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-slate-600 mb-4">{exp.company}</h4>
                    <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-slate-800">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-slate-600 flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
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
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a href="mailto:alex.johnson@example.com" className="text-white hover:text-teal-400 transition-colors">
                      alex.johnson@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-teal-400 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/alexjohnson"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/alexjohnson"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
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
              © 2024 Alex Johnson. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;