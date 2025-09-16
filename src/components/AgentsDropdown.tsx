import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Bot, Shield, Users, BarChart3, Headphones, Building, Wrench, Star, Eye, Play } from 'lucide-react';

interface AgentsDropdownProps {
  onNavigationClick: (page: string) => void;
  isWhiteBackground: boolean;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function AgentsDropdown({ onNavigationClick, isWhiteBackground, onMenuStateChange }: AgentsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
    onMenuStateChange?.(open);
  };

  const agentCategories = [
    { name: 'Marketing', page: 'marketing', icon: BarChart3 },
    { name: 'Support', page: 'support', icon: Headphones },
    { name: 'Security', page: 'security', icon: Shield },
    { name: 'Sales', page: 'sales', icon: Users },
    { name: 'HR Recruiting', page: 'hr', icon: Building },
    { name: 'Build your own', page: 'build-your-own', icon: Wrench },
    { name: 'Customer experience', page: 'customer-experience', icon: Star },
    { name: 'IT', page: 'it', icon: Bot },
    { name: 'View all', page: 'agents', icon: Eye }
  ];

  const hoverBg = isWhiteBackground ? 'hover:bg-gray-100' : 'hover:bg-gray-900';

  return (
    <div className="relative">
      <button
        onMouseEnter={() => handleMenuToggle(true)}
        onMouseLeave={() => handleMenuToggle(false)}
        className={`py-2 px-3 rounded-lg ${hoverBg} transition-all duration-200 text-sm hover:scale-105 gradient-text-animate`}
      >
        <span>Agents</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMenuToggle(true)}
            onMouseLeave={() => handleMenuToggle(false)}
            className="fixed top-[70px] left-0 right-0 w-full bg-white rounded-none shadow-2xl border-t-4 border-primary overflow-hidden z-50 dropdown-shadow"
          >
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="flex">
                {/* Center - 9 boxes in 3x3 grid */}
                <div className="flex-1 max-w-4xl">
                  <div className="grid grid-cols-3 gap-4">
                    {agentCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          onNavigationClick(category.page);
                          handleMenuToggle(false);
                        }}
                        className="p-4 rounded-xl bg-white border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 min-h-[80px] flex flex-col items-center justify-center relative overflow-hidden group text-gray-700 hover:text-primary"
                    >
                        <category.icon className="w-6 h-6 mb-2 text-primary" />
                        {index === agentCategories.length - 1 ? (
                          <div className="flex items-center space-x-1 relative z-10">
                            <span className="font-medium text-xs">{category.name}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        ) : (
                          <span className="font-medium text-xs relative z-10 text-center">{category.name}</span>
                        )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right side - Featured content */}
                <div className="w-80 bg-gray-50 p-4 ml-6 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Featured Content</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="w-full h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h5 className="text-sm font-medium text-gray-900 mb-2">CX AVi</h5>
                    <p className="text-xs text-gray-600 mb-3">Automate customer experience workflows with intelligent AVi agents</p>
                    
                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          onNavigationClick('demo');
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg transition-all hover:scale-105 text-xs"
                      >
                        <span>Show CX AVi in Action</span>
                        <div className="flex items-center">
                          <div className="w-px h-4 bg-white/20 mx-2"></div>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </button>
                      
                      <button 
                        onClick={() => {
                          onNavigationClick('demo');
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 bg-white border border-primary text-primary rounded-lg transition-all hover:bg-primary hover:text-white text-xs"
                      >
                        <span>Watch Video</span>
                        <div className="flex items-center">
                          <div className="w-px h-4 bg-primary/20 mx-2"></div>
                          <Play className="w-3 h-3" />
                        </div>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}