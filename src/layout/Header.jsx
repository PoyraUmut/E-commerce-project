import { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Search, ShoppingCart, Heart, User,
  ChevronDown, Menu, X, LogOut,
} from "lucide-react";
import md5 from "md5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

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

  const slugify = (text = "") =>
    text.toLowerCase()
      .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c")
      .replace(/ö/g, "o").replace(/ü/g, "u").replace(/ğ/g, "g")
      .replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const convertGender = (gender) => gender === "k" ? "kadin" : "erkek";

  const womenCategories = categories.filter((c) => c.gender === "k");
  const menCategories = categories.filter((c) => c.gender === "e");

  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold text-2xl">Bandage</Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 relative">
          <NavLink exact to="/" activeClassName="text-[#23A6F0]">Home</NavLink>

          <div
            className="relative pb-4"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <NavLink to="/shop" activeClassName="text-[#23A6F0]" className="flex items-center gap-1">
              Shop <ChevronDown size={14} />
            </NavLink>

            {shopOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl p-8 grid grid-cols-2 gap-20 min-w-[400px] z-50">
                <div>
                  <h3 className="font-semibold mb-4">Kadın</h3>
                  <div className="flex flex-col gap-3 text-gray-600">
                    {womenCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/shop/${convertGender(cat.gender)}/${slugify(cat.title)}/${cat.id}`}
                        className="hover:text-[#23A6F0]"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Erkek</h3>
                  <div className="flex flex-col gap-3 text-gray-600">
                    {menCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/shop/${convertGender(cat.gender)}/${slugify(cat.title)}/${cat.id}`}
                        className="hover:text-[#23A6F0]"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" activeClassName="text-[#23A6F0]">About</NavLink>
          <NavLink to="/blog" activeClassName="text-[#23A6F0]">Blog</NavLink>
          <NavLink to="/contact" activeClassName="text-[#23A6F0]">Contact</NavLink>
          <NavLink to="/team" activeClassName="text-[#23A6F0]">Pages</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
                <Link to="/login" className="flex items-center gap-1">
                  <User size={16} />Login
                </Link>
                <span className="text-gray-400">/</span>
                <Link to="/signup">Register</Link>
              </div>
            ) : (
              <>
                <div
                  className="relative"
                  onMouseEnter={() => setProfileOpen(true)}
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-medium">{user.name}</span>
                    <ChevronDown size={14} />
                  </div>

                  {profileOpen && (
                    <div className="absolute right-0 top-full bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Siparişlerim
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleLogout}
                  className="text-red-500 text-sm flex items-center gap-1"
                >
                  <LogOut size={16} />Logout
                </button>
              </>
            )}
          </div>

          <Search size={18} className="cursor-pointer hidden md:block" />

          <div
            className="relative cursor-pointer hidden md:block"
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs text-blue-500 font-bold">
                {cartCount}
              </span>
            )}

            {cartOpen && cart.length > 0 && (
              <div className="absolute right-0 top-full bg-white shadow-xl rounded-lg p-4 w-80 z-50">
                <h3 className="font-semibold mb-4">Sepetim ({cart.length} Ürün)</h3>

                <div className="flex flex-col gap-4 max-h-72 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 items-center">
                      <img
                        src={item.product.images?.[0]?.url || ""}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-2">{item.product.name}</p>
                        <p className="text-xs text-gray-400 mt-1">Adet: {item.count}</p>
                        <p className="text-sm text-orange-500 font-semibold mt-1">
                          ${item.product.price?.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  <Link
                    to="/cart"
                    className="flex-1 text-center border py-2 rounded text-sm font-medium hover:bg-gray-50"
                  >
                    Sepete Git
                  </Link>
                  <Link
                    to="/checkout"
                    className="flex-1 text-center bg-orange-500 text-white py-2 rounded text-sm font-medium hover:bg-orange-600"
                  >
                    Siparişi Tamamla
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative cursor-pointer hidden md:block">
            <Heart size={18} />
            <span className="absolute -top-2 -right-2 text-xs text-blue-500">1</span>
          </div>

          {user && (
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full md:hidden" />
          )}

          <button className="md:hidden relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full bg-white shadow-md transform transition-all duration-300 ease-in-out md:hidden z-40 ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="flex flex-col items-center justify-center pt-24 pb-12 gap-8 text-2xl font-medium">
          <NavLink exact to="/" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">Home</NavLink>
          <NavLink to="/shop" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">Shop</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">About</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">Contact</NavLink>
          <NavLink to="/team" onClick={() => setMenuOpen(false)} activeStyle={{ color: "#23A6F0" }} className="text-gray-500">Pages</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
