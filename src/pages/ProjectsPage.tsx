import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">PROJECTS</h1>
          
          <div className="space-y-24">
            {/* WRO Section */}
            <section>
              <div className="border-b border-black pb-4 mb-8 flex justify-between items-end">
                <h2 className="text-2xl font-bold tracking-tight">WRO (World Robot Olympiad)</h2>
                <span className="font-mono text-sm text-gray-500">COMPETITION</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <p className="text-gray-600 leading-relaxed">
                    The LEGO Team actively participates in the WRO every year. This global competition challenges students to build and program robots to solve specific tasks.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-gray-50 p-8 border border-gray-100">
                    <h3 className="font-mono font-bold text-lg mb-6">2024 SEASON RESULTS</h3>
                    <ul className="space-y-6">
                      <li className="flex flex-col sm:flex-row gap-4">
                        <span className="font-mono text-xs text-gray-400 w-32 shrink-0">NATIONALS</span>
                        <div>
                          <p className="font-bold">WRO 2024 Japan Final (Toyama)</p>
                          <p className="text-sm text-gray-600 mt-1">Team "Merge sort" placed 7th in preliminary, 19th in final.</p>
                        </div>
                      </li>
                      <li className="flex flex-col sm:flex-row gap-4">
                        <span className="font-mono text-xs text-gray-400 w-32 shrink-0">REGIONALS</span>
                        <div>
                          <p className="font-bold">WRO 2024 Regional Qualifiers</p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600 font-mono">
                            <li>Merge sort: 5th Place (Qualified)</li>
                            <li>KANIKAMA: 7th Place</li>
                            <li>DEBB_tag: 11th Place</li>
                            <li>Over Load: 14th Place</li>
                            <li>Felling: 17th Place</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Projects */}
            <section>
              <div className="border-b border-black pb-4 mb-8 flex justify-between items-end">
                <h2 className="text-2xl font-bold tracking-tight">OTHER ACTIVITIES</h2>
                <span className="font-mono text-sm text-gray-500">EXHIBITION & RESEARCH</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                  <h3 className="text-xl font-bold mb-4">School Festival (Suisei-sai)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We exhibit our robots, electronic devices, and experiment demonstrations during the annual school culture festival. It's our chance to interact with the wider school community.
                  </p>
                </div>
                <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                  <h3 className="text-xl font-bold mb-4">Regular Observations</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Astronomy Team conducts regular sky observation sessions, tracking planets and constellations throughout the year using school telescopes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
