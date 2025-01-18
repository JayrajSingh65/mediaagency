import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "sanjay.ig_",
      title: "CreatorWala Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
      content: "CreatorsWala didn’t just meet my expectations—they exceeded them. The team captured our brand’s essence perfectly and delivered results that genuinely helped us grow. They’re more than just a service provider; they’re partners in success.",
      author: "Sanjay Sanwala",
      position: "influncer",
      image: "sanjay.jpg"
    },
    {
      company: "Marwadi Traders",
      title: "CreatorsWala Feels Like Part of My Team!",
      content: "What I love about CreatorsWala is how invested they are in your success. Their ideas are fresh, their execution is flawless, and the results are clear. They’ve helped us achieve milestones we didn’t think were possible.",
      author: "Jayraj Singh",
      position: "CEO",
      image: "marwadi.png"
    },
    {
      company: "StockBurner",
      title: "They Made My Life So Much Easier!",
      content: "Before CreatorsWala, managing my content felt like a full-time job. Now, I can focus on creating while they handle everything else. Their editing and support are top-notch!",
      author: "Dinesh Kerola",
      position: "influnecer",
      image: "burner.jpg"
    },
    {
      company: "mr_perfect_trader01",
      title: "A Partner, Not Just a Service Provider!",
      content: "CreatorsWala doesn’t feel like an agency—they feel like a partner. They care about your success and go the extra mile to make sure everything is perfect.",
      author: "Abhijit Thakur",
      position: "influnecer",
      image: "thakur.jpg"
    },
    {
      company: "Piyush_21",
      title: "Content That Actually Gets Results!",
      content: "I started seeing more engagement and leads after working with CreatorsWala. They know what works and create content that drives real results. Couldn’t ask for more.",
      author: "Piyush Sawami",
      position: "PR Media",
      image: "piyush.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 mb-4">TESTIMONIAL</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Customer is Our Top Priority
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We survey all of our clients, the results of which go directly to our CEO.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative z-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {/* Company Logo/Name */}
                <div className="flex items-center gap-2 text-white">
                  <span className="font-bold text-xl">
                    {testimonials[currentSlide].company}
                  </span>
                </div>

                {/* Testimonial Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {testimonials[currentSlide].title}
                </h3>

                <p className="text-gray-400">
                  {testimonials[currentSlide].content}
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-bold text-white">
                    {testimonials[currentSlide].author}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
              </div>

              {/* Author Image */}
              <div className="order-first md:order-last">
                <div className="aspect-square overflow-hidden rounded-full bg-sky-400 max-w-md mx-auto">
                  <img 
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-4 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1 h-1 rounded-full transition-all ${index === currentSlide ? 'bg-green-400 w-4' : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green-400 p-3 rounded-full hover:bg-green-500 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green-400 p-3 rounded-full hover:bg-green-500 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </section>
  );
};

export default Testimonials;
