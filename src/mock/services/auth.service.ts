import { mockUsers } from "../data/users.data.ts";
import type { Role } from "../../types/user.type.ts";

interface LoginRequest {
  username: string;
  password: string;
}

type LoginResponse = {
  user: {
    userId: number;
    username: string;
    role: Role;
  };
  token: string;
};

export function loginMock({
  username,
  password,
}: LoginRequest): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.username === username && u.password === password,
      );

      if (!user) {
        reject(new Error("Invalid credentials"));
        return;
      }

      resolve({
        user: {
          userId: user.userId,
          username: user.username,
          role: user.role,
        },
        token: "fake-token",
      });
    }, 500);
  });
}
