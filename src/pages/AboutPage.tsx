import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome to Hiratsuka Secondary School Science Club</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are the official Science Club of Kanagawa Prefectural Hiratsuka Secondary School. 
            Our club is a vibrant community where students explore various scientific fields through hands-on activities.
            We are divided into five specialized teams: LEGO, Electronics, Biology, Experiment, and Astronomy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to learn through practice, participate in competitions like the WRO (World Robot Olympiad), 
            and share our discoveries with the world. Whether it's building robots, observing the stars, or conducting 
            experiments, we encourage curiosity and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To foster a deep interest in science and technology among students by providing a platform for 
              creative experimentation and collaborative learning.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Activities</h3>
            <p className="text-gray-700">
              We meet regularly to work on team projects, prepare for competitions, and conduct research. 
              We also share our activities on our blog and social media channels.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
