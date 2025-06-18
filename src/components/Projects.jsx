import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Nature Cure',
      description: 'A dynamic full stack platform to generate herbal remedies for various diseases from herbs present at home.',
      image: 'https://placehold.co/800x600/667eea/ffffff?text=Nature+Cure',
      featured: true,
      github: 'https://github.com/Raman-Maurya/NatureCure-backend-deploy',
      live: 'https://naturecure.netlify.app',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Gemini API', 'Perplexity API'],
      features: [
        '🔬 AI-Powered Herb Recognition:',
        '🌍 Multi-Language Support',
        '🔍 Disease-Specific Remedies',
        '🔄 Interactive UI'
      ]
    },
    {
      title: 'Dev Tinder',
      description: 'A dynamic full stack platform like Tinder to connect with Developers. Users have a feed page where they send connection requests to interested developers.',
      image: 'https://placehold.co/800x600/667eea/ffffff?text=Dev+Tinder',
      featured: true,
      github: 'https://github.com/Raman-Maurya/dev-backend',
      live: 'https://dev-frontend-final.onrender.com/',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.IO', 'Razorpay'],
      features: [
        'REST API implementation',
        'Razorpay Payment Gateway integration',
        'Real-time chat with Socket.IO',
        'JWT authentication with secure cookies',
        'Form validation with Validator'
      ]
    },
    {
      title: 'Crypto Tracker',
      description: 'A dynamic ReactJS web application offering real-time cryptocurrency data including live prices, ranks, market capitalization, and 24-hour changes via API integration.',
      image: 'https://placehold.co/800x600/4c51bf/ffffff?text=Crypto+Tracker',
      featured: true,
      github: 'https://github.com/Raman-Maurya/crypto-tracker',
      live: 'https://rmn-crypto-tracker.netlify.app/',
      tags: ['React.js', 'Firebase', 'ChartJS', 'Material UI', 'API Integration'],
      features: [
        'Interactive graphs with ChartJS',
        'Daily, monthly, yearly data visualization',
        'Firebase authentication',
        'User watchlist functionality',
        'Responsive design with Material UI'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and Tailwind CSS to showcase projects and skills.',
      image: 'https://placehold.co/800x600/3182ce/ffffff?text=Portfolio',
      featured: false,
      github: 'https://github.com/Raman-Maurya/portfolio',
      live: 'https://portfolio.example.com',
      tags: ['React.js', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive design',
        'Dark/Light mode',
        'Modern UI components',
        'Optimized performance'
      ]
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">My Projects</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore my recent work that showcases my skills and passion for web development
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {projects.filter(project => project.featured).map((project, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
            ${index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'}`}
          >
            <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="md:w-3/5 p-6">
              <div className="flex items-center mb-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold mr-2">
                  FEATURED
                </span>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Key Features:</h4>
                <ul className="space-y-1 text-sm">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-md transition-colors"
                >
                  <FaGithub />
                  <span>Source</span>
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-14">
        <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaGithub />
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/Raman-Maurya"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-md transition-colors"
          >
            <FaGithub />
            <span>See More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 