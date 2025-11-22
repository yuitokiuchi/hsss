import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">ABOUT US</h1>
            
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl leading-relaxed font-light text-gray-600 mb-8">
                We are the official Science Club of Kanagawa Prefectural Hiratsuka Secondary School. 
                A community where students explore various scientific fields through hands-on activities, 
                driven by curiosity and the desire to innovate.
              </p>
              
              <div className="border-l-2 border-black pl-6 my-12">
                <h2 className="text-2xl font-bold mb-4 tracking-tight">MISSION</h2>
                <p className="text-gray-700">
                  To foster a deep interest in science and technology among students by providing a platform for 
                  creative experimentation and collaborative learning. We believe in learning through making, 
                  breaking, and fixing.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6 mt-16 tracking-tight uppercase">Our Structure</h2>
              <p className="text-gray-700 mb-6">
                The club is divided into five specialized teams, allowing members to focus on their specific interests while maintaining a collaborative environment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {['LEGO Robotics', 'Electronics', 'Biology', 'Experiment', 'Astronomy'].map((team) => (
                  <li key={team} className="border border-gray-200 p-4 font-mono text-sm text-gray-600">
                    {team}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-6 mt-16 tracking-tight uppercase">Activities</h2>
              <p className="text-gray-700">
                We meet regularly to work on team projects, prepare for competitions like the WRO (World Robot Olympiad), 
                and conduct research. We also share our activities on our blog and social media channels to inspire others.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
