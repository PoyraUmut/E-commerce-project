import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold text-2xl">
          Bandage
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>

          <Link to="/shop" className="flex items-center gap-1">
            <span>Shop</span>
            <ChevronDown size={14} />
          </Link>

          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Pages</Link>
        </nav>

        <div className="flex items-center gap-6 text-gray-700">
          <Link
            to="/login"
            className="hidden md:flex items-center gap-1 text-blue-500 font-semibold text-sm"
          >
            <User size={16} />
            Login / Register
          </Link>

          <Search size={18} className="cursor-pointer" />

          <div className="relative cursor-pointer">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 text-xs text-blue-500">
              1
            </span>
          </div>

          <div className="relative cursor-pointer hidden md:block">
            <Heart size={18} />
            <span className="absolute -top-2 -right-2 text-xs text-blue-500">
              1
            </span>
          </div>

          <Menu size={24} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
