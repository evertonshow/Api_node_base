export type userProps = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  cpf: string;
  address: {
    uf: string;
    city: string;
    district: string;
    street: string;
    number: number;
    zip_code: string;
  };
  createAt: Date;
};
