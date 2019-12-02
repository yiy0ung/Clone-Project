import React from 'react';
import HomeCompany from '../../../components/home/HomeCompany';
import HomeRecommend from '../../../components/home/HomeRecommend';
import './HomeFoot.scss';

const HomeFoot = () => {
  return (
    <>
      <footer className={'HomeFoot'}>
        <HomeRecommend/>
        <HomeCompany />
      </footer>
    </>
  );
};

export default HomeFoot;