import { FaGraduationCap, FaSchool, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: "Abdul Kalam Technical University",
      degree: "BTech in Computer Science",
      period: "Dec 2022 - Jun 2026",
      location: "Lucknow, UP, India",
      description: "Currently pursuing with a SGPA of 8.02",
      icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
    },
    {
      institution: "Raj Kumar Goel Institute of Technology",
      degree: "Campus Branch",
      period: "Dec 2022 - Present",
      location: "Ghaziabad, UP, India",
      description: "Actively participating in coding clubs and tech events",
      icon: <FaSchool className="text-indigo-600 dark:text-indigo-400" />
    }
  ];
  
  const certifications = [
    {
      title: 'Getting Started with Enterprise-grade AI',
      organization: 'IBM',
      date: 'Feb 2024',
      link: 'https://www.credly.com/badges/5c14b5e9-c53b-46d2-b78f-e934929bfc21/print',
      description: 'Gained foundational knowledge of AI, focusing on scalability and security compliance for enterprise applications.'
    },
    {
      title: 'Fundamentals of Azure AI Services',
      organization: 'Microsoft',
      date: 'June 2024',
      link: 'https://learn.microsoft.com/en-us/users/ramanmaurya-1436/achievements/vbhqkwbm',
      description: 'Learned to integrate AI capabilities (e.g., OCR Services, Azure OpenAI, etc) into web applications.'
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          <FaGraduationCap className="inline-block mr-3" style={{ color: 'var(--primary)' }} />
          Education & Certifications
        </h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          My academic journey and professional development
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--foreground)' }}>
            <FaGraduationCap className="mr-2" style={{ color: 'var(--primary)' }} />
            <span>Education</span>
          </h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:z-0" style={{ 
            '--timeline-gradient': 'linear-gradient(to bottom, var(--primary), var(--primary-foreground))',
            '--dot-border': 'var(--primary)'
          }}>
            {education.map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="flex items-center md:justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md"
                    style={{ 
                      background: 'var(--muted)', 
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'var(--primary)'
                    }}
                  >
                    <FaGraduationCap style={{ color: 'var(--primary)' }} />
                  </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-lg ml-6 md:ml-0 md:mt-4"
                  style={{ 
                    background: 'var(--card)', 
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h4 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {item.institution}
                    </h4>
                    <span className="text-sm font-medium px-2 py-1 rounded-md"
                      style={{ 
                        background: 'var(--muted)', 
                        color: 'var(--primary)'
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                    {item.degree}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                    {item.location}
                  </p>
                  <p className="mt-3" style={{ color: 'var(--muted-foreground)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: 'var(--foreground)' }}>
            <FaCertificate className="mr-2" style={{ color: 'var(--primary)' }} />
            <span>Certifications</span>
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl shadow-md relative overflow-hidden"
                style={{ 
                  background: 'var(--card)', 
                  boxShadow: 'var(--shadow-md)',
                  borderLeft: '4px solid var(--primary)'
                }}
              >
                <div className="flex flex-wrap justify-between items-center mb-3">
                  <h4 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                    {cert.title}
                  </h4>
                  <span 
                    className="text-sm px-2 py-1 rounded-full"
                    style={{ 
                      background: 'var(--muted)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="font-medium mr-3" style={{ color: 'var(--foreground)' }}>
                    {cert.organization}
                  </span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs"
                    style={{ color: 'var(--primary)' }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Verify
                  </a>
                </div>
                
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 