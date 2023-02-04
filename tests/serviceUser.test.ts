import { expect } from 'chai';
import Sinon from 'sinon';

import IUsers from "../src/Interfaces/IUsers";
import MockEnd from '../src/MockEnd/MockEnd';

describe('Testa todos os serviços de usuário', function () {
  it('Testa se o método "findAllUsers" na camada de serviço retorna uma lista de usuários', async function () {
    const user: IUsers = {
      id: 2,
      name: 'testeName',
      tax: 50,
    };

    const listUser: IUsers[] = [user]
    const mockEnd = new MockEnd();
    Sinon.stub(mockEnd, 'findAllUsers').resolves(listUser)
    const getUsers = await mockEnd.findAllUsers();
    expect(getUsers).to.be.deep.equal(listUser);

  })
});