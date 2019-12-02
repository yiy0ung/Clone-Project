import React from 'react';
import Button from '../../common/Button';
import './HomeGreeting.scss';

const HomeGreeting = () => {

  return (
    <div className={'HomeGreeting'}>

      <div className={'HomeGreeting-top'}>
        <div className={'HomeGreeting-top-content MainTemplate'}>
          <div className={'HomeGreeting-top-content-slogan'}>
            <h4 className={'HomeGreeting-top-content-slogan-sub'}>
              장기경기침체, 초저금리시대
            </h4>

            <h2 className={'HomeGreeting-top-content-slogan-title'}>
              <span className={'ft-bold'}><span className={'ft-highlight'}>투자</span> 없이는</span> 수익도 없다!
            </h2>
          </div>
        </div>
      </div>

      <div className={'HomeGreeting-recommend'}>
        <div className={'MainTemplate'}>
          <div className={'HomeGreeting-recommend-phoneImg'}>
            <img 
              className={'HomeGreeting-recommend-phoneImg-img'}
              src={require('../../../assets/img/img_phone_m@2x.png')}
              alt={'phone-image'}/>
          </div>

          <div className={'HomeGreeting-recommend-welcome'}>
            <div className={'HomeGreeting-recommend-welcome-sub'}>
              자산을 키우는 새로운 투자 습관,</div>
            <div className={'HomeGreeting-recommend-welcome-title'}>
              피플펀드를 만나보세요</div>
          </div>

          <div className={'HomeGreeting-recommend-getStart'}>
            <Button
              display={'outline'}
              size={'medium'}
              content={'1분만에 투자 시작하기'}
            />
          </div>

          <div className={'HomeGreeting-recommend-foot'}>
            <a href={'#Intro'}>
              <img
                src={require('../../../assets/img/img_scrolldown@2x.png')}
                alt={'button-scroll-down'}
                className={'HomeGreeting-recommend-foot-btnDown'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGreeting;