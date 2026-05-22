import { mockUsers } from "../../mock/users.ts";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailed,
} from "../../features/auth/authSlice.ts";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    try {
      dispatch(loginStart());

      const foundUser = mockUsers.find(
        (u) => u.username === form.username && u.password === form.password,
      );

      if (!foundUser) {
        dispatch(loginFailed("Invalid username or password"));
        return;
      }

      dispatch(
        loginSuccess({
          user: {
            userId: foundUser.userId,
            username: foundUser.username,
            role: foundUser.role,
          },
          token: "fake-token",
        }),
      );

      navigate("/");
    } catch (error) {
      dispatch(loginFailed("Something went wrong"));
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full rounded-lg shadow-lg p-8">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <div className="w-full flex flex-col gap-6">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="John Doe"
                className="input"
                value={form.username}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password@123"
                className="input"
                value={form.password}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="btn btn-flex btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
              <Link to="/" className="btn btn-flex btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
