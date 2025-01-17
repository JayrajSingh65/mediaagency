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
      title: "1. What services do you offer",
      description:
        "We provide a wide range of services, including video editing, social media visuals, graphic design, branding, email design, and complete content creation packages. ",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "2. How much do your services cost",
      description:
        "We offer different pricing plans to suit various needs and budgets. From basic editing packages to comprehensive content creation solutions, you’ll find a plan that fits you. Check our pricing section for details.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "3. Do you provide ongoing support?",
      description:
        " Yes, we offer continuous support for all our subscription plans, ensuring a seamless experience throughout our collaboration.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "4.  Can you handle urgent projects?",
      description:
        "  Yes, we understand that tight deadlines happen. Let us know your timeline, and we’ll do our best to deliver on time without compromising quality ",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "5. Are there any hidden fees",
      description:
        "No, our pricing is transparent. You pay a flat monthly fee with no surprise charges.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "6. Do you offer custom packages?",
      description:
        " Yes, we can create custom packages based on your specific needs. Just reach out to us, and we’ll craft a solution tailored to your requirements",
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "7. How do I communicate with your team",
      description:
        " You’ll have a dedicated project manager who’ll keep you updated. We also provide regular communication via Slack, email, or WhatsApp—whichever works best for you.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "8.  How does your process work",
      description:
        "Once you share your requirements with us, we start by understanding your vision. From there, we conceptualize, design, and deliver high-quality content tailored to your brand. You can request revisions as needed.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "9. What makes CreatorsWala different from other agencies?",
      description:
        " Our focus on reliability, creativity, and personalized support sets us apart. We don’t just create content; we partner with you to achieve your goals",
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
