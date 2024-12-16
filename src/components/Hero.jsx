// import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({
  title = 'Welcome to Angular Jobs', // Default value for title
  subtitle = 'Find the Angular job that fits your skill set',
}) => {
  return (
    <header className="bg-red-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

// PropType validation
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
