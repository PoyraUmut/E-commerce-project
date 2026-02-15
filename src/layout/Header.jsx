import { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import md5 from "md5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.client.user);

  const handleLogout = () => {
    dispatch({ type: "SET_USER", payload: null });
    dispatch({ type: "SET_TOKEN", payload: null });
    localStorage.removeItem("token");
    history.push("/");
    setMenuOpen(false);
  };

  const avatar =
    user &&
    `https://www.gravatar.com/avatar/${md5(
      user.email.trim().toLowerCase()
    )}?d=identicon`;

  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold text-2xl">
          Bandage
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <NavLink exact to="/" activeClassName="text-[#23A6F0]">
            Home
          </NavLink>
          <NavLink
            to="/shop"
            activeClassName="text-[#23A6F0]"
            className="flex items-center gap-1"
          >
            Shop <ChevronDown size={14} />
          </NavLink>
          <NavLink to="/about" activeClassName="text-[#23A6F0]">
            About
          </NavLink>
          <NavLink to="/blog" activeClassName="text-[#23A6F0]">
            Blog
          </NavLink>
          <NavLink to="/contact" activeClassName="text-[#23A6F0]">
            Contact
          </NavLink>
          <NavLink to="/team" activeClassName="text-[#23A6F0]">
            Pages
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
                <Link to="/login" className="flex items-center gap-1">
                  <User size={16} />
                  Login
                </Link>
                <span className="text-gray-400">/</span>
                <Link to="/signup">Register</Link>
              </div>
            ) : (
              <>
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-500 text-sm flex items-center gap-1"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            )}
          </div>

          <Search size={18} className="cursor-pointer hidden md:block" />

          <div className="relative cursor-pointer hidden md:block">
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

          {user && (
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full md:hidden"
            />
          )}

          <button
            className="md:hidden relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transform transition-all duration-300 ease-in-out md:hidden z-40 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-24 pb-12 gap-8 text-2xl font-medium">
          <NavLink
            exact
            to="/"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            Contact
          </NavLink>

          <NavLink
            to="/team"
            onClick={() => setMenuOpen(false)}
            activeStyle={{ color: "#23A6F0" }}
            className="text-gray-500"
          >
            Pages
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
