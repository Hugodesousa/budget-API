import Iusers from "../Interfaces/IUsers";
import MockEnd from "../MockEnd/MockEnd";

class UsersService {
  private mockEnd: MockEnd;

  constructor() {
    this.mockEnd = new MockEnd()
  }

  public async findAllUsers()  {
    const usersList = await this.mockEnd.findAllUsers(); 
    return usersList;
  }
}



export default UsersService;