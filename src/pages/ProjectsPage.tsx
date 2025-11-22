import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Projects & Achievements</h1>
        
        <div className="space-y-12">
          {/* WRO Section */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold">World Robot Olympiad (WRO)</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                The LEGO Team actively participates in the WRO every year. This global competition challenges students to build and program robots to solve specific tasks.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">2024 Season Results</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <span className="font-semibold">WRO 2024 Japan Final (Toyama):</span> Team "Merge sort" placed 7th in the preliminary round and 19th in the final round.
                  </li>
                  <li>
                    <span className="font-semibold">WRO 2024 Regional Qualifiers:</span>
                    <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-gray-600">
                      <li>Team "Merge sort": 5th Place (Qualified for Nationals)</li>
                      <li>Team "KANIKAMA": 7th Place</li>
                      <li>Team "DEBB_tag": 11th Place</li>
                      <li>Team "Over Load": 14th Place</li>
                      <li>Team "Felling": 17th Place</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Projects Placeholder */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h2 className="text-2xl font-bold">Other Activities</h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">School Festival (Suisei-sai)</h3>
                  <p className="text-gray-600">
                    We exhibit our robots, electronic devices, and experiment demonstrations during the annual school culture festival.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Regular Observations</h3>
                  <p className="text-gray-600">
                    The Astronomy Team conducts regular sky observation sessions, tracking planets and constellations throughout the year.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
