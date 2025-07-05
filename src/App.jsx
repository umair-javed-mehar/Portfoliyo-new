import React, { useState, useEffect } from 'react';
import MyImage from './assets/m.png'; 
import Education from './Education'; // Assuming you have an Education component
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Globe,
  ChevronDown,
  Menu,
  X,
  Send,
  Download,
  Star,
  Calendar,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to the backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 65, icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 52, icon: '🟨' },
      // { name: 'TypeScript', level: 88, icon: '🔷' },
      { name: 'HTML5/CSS3', level: 75, icon: '🌐' },
      { name: 'Tailwind CSS', level: 60, icon: '🎨' },
      // { name: 'Next.js', level: 85, icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', level: 30, icon: '🟢' },
      { name: 'Express.js', level: 32, icon: '🚀' },
      { name: 'MongoDB', level: 58, icon: '🍃' },
      { name: 'Mongoose', level: 45, icon: '📊' },
      { name: 'REST APIs', level: 33, icon: '🔗' },
      // { name: 'GraphQL', level: 80, icon: '🎯' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 40, icon: '🐙' },
      // { name: 'Docker', level: 82, icon: '🐳' },
      // { name: 'AWS', level: 78, icon: '☁️' },
      { name: 'Postman', level: 68, icon: '📮' },
      { name: 'VS Code', level: 75, icon: '💻' },
      { name: 'Webpack', level: 30, icon: '📦' }
    ]
  };

  const projects = [
    {
      title: 'Food Ordering Website',
      description: 'Full-stack MERN application with user authentication, payment integration, and admin dashboard.',
      image: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/umair-javed-mehar/Food-ordering-website',
      demo: 'https://food-ordering-website-ten-eta.vercel.app',
      featured: true
    },
    {
      title: 'Mini E-Commerce Website using API',
      description: 'Dynamic Mini E-Commerce Website with API Integration.',
      image: 'https://images.unsplash.com/photo-1674027392851-7b34f21b07ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D',
      tech: ['React', 'Express', 'MongoDB', 'Api', ],
      github: 'https://github.com/umair-javed-mehar/Mini-Ecommerce-Mern-stack',
      demo: 'https://api-create-product-javascript-xluy.vercel.a',
      featured: true
    },
    {
      title: 'MERN Stack To-Do Application',
      description: 'This project is a full-featured To-Do App built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and manage their daily tasks with a clean, responsive interface.',
      image: 'https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHx8MA%3D%3D',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/umair-javed-mehar/Todo-Mern-stack',
      demo: 'https://todo-mern-stack-delta.vercel.app',
      featured: false
    },
    {
      title: 'Dynamic Form Builder using JavaScript ',
      description: 'This project is a fully functional Dynamic Form Builder built using HTML, CSS (Tailwind), and JavaScript. It allows users to create, edit, and manage custom form fields such as text inputs, dropdowns, and multiple-choice questions in real-time. ',
      image: 'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D',
      tech: ['Html','Css', 'Javscript'],
      github: 'https://github.com/umair-javed-mehar/Dynamic-Form-React.js',
      demo: 'https://dynamic-form-creater-java-script.vercel.app',
      featured: false
    }
  ];

  const experience = [
    {
      title: ' MERN Stack Developer',
      company: 'Genius Mind Zone',
      period: '2025 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Mentored junior developers and established best practices.'
    },
    {
      title: 'Frontend Deveolper (React.js)',
      company: 'Digital Innovations Inc.',
      period: '2023 - 2024',
      description: 'Built and maintained multiple client projects using MERN stack. Improved application performance by 40%.'
    },
    {
      title: 'Data Entry (part-time)',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'We are looking for a detail-oriented and efficient Part-Time Data Entry Clerk to input, update, and maintain information in our company databases and systems. The ideal candidate should have fast typing skills, excellent attention to detail, and strong organizational abilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Umair Javed
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="min-h-screen flex items-center justify-center px-4">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full gap-10">
    
    {/* Left Side – Image */}
<div className="flex-shrink-0">
  <img
    src={MyImage}
    alt="Umair Javed"
    className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-400 shadow-2xl"
  />
</div>


    {/* Right Side – Content */}
    <div className="text-center md:text-left max-w-2xl">
<h1 className="text-5xl md:text-7xl font-bold mb-6 overflow-hidden whitespace-nowrap border-r-4 border-purple-400 animate-typing">
  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Umair Javed
  </span>
</h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-6 opacity-0 animate-fadeIn animation-delay-500">
  MERN Stack Developer
</p>

    <p className="text-lg text-gray-400 mb-8 opacity-0 animate-fadeIn animation-delay-[1s]">
  Crafting scalable web applications with React, Node.js, Express, and MongoDB.
  Passionate about clean code, optimal performance, and exceptional user experiences.
</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="border-2 border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>

      <div className="flex space-x-6 justify-center md:justify-start">
      <a
  href="https://github.com/umair-javed-mehar"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Github size={24} />
</a>
        <a
  href="https://www.linkedin.com/in/umair-javed-iqbal-7b2033311/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Linkedin size={24} />
</a>
        <a
  href="mailto:javedumair875@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Umair,"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Mail size={24} />
</a>

      </div>
    </div>
  </div>

  {/* Down Arrow */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown size={24} className="text-purple-400" />
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                <User className="inline mr-3" size={28} />
                Professional Journey
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 1 years of experience in Mern Stack development, I specialize in building 
                robust, scalable web applications using the MERN stack. My passion lies in creating 
                seamless user experiences backed by efficient, maintainable code.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I've successfully delivered 10+ projects ranging from e-commerce platforms to 
                enterprise-level applications, always focusing on performance optimization, 
                security best practices, and modern development methodologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Code className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Frontend Excellence</h4>
                <p className="text-gray-300">
                  Creating responsive, interactive user interfaces with React.js, modern CSS, 
                  and optimal performance techniques.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Server className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Backend Mastery</h4>
                <p className="text-gray-300">
                  Building scalable server-side applications with Node.js, Express.js, 
                  and implementing secure API architectures.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Database className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-3">Database Design</h4>
                <p className="text-gray-300">
                  Designing efficient database schemas with MongoDB and implementing 
                  data optimization strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 capitalize text-purple-300 text-center">
                  {category === 'frontend' && <Globe className="inline mr-3" size={24} />}
                  {category === 'backend' && <Server className="inline mr-3" size={24} />}
                  {category === 'tools' && <Code className="inline mr-3" size={24} />}
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">
                          <span className="mr-2">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${project.featured ? 'md:col-span-1' : ''}`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <Star className="inline w-4 h-4 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700 px-3 py-1 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">
                      <Briefcase className="inline mr-3" size={20} />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar className="mr-2" size={16} />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* {education} */}



<Education/>







      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer for your team or want to discuss 
                a project idea, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-4 text-purple-400" size={20} />
                  javedumair875@email.com
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-4 text-purple-400" size={20} />
                  +92 348 7264550
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-4 text-purple-400" size={20} />
                  Faisalabad, Punjab, Pakistan
                </div>
              </div>
              
        <div className="mt-8">
  <a href="Umair Javed CV Resume (1).pdf (1).pdf" download="Umair Javed CV Resume.pdf">
    <button className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
      <Download className="mr-2" size={18} />
      Download Resume
    </button>
  </a>
</div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Umair Javed. Built with React, Tailwind CSS, and passion for great code.
          </p>
          <div className="flex justify-center space-x-6">
        <a
  href="https://github.com/umair-javed-mehar"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Github size={24} />
</a>

           <a
  href="https://www.linkedin.com/in/umair-javed-iqbal-7b2033311/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Linkedin size={24} />
</a>

            <a
  href="mailto:javedumair875@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Umair,"
  className="text-gray-400 hover:text-purple-400 transition-colors"
>
  <Mail size={24} />
</a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;