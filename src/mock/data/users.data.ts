import type { User } from "../../types/user.type.ts";

export type MockUser = User & { password: string };

export const mockUsers: MockUser[] = [
  {
    userId: 1,
    username: "user",
    password: "123456",
    role: "user",
  },
  {
    userId: 2,
    username: "user",
    password: "111111",
    role: "user",
  },
];
