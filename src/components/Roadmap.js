import React from "react";
import { Brush, Edit3, PenTool } from "lucide-react"; // Icons for branding, editing, storytelling

const Roadmap = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24 px-4 sm:px-8">
      <div className="container mx-auto relative max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Your Creative Journey
        </h2>

        {/* Steps Container */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Step 1: Branding */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-12 h-12 flex items-center justify-center bg-lime-400 rounded-full">
              <Brush className="text-black w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2 text-center">
              Branding
            </h3>
            <p className="text-gray-400 text-center">
              Establish a unique and recognizable identity for your brand.
            </p>
          </div>

          {/* Step 2: Editing */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-12 h-12 flex items-center justify-center bg-lime-400 rounded-full">
              <Edit3 className="text-black w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2 text-center">
              Editing
            </h3>
            <p className="text-gray-400 text-center">
              Enhance and refine your creative projects to perfection.
            </p>
          </div>

          {/* Step 3: Storytelling */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-12 h-12 flex items-center justify-center bg-lime-400 rounded-full">
              <PenTool className="text-black w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2 text-center">
              Storytelling
            </h3>
            <p className="text-gray-400 text-center">
              Craft compelling narratives that resonate with your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
