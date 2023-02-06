import { expect } from 'chai';
import Sinon from 'sinon';
import IProducts from '../src/Interfaces/IProducts';
import MockEnd from '../src/MockEnd/MockEnd';
import budgetService from '../src/Services/budget.service';

describe.only('', function () {
  it('', async function () {
    const budget = new budgetService(1, [1, 2])
    Sinon.stub(budget['mockEnd'], 'findProduct').callsFake(() => {
      return Promise.resolve([{ id: 1, name: 'dfsdfdsfd', price: 1000 }, { id: 2, name: 'dfsdfdsfd', price: 2000 }]);
    });
    Sinon.stub(budget['mockEnd'], 'findUser').callsFake(() => {
      return Promise.resolve([{ id: 1, name: 'dfsdfdsfd', tax: 100 }]);
    });

    const calculate = await budget.calculateBudget();
    // console.log(calculate);
    
    expect(calculate).to.be.equal(2000);
    Sinon.restore();
    // const products: IProducts[] = [{
    //   id: 2,
    //   name: 'testeName',
    //   price: 5000,
    // },
    // {
    //   id: 1,
    //   name: 'testeName2',
    //   price: 4000,
    // }];

    // // const listProducts: IP[] = [user]
    // const mockEnd = new MockEnd();
    // Sinon.stub(mockEnd, 'findAllProducts').resolves(products)
    // const getProducts = await mockEnd.findAllProducts();
    // expect(getProducts).to.be.deep.equal(products);
  })
});