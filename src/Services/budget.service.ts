import User from "../Domains/User";
import IProducts from "../Interfaces/IProducts";
import IUsers from "../Interfaces/IUsers";
import MockEnd from "../MockEnd/MockEnd";

class BudgetService {
  private mockEnd: MockEnd;
  private productList: IProducts[];
  private userId: number;
  private productIdList: number[];
  private user: IUsers[];

  constructor(userId: number, productsIdList: number[]) {

    this.mockEnd = new MockEnd();
    this.productIdList = productsIdList;
    this.userId = userId;
    this.productList = [];
    this.user = [];
  }

  private async getUser(): Promise<Error | undefined> {
    const getUser = await this.mockEnd.findUser(this.userId);
    if (getUser.length === 0) {
      return new Error('User Not Found')
    }
    this.user.push(getUser[0]);
  }

  private async getProducts(): Promise<void | Error> {
    const productPromises = this.productIdList
      .map(productId => this.mockEnd.findProduct(productId));
    const productLists = await Promise.all(productPromises);

    productLists.forEach((product) => {
      if (product.length === 0) {
        return new Error('Product Not Found');
      }
      this.productList.push(...product);
    });
  }

  public async calculateBudget() {
    await this.getProducts();
    await this.getUser();
    const myUser = this.user[0];
    let value = 0;
    console.log(this.productList);

    this.productList.forEach((product) => {
      value += product.price;
    })

    const budget = (value / 100) * myUser.tax
    return budget;
  }
}

export default BudgetService;