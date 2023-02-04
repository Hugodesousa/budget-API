import { NextFunction, Request, Response } from 'express';
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
    const id = Number(this.req.params.id) ;
    const { productList } = this.req.body; 
    
    this.budgetService = new BudgetService(id, productList);
  }

  public async calculateBudget() {
    try {
      const budget: number = await this.budgetService.calculateBudget();
      return this.res.status(200).json({ valorTotal: budget });
    } catch (error) {
      this.next(error)
    }
  }

}

export default BudgetController;