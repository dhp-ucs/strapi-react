import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to our blog platform! This project was built to help
          developers and tech enthusiasts share knowledge, explore tutorials,
          and stay up to date with industry insights.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Whether you're a beginner or an experienced developer, our mission is
          to provide valuable content and a community-driven space to learn and
          grow.
        </p>
        <p className="text-gray-500 text-sm italic">
          Built with ❤️ using React, Tailwind CSS, and Strapi.
        </p>
      </div>
    </div>
  );
};

export default About;
