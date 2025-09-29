import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ArrowUpRight, Globe, Mail } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigationClick: (page: string) => void;
  onLoginClick: () => void;
  onTrialClick: () => void;
  onTalkToSalesClick: () => void;
  isWhiteBackground?: boolean;
}

interface MenuItem {
  name: string;
  page: string;
  description?: string;
  items?: { name: string; page: string; description?: string }[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Agents',
    page: 'agents',
    description: 'AI-powered agents for your business',
    items: [
      { name: 'Marketing', page: 'marketing' },
      { name: 'Support', page: 'support' },
      { name: 'Security', page: 'security' },
      { name: 'Sales', page: 'sales' },
      { name: 'HR Recruiting', page: 'hr' },
      { name: 'Customer Experience', page: 'customer-experience' },
      { name: 'IT', page: 'it' },
      { name: 'Build your own', page: 'build-your-own' },
      { name: 'View all', page: 'agents' },
    ],
  },
  {
    name: 'Platform',
    page: 'platform',
    description: 'Comprehensive AI platform',
    items: [
      { name: 'The AgenticView ONE Advantage', page: 'platform-advantage' },
      { name: 'Why AgenticView', page: 'why-avis' },
      { name: 'Connectivity', page: 'connectors' },
      { name: 'Enterprise-Grade Security', page: 'security' },
      { name: 'Pricing', page: 'pricing' },
      { name: 'Enterprise Search', page: 'enterprise-search' },
      { name: 'Build Custom Agents', page: 'build-custom-agents' },
      { name: 'Enterprise MCP', page: 'enterprise-mcp' },
      { name: 'Enterprise iPaaS', page: 'enterprise-ipaas' },
      { name: 'API Management', page: 'api-management' },
      { name: 'Data Orchestration', page: 'data-orchestration' },
      { name: 'Workflow Bots & Apps', page: 'workflow-bots' },
      { name: 'Intelligent Document Processing (IDP)', page: 'intelligent-document-processing' },
      { name: 'AI Workflows', page: 'ai-workflows' },
      { name: 'AI Copilots', page: 'ai-copilots' },
      { name: 'Data Hub / MDM', page: 'data-hub' },
      { name: 'B2B / EDI', page: 'b2b-edi' },
      { name: 'Insights', page: 'insights' },
      { name: 'Embedded integrations', page: 'embedded-integration' },
      { name: 'Embedded Case Study', page: 'embedded-study' },
    ],
  },
  {
    name: 'Solutions',
    page: 'solutions',
    description: 'Industry-specific solutions',
    items: [
      { name: 'Salesforce', page: 'salesforce-integration' },
      { name: 'Slack', page: 'slack-integration' },
      { name: 'Marketo', page: 'marketo-integration' },
      { name: 'NetSuite', page: 'netsuite-integration' },
      { name: 'ServiceNow', page: 'servicenow-integration' },
      { name: 'Workday', page: 'workday-integration' },
      { name: 'All integrations', page: 'all-integrations' },
      { name: 'Manufacturing', page: 'manufacturing-solutions' },
      { name: 'Financial services', page: 'financial-services' },
      { name: 'Retail', page: 'retail-solutions' },
      { name: 'Logistics', page: 'logistics-solutions' },
      { name: 'Healthcare', page: 'healthcare-solutions' },
      { name: 'Media', page: 'media-solutions' },
      { name: 'BPO', page: 'bpo-solutions' },
      { name: 'Non-profit', page: 'nonprofit-solutions' },
      { name: 'IT', page: 'it-solutions' },
      { name: 'Finance', page: 'finance-solutions' },
      { name: 'Support', page: 'support-solutions' },
      { name: 'HR', page: 'hr-solutions' },
      { name: 'Marketing', page: 'marketing-solutions' },
      { name: 'Sales', page: 'sales-solutions' },
      { name: 'Revenue Operations', page: 'revenue-ops-solutions' },
      { name: 'Product (Embed)', page: 'product-embed-solutions' },
      { name: 'Order-to-cash', page: 'order-to-cash' },
      { name: 'Employee onboarding', page: 'employee-onboarding' },
      { name: 'Enterprise iPaaS', page: 'enterprise-ipaas' },
      { name: 'Product-led sales', page: 'product-led-sales' },
      { name: 'Embedded Integrations', page: 'embedded-integrations' },
      { name: 'All use cases', page: 'all-use-cases' },
    ],
  },
  {
    name: 'Resources',
    page: 'resources',
    description: 'Documentation and guides',
    items: [
      { name: 'Ebooks', page: 'ebooks' },
      { name: 'Whitepapers', page: 'whitepapers' },
      { name: 'Podcast', page: 'podcast' },
      { name: 'All resources', page: 'all-resources' },
      { name: 'Blog • The Connector', page: 'the-connector-blog' },
      { name: 'Blog • Product updates', page: 'product-updates' },
      { name: 'All case studies', page: 'all-case-studies' },
    ],
  },
  {
    name: 'Partners',
    page: 'partners',
    description: 'Partner ecosystem',
    items: [
      { name: 'Find a Partner', page: 'find-partner' },
      { name: 'Technology Partners', page: 'technology-partners' },
      { name: 'Become a Partner', page: 'become-partner' },
      { name: 'System Integrators', page: 'system-integrators' },
      { name: 'AWS Marketplace', page: 'aws-marketplace' },
    ],
  },
  { name: 'Pricing', page: 'pricing', description: 'Simple, transparent pricing' },
  { name: 'About', page: 'about', description: 'Our story and mission' },
  { name: 'Contact', page: 'contact', description: 'Get in touch' },
];

export function HamburgerButton({
  isOpen,
  onClick,
  isWhiteBackground = false,
}: {
  isOpen: boolean;
  onClick: () => void;
  isWhiteBackground?: boolean;
}) {
  const buttonClass = isWhiteBackground
    ? 'text-primary hover:bg-primary/10'
    : 'text-primary hover:bg-primary/20';

  return (
    <button
      onClick={onClick}
      className={`lg:hidden relative p-2 rounded-lg transition-all duration-300 z-50 ${buttonClass}`}
      aria-label="Toggle mobile menu"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <motion.span
          className="block h-0.5 w-full bg-current origin-center"
          animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className="block h-0.5 w-full bg-current"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 w-full bg-current origin-center"
          animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </button>
  );
}

export function MobileMenu({
  isOpen,
  onClose,
  onNavigationClick,
  onLoginClick,
  onTrialClick,
  onTalkToSalesClick,
  isWhiteBackground = false,
}: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const [showEmailInput, setShowEmailInput] = React.useState(false);

  const toggleExpanded = (itemName: string) => {
    const next = new Set(expandedItems);
    next.has(itemName) ? next.delete(itemName) : next.add(itemName);
    setExpandedItems(next);
  };

  const handleNavigation = (page: string) => {
    onNavigationClick(page);
    onClose();
    setExpandedItems(new Set());
  };

  const handleTalkToSales = () => {
    if (showEmailInput) {
      onTalkToSalesClick();
      onClose();
    } else {
      setShowEmailInput(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden mobile-menu-backdrop"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto mobile-menu-panel"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-gray-900">AgenticView</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav */}
            <div className="p-6">
              <nav className="space-y-2 mobile-menu-stagger">
                {menuItems.map((item) => (
                  <div key={item.name} className="mobile-menu-item">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => (item.items ? toggleExpanded(item.name) : handleNavigation(item.page))}
                        className="flex-1 flex items-center justify-between p-3 rounded-lg text-left hover:bg-gray-50 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
                          )}
                        </div>
                        {item.items && (
                          <motion.div
                            animate={{ rotate: expandedItems.has(item.name) ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {item.items && expandedItems.has(item.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-4 mt-2 space-y-1 overflow-hidden mobile-submenu"
                        >
                          {item.items.map((sub) => (
                            <button
                              key={sub.page}
                              onClick={() => handleNavigation(sub.page)}
                              className="w-full p-3 rounded-lg text-left hover:bg-gray-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                                {sub.name}
                              </div>
                              {sub.description && (
                                <div className="text-sm text-gray-500 mt-0.5">{sub.description}</div>
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Actions */}
              <div className="mt-8 space-y-3 border-t border-gray-200 pt-6">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Language</span>
                </button>

                {/* Request Demo */}
                <button
                  onClick={() => {
                    onTrialClick();
                    onClose();
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors mobile-action-button"
                >
                  Request a demo
                </button>

                {/* Talk to Sales */}
                {showEmailInput ? (
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      onClick={handleTalkToSales}
                      className="p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                      aria-label="Send"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleTalkToSales}
                    className="w-full p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2 mobile-gradient-button"
                  >
                    <span>Talk to sales</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
