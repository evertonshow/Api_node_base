import { User } from "../../domain/entidies/users";
import { userProps } from "../../DTO/user";

class CreateUser {
  async execute({
    name,
    last_name,
    email,
    password,
    cpf,
    address,
    createAt,
  }: userProps) {
    const user = User.create({
      name,
      last_name,
      email,
      password,
      cpf,
      address,
      createAt,
    });

    return user;
  }
}
export { CreateUser };
