import shop1 from "../assets/shop-1.png";
import shop2 from "../assets/shop-2.png";
import shop3 from "../assets/shop-3.png";
import shop4 from "../assets/shop-4.png";
import shop5 from "../assets/shop-5.png";

import shopResult1 from "../assets/shop-results-1.jpg";
import shopResult2 from "../assets/shop-results-2.jpg";
import shopResult3 from "../assets/shop-results-3.jpg";
import shopResult4 from "../assets/shop-results-4.jpg";
import shopResult5 from "../assets/shop-results-5.jpg";
import shopResult6 from "../assets/shop-results-6.jpg";
import shopResult7 from "../assets/shop-results-7.jpg";
import shopResult8 from "../assets/shop-results-8.jpg";
import shopResult9 from "../assets/shop-results-9.jpg";
import shopResult10 from "../assets/shop-results-10.jpg";
import shopResult11 from "../assets/shop-results-11.jpg";
import shopResult12 from "../assets/shop-results-12.jpg";

import ProductCard from "../components/ProductCard";
import BrandBar from "../components/BrandBar";

import { LayoutGrid, List } from "lucide-react";

const categories = [shop1, shop2, shop3, shop4, shop5];

const products = [
  shopResult1,
  shopResult2,
  shopResult3,
  shopResult4,
  shopResult5,
  shopResult6,
  shopResult7,
  shopResult8,
  shopResult9,
  shopResult10,
  shopResult11,
  shopResult12,
];

const ShopPage = () => {
  return (
    <div className="flex flex-col gap-20">

      {/* PAGE HEADER */}
      <section className="px-6 pt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Shop</h1>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span className="text-gray-900 font-medium">Home</span>
            <span>{">"}</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt="category"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">

          <div
            className="
              flex flex-col items-center text-center gap-8
              md:flex-row md:justify-between md:items-center md:text-left
              mb-12
            "
          >

            {/* LEFT */}
            <p className="text-sm text-[#737373]">
              Showing all 12 results
            </p>

            {/* RIGHT */}
            <div
              className="
                flex flex-col items-center gap-6
                sm:flex-row sm:items-center
              "
            >

              {/* VIEWS */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-[#737373]">Views:</span>

                <button className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <LayoutGrid size={18} />
                </button>

                <button className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <List size={18} />
                </button>
              </div>

              {/* SORT + FILTER */}
              <div className="flex items-center justify-center gap-4">
                <select className="border px-6 py-3 rounded-md text-sm text-gray-500">
                  <option>Popularity</option>
                </select>

                <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md text-sm font-semibold">
                  Filter
                </button>
              </div>

            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((img, index) => (
              <ProductCard
                key={index}
                image={img}
                title="Graphic Design"
                department="English Department"
                oldPrice={16.48}
                price={6.48}
                salesCount={15}
                showDepartment
                showSales
                showColors
                imageFit="cover"
              />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-16">
            <div className="flex border rounded-md overflow-hidden text-sm">
              <button className="px-4 py-2 text-gray-400">First</button>
              <button className="px-4 py-2 border-l bg-[#23A6F0] text-white">
                1
              </button>
              <button className="px-4 py-2 border-l">2</button>
              <button className="px-4 py-2 border-l">3</button>
              <button className="px-4 py-2 border-l text-[#23A6F0]">
                Next
              </button>
            </div>
          </div>

        </div>
      </section>

      <BrandBar />
    </div>
  );
};

export default ShopPage;
