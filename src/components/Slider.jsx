import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "GROCERIES DELIVERY",
    text: "We know how large objects will act, but things on a small scale just do not act that way.",
    image: "src/assets/58e7862657520fbcc340e0540da6a9164dc64c56.jpg",
  },
  {
    title: "FAST DELIVERY",
    text: "Quick and reliable delivery for your daily needs.",
    image: "https://images.unsplash.com/photo-1604908554160-8be0c2f7b9d6",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] overflow-hidden">
      <img
        src={slides[current].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center text-white px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {slides[current].title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed">
            {slides[current].text}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-8 sm:px-10 py-2 sm:py-3 font-semibold text-sm sm:text-base rounded mx-auto">
            Start Now
          </button>
        </div>
      </div>

      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-1 sm:p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-1 sm:p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </button>
    </section>
  );
};

export default Slider;