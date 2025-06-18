import { FaBriefcase, FaExternalLinkAlt, FaCertificate, FaIdCard } from 'react-icons/fa';
import { useState } from 'react';

const Internships = () => {
  const [activeImage, setActiveImage] = useState(null);
  
  const internships = [
    {
      position: 'Open Source Contributor at Girl Script Summer of Code(GSSOC\'24) Extended program',
      duration: 'Oct 2024',
      details: '1-month long Open-Source program by GirlScript Foundation, contributing to various projects as part of the extended program.',
      certificate: {
        title: 'GirlScript Summer of Code ID Card',
        image: '/idcard.png'
      }
    },
    {
      position: 'Building Modern Web Applications with MERN Stack',
      duration: 'Dec 2024 - Jan 2025',
      details: '6 weeks internship in collaboration with EY Global Delivery Services & AICTE under the Next Gen Employability Program from December 9, 2024 to January 20, 2025.',
      certificate: {
        title: 'EY & AICTE MERN Stack Certificate',
        image: '/ey_certificate.jpg'
      }
    },
    // {
    //   position: 'Virtual Internship on SkillsBuild & IBM Cloud platform in AI and Cloud',
    //   duration: 'Feb - Mar 2024',
    //   details: '4 weeks program with Edunet Foundation in Collaboration with AICTE, from 21st Feb 2024 to 20th Mar 2024, focusing on AI and Cloud technologies.',
    //   certificate: {
    //     title: 'IBM Cloud & AI Certificate',
    //     image: '/public/AI_N_CLOUD.png'
    //   }
    // }
  ];

  const closeModal = () => setActiveImage(null);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          <FaBriefcase className="inline-block mr-3" style={{ color: 'var(--primary)' }} />
          Internships
        </h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          My professional experience and work history
        </p>
      </div>
      
      <div className="space-y-6">
        {internships.map((internship, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl shadow-md"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow-md)' }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--muted)' }}
                  >
                    <FaBriefcase style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                      {internship.position}
                    </h3>
                    {internship.duration && (
                      <span 
                        className="text-sm px-2 py-1 rounded-full inline-block"
                        style={{ 
                          background: 'var(--muted)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {internship.duration}
                      </span>
                    )}
                  </div>
                </div>
                <p className="ml-16 mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  {internship.details}
                </p>
                
                {internship.certificate && internship.certificate.image && (
                  <div className="ml-16">
                    <button
                      onClick={() => setActiveImage(internship.certificate)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md"
                      style={{ 
                        background: 'var(--secondary)', 
                        color: 'var(--secondary-foreground)'
                      }}
                    >
                      <FaCertificate />
                      <span>View Certificate</span>
                    </button>
                  </div>
                )}
              </div>
              
              {internship.certificate && internship.certificate.image && (
                <div className="w-full md:w-1/3 flex justify-center">
                  <div 
                    className="rounded-md overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-md"
                    onClick={() => setActiveImage(internship.certificate)}
                    style={{ maxHeight: '180px' }}
                  >
                    <img 
                      src={internship.certificate.image} 
                      alt={internship.certificate.title}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)' }}
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg p-2"
            style={{ background: 'var(--card)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2 px-2">
              <h4 className="font-bold" style={{ color: 'var(--foreground)' }}>
                {activeImage.title}
              </h4>
              <button 
                onClick={closeModal}
                className="p-1 rounded-full"
                style={{ background: 'var(--muted)' }}
              >
                ✕
              </button>
            </div>
            <div className="rounded-md overflow-hidden">
              <img 
                src={activeImage.image} 
                alt={activeImage.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships; 