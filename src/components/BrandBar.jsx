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
    <section className="border-y border-gray-200 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        {brands.map((brand) => (
          <img
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            className="h-6 sm:h-8 lg:h-10 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandBar;