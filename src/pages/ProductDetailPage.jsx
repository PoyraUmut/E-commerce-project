import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import BrandBar from "../components/BrandBar";


import mainImg from "../assets/pdetail1.jpg";
import thumb1 from "../assets/pdetail2.jpg";
import thumb2 from "../assets/pdetail3.jpg";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";
import b7 from "../assets/b7.jpg";
import b8 from "../assets/b8.jpg";

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState("description");
  const bestsellerProducts = [
  { image: b1 },
  { image: b2 },
  { image: b3 },
  { image: b4 },
  { image: b5 },
  { image: b6 },
  { image: b7 },
  { image: b8 },
];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      

     
<div className="mb-12 flex items-center gap-3">
  <span className="text-base font-semibold text-gray-900">
    Home
  </span>

  <span className="text-lg text-gray-400 font-semibold">
    &gt;
  </span>

  <span className="text-base text-gray-400 font-medium">
    Shop
  </span>
</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="relative bg-gray-50 rounded-lg">
            <img
              src={mainImg}
              alt="Product"
              className="w-full rounded-lg"
            />

            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronLeft />
            </button>

            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronRight />
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            <img
              src={thumb1}
              alt=""
              className="w-20 border rounded cursor-pointer"
            />
            <img
              src={thumb2}
              alt=""
              className="w-20 border rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Floating Phone
          </h1>

          <div className="flex items-center gap-2 text-sm">
            ⭐⭐⭐⭐☆
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">
            $1,139.33
          </p>

          <p className="text-sm">
            Availability :{" "}
            <span className="text-blue-500 font-medium">
              In Stock
            </span>
          </p>

          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>

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

            <button className="border p-3 rounded-full">
              <Heart size={18} />
            </button>
            <button className="border p-3 rounded-full">
              <ShoppingCart size={18} />
            </button>
            <button className="border p-3 rounded-full">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex justify-center gap-12 border-b text-gray-500 font-semibold">
          {["description", "info", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 capitalize ${
                activeTab === tab
                  ? "text-black border-b-2 border-black"
                  : ""
              }`}
            >
              {tab === "info"
                ? "Additional Information"
                : tab === "reviews"
                ? "Reviews (0)"
                : "Description"}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <img
              src={mainImg}
              alt=""
              className="rounded-xl"
            />

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  the quick fox jumps over
                </h3>
                <p className="text-gray-600">
                  Met minim Mollie non desert Alamo est sit cliquey dolor
                  do met sent. RELIT official consequent door ENIM RELIT Mollie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">
                  the quick fox jumps over
                </h3>

                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-600 mb-4"
                    >
                      <ChevronRight size={18} />
                      <span>
                        the quick fox jumps over the lazy dog
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <p className="text-center text-gray-600 mt-16">
            Additional product information will be here.
          </p>
        )}

        {activeTab === "reviews" && (
          <p className="text-center text-gray-600 mt-16">
            No reviews yet.
          </p>
        )}
      </div>

<section className="py-24">
  <div className="max-w-7xl mx-auto px-4">
    {/* TITLE */}
    <h3 className="text-xl font-bold tracking-wide text-gray-900">
      BESTSELLER PRODUCTS
    </h3>

    <div className="w-full h-px bg-gray-200 mt-6 mb-12" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {bestsellerProducts.map((item, index) => (
        <ProductCard
          key={index}
          image={item.image}
          title="Graphic Design"
          department="English Department"
          oldPrice="16.48"
          price="6.48"
        />
      ))}
    </div>
  </div>
</section>

 <BrandBar />

    </div>

    
  );
}
