import { useState } from 'react';
import { Globe, ArrowUpRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AgentsDropdown } from './AgentsDropdown';
import { PlatformDropdown } from './PlatformDropdown';
import { SolutionsDropdown } from './SolutionsDropdown';
import { ResourcesDropdown } from './ResourcesDropdown';
import { PartnersDropdown } from './PartnersDropdown';
<<<<<<< HEAD
=======
import { HamburgerButton, MobileMenu } from './MobileMenu';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { logoIconImg, logoTextImg } from '../assets';
>>>>>>> e35854f (Whole new code so many changes which are not pushed)

const navigationItems: any[] = [];

interface HeaderProps {
  onLoginClick: () => void;
  onTrialClick: () => void;
  onTalkToSalesClick: () => void;
  onLogoClick: () => void;
  isWhiteBackground?: boolean;
  onNavigationClick: (page: string) => void;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function Header({ onLoginClick, onTrialClick, onTalkToSalesClick, onLogoClick, isWhiteBackground = false, onNavigationClick, onMenuStateChange }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showEmailInput, setShowEmailInput] = useState(false);
<<<<<<< HEAD
=======
  const { isOpen: isMobileMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
>>>>>>> e35854f (Whole new code so many changes which are not pushed)

  const handleDropdownChange = (dropdownName: string | null) => {
    setActiveDropdown(dropdownName);
    onMenuStateChange?.(dropdownName !== null);
  };

  const handleTalkToSales = () => {
    if (showEmailInput) {
      onTalkToSalesClick();
    } else {
      setShowEmailInput(true);
    }
  };

  const headerBg = isWhiteBackground ? 'bg-white' : 'bg-black';
  const headerText = isWhiteBackground ? 'text-black' : 'text-white';
  const borderColor = isWhiteBackground ? 'border-gray-300' : 'border-gray-600';
  const hoverBorderColor = isWhiteBackground ? 'hover:border-gray-500' : 'hover:border-gray-400';
  const hoverBg = isWhiteBackground ? 'hover:bg-gray-100' : 'hover:bg-gray-900';

  return (
    <header className={`${headerBg} ${headerText} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
<<<<<<< HEAD
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold"
              style={{ 
                background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                color: '#fff'
              }}
            >
              A
            </div>
            <span className="text-lg sm:text-xl font-medium">Agentic View</span>
=======
            <img 
              src={logoIconImg}
              alt="AgenticView Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <img 
              src={logoTextImg}
              alt="AgenticView"
              className="h-6 sm:h-8 w-auto"
            /> 
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
          </button>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <AgentsDropdown 
              onNavigationClick={onNavigationClick} 
              isWhiteBackground={isWhiteBackground}
              onMenuStateChange={onMenuStateChange}
            />
            
            <PlatformDropdown 
              onNavigationClick={onNavigationClick} 
              isWhiteBackground={isWhiteBackground}
              onMenuStateChange={onMenuStateChange}
            />
            
            <SolutionsDropdown 
              onNavigationClick={onNavigationClick} 
              isWhiteBackground={isWhiteBackground}
              onMenuStateChange={onMenuStateChange}
            />
            
            <ResourcesDropdown 
              onNavigationClick={onNavigationClick} 
              isWhiteBackground={isWhiteBackground}
              onMenuStateChange={onMenuStateChange}
            />
            
            <PartnersDropdown 
              onNavigationClick={onNavigationClick} 
              isWhiteBackground={isWhiteBackground}
              onMenuStateChange={onMenuStateChange}
            />
            
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDropdownChange(item.name)}
                onMouseLeave={() => handleDropdownChange(null)}
              >
                <button 
                  onClick={() => onNavigationClick(item.name)}
                  className={`py-2 px-3 rounded-lg ${hoverBg} transition-colors text-sm`}
                >
                  <span className="capitalize">{item.name}</span>
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
<<<<<<< HEAD
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden"
=======
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden-oigin-top-left"
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
                    >
                      <div 
                        className="h-1 w-full bg-gradient-to-r from-primary to-secondary"
                      />
                      <div className="p-4">
                        {item.items.map((subItem, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              onNavigationClick(item.name);
                              handleDropdownChange(null);
                            }}
                            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white text-sm"
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Globe Icon */}
            <button className={`p-2 border ${borderColor} rounded-lg ${hoverBorderColor} transition-colors hidden sm:block`}>
              <Globe className="w-4 h-4" />
            </button>

            {/* Login Button - Commented out per request */}
            {/* <button 
              onClick={onLoginClick}
              className={`px-3 py-2 border ${borderColor} rounded-lg ${hoverBorderColor} transition-colors text-sm`}
            >
              Login
            </button> */}

            {/* Request a Demo */}
            <button 
              onClick={onTrialClick}
              className={`px-3 py-2 border ${borderColor} rounded-lg ${hoverBorderColor} transition-colors text-sm hidden sm:block`}
            >
              Request a demo
            </button>

<<<<<<< HEAD
            {/* Talk to Sales */}
            {showEmailInput ? (
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm w-40"
                />
                <button 
                  onClick={handleTalkToSales}
                  className="p-2 rounded-lg transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleTalkToSales}
                className="px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:scale-105 text-sm bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap"
              >
                <span className="hidden sm:inline">Talk to sales</span>
                <span className="sm:hidden">Sales</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
=======
            {/* Talk to Sales (Desktop only) */}
            <div className="hidden lg:block">
              {showEmailInput ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm w-40"
                  />
                  <button 
                    onClick={handleTalkToSales}
                    className="p-2 rounded-lg transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleTalkToSales}
                  className="px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:scale-105 text-sm bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap"
                >
                  <span>Talk to sales</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMenu}
              isWhiteBackground={isWhiteBackground}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMenu}
        onNavigationClick={onNavigationClick}
        onLoginClick={onLoginClick}
        onTrialClick={onTrialClick}
        onTalkToSalesClick={onTalkToSalesClick}
        isWhiteBackground={isWhiteBackground}
      />
    </header>
  );
}
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
