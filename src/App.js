import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pathway from "./components/Pathway";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <div
      className="bg-black text-white min-h-screen w-full"
      style={{ overflowX: "hidden" }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      <main>
        {/* Pathway Section */}
        <section id="pathway">
          <Pathway />
        </section>

        <section id="roadmap">
          <Roadmap/>
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>
      </main>
    </div>
  );
};

export default App;
