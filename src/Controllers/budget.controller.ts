import { NextFunction, Request, Response } from 'express';
import IProducts from '../Interfaces/IProducts';
import BudgetService from '../Services/budget.service';

class BudgetController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private budgetService: BudgetService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.budgetService = new BudgetService();
  }

  public async calculateBudget() {
    const id = Number(this.req.params.id) ;
    const { productList } = this.req.body;
    const budgetService = new BudgetService(id, productList)
    try {
      const budget: number = await budgetService.calculateBudget();
      return this.res.status(200).json({ valorTotal: budget });
    } catch (error) {
      console.log(error);
    }
  }

}

export default BudgetController;