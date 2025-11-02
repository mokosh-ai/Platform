'use client';
import { useState } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: "Step 1",
      title: "Chat with AI",
      description: "Simply describe what you want to change on your website. Our AI understands natural language and your website structure.",
      hoverDescription: "No technical jargon needed. Just talk to MokoshAI like you would to a colleague. 'Update our services page' or 'Add a winter promotion banner' - it just works.",
      image: "/api/placeholder/600/400?text=Chat+Interface"
    },
    {
      number: "Step 2",
      title: "Preview Changes",
      description: "Review the AI-generated updates in real-time before they go live.",
      hoverDescription: "See exactly how your changes will look on your actual website. Make adjustments or request revisions instantly through the chat.",
      image: "/api/placeholder/600/400?text=Preview+Mode"
    },
    {
      number: "Step 3",
      title: "Publish Instantly",
      description: "One click and your updates are live across all your pages.",
      hoverDescription: "No waiting for developers, no CMS complexity. Your changes go live immediately while maintaining your website's design and SEO.",
      image: "/api/placeholder/600/400?text=Publish+Button"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Partial Gradient */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              {/* Gradient Part - How Mok */}
              <span 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-black bg-clip-text text-transparent animate-partial-gradient"
                style={{
                  backgroundSize: '200% 100%'
                }}
              >
                How Mok
              </span>
              {/* Static Black Part - oshAI Works */}
              <span className="text-black">oshAI Works</span>
            </span>
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
              {/* Step Card with Background Image */}
              <div 
                className="bg-white rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100 h-full flex flex-col min-h-[500px] relative overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 z-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${step.image})`,
                    backgroundColor: '#f8fafc'
                  }}
                ></div>

                {/* Content Container - Flex column to push text to bottom */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Section - Step Number */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-400 transition-all duration-500 group-hover:text-blue-600">
                      {step.number}
                    </div>
                  </div>

                  {/* Middle Section - Empty space to push content down */}
                  <div className="flex-1"></div>

                  {/* Bottom Section - Title and Description */}
                  <div className="mt-auto">
                    {/* Step Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-500 group-hover:text-blue-600">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <div>
                      <p className="text-gray-600 leading-relaxed transition-all duration-500">
                        {activeStep === index ? step.hoverDescription : step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-500 z-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes partial-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-partial-gradient {
          animation: partial-gradient 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}