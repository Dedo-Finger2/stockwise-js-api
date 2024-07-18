/* eslint-disable require-await */
import ItemRepository from "./../contracts/item-repository.contract.js";

export default class InMemoryItemRepository extends ItemRepository {
  items = new Map();

  constructor() {
    super();
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
    this.items.set(itemId, {
      userId,
      categoryId,
      unitTypeId,
      name,
      description,
      minQuantity,
      createdAt,
      updatedAt
    });
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
    this.items.set(itemId, { categoryId, unitTypeId, name, description, minQuantity, updatedAt });
  }

  /**
   * @param {string} itemId
   * @returns {Promise<Object | undefined>}
   */
  async getItem({ itemId }) {
    const item = this.items.get(itemId);

    if (item) {
      item.priceLog = [];
      item.quantityInStock = 1;
    }

    return item;
  }

  /**
   * @param {string} itemId
   * @returns {Promise<void>}
   */
  async deleteItem({ itemId }) {
    this.items.delete(itemId);
  }
}
