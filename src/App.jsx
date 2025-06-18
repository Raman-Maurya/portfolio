import { useState, useEffect } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Hackathons from './components/Hackathons'
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const handleScroll = () => {
    const sections = ['home', 'skills', 'projects', 'experience', 'education', 'hackathons'];
    let current = 'home';
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200) {
          current = section;
        }
      }
    });
    
    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }} className="fixed top-0 w-full shadow-md z-50 transition-colors duration-300">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 py-3 flex items-center justify-between">
          <a href="#home" style={{ color: 'var(--primary)' }} className="text-2xl font-bold">Raman.dev</a>
          
          <div className="hidden md:flex space-x-6 items-center">
            {['home', 'skills', 'projects', 'experience', 'education', 'hackathons'].map((section) => (
              <a 
                key={section}
                href={`#${section}`} 
                style={{ 
                  color: activeSection === section ? 'var(--primary)' : 'var(--foreground)',
                  fontWeight: activeSection === section ? 'medium' : 'normal'
                }}
                className="hover:opacity-80 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-colors"
              style={{ background: darkMode ? 'var(--muted)' : 'var(--secondary)' }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun style={{ color: 'var(--primary)' }} /> : <FaMoon style={{ color: 'var(--primary)' }} />}
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Raman_Maurya_Resume.pdf"
              className="flex items-center px-4 py-2 rounded-md shadow-md transition-colors"
              style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              <FaDownload className="mr-2" /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-16">
        <div id="home" className="scroll-mt-24 w-full">
          <Header />
          <Summary />
        </div>
        
        <div id="skills" className="scroll-mt-24 mt-12 w-full">
          <Skills />
        </div>
        
        <div id="projects" className="scroll-mt-24 mt-12 w-full">
          <Projects />
        </div>
        
        <div id="experience" className="scroll-mt-24 mt-12 w-full">
          <Internships />
        </div>
        
        <div id="education" className="scroll-mt-24 mt-12 w-full">
          <Education />
        </div>
        
        <div id="hackathons" className="scroll-mt-24 mt-12 w-full">
          <Hackathons />
        </div>
        
        <footer className="text-center text-sm mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
          © {new Date().getFullYear()} Raman Maurya | Designed with React & Tailwind CSS
        </footer>
      </div>
    </div>
  )
}

export default App
