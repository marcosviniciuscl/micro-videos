import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe("ValueObject Unit Test", () => {
  test("should be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test");

    expect(valueObject1.equals(valueObject2)).toBeTruthy();
  });

  test("should be equals complex object", () => {
    const valueObject1 = new ComplexValueObject("test", 1);
    const valueObject2 = new ComplexValueObject("test", 1);

    expect(valueObject1.equals(valueObject2)).toBeTruthy();
  });

  test("should not be equals complex object", () => {
    const valueObject1 = new ComplexValueObject("test", 1);
    const valueObject2 = new ComplexValueObject("test2", 2);

    expect(valueObject1.equals(valueObject2)).toBeFalsy();
  });
});
