import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tighter font-mono">HSS_SCIENCE</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Hiratsuka Secondary School Science Club.<br/>
              Pursuing knowledge through observation, experimentation, and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-mono font-semibold mb-6 text-gray-500 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link to="/teams" className="text-gray-300 hover:text-white transition-colors text-sm">Teams</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors text-sm">News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-mono font-semibold mb-6 text-gray-500 uppercase tracking-wider">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">Hiratsuka Secondary School</p>
            <p className="text-gray-400 text-sm mb-6">Kanagawa, Japan</p>
            
            <div className="flex space-x-4">
               <button className="text-xs border border-gray-700 px-2 py-1 rounded hover:border-white transition-colors">JA</button>
               <button className="text-xs border border-gray-700 px-2 py-1 rounded hover:border-white transition-colors">EN</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs font-mono">
            &copy; {new Date().getFullYear()} HSS Science Club.
          </p>
          <p className="text-gray-700 text-xs mt-2 md:mt-0">
            Designed for Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
