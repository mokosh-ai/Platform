'use client';
import { useState, useEffect } from 'react';

const fallbackHeroData = {
  aboveTheFoldHeadline: "AI-Powered Content Management",
  aboveTheFoldAccent: "Through Conversation", 
  aboveTheFoldDescription: "Update your website content instantly by chatting with AI. No technical skills, no complex interfaces.",
  primaryButtonText: "Start Free Trial",
  secondaryButtonText: "Watch Demo"
};

export default function Hero() {
  const [heroData, setHeroData] = useState(fallbackHeroData);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Hero-content`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setHeroData(data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching hero data');
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content (Webflow Style) */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {heroData.aboveTheFoldHeadline}
              <span className="block text-blue-600 mt-4">{heroData.aboveTheFoldAccent}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              {heroData.aboveTheFoldDescription}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {heroData.primaryButtonText}
              </button>
              
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-900 hover:border-blue-600 text-gray-900 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center space-x-3 group"
              >
                <span>{heroData.secondaryButtonText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free trial included</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Demo (Webflow Style) */}
          <div className="relative">
            {/* Main Demo Container */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-500">
              
              {/* Browser Window Mockup */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                {/* Browser Header */}
                <div className="bg-gray-800 px-6 py-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-gray-300">mokosh-ai-demo.com</span>
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
                  {/* Chat Interface Preview */}
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AI</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Mokosh AI Assistant</div>
                        <div className="text-xs text-gray-500">Ready to help</div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-3 max-w-xs">
                          Update our services section
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 max-w-xs">
                          <div className="flex space-x-1 mb-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          </div>
                          Updating your website...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Updated Content Preview */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Services</h3>
                      <p className="text-gray-600 mb-4">Strategic solutions for your business growth</p>
                      <div className="grid grid-cols-3 gap-4">
                        {['Web Design', 'SEO', 'Marketing'].map((service, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                            <div className="text-sm font-medium text-gray-900">{service}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-2xl transform rotate-12 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-200 rounded-3xl transform -rotate-6 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}