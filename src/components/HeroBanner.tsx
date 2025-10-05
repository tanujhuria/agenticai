import { ArrowUpRight } from 'lucide-react';

import { NetworkBackground } from './NetworkBackground';

interface HeroBannerProps {
  onTrialClick: () => void;
  onTalkToSalesClick: () => void;
}

export function HeroBanner({ onTrialClick, onTalkToSalesClick }: HeroBannerProps) {
  return (

    <section className="relative bg-gradient-to-br from-white to-purple-50/30 text-gray-900 pt-8 sm:pt-12 pb-12 sm:pb-16 px-6 overflow-hidden">
      {/* Animated Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={40}
        maxDistance={120}
        nodeColor="#6b21a8"
        lineColor="#7c3aed"
        nodeSize={1.5}
        animationSpeed={0.3}
        opacity={0.15}
      />
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
          AVi: Agentic copilots built for business.
        </h1>

        {/* Subheading */}

        <p className="text-lg sm:text-xl md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
          AI agents orchestrated with your data, apps, and workflows. Built on the #1 iPaaS.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onTrialClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-300 rounded-lg hover:border-primary transition-colors text-gray-700 hover:text-primary"
          >
            Get a trial
          </button>
          
          <button 
            onClick={onTalkToSalesClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap"
          >
            <span>Talk to sales</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}