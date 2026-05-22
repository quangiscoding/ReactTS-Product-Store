import type { User } from "../../types/user.type.ts";

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  isLoading: boolean;
  error: string | null;
}
