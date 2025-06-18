import { FaUser, FaCode, FaLaptop, FaUserGraduate, FaLightbulb } from 'react-icons/fa';

const Summary = () => {
  return (
    <section className="mt-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">About Me</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Developer, Student, Problem Solver
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">My Background</h3>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            I'm Raman, a passionate Computer Science student. My journey in tech began with curiosity about how websites work, 
            which evolved into a deep interest in full-stack development with a focus on backend technologies.
          </p>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm experienced in building scalable APIs, secure authentication systems, and real-time services using Node.js, Express, and 
            MongoDB. My goal is to create efficient, maintainable solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg inline-block mb-4">
                <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Current Focus</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Expanding expertise in AI and mastering Data Structures & Algorithms while actively solving problems on LeetCode and GFG.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg inline-block mb-4">
                <FaLightbulb className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">My Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                I believe in continuous learning and adapting to new technologies, staying at the forefront of innovation.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block mb-4">
                <FaLaptop className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Goal</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                To secure a challenging internship where I can contribute meaningfully while accelerating my professional growth.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg inline-block mb-4">
                <FaUserGraduate className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                B.Tech in Computer Science at Raj Kumar Goel Institute of Technology (2022-2026)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary; 