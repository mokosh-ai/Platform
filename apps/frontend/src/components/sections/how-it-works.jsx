'use client';
import { useState } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Chat with AI",
      description: "Simply describe what you want to change on your website. Our AI understands natural language and your website structure.",
      hoverDescription: "No technical jargon needed. Just talk to MokoshAI like you would to a colleague. 'Update our services page' or 'Add a winter promotion banner' - it just works.",
      image: "/api/placeholder/400/300?text=Chat+Interface"
    },
    {
      number: "02",
      title: "Preview Changes",
      description: "Review the AI-generated updates in real-time before they go live.",
      hoverDescription: "See exactly how your changes will look on your actual website. Make adjustments or request revisions instantly through the chat.",
      image: "/api/placeholder/400/300?text=Preview+Mode"
    },
    {
      number: "03",
      title: "Publish Instantly",
      description: "One click and your updates are live across all your pages.",
      hoverDescription: "No waiting for developers, no CMS complexity. Your changes go live immediately while maintaining your website's design and SEO.",
      image: "/api/placeholder/400/300?text=Publish+Button"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How MokoshAI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Update your website in three simple steps—no technical skills required
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100 h-full flex flex-col">
                
                {/* Step Number */}
                <div className="text-6xl font-bold text-gray-200 mb-6 transition-all duration-500 group-hover:text-blue-100">
                  {step.number}
                </div>

                {/* Step Image */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  <div 
                    className="w-full h-48 bg-gray-200 rounded-xl transition-all duration-700 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, #f0f0f0, #e0e0e0)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    {step.image.split('?text=')[1]?.replace(/\+/g, ' ')}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-500 group-hover:text-blue-600">
                  {step.title}
                </h3>

                {/* Step Description */}
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed transition-all duration-500">
                    {activeStep === index ? step.hoverDescription : step.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Connection Line (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-500 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your website management?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses already using MokoshAI to save time and stay agile.
            </p>
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}