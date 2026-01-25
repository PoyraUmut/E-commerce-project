import ProductCard from "./ProductCard";
import FeatureItem from "./FeatureItem";

const MostPopularSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="most popular"
              className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 text-center lg:text-left px-4 lg:px-0">
            <h3 className="font-bold text-base sm:text-lg tracking-wide">
              MOST POPULAR
            </h3>

            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto lg:mx-0">
              We focus on ergonomics and meeting you where you work.
              It's only a keystroke away.
            </p>

            <div className="mx-auto lg:mx-0 w-full max-w-xs sm:max-w-sm lg:w-64">
              <ProductCard
                title="Graphic Design"
                department="English Department"
                oldPrice="16.48"
                price="6.48"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left">
          <FeatureItem number="1" title="Easy to use" description="Things on a very small that you have any direct" />
          <FeatureItem number="2" title="Easy to use" description="Things on a very small that you have any direct" />
          <FeatureItem number="3" title="Easy to use" description="Things on a very small that you have any direct" />
          <FeatureItem number="4" title="Easy to use" description="Things on a very small that you have any direct" />
        </div>
      </div>
    </section>
  );
};

export default MostPopularSection;