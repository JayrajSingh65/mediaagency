import React from "react";
import { Layers, Grid, Clock, Shield, Command } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black container w-full mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-24 text-center relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Heading with Ellipse Background */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative z-10">
            Crafting Visual Stories<br />
            That <span className="text-lime-400">Demand</span>
            <br />
            Attention
          </h1>

          {/* Ellipse Background */}
          <div
            className="absolute inset-x-0 top-1/3 mx-auto w-[300px] h-[150px] bg-[rgba(185,253,80,1)] rounded-full -z-10"
          ></div>
        </div>

        {/* Subheading */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm sm:text-lg md:text-xl leading-relaxed">
          We increase revenue and ensure sustainable long-term growth for your
          business through a powerful team.
        </p>

        {/* Call to Action Button */}
        <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors focus:ring-4 focus:ring-lime-300 focus:outline-none">
          Book A Meeting
        </button>

        {/* Trusted by Brands Section */}
        <div className="mt-16 relative">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-0.5 bg-lime-400 mr-4"></div>
            <p className="text-gray-400 text-base sm:text-lg font-medium">
              TRUSTED BY AMAZING BRANDS
            </p>
            <div className="w-12 h-0.5 bg-lime-400 ml-4"></div>
          </div>

          {/* Brand Logos Grid */}
          <div className="bg-[rgba(34,34,34,1)] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 p-4 rounded-md">
            {/* Brand 1 */}
            <div className="flex flex-col items-center">
              <Layers className="w-10 h-10 sm:w-16 sm:h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-xs sm:text-base">
                Layers
              </span>
            </div>
            {/* Brand 2 */}
            <div className="flex flex-col items-center">
              <Grid className="w-10 h-10 sm:w-16 sm:h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-xs sm:text-base">
                Quotient
              </span>
            </div>
            {/* Brand 3 */}
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 sm:w-16 sm:h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-xs sm:text-base">
                Circooles
              </span>
            </div>
            {/* Brand 4 */}
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 sm:w-16 sm:h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-xs sm:text-base">
                HourGlass
              </span>
            </div>
            {/* Brand 5 */}
            <div className="flex flex-col items-center">
              <Command className="w-10 h-10 sm:w-16 sm:h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-xs sm:text-base">
                Command+R
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
