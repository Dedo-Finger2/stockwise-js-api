export default class InstanciateAbstractClassError extends Error {
  constructor(messsage = "Tried to instanciate an abstract class.") {
    super(messsage);
    this.message = messsage;
    this.name = this.constructor.name;
  }
}
