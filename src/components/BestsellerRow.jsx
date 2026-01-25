import ProductCard from "./ProductCard";

const BestsellerRow = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide text-gray-900 text-center md:text-left">
          BESTSELLER PRODUCTS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ProductCard
            image="src/assets/bestSellerRowimg1.png"
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image="src/assets/bestSellerRowimg2.jpg"
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image="src/assets/bestSellerRowimg3.jpg"
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image="src/assets/bestSellerRowimg4.jpg"
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
        </div>
      </div>
    </section>
  );
};

export default BestsellerRow;