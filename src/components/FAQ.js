import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, Instagram, Linkedin, Globe } from 'lucide-react';

const FAQAndFooter = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: "What is CreatorsWala, and what do you do?",
      answer: " CreatorsWala is a digital agency specializing in video editing, content creation, and branding services. We help creators, brands, and businesses grow by producing engaging content and elevating their online presence."
    },
    {
      question: "How can I get started with CreatorsWala?",
      answer: " Getting started is easy! Just book a call with us or fill out our contact form. We’ll discuss your goals, understand your needs, and create a tailored plan for you."
    },
    {
      question: "Who do you work with?",
      answer: " We work with creators, entrepreneurs, startups, and established brands across various industries. Whether you’re an individual looking to build your personal brand or a business aiming for growth, we’ve got you covered."
    },
    {
      question: "Where are you based, and do you work with international clients?",
      answer: "We are based in Jaipur, India, but we work with clients worldwide. Distance is never a barrier when it comes to great collaboration."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">FAQ's</h2>
          <p className="text-gray-400 text-center mb-8">Providing answers to your questions</p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-green-400 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your custom question here..."
              className="w-full p-4 bg-gray-900 rounded-lg text-white resize-none h-32"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-400">We will answer your questions via email within 48 hours.</p>
              <button className="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
          Join us through the Google Form
          </h2>
          <p className="text-gray-400 mb-6">
            Jump on in membership and start requesting designs right away!
          </p>
          <button
  className="bg-green-400 text-black px-6 py-3 rounded-full hover:bg-green-500 transition-colors"
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSezUcCVFcJuUe_-uJvkZXTV5gUezq_y1oGW2NYl2FmJJgdiXg/viewform?usp=header",
      "_blank"
    )
  }
>
  Fill the form
</button>

        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CreatorWala</h3>
            <p className="text-gray-400 text-sm">
              india's #1 leading digital agency based in the Jaipur - working with top-tier clients, from start-ups to enterprises
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Navigation */}
              <div className="space-y-4">
              <a href="#hero" className="text-gray-300 hover:text-lime-400 transition-colors">Process</a><br/>
              <a href="#testimonials" className="text-gray-300 hover:text-lime-400 transition-colors">Brand</a><br/>
              <a href="#pricing" className="text-gray-300 hover:text-lime-400 transition-colors">Services</a><br/>
              <a href="#faq" className="text-gray-300 hover:text-lime-400 transition-colors">Portfolio</a><br/>
              <a href="#pathway" className="text-gray-300 hover:text-lime-400 transition-colors">Creators</a><br/>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a href="mailto:creatorswala@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-lime-400">
                  <Mail className="w-4 h-4" />
                  <span>creatorswala@gmail.com</span>
                </a>
                <a href="tel:(001) 233-5435" className="flex items-center gap-2 text-gray-400 hover:text-lime-400">
                  {/* <Phone className="w-4 h-4" /> */}
                  <span></span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-lime-400">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-400">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/creatorswala.in?igsh=b2dnNmtzNWJqNDV4&utm_source=qr" className="text-gray-400 hover:text-lime-400">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2023 CreatorsWala, All Right Reserved
        </div>
      </footer>
    </div>
  );
};

export default FAQAndFooter;