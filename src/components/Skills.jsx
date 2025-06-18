import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiMongodb, SiSupabase, SiLangchain, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const techStack = [
    {
      name: "JAVASCRIPT",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
    },
   
    {
      name: "REACT.JS",
      icon: <FaReact className="text-blue-400 text-5xl" />,
    },
   
    {
      name: "NODE.JS",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },
    {
      name: "EXPRESS.JS",
      icon: <SiExpress className="text-white text-5xl" />,
    },
    {
      name: "REDUX.JS",
      icon: <SiRedux className="text-purple-500 text-5xl" />,
    },
    {
      name: "TAILWIND CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
   
    {
      name: "MONGODB",
      icon: <SiMongodb className="text-green-500 text-5xl" />,
    },
   
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>My Tech Stack</h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          Technologies and tools I use to build modern web applications
        </p>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--card)',
                boxShadow: 'var(--shadow-md)',
                borderRadius: 'var(--radius)'
              }}
              className="flex flex-col items-center justify-center p-6 aspect-square transition-transform hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-center font-medium" style={{ color: 'var(--primary)' }}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 