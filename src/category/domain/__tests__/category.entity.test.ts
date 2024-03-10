import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { Category } from "../category.entity";

describe("Category Unit Test", () => {
  describe("constructor", () => {
    test("should create a category with default values", () => {
      const category = new Category({
        name: "Movie",
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBe(true);
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with name and description", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });

    test("should create category with name and activate is disable", () => {
      const category = new Category({
        name: "Movie",
        is_active: false,
      });
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });
  });

  describe("category_id field", () => {
    const arrange = [
      {
        category_id: null,
      },
      {
        category_id: undefined,
      },
      {
        category_id: new Uuid(),
      },
    ];

    test.each(arrange)(
      "should create a category with category_id %p",
      (props) => {
        const category = new Category({
          name: "Movie",
          category_id: props.category_id as any,
        });

        expect(category.category_id).toBeInstanceOf(Uuid);
        if (props.category_id instanceof Uuid) {
          expect(category.category_id).toBe(props.category_id);
        }
      }
    );
  });

  test("should create a category and change name", () => {
    const category = new Category({
      name: "Movie",
    });
    category.changeName("Movie1");
    expect(category.name).toBe("Movie1");
  });

  test("should create a category and change description", () => {
    const category = new Category({
      name: "Movie",
      description: "Movie description",
    });
    category.changeDescription("Movie1 description");
    expect(category.description).toBe("Movie1 description");
  });
});
