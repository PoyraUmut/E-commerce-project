const ProductCard = ({ 
  image, 
  title, 
  department, 
  oldPrice, 
  price, 
  showDepartment = true,
  showSales = false,
  salesCount = 0,
  showColors = false
}) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 group cursor-pointer">
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 items-center text-center">
        <h4 className="font-bold text-sm sm:text-base text-gray-900">{title}</h4>

        {showDepartment && department && (
          <p className="text-xs sm:text-sm font-medium text-gray-500">{department}</p>
        )}

        {showSales && (
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>{salesCount} Sales</span>
          </div>
        )}

        <div className="flex gap-2 items-center">
          <span className="text-sm sm:text-base text-gray-400 line-through font-medium">
            ${oldPrice}
          </span>
          <span className="text-sm sm:text-base font-bold text-green-600">
            ${price}
          </span>
        </div>

        {showColors && (
          <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-2">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-teal-500 cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-400 cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-800 cursor-pointer hover:scale-110 transition-transform"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;