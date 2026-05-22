import {
  loginStart,
  loginSuccess,
  loginFailed,
} from "../../features/auth/authSlice.ts";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginMock } from "../../mock/services/auth.service.ts";
import { selectIsLoading } from "../../features/auth/authSelector.ts";

const LoginBtn = ({ form }) => {
  const isLoading = useSelector(selectIsLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      dispatch(loginStart());

      const request = await loginMock(form);
      console.log("request", request);

      dispatch(loginSuccess(request));
      navigate("/");
    } catch (error) {
      console.log("error:", error);
      dispatch(loginFailed("Invalid credentials"));
    }
  };
  return (
    <button
      onClick={handleLogin}
      disabled={isLoading}
      className="btn btn-primary disabled:opacity-50 flex-1"
    >
      {isLoading ? "Logging in..." : "Login"}
    </button>
  );
};

export default LoginBtn;
