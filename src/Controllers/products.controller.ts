import { NextFunction, Request, Response } from 'express';
import IProducts from '../Interfaces/IProducts';
import ProductsService from '../Services/products.service';

class ProductsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private productsService: ProductsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.productsService = new ProductsService();
  }

  public async findAllProducts() {
    try {
      const allProducts: void | IProducts[] = await this.productsService.findAllProducts();
      return this.res.status(200).json(allProducts);
    } catch (error) {
      console.log(error);
    }
  }

}

export default ProductsController;