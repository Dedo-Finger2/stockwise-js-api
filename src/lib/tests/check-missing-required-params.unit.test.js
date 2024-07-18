import { checkMissingRequiredParams } from "./../check-missing-required-params.js";

describe("Check Missing Required Params Utils Func", () => {
  it("should throw TypeError if an required param has no value", () => {
    // Given
    const testObject = {
      name: undefined,
      email: undefined,
      password: "teste",
      optional: undefined
    };
    const requiredParams = ["name", "email", "password"];

    // When
    const sut = () => checkMissingRequiredParams(requiredParams, testObject);

    // Expect
    expect(sut).toThrow(new TypeError("Missing required params: name, email"));
  });

  it("should not throw TypeError if all required params are passed", () => {
    // Given
    const testObject = {
      name: "undefined",
      email: "undefined",
      password: "teste",
      optional: "undefined"
    };
    const requiredParams = ["name", "email", "password"];

    // When
    const sut = checkMissingRequiredParams(requiredParams, testObject);

    // Expect
    expect(sut).toBeUndefined();
  });
});
