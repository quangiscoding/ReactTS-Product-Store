import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/auth/authSelector.ts";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice.ts";

const AuthButton = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("U sure u wanna log out bruh?")) {
      dispatch(logout());
      navigate("/");
    }
  };

  if (user) {
    return (
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    );
  }

  return (
    <Link to="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

export default AuthButton;
