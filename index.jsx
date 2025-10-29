import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Globe, Cpu, Users, Briefcase, Mail, Phone, MapPin, Download, Sparkles, Rocket, Target, Award, ChevronRight, Github, Linkedin, Twitter, Search, Zap, Layout, Palette, Database, Shield } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('id');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = {
    home: { id: 'Home', en: 'Home' },
    services: { id: 'Layanan', en: 'Services' },
    portfolio: { id: 'Portofolio', en: 'Portfolio' },
    team: { id: 'Tim', en: 'Team' },
    builder: { id: 'Web Builder', en: 'Web Builder' },
    about: { id: 'Tentang', en: 'About' },
    contact: { id: 'Kontak', en: 'Contact' }
  };

  const t = (id, en) => currentLang === 'id' ? id : en;

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-slate-900/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigateTo('home')} className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Menuju Startup
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(pages).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => navigateTo(key)}
                  className={`text-sm font-medium transition-colors ${currentPage === key ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-300'}`}
                >
                  {currentLang === 'id' ? value.id : value.en}
                </button>
              ))}
              <button
                onClick={() => setCurrentLang(currentLang === 'id' ? 'en' : 'id')}
                className="px-4 py-2 text-sm font-semibold bg-slate-800 hover:bg-indigo-600 rounded-lg transition-all"
              >
                {currentLang === 'id' ? 'EN' : 'ID'}
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(pages).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => navigateTo(key)}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${currentPage === key ? 'bg-indigo-600' : 'hover:bg-slate-800'}`}
                >
                  {currentLang === 'id' ? value.id : value.en}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} t={t} />}
        {currentPage === 'services' && <ServicesPage t={t} />}
        {currentPage === 'portfolio' && <PortfolioPage t={t} />}
        {currentPage === 'team' && <TeamPage t={t} />}
        {currentPage === 'builder' && <BuilderPage t={t} />}
        {currentPage === 'about' && <AboutPage t={t} />}
        {currentPage === 'contact' && <ContactPage t={t} />}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Menuju Startup
              </h3>
              <p className="text-slate-400 text-sm">
                {t('Partner teknologi terpercaya untuk transformasi digital bisnis Anda.', 'Your trusted technology partner for digital transformation.')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Navigasi', 'Navigation')}</h4>
              <div className="space-y-2">
                {Object.entries(pages).slice(0, 4).map(([key, value]) => (
                  <button key={key} onClick={() => navigateTo(key)} className="block text-slate-400 hover:text-indigo-400 text-sm">
                    {currentLang === 'id' ? value.id : value.en}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Layanan', 'Services')}</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Web Development</p>
                <p>Mobile Apps</p>
                <p>UI/UX Design</p>
                <p>IT Consulting</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Ikuti Kami', 'Follow Us')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-indigo-400"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-400"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-400"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 PT Menuju Startup. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ navigateTo, t }) => {
  const services = [
    { icon: <Globe className="w-8 h-8" />, title: 'Web Development', desc: t('Website responsif dan modern', 'Responsive and modern websites') },
    { icon: <Smartphone className="w-8 h-8" />, title: 'Mobile Apps', desc: t('Aplikasi iOS & Android', 'iOS & Android applications') },
    { icon: <Palette className="w-8 h-8" />, title: 'UI/UX Design', desc: t('Desain intuitif dan menarik', 'Intuitive and attractive design') },
    { icon: <Database className="w-8 h-8" />, title: 'Backend Systems', desc: t('Sistem backend scalable', 'Scalable backend systems') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-950 to-purple-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">{t('Transformasi Digital Dimulai Di Sini', 'Digital Transformation Starts Here')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            {t('Membangun Masa Depan', 'Building The Future')}
            <br />
            {t('Digital Anda', 'Of Your Digital')}
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {t('Partner teknologi yang siap membantu Anda bertransformasi melalui pengembangan website, aplikasi mobile, dan solusi IT kustom.', 'Technology partner ready to help you transform through website development, mobile applications, and custom IT solutions.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigateTo('contact')} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>{t('Mulai Proyek', 'Start Project')}</span>
              <ChevronRight size={20} />
            </button>
            <button onClick={() => navigateTo('builder')} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 border border-slate-700">
              <Zap size={20} />
              <span>{t('Coba Web Builder AI', 'Try AI Web Builder')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('Layanan Kami', 'Our Services')}</h2>
            <p className="text-slate-400">{t('Solusi teknologi terbaik untuk bisnis Anda', 'Best technology solutions for your business')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all hover:transform hover:scale-105 cursor-pointer">
                <div className="text-indigo-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigateTo('services')} className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center mx-auto space-x-2">
              <span>{t('Lihat Semua Layanan', 'View All Services')}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: t('Proyek Selesai', 'Projects Completed') },
              { value: '30+', label: t('Klien Puas', 'Happy Clients') },
              { value: '6', label: t('Founders', 'Founders') },
              { value: '3+', label: t('Tahun Pengalaman', 'Years Experience') }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ t }) => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      desc: t('Pembuatan website profesional dengan teknologi terkini seperti React, Next.js, dan Node.js. Dari company profile hingga aplikasi web kompleks.', 'Professional website development with latest technologies like React, Next.js, and Node.js. From company profiles to complex web applications.'),
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable']
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      desc: t('Aplikasi mobile native dan cross-platform untuk iOS dan Android menggunakan Flutter dan React Native.', 'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.'),
      features: ['iOS & Android', 'Cross-platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      desc: t('Desain interface yang intuitif dan user-friendly dengan pendekatan user-centered design dan prototyping.', 'Intuitive and user-friendly interface design with user-centered design approach and prototyping.'),
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Backend Development',
      desc: t('Pengembangan sistem backend yang robust, scalable, dan secure dengan berbagai teknologi database dan API.', 'Robust, scalable, and secure backend system development with various database technologies and APIs.'),
      features: ['RESTful API', 'Database Design', 'Cloud Integration', 'Microservices']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      desc: t('Layanan keamanan aplikasi dan infrastruktur untuk melindungi data dan sistem Anda dari ancaman cyber.', 'Application and infrastructure security services to protect your data and systems from cyber threats.'),
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'IT Consulting',
      desc: t('Konsultasi strategi teknologi untuk mengoptimalkan proses bisnis dan meningkatkan efisiensi operasional.', 'Technology strategy consulting to optimize business processes and improve operational efficiency.'),
      features: ['Digital Strategy', 'Tech Stack Selection', 'Architecture Design', 'Process Optimization']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Layanan Kami', 'Our Services')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Solusi teknologi lengkap untuk mengembangkan bisnis Anda ke level berikutnya', 'Complete technology solutions to take your business to the next level')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all hover:transform hover:scale-105">
              <div className="text-indigo-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
              <div className="space-y-2">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('Punya Proyek dalam Pikiran?', 'Have a Project in Mind?')}</h2>
          <p className="text-lg mb-8 opacity-90">{t('Mari diskusikan bagaimana kami dapat membantu mewujudkan ide Anda', "Let's discuss how we can help bring your ideas to life")}</p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition-all">
            {t('Hubungi Kami', 'Contact Us')}
          </button>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = ({ t }) => {
  const projects = [
    {
      title: 'Cinelux',
      category: 'Mobile App',
      desc: t('Aplikasi booking tiket bioskop dengan Flutter', 'Cinema ticket booking app with Flutter'),
      tech: ['Flutter', 'Firebase', 'Payment Gateway'],
      image: '🎬'
    },
    {
      title: 'LaundryPro',
      category: 'Web & Mobile',
      desc: t('Sistem manajemen laundry lengkap', 'Complete laundry management system'),
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '👕'
    },
    {
      title: 'Rumaia',
      category: 'Web Platform',
      desc: t('Platform properti berbasis blockchain', 'Blockchain-based property platform'),
      tech: ['Next.js', 'Blockchain', 'Smart Contracts'],
      image: '🏠'
    },
    {
      title: 'FoodDelivery',
      category: 'Mobile App',
      desc: t('Aplikasi delivery makanan real-time', 'Real-time food delivery app'),
      tech: ['React Native', 'Google Maps', 'Firebase'],
      image: '🍔'
    },
    {
      title: 'EduLearn',
      category: 'Web Platform',
      desc: t('Platform pembelajaran online interaktif', 'Interactive online learning platform'),
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      image: '📚'
    },
    {
      title: 'HealthCare',
      category: 'Mobile App',
      desc: t('Aplikasi konsultasi kesehatan online', 'Online health consultation app'),
      tech: ['Flutter', 'WebRTC', 'Node.js'],
      image: '⚕️'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Portofolio Kami', 'Our Portfolio')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Proyek-proyek yang telah kami kerjakan dengan dedikasi dan keahlian tinggi', 'Projects we have completed with dedication and high expertise')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:transform hover:scale-105 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <div className="text-indigo-400 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamPage = ({ t }) => {
  const founders = [
    {
      name: 'Arif Rahman',
      role: 'CEO & Lead Developer',
      desc: t('Full-stack developer dengan 5+ tahun pengalaman. Spesialis dalam React, Node.js, dan cloud architecture.', 'Full-stack developer with 5+ years experience. Specialist in React, Node.js, and cloud architecture.'),
      skills: ['React', 'Node.js', 'AWS', 'System Design'],
      image: '👨‍💻',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Siti Nurhaliza',
      role: 'CTO & Backend Architect',
      desc: t('Expert dalam microservices dan database optimization. Passionate tentang clean code dan scalable systems.', 'Expert in microservices and database optimization. Passionate about clean code and scalable systems.'),
      skills: ['Python', 'Kubernetes', 'PostgreSQL', 'Redis'],
      image: '👩‍💻',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Budi Santoso',
      role: 'Head of Design',
      desc: t('UI/UX designer dengan portofolio internasional. Fokus pada user-centered design dan accessibility.', 'UI/UX designer with international portfolio. Focus on user-centered design and accessibility.'),
      skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'],
      image: '🎨',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dewi Lestari',
      role: 'Lead Mobile Developer',
      desc: t('Mobile development expert dengan spesialisasi Flutter dan React Native. Telah membuat 20+ aplikasi mobile.', 'Mobile development expert specializing in Flutter and React Native. Has created 20+ mobile apps.'),
      skills: ['Flutter', 'React Native', 'iOS', 'Android'],
      image: '📱',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Eko Prasetyo',
      role: 'DevOps Engineer',
      desc: t('DevOps specialist dengan expertise dalam CI/CD, cloud infrastructure, dan automation.', 'DevOps specialist with expertise in CI/CD, cloud infrastructure, and automation.'),
      skills: ['Docker', 'Jenkins', 'AWS', 'Terraform'],
      image: '⚙️',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Rina Wijaya',
      role: 'Project Manager',
      desc: t('Experienced project manager dengan track record mengelola proyek kompleks dari berbagai industri.', 'Experienced project manager with track record of managing complex projects from various industries.'),
      skills: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management'],
      image: '📊',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Tim Founders Kami', 'Our Founding Team')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Bertemu dengan para pendiri yang berdedikasi untuk menghadirkan solusi teknologi terbaik', 'Meet the founders dedicated to delivering the best technology solutions')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, i) => (
            <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500 transition-all hover:transform hover:scale-105">
              <div className="text-7xl mb-6 text-center">{founder.image}</div>
              <h3 className="text-2xl font-bold mb-1 text-center">{founder.name}</h3>
              <p className="text-indigo-400 text-center mb-4 font-semibold">{founder.role}</p>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{founder.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4 pt-4 border-t border-slate-700">
                <a href={founder.social.github} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={founder.social.linkedin} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={founder.social.twitter} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('Ingin Bergabung dengan Tim Kami?', 'Want to Join Our Team?')}</h2>
          <p className="text-lg mb-8 opacity-90">{t('Kami selalu mencari talenta terbaik untuk bergabung dalam misi kami', 'We are always looking for the best talents to join our mission')}</p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition-all">
            {t('Lihat Posisi Tersedia', 'View Open Positions')}
          </button>
        </div>
      </div>
    </div>
  );
};

const BuilderPage = ({ t }) => {
  const [builderStep, setBuilderStep] = useState('input');
  const [websiteType, setWebsiteType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [colorScheme, setColorScheme] = useState('blue');
  const [features, setFeatures] = useState([]);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const websiteTypes = [
    { id: 'landing', name: 'Landing Page', icon: '🚀' },
    { id: 'portfolio', name: 'Portfolio', icon: '💼' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛒' },
    { id: 'blog', name: 'Blog', icon: '📝' },
    { id: 'corporate', name: 'Corporate', icon: '🏢' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️' }
  ];

  const colorSchemes = [
    { id: 'blue', colors: ['#3B82F6', '#1E40AF'], name: 'Blue' },
    { id: 'purple', colors: ['#8B5CF6', '#6D28D9'], name: 'Purple' },
    { id: 'green', colors: ['#10B981', '#047857'], name: 'Green' },
    { id: 'red', colors: ['#EF4444', '#B91C1C'], name: 'Red' },
    { id: 'orange', colors: ['#F59E0B', '#D97706'], name: 'Orange' },
    { id: 'pink', colors: ['#EC4899', '#BE185D'], name: 'Pink' }
  ];

  const featureOptions = [
    'Contact Form', 'Gallery', 'Testimonials', 'Team Section', 
    'Services', 'Pricing Table', 'FAQ', 'Newsletter', 'Blog', 'Chat Widget'
  ];

  const generateWithAI = async () => {
    setIsGenerating(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const suggestions = [
      `Based on your ${websiteType} website, I recommend:\n• Modern hero section with CTA button\n• Responsive navigation with mobile menu\n• Feature cards with icons\n• Footer with contact info`,
      
      `For ${companyName}, consider:\n• Professional color palette\n• High-quality images\n• Social proof section\n• Clear call-to-actions`,
      
      `AI Suggestion for your ${websiteType}:\n• Use ${colorScheme} theme for trust\n• Add ${features.join(', ')} sections\n• Optimize for mobile-first\n• Include SEO meta tags`
    ];
    
    setAiSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
    setIsGenerating(false);
  };

  const generateWebsite = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${companyName || 'My Website'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-${colorScheme}-600">${companyName}</h1>
                <div class="space-x-6">
                    <a href="#" class="text-gray-700 hover:text-${colorScheme}-600">Home</a>
                    <a href="#" class="text-gray-700 hover:text-${colorScheme}-600">About</a>
                    <a href="#" class="text-gray-700 hover:text-${colorScheme}-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="bg-gradient-to-r from-${colorScheme}-500 to-${colorScheme}-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-5xl font-bold mb-6">Welcome to ${companyName}</h2>
            <p class="text-xl mb-8">Your trusted partner for ${websiteType} solutions</p>
            <button class="bg-white text-${colorScheme}-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Get Started
            </button>
        </div>
    </section>

    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h3 class="text-4xl font-bold text-center mb-12">Our Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${features.slice(0, 3).map(feature => `
                <div class="bg-white p-8 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-${colorScheme}-600">${feature}</h4>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 ${companyName}. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
      
      setGeneratedCode(code);
      setBuilderStep('preview');
      setIsGenerating(false);
    }, 3000);
  };

  const downloadWebsite = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName.replace(/\s+/g, '-').toLowerCase() || 'website'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">{t('Powered by AI', 'Powered by AI')}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Web Builder AI', 'AI Web Builder')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Buat website impian Anda dalam hitungan menit dengan bantuan AI', 'Create your dream website in minutes with AI assistance')}
          </p>
        </div>

        {builderStep === 'input' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">{t('Pilih Jenis Website', 'Choose Website Type')}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {websiteTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setWebsiteType(type.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        websiteType === type.id 
                          ? 'border-indigo-500 bg-indigo-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-4xl mb-2">{type.icon}</div>
                      <div className="font-semibold">{type.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">{t('Nama Perusahaan/Website', 'Company/Website Name')}</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t('Masukkan nama...', 'Enter name...')}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">{t('Pilih Skema Warna', 'Choose Color Scheme')}</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {colorSchemes.map(scheme => (
                    <button
                      key={scheme.id}
                      onClick={() => setColorScheme(scheme.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        colorScheme === scheme.id 
                          ? 'border-indigo-500' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex space-x-1 mb-2">
                        {scheme.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-full h-8 rounded"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-sm font-semibold">{scheme.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">{t('Pilih Fitur (Opsional)', 'Choose Features (Optional)')}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {featureOptions.map(feature => (
                    <button
                      key={feature}
                      onClick={() => {
                        setFeatures(prev => 
                          prev.includes(feature) 
                            ? prev.filter(f => f !== feature)
                            : [...prev, feature]
                        );
                      }}
                      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                        features.includes(feature)
                          ? 'border-indigo-500 bg-indigo-500/20'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <button
                  onClick={generateWithAI}
                  disabled={!websiteType || isGenerating}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Sparkles size={20} />
                  <span>{isGenerating ? t('Menganalisis...', 'Analyzing...') : t('Dapatkan Saran AI', 'Get AI Suggestions')}</span>
                </button>
                
                {aiSuggestion && (
                  <div className="mt-4 p-4 bg-slate-900 rounded-lg border border-indigo-500/30">
                    <div className="flex items-start space-x-2">
                      <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <div className="text-sm text-slate-300 whitespace-pre-line">{aiSuggestion}</div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={generateWebsite}
                disabled={!websiteType || !companyName || isGenerating}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Rocket size={20} />
                <span>{isGenerating ? t('Membuat Website...', 'Creating Website...') : t('Generate Website', 'Generate Website')}</span>
              </button>
            </div>
          </div>
        )}

        {builderStep === 'preview' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{t('Preview & Download', 'Preview & Download')}</h2>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setBuilderStep('input')}
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
                  >
                    {t('Edit', 'Edit')}
                  </button>
                  <button
                    onClick={downloadWebsite}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                  >
                    <Download size={20} />
                    <span>{t('Download HTML', 'Download HTML')}</span>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-slate-900 rounded-lg p-4 max-h-96 overflow-auto">
                  <pre className="text-sm text-green-400">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-slate-700 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-slate-300">Preview</div>
                </div>
                <iframe
                  srcDoc={generatedCode}
                  className="w-full h-[600px] bg-white"
                  title="Website Preview"
                />
              </div>

              <div className="mt-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
                <div className="flex items-start space-x-2">
                  <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                  <div className="text-sm text-slate-300">
                    {t('Website Anda siap! Download file HTML dan upload ke hosting Anda, atau hubungi kami untuk deployment profesional.', 'Your website is ready! Download the HTML file and upload to your hosting, or contact us for professional deployment.')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutPage = ({ t }) => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: t('Fokus pada Kualitas', 'Focus on Quality'),
      desc: t('Kami berkomitmen untuk memberikan solusi teknologi berkualitas tinggi yang memenuhi standar industri.', 'We are committed to delivering high-quality technology solutions that meet industry standards.')
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('Kolaborasi Tim', 'Team Collaboration'),
      desc: t('Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama.', 'Working together with clients as partners to achieve common goals.')
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: t('Inovasi Berkelanjutan', 'Continuous Innovation'),
      desc: t('Selalu mengikuti perkembangan teknologi terbaru dan menerapkannya dalam solusi kami.', 'Always following the latest technology developments and applying them in our solutions.')
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t('Kepuasan Klien', 'Client Satisfaction'),
      desc: t('Kepuasan klien adalah prioritas utama kami dalam setiap proyek yang dikerjakan.', 'Client satisfaction is our top priority in every project we undertake.')
    }
  ];

  const milestones = [
    { year: '2025', event: t('PT Menuju Startup didirikan oleh 6 founders', 'PT Menuju Startup founded by 6 founders') },
    { year: '2025 Q2', event: t('Meluncurkan 10 proyek pertama', 'Launched first 10 projects') },
    { year: '2025 Q3', event: t('Membangun tim 20+ profesional', 'Built team of 20+ professionals') },
    { year: '2025 Q4', event: t('Ekspansi ke layanan AI & Machine Learning', 'Expansion to AI & Machine Learning services') }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Tentang Kami', 'About Us')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Cerita perjalanan kami dalam membangun solusi teknologi terbaik untuk bisnis Indonesia', 'Our journey story in building the best technology solutions for Indonesian businesses')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="text-indigo-400 mb-4">
              <Target size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('Visi Kami', 'Our Vision')}</h2>
            <p className="text-slate-300 leading-relaxed">
              {t('Menjadi perusahaan teknologi terdepan di Indonesia yang menghadirkan solusi digital inovatif dan berkualitas tinggi, memberdayakan bisnis untuk bertransformasi dan berkembang di era digital.', 'To become the leading technology company in Indonesia that delivers innovative and high-quality digital solutions, empowering businesses to transform and thrive in the digital era.')}
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="text-purple-400 mb-4">
              <Rocket size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('Misi Kami', 'Our Mission')}</h2>
            <p className="text-slate-300 leading-relaxed">
              {t('Memberikan solusi teknologi yang dapat diakses semua kalangan, mendukung UMKM dan perusahaan besar dengan layanan profesional, serta terus berinovasi menggunakan teknologi terkini.', 'Provide technology solutions accessible to all, support SMEs and large companies with professional services, and continuously innovate using the latest technology.')}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">{t('Nilai-Nilai Kami', 'Our Values')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center hover:border-indigo-500 transition-all">
                <div className="text-indigo-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">{t('Perjalanan Kami', 'Our Journey')}</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex items-start space-x-4 mb-8">
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                  {milestone.year}
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex-1">
                  <p className="text-slate-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('Mari Berkembang Bersama', "Let's Grow Together")}</h2>
          <p className="text-lg mb-8 opacity-90">{t('Hubungi kami dan mulai perjalanan digital Anda hari ini', 'Contact us and start your digital journey today')}</p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition-all">
            {t('Hubungi Kami', 'Contact Us')}
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@menujustartup.com',
      link: 'mailto:hello@menujustartup.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('Telepon', 'Phone'),
      value: '+62 812-3456-7890',
      link: 'tel:+628123456789'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('Alamat', 'Address'),
      value: t('Jakarta Barat, Jakarta, Indonesia', 'West Jakarta, Jakarta, Indonesia'),
      link: null
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('Hubungi Kami', 'Contact Us')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('Punya proyek dalam pikiran? Mari diskusikan bagaimana kami dapat membantu mewujudkannya', "Have a project in mind? Let's discuss how we can help bring it to life")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">{t('Kirim Pesan', 'Send Message')}</h2>
            
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {t('Pesan Terkirim!', 'Message Sent!')}
                </h3>
                <p className="text-slate-300">
                  {t('Terima kasih! Kami akan segera menghubungi Anda.', 'Thank you! We will contact you soon.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Nama Lengkap', 'Full Name')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                    placeholder={t('Masukkan nama Anda', 'Enter your name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Nomor Telepon', 'Phone Number')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Nama Perusahaan', 'Company Name')}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                    placeholder={t('Opsional', 'Optional')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Layanan yang Dibutuhkan', 'Service Needed')}</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">{t('Pilih layanan...', 'Select service...')}</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="backend">Backend Development</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">{t('Lainnya', 'Other')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Pesan', 'Message')}</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
                    placeholder={t('Ceritakan tentang proyek Anda...', 'Tell us about your project...')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>{t('Kirim Pesan', 'Send Message')}</span>
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-8">
              <h2 className="text-2xl font-bold mb-6">{t('Informasi Kontak', 'Contact Information')}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="text-indigo-400 mt-1">{info.icon}</div>
                    <div>
                      <div className="font-semibold mb-1">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="text-slate-400 hover:text-indigo-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-400">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">{t('Jam Operasional', 'Business Hours')}</h2>
              <div className="space-y-3 text-slate-400">
                <div className="flex justify-between">
                  <span>{t('Senin - Jumat', 'Monday - Friday')}</span>
                  <span className="font-semibold text-slate-300">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('Sabtu', 'Saturday')}</span>
                  <span className="font-semibold text-slate-300">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('Minggu', 'Sunday')}</span>
                  <span className="font-semibold text-red-400">{t('Tutup', 'Closed')}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  {t('Untuk kebutuhan urgent, silakan hubungi nomor telepon kami.', 'For urgent needs, please call our phone number.')}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('Konsultasi Gratis!', 'Free Consultation!')}</h3>
              <p className="mb-6 opacity-90">
                {t('Dapatkan konsultasi gratis untuk proyek Anda. Kami siap membantu mewujudkan ide digital Anda.', 'Get free consultation for your project. We are ready to help bring your digital ideas to life.')}
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Sparkles size={16} />
                <span>{t('Respon dalam 24 jam', 'Response within 24 hours')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">{t('Lokasi Kami', 'Our Location')}</h2>
            <p className="text-center text-slate-400 mb-8">
              {t('Kunjungi kantor kami atau hubungi untuk membuat janji temu', 'Visit our office or contact us to make an appointment')}
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={64} className="text-indigo-400 mx-auto mb-4" />
              <p className="text-xl font-semibold">{t('Jakarta Barat, Jakarta', 'West Jakarta, Jakarta')}</p>
              <p className="text-slate-400 mt-2">Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">{t('Pertanyaan Umum', 'Frequently Asked Questions')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: t('Berapa lama waktu pengerjaan proyek?', 'How long does project development take?'),
                a: t('Waktu pengerjaan bervariasi tergantung kompleksitas proyek, mulai dari 2 minggu hingga 3 bulan.', 'Development time varies depending on project complexity, from 2 weeks to 3 months.')
              },
              {
                q: t('Apakah ada garansi untuk proyek yang dikerjakan?', 'Is there a guarantee for completed projects?'),
                a: t('Ya, kami memberikan garansi maintenance 3 bulan untuk semua proyek yang kami kerjakan.', 'Yes, we provide 3 months maintenance guarantee for all projects we complete.')
              },
              {
                q: t('Apakah bisa konsultasi dulu sebelum mulai proyek?', 'Can I consult before starting a project?'),
                a: t('Tentu! Kami menyediakan konsultasi gratis untuk membahas kebutuhan dan solusi terbaik untuk bisnis Anda.', 'Of course! We provide free consultation to discuss needs and best solutions for your business.')
              },
              {
                q: t('Metode pembayaran apa yang tersedia?', 'What payment methods are available?'),
                a: t('Kami menerima transfer bank, e-wallet, dan cicilan untuk proyek tertentu. Hubungi kami untuk detail lebih lanjut.', 'We accept bank transfer, e-wallet, and installments for certain projects. Contact us for more details.')
              }
            ].map((faq, i) => (
              <details key={i} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-slate-700/50 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-slate-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;