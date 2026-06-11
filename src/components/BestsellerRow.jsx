import ProductCard from "./ProductCard";
import bestsellerRow1 from "../assets/images/home/bestseller-row-1.png";
import bestsellerRow2 from "../assets/images/home/bestseller-row-2.jpg";
import bestsellerRow3 from "../assets/images/home/bestseller-row-3.jpg";
import bestsellerRow4 from "../assets/images/home/bestseller-row-4.jpg";

const BestsellerRow = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide text-gray-900 text-center md:text-left">
          BESTSELLER PRODUCTS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ProductCard
            image={bestsellerRow1}
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image={bestsellerRow2}
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image={bestsellerRow3}
            title="Graphic Design"
            department="English Department"
            oldPrice="16.48"
            price="6.48"
          />
          <ProductCard
            image={bestsellerRow4}
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
