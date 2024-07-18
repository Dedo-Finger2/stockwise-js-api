export default class MethodNotImplementedError extends Error {
  constructor(messsage = "Method not implemented.") {
    super(messsage);
    this.message = messsage;
    this.name = this.constructor.name;
  }
}
