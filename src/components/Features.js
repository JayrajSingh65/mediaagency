import React, { useState } from "react";
import {
  Users,
  Infinity,
  Zap,
  Workflow,
  Clock,
  Lock,
  DollarSign,
  UserCog,
  Award,
} from "lucide-react";

const Features = () => {
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);

  const capabilities = [
    "Video Editing",
    "Social Media Visuals",
    "Graphics",
    "Marketing",
    "Email Design",
    "Stationery",
    "Collaborations",
    "Brand Launch",
    "Signage",
    "Quality Creators",
    "Branding",
    "Digital Operations",
    "Media Management",
  ];

  const visibleCapabilities = showAllCapabilities
    ? capabilities
    : capabilities.slice(0, 8);

  const benefits = [
    {
      icon: <Infinity className="w-8 h-8" />,
      title: "1. On-demand Requests",
      description:
        "Submit your requests in the design queue in just 15 seconds, and we'll tackle them one by one.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "2. Top-notch Quality",
      description:
        "Get high-end work from a dedicated team of vetted designers, always available when you need them.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "3. Powered by Webflow",
      description:
        "We build every site on Webflow, making websites super-fast and instantly editable. It’s easy for you to shine and go further.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "4. Fast, Responsive, Reliable",
      description:
        "Receive regular updates on your projects and get support to deliver designs seamlessly within our system.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "5. No Lock-in Contracts",
      description:
        "Pay the same every month with no surprises. Pause or cancel anytime with ease.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "6. Great Value for Money",
      description:
        "Enjoy the power of a dedicated design team at a fraction of the cost of a full-time employee. Predictable pricing with no surprise bills.",
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "7. Tailored to You",
      description:
        "We design and build custom solutions just for you, starting from scratch unless you prefer templates.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "8. Creative Freedom",
      description:
        "We’re here when you need us. No waiting or unnecessary delays—just seamless service.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "9. Expert Designers",
      description:
        "Benefit from 10+ years of design experience with every request. No hand-holding required.",
    },
  ];

  return (
    <div>
      {/* Capabilities Section */}
      <section className="container mx-auto px-4 py-16 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">We Can Help You With...</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {visibleCapabilities.map((capability, index) => (
              <span
                key={index}
                className="bg-green-400 text-black px-4 py-2 rounded-full text-sm"
              >
                {capability}
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowAllCapabilities(!showAllCapabilities)}
            className="mt-6 text-green-400 flex items-center gap-2 mx-auto"
          >
            {showAllCapabilities ? "Show Less" : "Load More"}
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-black">
        <div className="text-green-400 mb-4">BENEFITS</div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl font-bold">
            The Design Subscription That Connects You to Your Dream Team
          </h2>
          <div>
            <p className="text-gray-400 mb-6">
              A subscription can alleviate the stress of staffing, managing
              expenses, or running a design team like a Creative Director. We
              partner with you to elevate your brand to new heights.
            </p>
            <button className="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-500">
             <a href="#pricing">See Pricing</a>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
