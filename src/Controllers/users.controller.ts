import { NextFunction, Request, Response } from 'express';
import IUsers from '../Interfaces/IUsers';
import UsersService from '../Services/users.service';

class UsersController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private usersService: UsersService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.usersService = new UsersService();
  }

  public async findAllUsers() {
    try {
      const allUsers: void | IUsers[] = await this.usersService.findAllUsers();
      return this.res.status(200).json(allUsers);
    } catch (error) {
      this.next(error)   
    }
  }

}

export default UsersController;