import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "Gymstory",
      title: "CreatorWala Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
      content: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
      author: "Diana Loreza",
      position: "Director of GYMSTORY",
      image: "/api/placeholder/400/400"
    },
    {
      company: "TechCorp",
      title: "Outstanding Service and Results!",
      content: "Working with CreatorWala has transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations.",
      author: "Michael Chen",
      position: "Marketing Director",
      image: "/api/placeholder/400/400"
    },
    {
      company: "StyleHub",
      title: "Exceptional Creative Partnership!",
      content: "The team's ability to understand our vision and translate it into stunning digital experiences has been incredible. They're true partners in our success.",
      author: "Sarah Johnson",
      position: "Creative Lead",
      image: "/api/placeholder/400/400"
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
