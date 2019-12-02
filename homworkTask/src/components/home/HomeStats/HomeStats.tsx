import React from 'react';
import './HomeStats.scss';

const HomeStats = () => {
  return (
    <div className={'HomeStats MainTemplate'} id={'Intro'} >
      <div className={'HomeStats-title'}>
        2017년, 재테크 잘하는 사람들은<br/>
        지금 어디에 투자하고 있을까요?<br/>
        <div className={'HomeStats-title-mark'}></div>
      </div>
      
      <div className={'HomeStats-info'}>
        이미 피플펀드에서는<br/>
        <span className={'HomeStats-info-highlight'}>4,081</span>명의 사람들이<br/>
        <span className={'HomeStats-info-highlight'}>19,185</span>개 상품에<br/>
        <span className={'HomeStats-info-highlight'}>65,524,000,000</span>원을 투자하여<br/>
        <span className={'HomeStats-info-highlight'}>13.36%</span>의 평균 수익을 얻고 있습니다.<br/>
      </div>

      <img
        className={'HomeStats-info-img'}
        src={require('../../../assets/img/img_1_pc.png')}
        alt='statistic' />
    </div>
  );
};

export default HomeStats;