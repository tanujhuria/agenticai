import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search, UserPlus, Settings, Users, Code } from 'lucide-react';
import exampleImage from '../assets/3275b16f3ae604d55381773e57c438d7eb411da8.png';

interface PartnersDropdownProps {
  onNavigationClick: (page: string) => void;
  isWhiteBackground: boolean;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function PartnersDropdown({ onNavigationClick, isWhiteBackground, onMenuStateChange }: PartnersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
    onMenuStateChange?.(open);
  };

  const partnersData = {
    network: {
      title: 'Our Network',
      items: [
        { name: 'Find a Partner', page: 'find-partner', icon: Search },
        { name: 'Technology Partners', page: 'technology-partners', icon: Code },
        { name: 'Become a Partner', page: 'become-partner', icon: UserPlus },
        { name: 'System Integrators', page: 'system-integrators', icon: Users }
      ]
    },
    featured: {
      title: 'Featured Content',
      content: {
        title: "Agentic View available in AWS Marketplace",
        page: 'aws-marketplace'
      }
    }
  };

  const hoverBg = isWhiteBackground ? 'hover:bg-gray-100' : 'hover:bg-gray-900';

  return (
    <div 
      className="relative"
      onMouseEnter={() => handleMenuToggle(true)}
      onMouseLeave={() => handleMenuToggle(false)}
    >
      <button
        onClick={() => onNavigationClick('partners')}
        className={`py-2 px-3 rounded-lg ${hoverBg} transition-colors text-sm`}
      >
        <span>Partners</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 w-full bg-white rounded-none shadow-2xl border-t-4 border-primary overflow-hidden z-50 dropdown-shadow"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Our Network Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="col-span-6 space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {partnersData.network.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  
                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {partnersData.network.items.map((item, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                        onClick={() => {
                          onNavigationClick(item.page);
                          handleMenuToggle(false);
                        }}
                        className="flex items-start space-x-3 w-full text-left py-4 px-4 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group border border-gray-100 hover:border-purple-200"
                      >
                        <item.icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-700 group-hover:text-primary font-medium">
                          {item.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Contact CTA Section (replaces Featured Content) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="col-span-6 space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    Get in touch
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  <div className="p-6 rounded-lg border border-gray-100 bg-white">
                    <p className="text-sm text-gray-700 mb-4">Let’s talk about partnerships and co-selling opportunities.</p>
                    <button
                      onClick={() => { onNavigationClick('contact'); handleMenuToggle(false); }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all"
                    >
                      Talk to sales
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}