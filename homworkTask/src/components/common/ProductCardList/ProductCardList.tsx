import React from 'react';
import './ProductCardList.scss';

import { Product } from '../../../store/Product/ProductStore';
import ProductCard from '../ProductCard';

type Props = {
  productList: Product[];
  invested: string;
};

const ProductCardList: React.SFC<Props> = ({ productList, invested }) => {
  const investedCash: number = parseInt(invested, 10);

  const productCards = productList.map((product: Product, i: number) => (
    <ProductCard 
      key={i}
      invested={investedCash}
      data={product} />
  ));

  return (
    <div className={'ProductCardList'}>
      <div className={'ProductCardList-content'}>
        {productCards}
      </div>
    </div>
  );
};

export default ProductCardList;