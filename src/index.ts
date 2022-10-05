import { faker } from "@faker-js/faker/locale/en";
import "./styles/index.scss";

export const createRandomUser = () => {
   return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
   };
};

const USERS: any[] = [];

Array.from({ length: 10 }).forEach(() => {
   USERS.push(createRandomUser());
});

const d = Array.from({ length: 3 });
console.log(d);
