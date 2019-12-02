import { autobind } from 'core-decorators';
import dummyProduct from './product.json';

/* 서버와 통신하는 로직 */
@autobind
class ProductRepository {
  public getProducts() {
    const response = {
      status: 200,
      data: {
        version: 1.0,
        message: '상품조회',
        product: dummyProduct.list,
      },
    };

    return response;
  }
}

export default new ProductRepository();
