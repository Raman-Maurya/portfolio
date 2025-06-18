import { useState } from 'react';
import { FaTrophy, FaCode, FaHackerrank, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const Hackathons = () => {
  const [activeImage, setActiveImage] = useState(null);
  
  const hackathons = [
    {
      title: 'Navonmesh AI dea Challenge 2025',
      date: 'June 9-10, 2025',
      organizer: 'Innovation Hub, AKTU Lucknow',
      description: 'Reached in Grand Finale round at AKTU Lucknow, 24-hour Hackathon with Pharmacy Department, demonstrating enthusiasm, creativity, and problem-solving skills during the innovation challenge.',
      image: '/aktu.png',
      team: null
    },
    {
      title: 'Build with India',
      date: '2024',
      organizer: 'Hack with India',
      description: 'Joined Build with India hackathon as Leader of Team Logic Pirates, building innovative solutions.',
      image: '/hackindia.jpg',
      team: 'Team Logic Pirates'
    }
  ];

  const closeModal = () => setActiveImage(null);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          <FaHackerrank className="inline-block mr-3" style={{ color: 'var(--primary)' }} />
          Hackathons
        </h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          Competitions and problem-solving challenges I've participated in
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {hackathons.map((hackathon, index) => (
          <div 
            key={index}
            className="overflow-hidden rounded-xl shadow-md relative"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow-md)' }}
          >
            <div 
              className="h-40 overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(hackathon)}
            >
              <img 
                src={hackathon.image} 
                alt={hackathon.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <div 
                className="absolute top-0 right-0 m-2 px-2 py-1 rounded-md text-sm font-medium"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                {hackathon.date}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                {hackathon.title}
              </h3>
              
              <div className="flex items-center mb-3">
                <span style={{ color: 'var(--muted-foreground)' }}>
                  {hackathon.organizer}
                </span>
                {hackathon.team && (
                  <span 
                    className="ml-2 px-2 py-0.5 text-xs rounded-full"
                    style={{ 
                      background: 'var(--muted)', 
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {hackathon.team}
                  </span>
                )}
              </div>
              
              <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {hackathon.description}
              </p>
              
              <button
                onClick={() => setActiveImage(hackathon)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm"
                style={{ 
                  background: 'var(--secondary)', 
                  color: 'var(--secondary-foreground)'
                }}
              >
                <FaTrophy />
                <span>View Certificate</span>
                <FaChevronDown className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Certificate Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)' }}
          onClick={closeModal}
        >
          <div 
            className="max-w-3xl w-full max-h-[90vh] overflow-auto rounded-lg p-2"
            style={{ background: 'var(--card)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2 px-2">
              <h4 className="font-bold" style={{ color: 'var(--foreground)' }}>
                {activeImage.title} Certificate
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
                alt={`${activeImage.title} Certificate`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hackathons; 