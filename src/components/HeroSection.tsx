import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center py-16 md:py-24">
      <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full glass-card">
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
          <span className="text-white/90 text-sm">
            Trusted by 1M+ users worldwide
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Your AI chat
          <br />
          assistant awaits
        </h1>

        <p className="text-white/80 text-lg mb-8 max-w-lg">
          Chat smarter and get things done faster with your AI-powered
          assistant. Available for iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-6 hover:opacity-90 transition-opacity">
            Get the app
          </Button>
          <button className="px-6 py-3 border border-gray-600 rounded-full text-white font-medium hover:bg-white/5 transition-all">
            Watch demo
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative">
          {/* Large phone mockup */}
          <div className="w-64 h-auto relative z-20 animate-float">
            <div className="rounded-3xl overflow-hidden border-4 border-gray-800 bg-gray-900">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-white text-xs">09:41</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="p-2 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
                <div className="flex justify-between items-center mb-4">
                  <button className="text-xs">◀</button>
                  <div className="text-center">
                    <span className="text-sm font-medium">Kulikėun 2.1</span>
                  </div>
                  <button className="text-xs">⬚</button>
                </div>

                <div className="bg-white/10 rounded-lg p-2 mb-3">
                  <p className="text-xs">
                    How can I learn a english language quickly?
                  </p>
                </div>

                <div className="bg-white/20 rounded-lg p-2 text-xs">
                  <p className="mb-2">
                    Learning a english language quickly requires effective
                    strategies, consistency and motivation. Here are the steps
                    you can try:
                  </p>
                  <p className="font-medium">1. Set Clear Goals</p>
                  <p className="mb-2 text-[10px]">
                    Focus on your needs: Do you want to speak, write or
                    understand the language fluently? Set a target time. For
                    example, "I want to understand basic conversations in 3
                    months."
                  </p>
                  <p className="font-medium">
                    2. Use Active Learning Techniques
                  </p>
                  <p className="text-[10px]">
                    Talk every day. Practice speaking even if it's just with
                    yourself or use apps like Duolingo. Connect with a native
                    speaker. Write every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small floating cards */}
          <div className="absolute -left-20 top-10 glass-card p-4 rounded-xl w-48 z-10 animate-float">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center text-gray-700 flex-shrink-0">
                <span className="text-xs">📄</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">
                  Summarize this report in...
                </p>
                <p className="text-white/60 text-xs">PDF • 2.1 MB</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 text-white/60 text-xs">
              ×
            </div>
          </div>

          <div
            className="absolute -right-16 top-32 glass-card p-4 rounded-xl w-48 z-10 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-start space-x-2">
              <div>
                <p className="text-white text-xs">
                  Please translate this PDF into spanish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
