import IProducts from "../Interfaces/IProducts";
import MockRequest from "./mockRequest";

class Product extends MockRequest {
  private price: number;

  constructor(product: IProducts) {
    super(product)
    this.price = product.price;
  }
}

export default Product;