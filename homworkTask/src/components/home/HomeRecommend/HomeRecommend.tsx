import React from 'react';
import AvatarComment from '../../common/AvatarComment';
import './HomeRecommend.scss';

const HomeRecommend = () => {
  return (
    <div className={'HomeRecommend-container'}>
      <div className={'HomeRecommend'}>
        <div className={'HomeRecommend-title'}>
          대한민국의 투자 습관을<br/>
          바꾸고 있는 피플펀드
        </div>

        <div className={'HomeRecommend-content'}>
          <AvatarComment
            commentColor='#fff7d9'
            way='right'
            comment='트렌치A가 제일 매력적인 것 같아요. 예상보다 5~6배 높은 부실률이 발생해도 투자금 손실이 없으니까, 수익 대비 위험이 정말 적잖아요'
            userName={'대학원생, 32세'}
            userImg={require('../../../assets/img/img_interview2@2x.png')}
          />
          <AvatarComment
            commentColor='#d9f1ff'
            way='left'
            comment='피플펀드 담보채권의 상환은 믿을 수 있어요. 담보도 확실하고 투자금 회수를 위한 안전장치들이 확실하니까요.'
            userName={'소셜마케터, 30세'}
            userImg={require('../../../assets/img/img_interview1@2x.png')}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeRecommend;