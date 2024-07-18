/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
import InstanciateAbstractClassError from "./../../../errors/instanciate-abstract-class.error.js";
import MethodNotImplementedError from "./../../../errors/method-not-implemented.error.js";

export default class ItemRepository {
  constructor() {
    if (this.constructor === ItemRepository) {
      throw new InstanciateAbstractClassError();
    }
  }

  /**
   * @param {Object} input - Item data
   * @param {string} input.itemId
   * @param {string} input.userId
   * @param {string} input.categoryId
   * @param {string} input.unitTypeId
   * @param {string} input.name
   * @param {string} input.description
   * @param {number} input.minQuantity
   * @param {Date} input.createdAt
   * @param {Date} input.updatedAt
   * @returns {Promise<void>}
   */
  async save({
    itemId,
    userId,
    categoryId,
    unitTypeId,
    name,
    description,
    minQuantity,
    createdAt,
    updatedAt
  }) {
    throw new MethodNotImplementedError();
  }

  /**
   * @param {string} itemId - Item UUID
   * @param {Object} input - New Item Data
   * @param {string?} input.categoryId
   * @param {string?} input.unitTypeId
   * @param {string?} input.name
   * @param {string?} input.description
   * @param {number?} input.minQuantity
   * @param {Date} input.updatedAt
   * @returns {Promise<void>}
   */
  async update(itemId, { categoryId, unitTypeId, name, description, minQuantity, updatedAt }) {
    throw new MethodNotImplementedError();
  }

  /**
   * @param {string} itemId
   * @returns {Promise<Object | undefined>}
   */
  async getItem({ itemId }) {
    throw new MethodNotImplementedError();
  }

  /**
   * @param {string} itemId
   * @returns {Promise<void>}
   */
  async deleteItem({ itemId }) {
    throw new MethodNotImplementedError();
  }
}
