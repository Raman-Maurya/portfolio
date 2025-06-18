import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          <span className="block">Hi, I'm</span> 
          <span style={{ color: 'var(--primary)' }}>Raman Maurya</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6" style={{ color: 'var(--muted-foreground)' }}>
          Full-Stack Developer
        </h2>
        
        <p className="mb-8 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
          I'm passionate about building beautiful, responsive, and user-friendly web applications using modern technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-md shadow-md transition-all flex items-center"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-transparent border-2 rounded-md transition-all"
            style={{ 
              borderColor: 'var(--primary)', 
              color: 'var(--primary)'
            }}
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <a 
            href="mailto:raman.2005kumar@gmail.com" 
            className="flex items-center hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <FaEnvelope className="mr-2" />
            <span>raman.2005kumar@gmail.com</span>
          </a>
          
          <a 
            href="tel:+917982684573" 
            className="flex items-center hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <FaPhone className="mr-2" />
            <span>+91 7982684573</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/raman-maurya-742877293/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <FaLinkedin className="mr-2" />
            <span>Raman-Maurya</span>
          </a>
          
          <a 
            href="https://github.com/Raman-Maurya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <FaGithub className="mr-2" />
            <span>Raman-Maurya</span>
          </a>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1" style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--accent))' }}>
          <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'var(--card)' }}>
            <img 
              src="https://camo.githubusercontent.com/3e4ba60aaf08d8e8b8b91661ac3c263e3b0bb8ded371128dc3fe9b84b5464e42/68747470733a2f2f6d656469612e74656e6f722e636f6d2f726550446644574f33586f41414141642f6861636b696e672e676966" 
              alt="Raman Maurya - Developer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <a 
          href="#skills" 
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          style={{ background: 'var(--card)' }}
        >
          <FaArrowDown style={{ color: 'var(--primary)' }} />
        </a>
      </div>
    </header>
  );
};

export default Header; 