import { Router, NextFunction, Request, Response } from 'express';

class ProductsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private productsService: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.productsService = new productsService();
  }


}

export default ProductsController;