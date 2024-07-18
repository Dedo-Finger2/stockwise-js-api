import crypto from "node:crypto";
import { checkMissingRequiredParams } from "./../../../lib/check-missing-required-params.js";

export default class ItemEntity {
  constructor({
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
    this.itemId = itemId;
    this.userId = userId;
    this.categoryId = categoryId;
    this.unitTypeId = unitTypeId;
    this.name = name;
    this.description = description;
    this.minQuantity = minQuantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * @param {Object} input
   * @param {string} input.userId - User UUID
   * @param {string} input.categoryId - Category UUID
   * @param {string} input.unitTypeId - UnitType UUID
   * @param {string} input.name - Name of the item
   * @param {string?} input.description - Description of the item
   * @param {number} input.minQuantity - Min quantity accepeted in stock
   */
  static build({ userId, categoryId, unitTypeId, name, description, minQuantity }) {
    ItemEntity.validateMinQuantity(minQuantity);
    checkMissingRequiredParams(["userId", "categoryId", "unitTypeId", "name", "minQuantity"], {
      userId,
      categoryId,
      unitTypeId,
      name,
      minQuantity
    });

    const itemId = crypto.randomUUID();

    const createdAt = new Date();
    const updatedAt = new Date();

    return new ItemEntity({
      itemId,
      createdAt,
      userId,
      categoryId,
      description,
      minQuantity,
      name: ItemEntity.formatName(name),
      unitTypeId,
      updatedAt
    });
  }

  static validateMinQuantity(value) {
    if (value <= 0) {
      throw new TypeError("Item's min_quantity cannot be equal or less than zero.");
    }
  }

  static formatName(value) {
    return value.trim().replaceAll(" ", "-").toUpperCase();
  }
}
