import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const teams = [
    {
      id: 'lego',
      name: 'LEGO Team',
      description: 'Participating in WRO (World Robot Olympiad) and building autonomous robots.',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'electronics',
      name: 'Electronics Team',
      description: 'Creating electronic circuits, gadgets, and learning hardware engineering.',
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 'biology',
      name: 'Biology Team',
      description: 'Investigating local ecosystems and conducting microscopic research.',
      color: 'bg-green-100 text-green-800',
    },
    {
      id: 'experiment',
      name: 'Experiment Team',
      description: 'Conducting various chemistry and physics experiments.',
      color: 'bg-red-100 text-red-800',
    },
    {
      id: 'astronomy',
      name: 'Astronomy Team',
      description: 'Observing celestial bodies and capturing the beauty of the universe.',
      color: 'bg-indigo-100 text-indigo-800',
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'WRO2024 Japan Final Results',
      date: '2024-09-08',
      summary: 'Team "Merge sort" competed in the national finals in Toyama, placing 19th overall.',
    },
    {
      id: 2,
      title: 'WRO2024 Regional Qualifier Results',
      date: '2024-08-27',
      summary: 'Five teams participated, with "Merge sort" advancing to the national tournament.',
    },
    {
      id: 3,
      title: 'LEGO Team Activity Report - June',
      date: '2024-07-07',
      summary: 'New members joined, and preparations for the WRO summer qualifiers are underway.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hiratsuka Secondary School Science Club
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
              Exploring Science, Technology, and Innovation. Join us in our journey of discovery with our LEGO, Electronics, Biology, Experiment, and Astronomy teams.
            </p>
            <Link
              to="/teams"
              className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg"
            >
              Explore Our Teams
            </Link>
          </div>
        </section>

        {/* Meet the Teams Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Teams</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our club is divided into specialized teams, each focusing on a unique field of study. Find your passion and join us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teams.map((team) => (
                <div key={team.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r from-blue-500 to-blue-700`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{team.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{team.description}</p>
                    <Link
                      to={`/teams/${team.id}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 text-sm inline-flex items-center"
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-blue-900">Latest News</h2>
              <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium hidden md:block">
                View All News
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{item.date}</span>
                  <h3 className="text-lg font-bold mt-2 mb-3 text-gray-800 hover:text-blue-700">
                    <Link to="/news">{item.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
               <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                View All News
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
