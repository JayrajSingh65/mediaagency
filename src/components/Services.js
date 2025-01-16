import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16 px-8 bg-gradient-to-b from-darkGreen to-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">We can help you with...</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["Design", "Editing", "Marketing", "Social Media", "Storytelling"].map(
          (service, idx) => (
            <div
              key={idx}
              className="bg-neonGreen text-darkGreen px-4 py-2 rounded font-semibold"
            >
              {service}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
