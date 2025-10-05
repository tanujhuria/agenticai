import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { ArrowUpRight, Settings, Search, Users, Layers, BarChart3, Workflow, Bot, Database, Globe, Brain, FileText, Network } from 'lucide-react';

interface PlatformDropdownProps {
  onNavigationClick: (page: string) => void;
  isWhiteBackground: boolean;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function PlatformDropdown({ onNavigationClick, isWhiteBackground, onMenuStateChange }: PlatformDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
    onMenuStateChange?.(open);
  };

  const platformData = {
    platform: {
      title: 'Platform',
      items: [
        { name: 'AgenticView One Platform', page: 'platform', icon: Layers },
        { name: "The AgenticView ONE Advantage", page: 'platform-advantage', icon: Settings },
        { name: "Why AgenticView", page: 'why-avis', icon: ArrowUpRight },
{ name: 'Integration', page: 'integration', icon: Globe },
        { name: 'Enterprise-Grade Security', page: 'security', icon: Settings },
        { name: 'Pricing', page: 'pricing', icon: BarChart3 }
      ]
    },
    agentic: {
      title: 'Agentic',
      items: [
        { name: 'Enterprise Search', page: 'enterprise-search', icon: Search },
        { name: 'Build Custom Agents', page: 'build-custom-agents', icon: Bot },

        { name: 'Enterprise MCP', page: 'enterprise-mcp', icon: Users }
      ]
    },
    orchestration: {
      title: 'Enterprise Orchestration',
      items: [

        { name: 'Enterprise iPaaS', page: 'enterprise-ipaas', icon: Layers },
        { name: 'API Management', page: 'api-management', icon: Settings },
        { name: 'Data Orchestration', page: 'data-orchestration', icon: Database },
        { name: 'Workflow Bots & Apps', page: 'workflow-bots', icon: Workflow },
        { name: 'Intelligent Document Processing (IDP)', page: 'intelligent-document-processing', icon: FileText },
        { name: 'AI Workflows', page: 'ai-workflows', icon: Brain },
        { name: 'AI Copilots', page: 'ai-copilots', icon: Bot },
        { name: 'Data Hub / MDM', page: 'data-hub', icon: Network },
        { name: 'B2B / EDI', page: 'b2b-edi', icon: Globe },
        { name: 'Insights', page: 'insights', icon: BarChart3 }
      ]
    },
    embedded: {
      title: 'Embedded iPaaS',
      items: [
        { name: 'Embedded integrations', page: 'embedded-integration', icon: Layers },
        { name: 'Embedded Case Study', page: 'embedded-study', icon: BarChart3 }
      ]
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
        onClick={() => onNavigationClick('platform')}
        className={`py-2 px-3 rounded-lg ${hoverBg} transition-colors text-sm`}
      >
        <span>Platform</span>
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
              <div className="grid grid-cols-4 gap-8">
                {/* Platform Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {platformData.platform.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {platformData.platform.items.map((item, index) => (
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

                {/* Agentic Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {platformData.agentic.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {platformData.agentic.items.map((item, index) => (
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


                {/* Enterprise Orchestration Column - Single Column with All Items */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {platformData.orchestration.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {platformData.orchestration.items.map((item, index) => (
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


                {/* Embedded iPaaS Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">

                    {platformData.embedded.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {platformData.embedded.items.map((item, index) => (
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}