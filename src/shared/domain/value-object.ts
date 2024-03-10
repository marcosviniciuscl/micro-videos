import { isEqual } from "lodash";

export class ValueObject {
  public equals(vo: this): boolean {
    if (vo == null || vo == undefined) {
      return false;
    }

    // Pega o nome da classe para saber se é diferente
    if (vo.constructor.name !== this.constructor.name) {
      return false;
    }

    return isEqual(vo, this);
  }
}
