import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import BrandBar from "../components/BrandBar";
import { LayoutGrid, List } from "lucide-react";
import { fetchProducts, fetchCategories, setOffset } from "../store/actions/productActions";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();

  const {
    productList = [],
    categories = [],
    total = 0,
    limit = 25,
    offset = 0,
    fetchState,
  } = useSelector((state) => state.product);

  const [sort, setSort] = useState("rating:desc");
  const [filter, setFilter] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [view, setView] = useState("grid");

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    dispatch(setOffset(0));
  }, [dispatch, categoryId, gender]);

  useEffect(() => {
    let query = "";

    if (categoryId) query += `&category=${categoryId}`;
    if (sort) query += `&sort=${sort}`;
    if (filter) query += `&filter=${filter}`;

    dispatch(fetchProducts(query));
  }, [dispatch, categoryId, gender, limit, offset, sort, filter]);

  const changePage = (newPage) => {
    dispatch(setOffset((newPage - 1) * limit));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const convertGender = (value) => (value === "k" ? "kadin" : "erkek");

  const mapUrlGenderToCode = (value) => {
    if (value === "kadin") return "k";
    if (value === "erkek") return "e";
    return value;
  };

  const slugify = (text = "") =>
    text
      .toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ş/g, "s")
      .replace(/ç/g, "c")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ğ/g, "g")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const topCategories = [...categories]
    .filter((cat) =>
      gender ? cat.gender === mapUrlGenderToCode(gender) : true
    )
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-20 pb-20">

      <section className="px-6 pt-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            {categoryName || "Shop"}
          </h1>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {topCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${convertGender(cat.gender)}/${slugify(cat.title)}/${cat.id}`}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-12">
            <p className="text-sm text-[#737373]">
              Showing {productList.length} of {total} results
            </p>

            <div className="flex gap-4 items-center flex-wrap">

              <button
                onClick={() => setView("grid")}
                className={`w-10 h-10 border flex items-center justify-center ${
                  view === "grid" ? "bg-gray-200" : ""
                }`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`w-10 h-10 border flex items-center justify-center ${
                  view === "list" ? "bg-gray-200" : ""
                }`}
              >
                <List size={18} />
              </button>

              <input
                type="text"
                value={filterInput}
                onChange={(e) => setFilterInput(e.target.value)}
                placeholder="Search products..."
                className="border px-4 py-2 rounded-md text-sm"
              />

              <select
                value={sort}
                onChange={(e) => {
                  dispatch(setOffset(0));
                  setSort(e.target.value);
                }}
                className="border px-4 py-2 rounded-md text-sm"
              >
                <option value="rating:desc">Rating: High to Low</option>
                <option value="rating:asc">Rating: Low to High</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
              </select>

              <button
                onClick={() => {
                  dispatch(setOffset(0));
                  setFilter(filterInput);
                }}
                className="bg-[#23A6F0] text-white px-4 py-2 rounded-md text-sm"
              >
                Filter
              </button>

            </div>
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                : "flex flex-col gap-8"
            }
          >
            {fetchState === "FETCHING" && (
              <div className="col-span-4 flex justify-center py-20">
                <div className="w-10 h-10 border-4 border-[#23A6F0] border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {fetchState !== "FETCHING" && productList.length === 0 && (
              <div className="col-span-4 text-center py-20 text-gray-400">
                No products found.
              </div>
            )}

            {fetchState !== "FETCHING" && productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                view={view}
                gender={gender}           
                categoryName={categoryName} 
                categoryId={categoryId}   
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex border rounded-md overflow-hidden text-sm">
                <button
                  disabled={currentPage === 1}
                  onClick={() => changePage(1)}
                  className="px-4 py-2 text-gray-400 disabled:opacity-40"
                >
                  First
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => changePage(p)}
                    className={`px-4 py-2 border-l ${
                      currentPage === p ? "bg-[#23A6F0] text-white" : ""
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                  className="px-4 py-2 border-l text-[#23A6F0] disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      <section className="border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <BrandBar />
        </div>
      </section>

    </div>
  );
};

export default ShopPage;