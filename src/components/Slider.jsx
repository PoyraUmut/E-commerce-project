import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroGroceries from "../assets/images/home/hero-groceries.jpg";
import slide2 from "../assets/images/home/most-popular-1.jpg";
import slide3 from "../assets/images/home/bestseller-1.jpg";

const slides = [
  {
    title: "GROCERIES DELIVERY",
    text: "We know how large objects will act, but things on a small scale just do not act that way.",
    image: heroGroceries,
  },
  {
    title: "FAST DELIVERY",
    text: "Quick and reliable delivery for your daily needs.",
    image: slide2,
  },
  {
    title: "BEST QUALITY PRODUCTS",
    text: "Premium quality products at affordable prices.",
    image: slide3,
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] overflow-hidden">
      <img
        src={slides[current].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center text-white px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {slides[current].title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed">
            {slides[current].text}
          </p>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 transition-colors px-8 sm:px-10 py-2 sm:py-3 font-semibold text-sm sm:text-base rounded mx-auto"
          >
            Start Now
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute z-30 left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        type="button"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute z-30 right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;