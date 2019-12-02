import React, { useState } from 'react';
import ProductCardList from '../../common/ProductCardList';
import CalcInput from '../../common/CalcInput';
import './HomeCalc.scss';

import { Product } from '../../../store/Product/ProductStore';

type Props = {
  productList: Product[];
};

const HomeCalc: React.SFC<Props> = ({ productList }) => {
  const defaultCalcValue = '10';
  const [invested, setInverted] = useState<string>(''); // 입력창에 입력된 값
  const [calcValue, setCalcValue] = useState<string>(defaultCalcValue); // 계산할 값

  const onChangeInverted = (e: any) => {
    const { value } = e.target;

    setInverted(value);
  };

  const onCalcProfit = () => {
    const investedNum = parseInt(invested, 10);

    if (isNaN(investedNum)) {
      alert('숫자만 입력가능합니다');
      setInverted('');
      return;
    }
    
    setInverted(investedNum.toString());
    setCalcValue(invested);
  }

  return (
    <div className={'HomeCalc'}>
      <div className={'HomeCalc-inputArea MainTemplate'}>
        <div className={'HomeCalc-inputArea-title'}>
          피플펀드 대표 상품의<br/>
          투자 수익을 확인해보세요.
        </div>
        <div className={'HomeCalc-inputArea-form'}>
          <CalcInput
            title={'투자금액'}
            value={invested}
            placeholder={defaultCalcValue}
            onChange={onChangeInverted}
            onSubmit={onCalcProfit}
          />
        </div>
      </div>

      <div className={'HomeCalc-products'}>
        <ProductCardList 
          productList={productList} 
          invested={calcValue} />
      </div>
    </div>
  );
};

export default HomeCalc;