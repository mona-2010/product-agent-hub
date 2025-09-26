import React, { useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import TabbedContent from "@/components/TabbedContent";
import AgentsSwiper from '@/components/AgentsSwiper';
import CallToActionSection from '@/components/CallToActionSection'; 
import { Bot, Zap, Target, FileText, Bookmark, Image, Search, Network } from "lucide-react";
import robotImage from "@/assets/images/robot.png";
import contentWriterImage from "@/assets/images/image1.jpg";
import emailMarketingImage from "@/assets/images/image2.jpg";
import socialMediaImage from "@/assets/images/image3.jpg";
import analyticsImage from "@/assets/images/image4.jpg";
import automationImage from "@/assets/images/image5.jpg";
import strategyImage from "@/assets/images/image6.jpg";

const Index = () => {
  const chatInterfaceRef = useRef<HTMLDivElement>(null);

  const scrollToChatInterface = () => {
    if (chatInterfaceRef.current) {
      chatInterfaceRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      const firstInput = chatInterfaceRef.current.querySelector('input, textarea');
      if (firstInput) {
        setTimeout(() => {
          (firstInput as HTMLElement).focus();
        }, 500);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-1000 via-purple-900 to-pink-800">
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative p-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Left side - Content */}
                  <div className="space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Build marketing campaigns with{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                          AI-powered agents
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                        Create marketing strategies, content, and campaigns by chatting with specialized AI agents
                        that understand your products and goals.
                      </p>
                    </div>

                    {/* Features Preview */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 max-w-2xl mx-auto lg:mx-0">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium text-white">6 Specialized Agents</h3>
                          <p className="text-sm text-gray-400">Content, Email, Social & more</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-400/30">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium text-white">Instant Analysis</h3>
                          <p className="text-sm text-gray-400">Get insights in seconds</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 md:col-span-2 lg:col-span-1 xl:col-span-2">
                        <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300 border border-pink-400/30">
                          <Target className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium text-white">Actionable Results</h3>
                          <p className="text-sm text-gray-400">Ready-to-use strategies</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Workflow Diagram & Robot */}
                  <div className="flex flex-col items-center">

                    {/* Robot Character */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse scale-125"></div>
                      <div className="relative w-72 h-72 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] flex items-center justify-center">
                        <img
                          src={robotImage}
                          alt="AI Marketing Robot"
                          className="w-full h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                          style={{
                            filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Interface - Add ref here */}
                <div className="mt-16" ref={chatInterfaceRef}>
                  <ChatInterface />
                </div>


                {/* Workflow Diagram */}
                <div className="flex justify-center items-center mt-8">
                  <div className="flex items-center gap-8 relative">
                    {/* Left side icons */}
                    <div className="flex flex-col gap-4 relative">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
                        <FileText className="h-6 w-6 text-gray-300" />
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
                        <Bookmark className="h-6 w-6 text-gray-300" />
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
                        <Image className="h-6 w-6 text-gray-300" />
                      </div>

                      {/* Animated line to brain */}
                      <div className="absolute top-1/2 right-[-40px] w-8 h-0.5 bg-gradient-to-r from-purple-400/80 to-transparent">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Center brain node */}
                    <div className="relative flex items-center justify-center">
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-2xl animate-pulse"></div>
                      {/* Brain icon */}
                      <div className="p-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/30 relative z-10">
                        <Bot className="h-8 w-8 text-purple-200" />
                      </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex flex-col gap-4 relative">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
                        <Network className="h-6 w-6 text-gray-300" />
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
                        <Search className="h-6 w-6 text-gray-300" />
                      </div>

                      {/* Animated line out of brain */}
                      <div className="absolute top-1/2 left-[-40px] w-8 h-0.5 bg-gradient-to-l from-pink-400/80 to-transparent">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <AgentsSwiper
                  contentWriterImage={contentWriterImage}
                  emailMarketingImage={emailMarketingImage}
                  socialMediaImage={socialMediaImage}
                  analyticsImage={analyticsImage}
                  automationImage={automationImage}
                  strategyImage={strategyImage}
                />

                {/* Tabbed Content */}
                <div className="mt-16">
                  <TabbedContent />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Call to Action Section */}
        <CallToActionSection onGetStarted={scrollToChatInterface} />

        <Footer />
      </div>
    </div>
  );
};

export default Index;