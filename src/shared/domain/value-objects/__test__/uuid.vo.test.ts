import { InvalidUuidError, Uuid } from "../uuid.vo";

describe("Uuid Unit Test", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  test("should throw error when uuid is invalid", () => {
    expect(() => {
      const uuid = new Uuid("invalid-uuid");
    }).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should create a valid uuid with id", () => {
    const uuid = new Uuid("e1b3a8f5-3c3f-4e5e-8e3b-0e5c2b4b2b7b");
    expect(uuid.id).toBe("e1b3a8f5-3c3f-4e5e-8e3b-0e5c2b4b2b7b");
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
