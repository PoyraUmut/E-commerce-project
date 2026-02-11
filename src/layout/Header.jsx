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
        
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          Bandage
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>

          <Link to="/shop" className="flex items-center gap-1">
            <span>Shop</span>
            <ChevronDown size={14} />
          </Link>

          <Link to="/about">About</Link>

          <Link to="/">Blog</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/team">Pages</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-gray-700">
          
          {/* Login & Register */}
          <div className="hidden md:flex items-center gap-2 text-blue-500 font-semibold text-sm">
            <Link to="/login" className="flex items-center gap-1">
              <User size={16} />
              Login
            </Link>

            <span className="text-gray-400">/</span>

            <Link to="/signup">
              Register
            </Link>
          </div>

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
