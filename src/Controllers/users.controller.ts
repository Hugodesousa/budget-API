import { NextFunction, Request, Response } from 'express';
import IUsers from '../Interfaces/IUsers';
import UsersService from '../Services/users.service';
import Controller from './controller';

class UsersController extends Controller {
  private usersService: UsersService;

  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
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