import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const teams = [
    {
      id: 'lego',
      name: 'LEGO',
      description: 'Autonomous Robotics & WRO',
      icon: 'L',
    },
    {
      id: 'electronics',
      name: 'ELECTRONICS',
      description: 'Circuit Design & Hardware',
      icon: 'E',
    },
    {
      id: 'biology',
      name: 'BIOLOGY',
      description: 'Ecosystems & Microscopy',
      icon: 'B',
    },
    {
      id: 'experiment',
      name: 'EXPERIMENT',
      description: 'Chemistry & Physics',
      icon: 'X',
    },
    {
      id: 'astronomy',
      name: 'ASTRONOMY',
      description: 'Observation & Astrophotography',
      icon: 'A',
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'WRO2024 Japan Final Results',
      date: '2024.09.08',
      tag: 'RESULT',
    },
    {
      id: 2,
      title: 'WRO2024 Regional Qualifier Results',
      date: '2024.08.27',
      tag: 'RESULT',
    },
    {
      id: 3,
      title: 'LEGO Team Activity Report - June',
      date: '2024.07.07',
      tag: 'REPORT',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <p className="font-mono text-sm md:text-base text-gray-500 mb-4 tracking-widest uppercase">
                Hiratsuka Secondary School Science Club
              </p>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none text-black">
                EXPLORE<br />
                THE UNKNOWN.
              </h1>
              <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl leading-relaxed">
                We are a collective of student researchers, engineers, and explorers. 
                Diving deep into robotics, biology, astronomy, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/teams"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase"
                >
                  View Teams
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-bold tracking-widest hover:bg-gray-50 transition-colors uppercase"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">TEAMS</h2>
              <span className="hidden md:block font-mono text-gray-400 text-sm">01 — DIVISIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
              {teams.map((team) => (
                <Link
                  key={team.id}
                  to={`/teams/${team.id}`}
                  className="bg-white p-8 hover:bg-gray-50 transition-colors group h-full flex flex-col justify-between"
                >
                  <div className="mb-8">
                    <span className="font-mono text-xs text-gray-400 border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center mb-4 group-hover:border-black group-hover:text-black transition-colors">
                      {team.icon}
                    </span>
                    <h3 className="text-lg font-bold tracking-wide mb-2">{team.name}</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{team.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-gray-300 group-hover:text-black transition-colors">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-16 border-b border-gray-300 pb-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">UPDATES</h2>
              <Link to="/news" className="font-mono text-sm text-black hover:underline">VIEW ALL →</Link>
            </div>

            <div className="space-y-0 divide-y divide-gray-200 border-t border-b border-gray-200">
              {newsItems.map((item) => (
                <Link key={item.id} to="/news" className="group block py-6 hover:bg-white transition-colors px-4 -mx-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      <span className="font-mono text-xs text-gray-400">{item.date}</span>
                      <span className="font-mono text-xs border border-gray-300 px-2 py-0.5 rounded text-gray-600">{item.tag}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-medium group-hover:text-gray-600 transition-colors flex-grow md:px-8">
                      {item.title}
                    </h3>
                    <span className="hidden md:block text-gray-300 group-hover:text-black transition-colors">↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
