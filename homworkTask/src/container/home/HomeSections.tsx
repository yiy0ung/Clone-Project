import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import HomeSection from '../../components/home/HomeSection';
import HomeGreeting from '../../components/home/HomeGreeting';
import HomeStats from '../../components/home/HomeStats';
import HomeCalc from '../../components/home/HomeCalc';
import HomeFoot from './HomeFoot';

type Props = {
  store?: any;
};

const HomeSections: React.SFC<Props> = ({ store }) => {
  const { Product } = store;

  useEffect(() => {
    Product.getProductList();
  }, [Product]);

  return (
    <>
      <HomeSection>
        <HomeGreeting />
      </HomeSection>
      
      <HomeSection>
        <HomeStats />
      </HomeSection>

      <HomeSection>
        <HomeCalc productList={Product.productList} />
      </HomeSection>

      <HomeSection>
        <HomeFoot />
      </HomeSection>
    </>
  );
};

export default inject('store')(observer(HomeSections));