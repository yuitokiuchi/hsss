import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Hiratsuka Science Club</h3>
            <p className="text-gray-400 text-sm">
              Exploring the wonders of science and technology. Join us in our journey of discovery and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/teams" className="text-gray-400 hover:text-white transition-colors">Our Teams</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">Hiratsuka Secondary School</p>
            <p className="text-gray-400 text-sm mb-4">Kanagawa, Japan</p>
            
            <div className="mt-4">
               <span className="text-gray-500 text-sm">Language: </span>
               <button className="text-gray-300 hover:text-white text-sm font-medium ml-2">JA</button>
               <span className="text-gray-600 mx-2">|</span>
               <button className="text-gray-300 hover:text-white text-sm font-medium">EN</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hiratsuka Secondary School Science Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
