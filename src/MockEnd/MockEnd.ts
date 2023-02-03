import axios from 'axios';
import IUsers from '../Interfaces/IUsers';

class MockEnd {
 private usersURL: string;
 private productsURL: string;
 private usersList: IUsers[];

  constructor() {
    this.usersURL = 'https://mockend.com/juunegreiros/BE-test-api/users';
    this.productsURL = 'https://mockend.com/juunegreiros/BE-test-api/products';
    this.usersList = [];
  }

  public async findAllUsers() {
   const req = await axios.get(this.usersURL)
    .then((list) => {
      this.usersList.push(...list.data)
      return this.usersList;
    })
    .catch((error) => {
      console.log(error);
    })
    return req;
  }

  public async findAllProducts() {
    axios.get(this.usersURL)
      .then((productsList) => {
        return productsList.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}



export default MockEnd;