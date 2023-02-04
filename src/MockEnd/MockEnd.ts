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
  // refatorar para o axios ficar generico
  public async findAllUsers(): Promise<void | IUsers[]> {
   const req = await axios.get(this.usersURL)
    .then((list) => {
      this.usersList.push(...list.data)
      return this.usersList;
    })
    .catch((error) => {
      console.log(error);
    });
    return req as IUsers[];
  }

  public async findAllProducts() {
    const req = await axios.get(this.productsURL)
      .then((productsList) => {
        this.productsList.push(...productsList.data)
        return this.productsList;
      })
      .catch((error) => {
        console.log(error);
      });
      return req as IProducts[];
  }
}



export default MockEnd;