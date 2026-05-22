import { Link } from "react-router-dom";
import CartButton from "./CartButton.tsx";

interface NavbarProps {
  showSearch: boolean;
}

const Navbar = ({ showSearch }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          className="text-2xl font-bold text-blue-600 whitespace-nowrap"
          to="/"
        >
          Minh Quang Galaxy
        </Link>
        {/* Search bar */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search products..."
            className="input input-search"
          />
        )}
        {/* Right side */}
        <div className="flex items-center gap-3">
          <CartButton />
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
