import { ChronosStructure } from "../store/features/chronos/types";

export const bartSimpsonMock: ChronosStructure = {
  username: "Bart",
  surname: "Simpson",
  birthday: "03-06-1980",
  phoneNumber: 123456780,
  email: "elbarto@yahoo.com",
  address: "Evergreen Terrace",
  city: "Springfield",
  aboutYou: "Me gusta pintar paredes",
  profileImage: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
  hability: "Hogar",
  habilityTitle: "Pintar paredes",
  habilityDescription: "Pinto las paredes de tu casa con el diseño que elijas",
};

export const lisaSimpsonMock: ChronosStructure = {
  username: "Lisa",
  surname: "Simpson",
  birthday: "13-10-1982",
  phoneNumber: 123456709,
  email: "saxolisa@yahoo.com",
  address: "Evergreen Terrace",
  city: "Springfield",
  aboutYou: "Amenizo cualquier situación con un poco de jazz",
  profileImage:
    "https://hips.hearstapps.com/hmg-prod/images/the-simpsons-lisa-1589201259.jpg?crop=0.567xw:1.00xh;0.241xw,0&resize=1200:*",
  hability: "Clases",
  habilityTitle: "Clases Jazz",
  habilityDescription: "2 horas de clase de Jazz a la semana",
};

export const maggieSimpsonMock: ChronosStructure = {
  username: "Maggie",
  surname: "Simpson",
  birthday: "01-01-1985",
  phoneNumber: 123456789,
  email: "pacifier@yahoo.com",
  address: "Evergreen Terrace",
  city: "Springfield",
  aboutYou: "Me gustan los chupetes",
  profileImage:
    "https://static.wikia.nocookie.net/simpsons/images/b/b1/Prairie_Maggie.png/revision/latest/scale-to-width/360?cb=20200301173203",
  hability: "Reparaciones",
  habilityTitle: "Reparar chupete",
  habilityDescription: "Reparo los chupetes rotos o desgastados",
};

export const chronosMock: ChronosStructure[] = [
  bartSimpsonMock,
  lisaSimpsonMock,
  maggieSimpsonMock,
];
