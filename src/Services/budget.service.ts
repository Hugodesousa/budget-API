import User from "../Domains/User";
import IProducts from "../Interfaces/IProducts";
import MockEnd from "../MockEnd/MockEnd";

class BudgetService {
  private mockEnd: MockEnd;
  private productList: IProducts[];
  private userId: number;
  private productIdList: number[];
  private user: Promise<User | Error>;

  constructor(userId: number, productsIdList: number[]) {
    this.mockEnd = new MockEnd();
    this.productIdList = productsIdList;
    this.userId = userId;
    this.productList = [];
    this.user = this.getUser();
    this.getProducts;
  }

  private async getUser() {
  const getUser = await this.mockEnd.findUser(this.userId);
      if (getUser.length === 0) {
        return new Error('User Not Found')
      }
      const user = new User(getUser[0]);
      return user;
  }

  private getProducts(): void{
    this.productIdList.forEach(async (productId: number) => {
      const findProducts = await this.mockEnd.findProduct(productId)
      if (findProducts.length === 0) {
        return new Error('Product Not Found')
      }
      this.productList.push(...findProducts)
    })

  }

  public async calculateBudget() {
    

    return productsList;
  }
}

export default BudgetService;