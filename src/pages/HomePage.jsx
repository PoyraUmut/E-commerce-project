import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import FeatureItem from "../components/FeatureItem";
import BestsellerRow from "../components/BestsellerRow";
import BrandBar from "../components/BrandBar";
import PostCard from "../components/PostCard";

import product1 from "../assets/coffe.png";
import product2 from "../assets/9da435bc81f8160b963532c03d0f3f84bf89c4ae.jpg";
import product3 from "../assets/c8ab3a8234e95a157586711065a45229598852e3.jpg";
import bestseller1 from "../assets/bestseller1.jpg";
import mostPopularImg from "../assets/mostPopularimg1.jpg";
import meatProduct from "../assets/mostPopularimg2.jpg";
import snackProduct from "../assets/mostPopularimg4.jpg";
import burgerGirl from "../assets/mostPopularimg3.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

const HomePage = () => {
  const products = [
    {
      image: product1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
    {
      image: product2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
    {
      image: product3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
    {
      image: product1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
    {
      image: product2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
    {
      image: product3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      <Slider />

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Unique Life"
            subtitle="Your Space"
            image={product1}
            align="left"
          />
          <CategoryCard
            title="Elements Style"
            subtitle="Ends Today"
            image={product2}
            align="left"
          />
          <CategoryCard
            title="Elements Style"
            subtitle="Ends Today"
            image={product3}
            align="left"
          />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="relative h-full min-h-[600px] bg-yellow-400 rounded-lg overflow-hidden">
              <div className="absolute top-8 left-8 text-gray-800">
                <h4 className="font-bold text-lg mb-1">FURNITURE</h4>
                <p className="text-sm">5 Items</p>
              </div>
              <img
                src={bestseller1}
                alt="furniture"
                className="absolute bottom-0 right-0 w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h3 className="font-bold text-2xl text-gray-900">
                BESTSELLER PRODUCTS
              </h3>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="text-sm font-medium text-blue-500 cursor-pointer">
                  Men
                </span>
                <span className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900">
                  Women
                </span>
                <span className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900">
                  Accessories
                </span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                    <span className="text-blue-500">←</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                    <span className="text-blue-500">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={mostPopularImg}
                alt="popular"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="md:w-1/2 flex flex-col items-center justify-center gap-8 px-4 md:px-8">
              <div className="text-center max-w-md">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  MOST POPULAR
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
              </div>

              <div className="w-full max-w-sm">
                <ProductCard
                  image={meatProduct}
                  title="English Department"
                  department=""
                  oldPrice="16.48"
                  price="6.48"
                  showDepartment={false}
                  showColors={true}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <FeatureItem number="1" title="Easy to use" description="Things on a very small that you have any direct" />
            <FeatureItem number="2" title="Easy to use" description="Things on a very small that you have any direct" />
            <FeatureItem number="3" title="Easy to use" description="Things on a very small that you have any direct" />
            <FeatureItem number="4" title="Easy to use" description="Things on a very small that you have any direct" />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h3 className="font-bold text-2xl text-gray-900">
                BESTSELLER PRODUCTS
              </h3>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="text-sm font-medium text-blue-500 cursor-pointer">
                  Men
                </span>
                <span className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900">
                  Women
                </span>
                <span className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900">
                  Accessories
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={`second-${index}`} {...product} />
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="relative h-full min-h-[600px] rounded-lg overflow-hidden">
              <img
                src="src/assets/bestseller2.jpg"
                alt="banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8 text-white">
                <h4 className="font-bold text-lg mb-1">FURNITURE</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col items-center justify-center gap-8 px-4 md:px-8 bg-white rounded-lg py-12">
              <div className="text-center max-w-md">
                <h3 className="font-bold text-3xl mb-4 text-gray-900">
                  MOST POPULAR
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's only a
                  keystroke away.
                </p>
              </div>

              <div className="w-full max-w-sm">
                <ProductCard
                  image={snackProduct}
                  title="English Department"
                  department=""
                  oldPrice="16.48"
                  price="6.48"
                  showDepartment={false}
                  showSales={true}
                  salesCount={15}
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src={burgerGirl}
                alt="popular"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <BestsellerRow />
      <section className="border-y border-gray-200 py-8 sm:py-10 lg:py-12">
  <div className="max-w-7xl mx-auto px-6">
    <BrandBar />
  </div>
</section>
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold">Practice Advice</p>
            <h2 className="text-4xl font-bold">Featured Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PostCard
              image={post1}
              title="Loudest à la Madison #1 (L'integral)"
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              date="22 April 2021"
              comments={10}
              isNew={true}
            />
            <PostCard
              image={post2}
              title="Loudest à la Madison #1 (L'integral)"
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              date="22 April 2021"
              comments={10}
              isNew={true}
            />
            <PostCard
              image={post3}
              title="Loudest à la Madison #1 (L'integral)"
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              date="22 April 2021"
              comments={10}
              isNew={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
