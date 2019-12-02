import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';

import productRepo from './ProductRepository';

export type Product = {
  title: string;
  category: string;
  total_amount: number;
  invest_amount: number;
  interest_rate: number;
  month: number;
  commission: number;
  description: string;
  url: string;
};

@autobind
class ProductStore {
  /* signleton patton */
  private static instance: ProductStore|null = null;
  public static getInstance(): ProductStore|null {
    if (this.instance === null) {
      this.instance = new ProductStore();
    }

    return ProductStore.instance;
  }

  @observable public productList: Product[] = [];

  @action
  public getProductList() {
    try {
      const { status, data } = productRepo.getProducts();

      if (status !== 200) {

      }

      this.productList = data.product;
    } catch (error) {
      
    }
  }
}

export default ProductStore.getInstance();