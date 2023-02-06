import { MyNewError } from "../err/GenericError";
import { NextFunction, Request, Response } from 'express';

export default async function checkRequest(
  req: Request,
  _res: Response,
  next: NextFunction) {
  const userId = Number(req.params.id);
  const { productList } = req.body;

  if (!userId || typeof (userId) !== "number") {
    throw new MyNewError(400, 'User id missing or in invalid format')
  }
  try {
    JSON.parse(productList[0]);
  } catch (error) {
    throw new MyNewError(400, 'productList missing or in invalid format')
  }

  next();
}
