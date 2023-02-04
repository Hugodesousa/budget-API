import IRequest from "../Interfaces/IRequest";

class MockRequest {
  protected id: number;
  protected name: string;

  constructor(req: IRequest) {
    this.id = req.id;
    this.name = req.name;
  }
}

export default MockRequest;