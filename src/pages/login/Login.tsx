import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectError } from "../../features/auth/authSelector.ts";
import LoginBtn from "./LoginBtn.tsx";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const error = useSelector(selectError);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-500">
      <div className="max-w-xl w-full rounded-lg shadow-lg p-8 bg-white dark:bg-gray-900 dark:text-white">
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
            {/* Error */}
            <span className="text-xl text-red-500 text-center italic">
              {error}
            </span>
            {/* Buttons */}
            <div className="flex gap-4">
              <LoginBtn form={form} />
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
