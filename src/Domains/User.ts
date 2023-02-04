import IUsers from "../Interfaces/IUsers";
import MockRequest from "./mockRequest";

class User extends MockRequest {
  private tax: number;

  constructor(user: IUsers) {
    super(user)
    this.tax = user.tax;
  }
}

export default User;