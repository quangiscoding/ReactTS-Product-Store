import { Link } from "react-router-dom";

const Login = () => {
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
              />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="text"
                placeholder="Password@123"
                className="input"
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-4">
              <button type="button" className="btn btn-flex btn-primary">
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
