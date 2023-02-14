import React from 'react';
import About from '../components/About';
import MySelf from '../components/MySelf';
import Works from '../components/Works';
import '../scss/pages/_home.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <About />
      <Works />
      {/* <MySelf /> */}
    </div>
  );
};

export default Home;
