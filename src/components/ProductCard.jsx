import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  image,
  title,
  department,
  oldPrice,
  price,
  showDepartment = true,
  showSales = false,
  salesCount = 0,
  showColors = false,
  imageFit = "contain",
  view = "grid",
  gender,
  categoryName,
  categoryId,
}) => {

  /* ---------------- VERİ NORMALİZE ---------------- */
  const finalImage =
    product?.images?.[0]?.url ||
    product?.images?.[0] ||
    image ||
    "https://via.placeholder.com/300";

  const finalTitle = product?.name || title;
  const finalDepartment = product?.category?.title || department;
  const finalPrice = product?.price ?? price;
  const finalOldPrice = product?.oldPrice ?? oldPrice;
  const finalSales = product?.salesCount ?? salesCount;

  /* ---------------- URL ---------------- */
  const slugify = (text = "") =>
    text
      .toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ş/g, "s")
      .replace(/ç/g, "c")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ğ/g, "g")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const productSlug = slugify(product?.name || "");
  const detailUrl =
    gender && categoryName && categoryId
      ? `/shop/${gender}/${categoryName}/${categoryId}/${productSlug}/${product?.id}`
      : `/shop/product/${productSlug}/${product?.id}`;

  /* ---------------- RENDER ---------------- */
  return (
    <Link
      to={detailUrl}
      className={`group cursor-pointer ${
        view === "list" ? "flex gap-6 items-center" : "flex flex-col gap-4"
      }`}
    >
      {/* IMAGE */}
      <div
        className={`
          relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center
          ${view === "list" ? "w-56 h-56" : "aspect-square"}
        `}
      >
        <img
          src={finalImage}
          alt={finalTitle}
          className={`
            w-full h-full transition-transform duration-300 group-hover:scale-105
            ${imageFit === "contain" ? "object-contain p-4" : "object-cover"}
          `}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`flex flex-col gap-2 ${
          view === "list" ? "text-left" : "items-center text-center"
        }`}
      >
        <h4 className="font-bold text-gray-900">{finalTitle}</h4>

        {showDepartment && finalDepartment && (
          <p className="text-sm font-medium text-gray-500">{finalDepartment}</p>
        )}

        <div className="flex gap-2 items-center">
          {finalOldPrice && (
            <span className="text-gray-400 line-through font-medium">
              ${finalOldPrice}
            </span>
          )}
          <span className="font-bold text-green-600">${finalPrice}</span>
        </div>

        {showSales && finalSales > 0 && (
          <p className="text-xs text-gray-400">{finalSales} sales</p>
        )}

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