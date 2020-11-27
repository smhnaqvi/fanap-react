export interface User {
  id: number;
  name: string;
  userName: string;
}

export interface Register {
  name: string;
  userName: string;
  password: string;
}

export interface Login {
  userName: string;
  password: string;
}
