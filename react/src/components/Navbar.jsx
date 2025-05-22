import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full bg-green-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Strapi</div>
        <ul className="flex space-x-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-200 transition">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
