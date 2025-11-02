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
  const [isVisible, setIsVisible] = useState(false);

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
    
    // Trigger animation after load
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Animated Pillars Background */}
      <div className="absolute inset-0 z-0">
        {/* Base white background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Smooth Continuous Color Fade Pillars */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 w-32 h-full transform -skew-x-12 animate-pillar-smooth-fade"></div>
          <div className="absolute left-2/4 top-0 w-32 h-full transform -skew-x-12 animate-pillar-smooth-fade"></div>
          <div className="absolute left-3/4 top-0 w-32 h-full transform -skew-x-12 animate-pillar-smooth-fade"></div>
        </div>
        
        {/* Subtle floating elements for depth */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow" style={{animationDelay: '15s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Headline - Only animates on load */}
        <div className={`transition-all duration-1000 ${isVisible ? 'scale-105 opacity-100' : 'scale-100 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            {heroData.aboveTheFoldHeadline}
            <span className="block text-blue-600 mt-4">{heroData.aboveTheFoldAccent}</span>
          </h1>
        </div>
        
        {/* Subheadline - Only animates on load */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {heroData.aboveTheFoldDescription}
          </p>
        </div>

        {/* CTA Buttons - Only animates on load */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {heroData.primaryButtonText}
          </button>
          
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-900 hover:border-blue-600 text-gray-900 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
          >
            <span>{heroData.secondaryButtonText}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pillar-smooth-fade {
          0% {
            background: linear-gradient(to bottom, #dbeafe, #e9d5ff);
            opacity: 0.3;
          }
          25% {
            background: linear-gradient(to bottom, #a5b4fc, #c4b5fd);
            opacity: 0.6;
          }
          50% {
            background: linear-gradient(to bottom, #818cf8, #a78bfa);
            opacity: 0.8;
          }
          75% {
            background: linear-gradient(to bottom, #a5b4fc, #c4b5fd);
            opacity: 0.6;
          }
          100% {
            background: linear-gradient(to bottom, #dbeafe, #e9d5ff);
            opacity: 0.3;
          }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-15px) translateX(8px) rotate(0.5deg); opacity: 0.4; }
          50% { transform: translateY(5px) translateX(-8px) rotate(-0.5deg); opacity: 0.3; }
          75% { transform: translateY(-10px) translateX(5px) rotate(0.3deg); opacity: 0.35; }
        }
        .animate-pillar-smooth-fade {
          animation: pillar-smooth-fade 25s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 40s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}