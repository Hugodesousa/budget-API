import axios from 'axios';
import IProducts from '../Interfaces/IProducts';
import IUsers from '../Interfaces/IUsers';

class MockEnd {
 private usersURL: string;
 private productsURL: string;
 private usersList: IUsers[];
 private productsList: IProducts[];

  constructor() {
    this.usersURL = 'https://mockend.com/juunegreiros/BE-test-api/users';
    this.productsURL = 'https://mockend.com/juunegreiros/BE-test-api/products';
    this.usersList = [];
    this.productsList = [];
  }

  private async funcAxios(url: string): Promise<IUsers[] | IProducts[]> {
    const req = await axios.get(url)
      .then((list) => {
        return list.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return req as IUsers[] | IProducts[];
  }

  public async findAllUsers(): Promise<IUsers[]> {
    const usersList = await this.funcAxios(this.usersURL)
    return usersList as IUsers[];
  }

  public async findAllProducts(): Promise<IProducts[]> {
    const productsList = await this.funcAxios(this.productsURL)
    return productsList as IProducts[];
  }
}



export default MockEnd;