import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-green-700 mb-6">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Discover helpful articles, tutorials, and insights from our team.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          Explore Blog
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
