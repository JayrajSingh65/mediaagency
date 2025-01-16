import React from "react";

const ProductionServices = () => {
  const features = [
    {
      icon: "🚀",
      title: "Subscribe & get started",
      description:
        "Submit any design request with unlimited revisions at a flat monthly project fee.",
    },
    {
      icon: "🎯",
      title: "Polished designs - on time",
      description:
        "Our designs will be sent to scale, polish, and optimize within a few days.",
    },
    {
      icon: "↻",
      title: "Revisions made simple",
      description:
        "Gather editing requests before presenting to stakeholders with unlimited revisions.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-sm uppercase mb-2 text-gray-400">
          Unlimited Requests
        </p>
        <h1 className="text-4xl font-bold mb-4">
          Seamless Production Services Tailored to Your Brand.
        </h1>
        <p className="text-gray-400 mb-6">
          Your trusted partner in creating unforgettable video experiences that
          elevate brands and rapidly market project verticals.
        </p>
        <button className="bg-transparent text-[#a3ff12] px-6 py-2 rounded border-2 border-[#a3ff12] hover:bg-[#8ee610] hover:text-white transition-colors">
          <a href="#pricing">See Pricing</a>
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionServices;
