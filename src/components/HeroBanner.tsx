import { ArrowUpRight } from 'lucide-react';

interface HeroBannerProps {
  onTrialClick: () => void;
  onTalkToSalesClick: () => void;
}

export function HeroBanner({ onTrialClick, onTalkToSalesClick }: HeroBannerProps) {
  return (
    <section className="bg-white text-gray-900 pt-24 sm:pt-28 pb-16 sm:pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          style={{ 
            fontFamily: 'Mr Eaves Xl Modot, Helvetica, Arial, sans-serif'
          }}
        >
          Introducing AVi's: The next generation of agents built for the enterprise
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Mr Eaves Xl Modot, Helvetica, Arial, sans-serif'
          }}
        >
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