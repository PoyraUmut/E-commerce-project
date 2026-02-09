import React from 'react';

import img1 from "../assets/AboutUs-img.png";
import workWithUsImg from "../assets/work-with-us.jpg";

import { Play } from 'lucide-react';

import MeetTeam from '../components/MeetTeam';
import BrandBar from '../components/BrandBar';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-sm sm:text-base text-gray-600 font-semibold mb-3 sm:mb-4 tracking-wide">
                ABOUT COMPANY
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                ABOUT US
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We know how large objects will act,<br className="hidden sm:block" />
                but things on a small scale
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded transition-colors w-full sm:w-auto">
                Get Quote Now
              </button>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-pink-100 rounded-full transform translate-x-4 sm:translate-x-8 -translate-y-4 sm:-translate-y-8 scale-110"></div>
              
              <div className="relative z-10">
                <img
                  src={img1}
                  alt="Shopping woman"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-red-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Problems trying
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                15K
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">
                Happy Customers
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                150K
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">
                Monthly Visitors
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                15
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">
                Countries Worldwide
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                100+
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">
                Top Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-lg sm:rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
              alt="Video thumbnail"
              className="w-full h-auto object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sky-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MeetTeam />

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Big Companies Are Here
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Problems trying to resolve the conflict between<br className="hidden sm:block" />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <BrandBar />
        </div>
      </section>

<section className="bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="bg-sky-600 text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-16 flex items-center">
      <div className="max-w-xl mx-auto lg:ml-auto lg:mr-16 w-full">
        <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wide">
          WORK WITH US
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
          Now Let's grow Yours
        </h2>
        <p className="text-white/90 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
        </p>
        <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-white hover:text-sky-600 transition-colors font-semibold w-full sm:w-auto">
          Button
        </button>
      </div>
    </div>

    <div className="hidden lg:block relative lg:min-h-[400px]">
      <img
        src={workWithUsImg}
        alt="Work with us"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUsPage;