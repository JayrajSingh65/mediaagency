import React, { useState } from 'react';
import { Rocket, Clock, RefreshCcw, Infinity, Zap, Workflow, Menu, X } from 'lucide-react';

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
    <div className="flex justify-end p-6">
      <button onClick={onClose} className="text-white">
        <X className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col items-center gap-8 p-8">
      <a href="#process" onClick={onClose} className="text-xl text-white hover:text-lime-400 transition-colors">Process</a>
      <a href="#benefits" onClick={onClose} className="text-xl text-white hover:text-lime-400 transition-colors">Benefits</a>
      <a href="#services" onClick={onClose} className="text-xl text-white hover:text-lime-400 transition-colors">Services</a>
      <a href="#portfolio" onClick={onClose} className="text-xl text-white hover:text-lime-400 transition-colors">Portfolio</a>
      <a href="#faq" onClick={onClose} className="text-xl text-white hover:text-lime-400 transition-colors">FAQ</a>
      <button className="bg-lime-400 text-black px-8 py-3 rounded-lg font-medium w-full max-w-xs">
        Get Started
      </button>
    </div>
  </div>
);

// Enhanced Navbar with Mobile Support
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
          <a className="text-2xl font-bold h-17 w-38 mt-15.06 ml-57.14" href="/">
          <span className="text-white">Kro</span>
          <span className="text-[rgb(185,253,80)]">nix</span>
        </a>
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-8">
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">Process</a>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              </div>
              <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-lime-300 transition-colors">
                Get Started
              </button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

// Responsive Feature Card
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 sm:p-6 group">
    <div className="bg-lime-400 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Responsive Portfolio Grid
const PortfolioGrid = () => {
  const images = [
    '/api/placeholder/400/400',
    '/api/placeholder/401/400',
    '/api/placeholder/402/400',
    '/api/placeholder/403/400',
    '/api/placeholder/404/400',
    '/api/placeholder/405/400',
    '/api/placeholder/406/400',
    '/api/placeholder/407/400',
    '/api/placeholder/408/400',
    '/api/placeholder/409/400',
    '/api/placeholder/410/400',
    '/api/placeholder/411/400',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
          <img
            src={src}
            alt={`Portfolio work ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const features = [
    {
      icon: Rocket,
      title: "Subscribe & get started",
      description: "Submit as many design tasks as you need. We'll get going after individual project fees."
    },
    {
      icon: Clock,
      title: "Polished designs - on time",
      description: "Our designers get to work to deliver your request to match your design within a few days."
    },
    {
      icon: RefreshCcw,
      title: "Revisions made simple",
      description: "Custom designs, prompt replies and as many revisions as you need."
    }
  ];

  const services = [
    "Web design UI/UX", "Social media assets", "Typography", "Design system",
    "User flows", "Packaging Design", "Signage", "Icons", "Logo & branding",
    "Style guides", "Wire framing"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-32 pb-16 sm:pb-24 text-center">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 right-1/4 w-8 h-8 text-lime-400 hidden sm:block">✦</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Bringing Your<br />
            Dream Into <span className="text-lime-400">Reality</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            We increase revenue and ensure sustainable long-term growth
            for your business through powerful workflow seamless.
          </p>
          <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors">
            Book A Meeting
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get a dedicated design team at fraction of the cost.
          </h2>
          <div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Grow your brand with high-quality design for a flat monthly fee. 
              Work with senior designers. Subscribe and make as many requests as you need - no limits.
            </p>
            <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-lime-300 transition-colors">
              See Pricing
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24" id="portfolio">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Our Beautiful Works
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm sm:text-base">
          We help our clients grow their bottom line with clear and 
          professional websites.
        </p>
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 border border-gray-700 px-6 py-2 rounded-lg hover:border-lime-400 transition-colors">
            Learn More
          </button>
        </div>
        <PortfolioGrid />
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 bg-gray-900/50" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            We can help you with...
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {services.map((service, index) => (
              <button 
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                {service}
              </button>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 border border-gray-700 px-6 py-2 rounded-lg hover:border-lime-400 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-lime-400 mb-4 block">PRICING</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The design subscription that connects you to your dream team
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              A subscription can alleviate the stress of staffing, managing expenses, or their design calls like a
              Creative Director. We partner with you to elevate your brand and drive your brand to new levels.
            </p>
            <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-lg font-medium mt-8 hover:bg-lime-300 transition-colors">
              See Plans
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Infinity, title: "On-demand requests", description: "Submit unlimited design requests and scale as your business grows." },
              { icon: Zap, title: "Top-notch quality", description: "Get high-end results with hundreds of case studies to back our success." },
              { icon: Workflow, title: "Powered by Webflow", description: "We build every site in Webflow for easy real-time content editing." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;