import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basics',
      description: 'One request at a time. For companies who need on-going design support.',
      price: '2,995',
      interval: 'm',
      priceSubtext: 'Pause or cancel anytime',
      features: [
        'Best for reels and shorts',
        'Unlimited revisions',
        'Dedicated project manager',
        'Custom Thumbnails',
        'Your Unique Edits',
        '2-3 days turn around time',
        'Top tier editors/designers'
      ]
    },
    {
      name: 'Growth',
      description: 'Double the requests. For companies with increasing design needs. Limited spots.',
      price: '4,795',
      interval: 'm',
      priceSubtext: 'Pause or cancel anytime',
      badge: 'Best value',
      features: [
        '2x active task at a time',
        'Unlimited revisions',
        'Personal Manager',
        'Dedicated Editor',
        'Your Unique Branding',
        '48hr Delivery',
        'Top tier editors/designers'
      ]
    },
    {
      name: 'Standard',
      description: 'Perfect if you want to try the subscription out or only have a few one-off tasks.',
      price: '890',
      interval: 'm',
      priceSubtext: 'Paid per weekly',
      badge: 'Most Popular',
      isPopular: true,
      features: [
        'Long Form Video Editing',
        '2 rounds of revisions',
        'Dedicated project manager',
        'Daily comms through Slack',
        'Bonus Hooks And Templates',
        '24/7 Support',
        'Unlimited Reels'
      ]
    }
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 mb-4">CLEAR & SIMPLE PRICING</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple pricing to level up your brand.
          </h2>
          <p className="text-gray-400">
            Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-gray-900 p-8 relative flex flex-col`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {plan.badge && (
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      plan.isPopular ? 'bg-green-400 text-black' : 'bg-gray-800 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-green-400 text-xl">$</span>
                  <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                  <span className="text-green-400 text-xl">/{plan.interval}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{plan.priceSubtext}</p>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 px-4 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-colors">
                  Book A Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;