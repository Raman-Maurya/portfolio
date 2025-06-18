import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Getting Started with Enterprise-grade AI',
      organization: 'IBM',
      date: 'Feb 2024',
      link: 'https://ibm.com',
      description: 'Gained foundational knowledge of AI, focusing on scalability and security compliance for enterprise applications.'
    },
    {
      title: 'Fundamentals of Azure AI Services',
      organization: 'Microsoft',
      date: 'June 2024',
      link: 'https://microsoft.com',
      description: 'Learned to integrate AI capabilities (e.g., OCR Services, Azure OpenAI, etc) into web applications.'
    }
  ];

  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          <FaCertificate className="inline-block mr-3" style={{ color: 'var(--primary)' }} />
          Certifications
        </h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          Professional development and specialized training
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                {cert.title}
              </h3>
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
    </section>
  );
};

export default Certifications; 