import InMemoryItemRepository from "./../../repositories/implementations/in-memory-item.repository.js";

describe("In Memory Item Repository", () => {
  it("should save an item in the database", async () => {
    // Given
    const itemData = {
      itemId: "item1",
      userId: "a",
      categoryId: "a",
      unitTypeId: "a",
      name: "a",
      description: "a",
      minQuantity: 1,
      createdAt: new Date(),
      updatedAt: undefined
    };
    const sut = new InMemoryItemRepository();

    // When
    await sut.save(itemData);

    // Expect
    expect(sut.items.size).toBe(1);
  });

  it("should update an item data", async () => {
    // Given
    const itemId = "item01";
    const itemData = {
      itemId: "item01",
      userId: "a",
      categoryId: "a",
      unitTypeId: "a",
      name: "a",
      description: "a",
      minQuantity: 1,
      createdAt: new Date(),
      updatedAt: undefined
    };
    const newItemData = {
      unitTypeId: "b",
      categoryId: "b",
      name: "b",
      description: "b",
      minQuantity: 2,
      updatedAt: new Date()
    };
    const sut = new InMemoryItemRepository();
    sut.items.set(itemId, itemData);

    // When
    await sut.update(itemId, newItemData);

    // Expect
    expect(sut.items.size).toBe(1);
    expect(sut.items.get(itemId).name).toBe("b");
    expect(sut.items.get(itemId).updatedAt).toBeDefined();
  });

  it("should delete an item from the database", async () => {
    // Given
    const itemId = "item01";
    const itemData = {
      itemId: "item01",
      userId: "a",
      categoryId: "a",
      unitTypeId: "a",
      name: "a",
      description: "a",
      minQuantity: 1,
      createdAt: new Date(),
      updatedAt: undefined
    };
    const sut = new InMemoryItemRepository();
    sut.items.set(itemId, itemData);

    // When
    await sut.deleteItem({ itemId });

    // Expect
    expect(sut.items.size).toBe(0);
  });

  it("should return an item data from the database", async () => {
    // Given
    const itemId = "item01";
    const itemData = {
      itemId: "item01",
      userId: "a",
      categoryId: "a",
      unitTypeId: "a",
      name: "a",
      description: "a",
      minQuantity: 1,
      createdAt: new Date(),
      updatedAt: undefined
    };
    const sut = new InMemoryItemRepository();
    sut.items.set(itemId, itemData);

    // When
    const item = await sut.getItem({ itemId });

    // Expect
    expect(sut.items.size).toBe(1);
    expect(item.name).toBe("a");
    expect(item.priceLog).toBeDefined();
    expect(item.quantityInStock).toBe(1);
  });
});
