import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Mail, Share2, Target, Zap, Bot } from 'lucide-react';

const AgentsSwiper = ({ 
  contentWriterImage,
  emailMarketingImage, 
  socialMediaImage,
  analyticsImage,
  automationImage,
  strategyImage 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const agents = [
    {
      id: 1,
      title: "Content Creator",
      description: "Generate engaging content, blogs, and social media posts",
      icon: <TrendingUp className="h-8 w-8" />,
      image: contentWriterImage,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Email Marketer",
      description: "Create email campaigns and newsletter content",
      icon: <Mail className="h-8 w-8" />,
      image: emailMarketingImage,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Social Strategist",
      description: "Plan social media strategies and campaigns",
      icon: <Share2 className="h-8 w-8" />,
      image: socialMediaImage,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "SEO Optimizer",
      description: "Optimize content for search engines and keywords",
      icon: <Target className="h-8 w-8" />,
      image: analyticsImage,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Growth Hacker",
      description: "Find innovative ways to grow your product",
      icon: <Zap className="h-8 w-8" />,
      image: automationImage,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "Brand Analyst",
      description: "Analyze brand positioning and competitive landscape",
      icon: <Bot className="h-8 w-8" />,
      image: strategyImage,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agents.length);
    }, 2000); // Move one card every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, agents.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false); // Stop auto-play on manual interaction
    setCurrentIndex((prev) => (prev + 1) % agents.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false); // Stop auto-play on manual interaction
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false); // Stop auto-play on manual interaction
    setCurrentIndex(index);
  };

  // Resume auto-play after 5 seconds of inactivity
  useEffect(() => {
    if (isAutoPlaying) return;

    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex, isAutoPlaying]);

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // default for SSR
  };

  const [itemsPerView] = useState(getItemsPerView);

  const getVisibleAgents = () => {
    const visibleAgents = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % agents.length;
      visibleAgents.push(agents[index]);
    }
    return visibleAgents;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cosmic-text-glow">
          Save Time And Resources
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Saving time and resources while maximizing efficiency and results
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:shadow-cosmic"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:shadow-cosmic"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden rounded-2xl">
          <div className={`grid gap-6 transition-all duration-500 ease-in-out ${
            itemsPerView === 3 ? 'grid-cols-1 lg:grid-cols-3 px-16' :
            itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2 px-12' :
            'grid-cols-1 px-4'
          }`}>
            {getVisibleAgents().map((agent, index) => (
              <div
                key={`${agent.id}-${currentIndex}`}
                className="group cosmic-card border-white/20 rounded-2xl p-6 hover:shadow-cosmic-strong transition-all duration-500 hover:scale-105 overflow-hidden relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Image Container */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                    <img
                      src={agent.image}
                      alt={agent.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay with Icon */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${agent.gradient} text-white shadow-2xl`}>
                        {agent.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-shadow-cosmic transition-all duration-300">
                      {agent.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${agent.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cosmic-purple shadow-cosmic'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsSwiper;