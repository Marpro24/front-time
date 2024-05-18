export interface ChronosStructure {
  username: string;
  surname: string;
  birthday: string;
  phoneNumber: number;
  email: string;
  address: string;
  city: string;
  aboutYou: string;
  profileImage: string;
  hability: string;
  habilityTitle: string;
  habilityDescription: string;
}

export interface ChronosStateStructure {
  habilities: ChronosStructure[];
}
