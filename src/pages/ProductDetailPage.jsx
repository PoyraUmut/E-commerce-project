import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, ArrowLeft } from "lucide-react";
import { fetchProduct } from "../store/actions/productActions";
import { addToCart } from "../store/actions/shoppingCartActions";
import ProductCard from "../components/ProductCard";
import BrandBar from "../components/BrandBar";

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  const { product, fetchState, productList } = useSelector((state) => state.product);

  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#23A6F0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) return null;

  const images = product.images || [];
  const mainImage = images[activeImage]?.url || "https://via.placeholder.com/600";
  const stars = Math.round(product.rating || 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* BREADCRUMB + BACK */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-gray-900">Home</span>
          <span className="text-lg text-gray-400 font-semibold">&gt;</span>
          <span className="text-base text-gray-400 font-medium">Shop</span>
          <span className="text-lg text-gray-400 font-semibold">&gt;</span>
          <span className="text-base text-gray-400 font-medium">{product.name}</span>
        </div>
        <button
          onClick={() => history.goBack()}
          className="flex items-center gap-2 text-sm text-[#23A6F0] hover:underline"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* PRODUCT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* IMAGES */}
        <div>
          <div className="relative bg-gray-50 rounded-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-lg object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImage((prev) => Math.max(prev - 1, 0))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => setActiveImage((prev) => Math.min(prev + 1, images.length - 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt=""
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                  activeImage === i ? "border-[#23A6F0] border-2" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center gap-2 text-sm">
            {"⭐".repeat(stars)}{"☆".repeat(5 - stars)}
            <span className="text-gray-500">({product.sell_count} Reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">
            ${product.price?.toFixed(2)}
          </p>

          <p className="text-sm">
            Availability:{" "}
            <span className={product.stock > 0 ? "text-blue-500 font-medium" : "text-red-500 font-medium"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <hr />

          <div className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer" />
            <span className="w-6 h-6 rounded-full bg-green-500 cursor-pointer" />
            <span className="w-6 h-6 rounded-full bg-orange-400 cursor-pointer" />
            <span className="w-6 h-6 rounded-full bg-slate-900 cursor-pointer" />
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded font-medium">
              Select Options
            </button>
            <button className="border p-3 rounded-full"><Heart size={18} /></button>
            <button
              onClick={handleAddToCart}
              className="border p-3 rounded-full hover:bg-blue-50 transition"
            >
              <ShoppingCart size={18} />
            </button>
            <button className="border p-3 rounded-full"><Eye size={18} /></button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-24">
        <div className="flex justify-center gap-12 border-b text-gray-500 font-semibold">
          {["description", "info", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 capitalize ${
                activeTab === tab ? "text-black border-b-2 border-black" : ""
              }`}
            >
              {tab === "info" ? "Additional Information" : tab === "reviews" ? `Reviews (${product.sell_count})` : "Description"}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <img src={mainImage} alt="" className="rounded-xl" />
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <div className="mt-16 text-gray-600 space-y-2">
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Sell Count:</strong> {product.sell_count}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <p className="text-center text-gray-600 mt-16">No reviews yet.</p>
        )}
      </div>

      {productList.length > 0 && (
        <section className="py-24">
          <h3 className="text-xl font-bold tracking-wide text-gray-900">BESTSELLER PRODUCTS</h3>
          <div className="w-full h-px bg-gray-200 mt-6 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productList.slice(0, 8).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}

      <BrandBar />
    </div>
  );
}