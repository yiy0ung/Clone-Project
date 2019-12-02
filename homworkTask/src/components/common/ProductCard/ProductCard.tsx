import React from 'react';
import Button from '../Button';
import './ProductCard.scss';

import { Product } from '../../../store/Product/ProductStore';

type Props = {
  data: Product;
  invested: number;
};

const cashFormat = (cash: number): string => {
  return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductCard: React.SFC<Props> = ({ data, invested }) => {
  const profitOfYear: number = (invested * 10000) * ((100 - data.interest_rate)/100) * data.month; // 연수익
  const commission: number = Math.floor(profitOfYear * (data.commission/100)); // 수수료
  const tax: number = Math.floor(profitOfYear * (27.5/100)); // 세금
  const totalProfit = Math.floor(profitOfYear - commission - tax); // 총 수익

  const investedPercent: number = Math.floor(data.invest_amount/data.total_amount * 100);

  return (
    <div className={'ProductCard-container'}>
    <div className={'ProductCard'}>

      <div className={'ProductCard-header'}>
        <div className={'ProductCard-header-category'}>
          {data.category}
        </div>
        <div className={'ProductCard-header-title'}>
          {data.title}
        </div>
        <div className={'ProductCard-header-bar'}></div>
      </div>
      <div className={'ProductCard-desc'}>
        {data.description}
      </div>

      <div className={'ProductCard-amount'}>
        <div className={'ProductCard-amount-title'}>
          모집금<span>{cashFormat(data.invest_amount)} 만원</span>
        </div>
        <div style={{
          background: `linear-gradient(to right, #0a7ec2 ${investedPercent}%, #e5e5e5 ${100 - investedPercent}%)`,
          height: '4px'
        }}></div>
      </div>

      <div className={'ProductCard-result'}>
        <div className={'ProductCard-result-col'}>
          <div className={'ProductCard-result-col-title'}><span>예상 총 수익</span></div>
          <div className={'ProductCard-result-col-value'}><span>{cashFormat(totalProfit)} 원</span></div>
        </div>
        <div className={'ProductCard-result-col'}>
          <div className={'ProductCard-result-col-title'}>수수료</div>
          <div className={'ProductCard-result-col-value'}>{cashFormat(commission)} 원</div>
        </div>
        <div className={'ProductCard-result-col'}>
          <div className={'ProductCard-result-col-title'}>세금</div>
          <div className={'ProductCard-result-col-value'}>{cashFormat(tax)} 원</div>
        </div>
      </div>

      <div>
        <Button 
          type={'button'}
          size={'small'}
          display={'primary'}
          content={'상품 자세히 보기'}
        />
      </div>
    </div>
    </div>
  );
};

export default ProductCard;