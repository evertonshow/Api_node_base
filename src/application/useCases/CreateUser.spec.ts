import { User } from "../../domain/entidies/users";

describe("Criar um caso uso de um registro de um usuário", () => {
  it("deve ser capaz de criar um registro de usário", () => {
    const user = User.create({
      name: "Everton",
      last_name: "Souza",
      email: "evertonshow2010@gmail.com",
      password: "1234",
      cpf: "000.000.00-71",
      address: {
        uf: "SP",
        city: "Guarulhos",
        district: "Jardim Paris",
        street: "Rua José da Costa",
        number: 102,
        zip_code: "71154-014",
      },
      createAt: new Date(),
    });

    expect(user).toBe(user);
  });
});
