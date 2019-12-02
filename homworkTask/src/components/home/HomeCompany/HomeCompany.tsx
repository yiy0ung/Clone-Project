import React from 'react';
import './HomeCompany.scss';
import Button from '../../common/Button';

const HomeCompany = () => {
  return (
    <div className={'HomeCompany'}>
      <div className={'MainTemplate HomeCompany-content'}>
        <div className={'HomeCompany-content-comment'}>
          <div className={'HomeCompany-content-comment-head'}>
            Extraordinary Finance for the Ordinary
          </div>

          <div className={'HomeCompany-content-comment-body'}>
            <span>보통 사람을 위한 보통</span>이 아닌 금융을 만들겠습니다.
          </div>
        </div>
        <img 
          src={require('../../../assets/img/img_logo@2x.png')} 
          alt='people-fund-company-logo' />
      </div>
      <div className={'HomeCompany-getStart'}>
        <Button
          style={{ padding: '1rem' }}
          type={'button'}
          display={'primary'}
          content={'1분만에 투자 시작하기'}
        />
      </div>
    </div>
  );
};

export default HomeCompany;