import hooli from "../assets/Vector1.png";
import lyft from "../assets/Vector2.png";
import flutter from "../assets/Vector3.png";
import stripe from "../assets/Vector4.png";
import aws from "../assets/Vector5.png";
import reddit from "../assets/Vector6.png";

const brands = [
  { src: hooli, alt: "Hooli" },
  { src: lyft, alt: "Lyft" },
  { src: flutter, alt: "Flutter" },
  { src: stripe, alt: "Stripe" },
  { src: aws, alt: "AWS" },
  { src: reddit, alt: "Reddit" },
];

const BrandBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-between gap-8 sm:gap-12">
      {brands.map((brand) => (
        <img
          key={brand.alt}
          src={brand.src}
          alt={brand.alt}
          className="h-6 sm:h-8 lg:h-10 opacity-70 hover:opacity-100 transition mx-auto md:mx-0"
        />
      ))}
    </div>
  );
};

export default BrandBar;