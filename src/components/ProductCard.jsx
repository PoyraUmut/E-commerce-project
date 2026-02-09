import { Link } from "react-router-dom";

const ProductCard = ({ 
  image, 
  title, 
  department, 
  oldPrice, 
  price, 
  showDepartment = true,
  showSales = false,
  salesCount = 0,
  showColors = false,
  imageFit = "contain" 
}) => {
  return (
    <Link
      to="/product-detail"
      className="flex flex-col gap-4 group cursor-pointer"
    >
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className={`
            w-full h-full transition-transform duration-300 group-hover:scale-105
            ${imageFit === "contain" ? "object-contain p-4" : "object-cover"}
          `}
        />
      </div>

      <div className="flex flex-col gap-2 items-center text-center">
        <h4 className="font-bold text-gray-900">{title}</h4>

        {showDepartment && (
          <p className="text-sm font-medium text-gray-500">
            {department}
          </p>
        )}

        <div className="flex gap-2 items-center">
          <span className="text-gray-400 line-through font-medium">
            ${oldPrice}
          </span>
          <span className="font-bold text-green-600">
            ${price}
          </span>
        </div>

        {showColors && (
          <div className="flex gap-2 mt-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-800"></span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
