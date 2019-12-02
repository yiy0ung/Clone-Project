import React from 'react';

import HomeTemplate from '../components/home/HomeTemplate';
import HomeSections from '../container/home/HomeSections';

const Home = () => {
  return (
    <>
      <HomeTemplate>
        <HomeSections />
      </HomeTemplate>
    </>
  );
};

export default Home;