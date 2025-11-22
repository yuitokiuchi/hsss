import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamsPage: React.FC = () => {
  const teams = [
    {
      id: 'lego',
      name: 'LEGO Team (LEGO班)',
      description: 'Participates in the World Robot Olympiad (WRO). We build and program autonomous robots to solve complex challenges. In 2024, our team "Merge sort" reached the National Finals.',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'electronics',
      name: 'Electronics Team (電子工学班)',
      description: 'Focuses on designing and building electronic circuits and devices. We create custom gadgets and learn about hardware engineering.',
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 'biology',
      name: 'Biology Team (生物班)',
      description: 'Conducts fieldwork and microscopic observations. We study local ecosystems and investigate various biological phenomena.',
      color: 'bg-green-100 text-green-800',
    },
    {
      id: 'experiment',
      name: 'Experiment Team (実験班)',
      description: 'Performs a wide range of chemistry and physics experiments. We love to see science in action through colorful and exciting reactions.',
      color: 'bg-red-100 text-red-800',
    },
    {
      id: 'astronomy',
      name: 'Astronomy Team (天文学班)',
      description: 'Observes celestial bodies using telescopes. We track planetary movements and capture astrophotography.',
      color: 'bg-indigo-100 text-indigo-800',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Our Teams</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our club consists of five specialized teams, each dedicated to a specific field of science and technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`h-3 ${team.color.split(' ')[0].replace('bg-', 'bg-gradient-to-r from-gray-200 to-')}`}></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{team.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {team.description}
                </p>
                <Link 
                  to={`/teams/${team.id}`} 
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamsPage;
