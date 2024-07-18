import ItemEntity from "../../domain/entities/item.entity.js";

describe("Item Entity", () => {
  it("should be able to instanciante a new Item Entity", () => {
    // Given
    const itemData = {
      userId: "a",
      categoryId: "a",
      description: "a",
      minQuantity: 1,
      name: "a",
      unitTypeId: "a"
    };

    // When
    const sut = ItemEntity.build(itemData);

    // Expect
    expect(sut.itemId).toBeDefined();
    expect(sut.createdAt).toBeDefined();
    expect(sut.name).toBe("A");
  });

  it("should not be able to instanciante a item entity if min_quantity is less or equal do 0", () => {
    // Given
    const itemData = {
      userId: "a",
      categoryId: "a",
      description: "a",
      minQuantity: 0,
      name: "a",
      unitTypeId: "a"
    };

    // When
    const sut = () => ItemEntity.build(itemData);

    // Expect
    expect(sut).toThrow(new TypeError("Item's min_quantity cannot be equal or less than zero."));
  });

  it("should format the name of the item", () => {
    // Given
    const itemData = {
      userId: "a",
      categoryId: "a",
      description: "a",
      minQuantity: 1,
      name: "     teste nome item 01  ",
      unitTypeId: "a"
    };

    // When
    const sut = ItemEntity.build(itemData);

    // Expect
    expect(sut.name).toBe("TESTE-NOME-ITEM-01");
  });

  it("should now allow to instanciate a new item if required params are not passed", () => {
    // Given
    const itemData = {
      userId: undefined,
      categoryId: undefined,
      description: "a",
      minQuantity: undefined,
      name: undefined,
      unitTypeId: undefined
    };

    // When
    const sut = () => ItemEntity.build(itemData);

    // Expect
    expect(sut).toThrow(
      new TypeError("Missing required params: userId, categoryId, unitTypeId, name, minQuantity")
    );
  });
});
