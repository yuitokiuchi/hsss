import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamsPage: React.FC = () => {
  const teams = [
    {
      id: 'lego',
      name: 'LEGO',
      jpName: 'LEGO班',
      description: 'Participates in the World Robot Olympiad (WRO). We build and program autonomous robots to solve complex challenges. In 2024, our team "Merge sort" reached the National Finals.',
      tags: ['Robotics', 'Programming', 'WRO'],
    },
    {
      id: 'electronics',
      name: 'ELECTRONICS',
      jpName: '電子工学班',
      description: 'Focuses on designing and building electronic circuits and devices. We create custom gadgets and learn about hardware engineering.',
      tags: ['Circuits', 'IoT', 'Hardware'],
    },
    {
      id: 'biology',
      name: 'BIOLOGY',
      jpName: '生物班',
      description: 'Conducts fieldwork and microscopic observations. We study local ecosystems and investigate various biological phenomena.',
      tags: ['Nature', 'Microscope', 'Research'],
    },
    {
      id: 'experiment',
      name: 'EXPERIMENT',
      jpName: '実験班',
      description: 'Performs a wide range of chemistry and physics experiments. We love to see science in action through colorful and exciting reactions.',
      tags: ['Chemistry', 'Physics', 'Lab'],
    },
    {
      id: 'astronomy',
      name: 'ASTRONOMY',
      jpName: '天文学班',
      description: 'Observes celestial bodies using telescopes. We track planetary movements and capture astrophotography.',
      tags: ['Space', 'Telescope', 'Stars'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">TEAMS</h1>
          <p className="text-gray-500 font-mono mb-16 max-w-xl">
            Five specialized units. One shared passion for discovery.
          </p>
          
          <div className="space-y-12">
            {teams.map((team, index) => (
              <div key={team.id} className="group border-t border-gray-200 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs text-gray-400 block mb-2">0{index + 1}</span>
                    <h2 className="text-2xl font-bold tracking-tight">{team.name}</h2>
                    <span className="text-sm text-gray-500 font-mono mt-1 block">{team.jpName}</span>
                  </div>
                  
                  <div className="md:col-span-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {team.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {team.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono border border-gray-200 px-2 py-1 text-gray-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 flex md:justify-end items-start">
                    <Link 
                      to={`/teams/${team.id}`} 
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-black transition-all pb-1"
                    >
                      View Details <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamsPage;
