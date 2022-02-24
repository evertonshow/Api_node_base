import { userProps } from "../../DTO/user";
import { Entity } from "../../core/domain/Entity";

class User extends Entity<userProps> {
  private constructor(props: userProps, id?: string) {
    super(props, id);
  }

  static create(props: userProps, id?: string) {
    const user = new User(props, id);

    if (typeof props.address.number !== "number") {
      throw new Error("Error is not number!");
    }

    return user;
  }
}

export { User };
