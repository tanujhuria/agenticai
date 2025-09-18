import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageSelector } from './LanguageSelector';
import logoTextImg from 'figma:asset/a36b397124b0832ad70b8e5f755a4d10b45ea3c1.png';
import logoIconImg from 'figma:asset/bd28315832c77c36328805e69c07a718c6c222cc.png';

interface FooterProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
  onLogoClick?: () => void;
  onNavigationClick?: (page: string) => void;
  enableScrollAnimations?: boolean;
}

export function Footer({
  currentLanguage = 'English',
  onLanguageChange = () => {},
  onLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  onNavigationClick = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  // defaulting to true so effect is visible by default — you can pass false to disable
  enableScrollAnimations = true
}: FooterProps) {
  // container variant to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // each column animates up + fade
  const columnVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.60, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-white text-gray-900 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial="hidden"
          // If enableScrollAnimations -> animate on scroll into view, else animate immediately on mount
          animate={enableScrollAnimations ? undefined : 'show'}
          whileInView={enableScrollAnimations ? 'show' : undefined}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={columnVariants} className="lg:col-span-1 relative">
            {/* subtle blurred shadow behind column (non-intrusive) */}
            <div className="absolute -inset-3 -z-10 rounded-lg blur-3xl opacity-10 bg-gradient-to-br from-gray-200 to-transparent pointer-events-none" />

            <button 
              onClick={onLogoClick}
              className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoIconImg}
                alt="Agentic View Logo"
                className="w-8 h-8 flex-shrink-0"
              />
              <img 
                src={logoTextImg}
                alt="Agentic View"
                className="h-6 w-auto flex-shrink-0"
              />
            </button>
            <p className="text-gray-600 mb-6 text-sm">
              The next generation of AI agents built for the enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={columnVariants} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-lg blur-3xl opacity-8 bg-gradient-to-br from-gray-200 to-transparent pointer-events-none" />
            <h3 className="text-lg mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">The Agentic View Platform</button></li>
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">Why Agentic View</button></li>
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About us</button></li>
              <li><button onClick={() => onNavigationClick('pricing')} className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigationClick('customers')} className="text-gray-600 hover:text-gray-900 transition-colors">Customers</button></li>
              <li><button onClick={() => onNavigationClick('partners')} className="text-gray-600 hover:text-gray-900 transition-colors">Partners</button></li>
              <li><button onClick={() => onNavigationClick('careers')} className="text-gray-600 hover:text-gray-900 transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">Agentic View Cares</button></li>
              <li><button onClick={() => onNavigationClick('press')} className="text-gray-600 hover:text-gray-900 transition-colors">Press</button></li>
            </ul>
          </motion.div>

          {/* Product */}
          <motion.div variants={columnVariants} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-lg blur-3xl opacity-8 bg-gradient-to-br from-gray-200 to-transparent pointer-events-none" />
            <h3 className="text-lg mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise iPaaS</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Embedded integrations</button></li>
              <li><button onClick={() => onNavigationClick('agents')} className="text-gray-600 hover:text-gray-900 transition-colors">Agentic</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">API Management</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Data Orchestration</button></li>
              <li><button onClick={() => onNavigationClick('agents')} className="text-gray-600 hover:text-gray-900 transition-colors">Workflow Bots</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Low Code Apps</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">B2B/EDI</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Insights</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Data Hub / MDM</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">BPM Services</button></li>
            </ul>
          </motion.div>

          {/* Resources & Learn */}
          <motion.div variants={columnVariants} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-lg blur-3xl opacity-8 bg-gradient-to-br from-gray-200 to-transparent pointer-events-none" />
            <h3 className="text-lg mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('demo')} className="text-gray-600 hover:text-gray-900 transition-colors">Demo</button></li>
              <li><button onClick={() => onNavigationClick('demo')} className="text-gray-600 hover:text-gray-900 transition-colors">Agentic View Conference</button></li>
              <li><button onClick={() => onNavigationClick('documentation')} className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</button></li>
              <li><button onClick={() => onNavigationClick('training')} className="text-gray-600 hover:text-gray-900 transition-colors">Training</button></li>
              <li><button onClick={() => onNavigationClick('certification')} className="text-gray-600 hover:text-gray-900 transition-colors">Certification</button></li>
              <li><button onClick={() => onNavigationClick('support')} className="text-gray-600 hover:text-gray-900 transition-colors">Customer Success</button></li>
              <li><button onClick={() => onNavigationClick('blog')} className="text-gray-600 hover:text-gray-900 transition-colors">Company Blog</button></li>
              <li><button onClick={() => onNavigationClick('blog')} className="text-gray-600 hover:text-gray-900 transition-colors">Product Blog</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Integration Library</button></li>
            </ul>

            <h3 className="text-lg mb-4 mt-8 text-gray-900">Learn</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">What is an iPaaS?</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Why Embed?</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">What is API Management?</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">Software Integration Guide</button></li>
              <li><button onClick={() => onNavigationClick('platform')} className="text-gray-600 hover:text-gray-900 transition-colors">What is Process Automation?</button></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={columnVariants} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-lg blur-3xl opacity-8 bg-gradient-to-br from-gray-200 to-transparent pointer-events-none" />
            <h3 className="text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact Sales</button></li>
              <li><button onClick={() => onNavigationClick('support')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact Support</button></li>
              <li><button onClick={() => onNavigationClick('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Office Hours</button></li>
            </ul>

            <h3 className="text-lg mb-4 mt-8 text-gray-900">User Reviews</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">Gartner Peer Insights™</button></li>
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">G2</button></li>
              <li><button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors">TrustRadius</button></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6">
              <button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</button>
              <button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms of Service</button>
              <button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Cookie Policy</button>
              <button onClick={() => onNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Security</button>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />
              <p className="text-gray-600 text-sm">
                © 2025 Agentic View. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Legal Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-xs text-gray-500 space-y-2">
              <p>
                This website uses cookies to ensure you get the best experience on our website. By continuing to use our website, 
                you agree to our use of cookies and our Privacy Policy.
              </p>
              <p>
                Agentic View is committed to protecting your privacy and ensuring the security of your personal information. 
                We comply with applicable data protection regulations including GDPR and CCPA.
              </p>
              <p>
                All trademarks, service marks, and trade names referenced in this material are the property of their respective owners. 
                Third-party logos and product names are for identification purposes only and do not imply endorsement.
              </p>
              <p>
                The information contained herein is subject to change without notice. Agentic View shall not be liable for technical or editorial 
                errors or omissions contained herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
