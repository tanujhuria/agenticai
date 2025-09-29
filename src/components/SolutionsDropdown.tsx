import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Settings, Search, Users, Layers, BarChart3, Workflow, Bot, Database, Globe, DollarSign, Shield, Headphones, Building, TrendingUp, Package, Factory, CreditCard, ShoppingCart, Truck, Heart, Tv, UserPlus } from 'lucide-react';

interface SolutionsDropdownProps {
  onNavigationClick: (page: string) => void;
  isWhiteBackground: boolean;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function SolutionsDropdown({ onNavigationClick, isWhiteBackground, onMenuStateChange }: SolutionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
    onMenuStateChange?.(open);
  };

  const solutionsData = {
    appIntegrations: {
      title: 'App Integrations',
      items: [
        { name: 'Salesforce', page: 'salesforce-integration', icon: CreditCard },
        { name: 'Slack', page: 'slack-integration', icon: Bot },
        { name: 'Marketo', page: 'marketo-integration', icon: TrendingUp },
        { name: 'NetSuite', page: 'netsuite-integration', icon: Database },
        { name: 'ServiceNow', page: 'servicenow-integration', icon: Settings },
        { name: 'Workday', page: 'workday-integration', icon: Users },
        { name: 'View all', page: 'all-integrations', icon: ArrowUpRight, isLink: true }
      ]
    },
    byFunction: {
      title: 'By Function',
      items: [
        { name: 'IT', page: 'it-solutions', icon: Settings },
        { name: 'Finance', page: 'finance-solutions', icon: DollarSign },
        { name: 'Support', page: 'support-solutions', icon: Headphones },
        { name: 'HR', page: 'hr-solutions', icon: Users },
        { name: 'Marketing', page: 'marketing-solutions', icon: TrendingUp },
        { name: 'Sales', page: 'sales-solutions', icon: BarChart3 },
        { name: 'Revenue Operations', page: 'revenue-ops-solutions', icon: TrendingUp },
        { name: 'Product (Embed)', page: 'product-embed-solutions', icon: Package }
      ]
    },
    byUseCase: {
      title: 'By Use Case',
      items: [
        { name: 'Order-to-cash', page: 'order-to-cash', icon: ShoppingCart },
        { name: 'Employee onboarding', page: 'employee-onboarding', icon: UserPlus },
        { name: 'Enterprise iPaaS', page: 'enterprise-ipaas', icon: Layers },
        { name: 'Product-led sales', page: 'product-led-sales', icon: TrendingUp },
        { name: 'Embedded Integrations', page: 'embedded-integrations', icon: Package },
        { name: 'View all', page: 'all-use-cases', icon: ArrowUpRight, isLink: true }
      ]
    },
    byIndustry: {
      title: 'By Industry',
      items: [
        { name: 'Manufacturing', page: 'manufacturing-solutions', icon: Factory },
        { name: 'Financial services', page: 'financial-services', icon: CreditCard },
        { name: 'Retail', page: 'retail-solutions', icon: ShoppingCart },
        { name: 'Logistics', page: 'logistics-solutions', icon: Truck },
        { name: 'Healthcare', page: 'healthcare-solutions', icon: Heart },
        { name: 'Media', page: 'media-solutions', icon: Tv },
        { name: 'BPO', page: 'bpo-solutions', icon: Building },
        { name: 'Non-profit', page: 'nonprofit-solutions', icon: Heart }
      ]
    }
  };

  const hoverBg = isWhiteBackground ? 'hover:bg-gray-100' : 'hover:bg-gray-900';

  return (
<<<<<<< HEAD
    <div className="relative">
      <button
        onMouseEnter={() => handleMenuToggle(true)}
        onMouseLeave={() => handleMenuToggle(false)}
=======
    <div 
      className="relative"
      onMouseEnter={() => handleMenuToggle(true)}
      onMouseLeave={() => handleMenuToggle(false)}
    >
      <button
        onClick={() => onNavigationClick('solutions')}
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
        className={`py-2 px-3 rounded-lg ${hoverBg} transition-colors text-sm`}
      >
        <span>Solutions</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
<<<<<<< HEAD
            onMouseEnter={() => handleMenuToggle(true)}
            onMouseLeave={() => handleMenuToggle(false)}
=======
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
            className="fixed top-[70px] left-0 right-0 w-full bg-white rounded-none shadow-2xl border-t-4 border-primary overflow-hidden z-50 dropdown-shadow"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-4 gap-8">
                {/* App Integrations Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {solutionsData.appIntegrations.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {solutionsData.appIntegrations.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onNavigationClick(item.page);
                        handleMenuToggle(false);
                      }}
                      className={`flex items-start space-x-3 w-full text-left py-2 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group ${
                        item.isLink ? 'border-t border-gray-100 mt-2 pt-3' : ''
                      }`}
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm text-gray-700 group-hover:text-primary ${
                          item.isLink ? 'font-semibold' : 'font-medium'
                        }`}>
                          {item.name}
                        </span>
                        {item.isLink && <ArrowUpRight className="w-3 h-3 text-primary" />}
                      </div>
                    </button>
                  ))}
                </motion.div>

<<<<<<< HEAD
                {/* By Function Column */}
=======
                {/* By Industry Column - Now 2nd */}
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
<<<<<<< HEAD
=======
                    {solutionsData.byIndustry.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {solutionsData.byIndustry.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onNavigationClick(item.page);
                        handleMenuToggle(false);
                      }}
                      className="flex items-start space-x-3 w-full text-left py-2 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-primary font-medium">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </motion.div>

                {/* By Function Column - Now 3rd */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
                    {solutionsData.byFunction.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {solutionsData.byFunction.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onNavigationClick(item.page);
                        handleMenuToggle(false);
                      }}
                      className="flex items-start space-x-3 w-full text-left py-2 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-primary font-medium">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </motion.div>

<<<<<<< HEAD
                {/* By Use Case Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
=======
                {/* By Use Case Column - Now 4th */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {solutionsData.byUseCase.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {solutionsData.byUseCase.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onNavigationClick(item.page);
                        handleMenuToggle(false);
                      }}
                      className={`flex items-start space-x-3 w-full text-left py-2 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group ${
                        item.isLink ? 'border-t border-gray-100 mt-2 pt-3' : ''
                      }`}
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm text-gray-700 group-hover:text-primary ${
                          item.isLink ? 'font-semibold' : 'font-medium'
                        }`}>
                          {item.name}
                        </span>
                        {item.isLink && <ArrowUpRight className="w-3 h-3 text-primary" />}
                      </div>
                    </button>
                  ))}
                </motion.div>
<<<<<<< HEAD

                {/* By Industry Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {solutionsData.byIndustry.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {solutionsData.byIndustry.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onNavigationClick(item.page);
                        handleMenuToggle(false);
                      }}
                      className="flex items-start space-x-3 w-full text-left py-2 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-primary font-medium">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </motion.div>
=======
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}