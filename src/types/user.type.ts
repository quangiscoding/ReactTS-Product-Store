export type Role = "admin" | "user";

export interface User {
  role: Role;
  userId: number;
  username: string;
}
