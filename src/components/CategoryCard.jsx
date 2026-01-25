const CategoryCard = ({ title, subtitle, image, align = "left" }) => {
  return (
    <div className="relative h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden group bg-white shadow-sm">
      <img
        src={image}
        alt={title}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] sm:h-[90%] w-auto max-w-[50%] sm:max-w-[55%] object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 flex flex-col justify-center ${
          align === "left"
            ? "items-start pl-4 sm:pl-6 lg:pl-8 pr-[50%] sm:pr-[55%]"
            : "items-end pr-4 sm:pr-6 lg:pr-8 pl-[50%] sm:pl-[55%]"
        } text-left gap-1`}
      >
        <p className="text-xs sm:text-sm text-gray-500 font-medium">{subtitle}</p>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <button className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
          Explore Items
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;