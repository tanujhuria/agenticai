import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Book, FileText, Mic, Users, TrendingUp, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ResourcesDropdownProps {
  onNavigationClick: (page: string) => void;
  isWhiteBackground: boolean;
  onMenuStateChange?: (isOpen: boolean) => void;
}

export function ResourcesDropdown({ onNavigationClick, isWhiteBackground, onMenuStateChange }: ResourcesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
    onMenuStateChange?.(open);
  };

  const resourcesData = {
    resources: {
      title: 'Resources',
      items: [
        { name: 'Ebooks', page: 'ebooks', icon: Book },
        { name: 'Whitepapers', page: 'whitepapers', icon: FileText },
        { name: 'Podcast', page: 'podcast', icon: Mic },
        { name: 'View all', page: 'all-resources', icon: ArrowUpRight, isLink: true }
      ]
    },
    blog: {
      title: 'Blog',
      items: [
        { name: 'The Connector', page: 'the-connector-blog', icon: TrendingUp },
        { name: 'Product updates', page: 'product-updates', icon: Zap }
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      items: [
        {
          title: 'Enterprise Transformation',
          description: 'How Fortune 500 companies scale AI operations',
          image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhc2UlMjBzdHVkeSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTc5NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          page: 'enterprise-transformation-case-study'
        },
        {
          title: 'Digital Innovation Success',
          description: 'Automating workflows for 10,000+ employees',
          image: 'https://images.unsplash.com/photo-1740313498441-68da0e01df37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU3OTYwMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          page: 'digital-innovation-case-study'
        },
        {
          title: 'AI-Powered Growth',
          description: 'Increasing revenue by 300% with smart automation',
          image: 'https://images.unsplash.com/photo-1635604914181-62dc4b3fe484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFuc2Zvcm1hdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU3OTYwMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          page: 'ai-powered-growth-case-study'
        }
      ]
    }
  };

  const hoverBg = isWhiteBackground ? 'hover:bg-gray-100' : 'hover:bg-gray-900';

  return (
    <div className="relative">
      <button
        onMouseEnter={() => handleMenuToggle(true)}
        onMouseLeave={() => handleMenuToggle(false)}
        className={`py-2 px-3 rounded-lg ${hoverBg} transition-colors text-sm`}
      >
        <span>Resources</span>
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
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Resources Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="col-span-3 space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {resourcesData.resources.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {resourcesData.resources.items.map((item, index) => (
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

                {/* Blog Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="col-span-3 space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {resourcesData.blog.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  {resourcesData.blog.items.map((item, index) => (
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

                {/* Case Studies Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="col-span-6 space-y-1"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {resourcesData.caseStudies.title}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {resourcesData.caseStudies.items.map((study, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                        onClick={() => {
                          onNavigationClick(study.page);
                          handleMenuToggle(false);
                        }}
                        className="flex items-start space-x-4 w-full text-left p-4 rounded-lg hover:bg-purple-50 transition-all duration-200 group border border-gray-100 hover:border-purple-200"
                      >
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 mb-1">
                            {study.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {study.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-1" />
                      </motion.button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => {
                      onNavigationClick('all-case-studies');
                      handleMenuToggle(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left py-3 px-3 rounded-lg hover:bg-purple-50 hover:text-primary transition-all duration-200 group border-t border-gray-100 mt-4 pt-4"
                  >
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary">
                      View all case studies
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-primary" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}