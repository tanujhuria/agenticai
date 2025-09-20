import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, Search, Filter, ExternalLink, Zap, Database, Cloud, Globe, Users, ShoppingCart, CreditCard, MessageSquare, FileText, Settings, Mail, Video, BarChart3, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

export function ConnectorsPage() {
  const [activeCategory, setActiveCategory] = useState('All Connectors');
  const [searchTerm, setSearchTerm] = useState('');

  // All connectors data
  const allConnectorsData = [
    // Popular/CRM
    { name: 'Salesforce', description: 'Leading enterprise CRM platform', icon: '🏢', category: 'CRM', verified: true },
    { name: 'HubSpot CRM', description: 'Free CRM with sales tools', icon: '🎯', category: 'CRM', verified: true },
    { name: 'Pipedrive', description: 'Sales-focused CRM platform', icon: '📈', category: 'CRM', verified: true },
    { name: 'Zoho CRM', description: 'Comprehensive CRM solution', icon: '🔧', category: 'CRM', verified: true },
    { name: 'Microsoft Dynamics CRM', description: 'Enterprise CRM solution', icon: '🏗️', category: 'CRM', verified: true },
    
    // ERP
    { name: 'NetSuite', description: 'Cloud-based ERP solution', icon: '💼', category: 'ERP', verified: true },
    { name: 'SAP', description: 'Enterprise resource planning', icon: '🏭', category: 'ERP', verified: true },
    { name: 'Oracle ERP', description: 'Cloud ERP applications', icon: '🗃️', category: 'ERP', verified: true },
    { name: 'Microsoft Dynamics 365', description: 'Business applications suite', icon: '🏗️', category: 'ERP', verified: true },
    { name: 'Odoo', description: 'Open source business apps', icon: '📦', category: 'ERP', verified: true },
    
    // Marketing
    { name: 'Mailchimp', description: 'Email marketing platform', icon: '📧', category: 'Marketing', verified: true },
    { name: 'Marketo', description: 'Marketing automation platform', icon: '🚀', category: 'Marketing', verified: true },
    { name: 'Pardot', description: 'B2B marketing automation', icon: '🎯', category: 'Marketing', verified: true },
    { name: 'Constant Contact', description: 'Email marketing service', icon: '✉️', category: 'Marketing', verified: true },
    { name: 'ActiveCampaign', description: 'Customer experience automation', icon: '🔄', category: 'Marketing', verified: true },
    { name: 'ConvertKit', description: 'Email marketing for creators', icon: '✨', category: 'Marketing', verified: true },
    
    // Sales
    { name: 'Outreach', description: 'Sales engagement platform', icon: '📊', category: 'Sales', verified: true },
    { name: 'SalesLoft', description: 'Sales development platform', icon: '📈', category: 'Sales', verified: true },
    { name: 'Apollo', description: 'Sales intelligence platform', icon: '🎯', category: 'Sales', verified: true },
    { name: 'ZoomInfo', description: 'B2B contact database', icon: '🔍', category: 'Sales', verified: true },
    { name: 'LinkedIn Sales Navigator', description: 'Social selling platform', icon: '💼', category: 'Sales', verified: true },
    { name: 'Gong', description: 'Revenue intelligence platform', icon: '🎤', category: 'Sales', verified: true },
    
    // HR
    { name: 'Workday', description: 'Human capital management', icon: '👥', category: 'HR', verified: true },
    { name: 'BambooHR', description: 'HR software for small businesses', icon: '🎋', category: 'HR', verified: true },
    { name: 'ADP', description: 'Payroll and HR services', icon: '💰', category: 'HR', verified: true },
    { name: 'Greenhouse', description: 'Hiring and onboarding platform', icon: '🌱', category: 'HR', verified: true },
    { name: 'Lever', description: 'Talent acquisition suite', icon: '⚖️', category: 'HR', verified: true },
    { name: 'Gusto', description: 'Payroll, benefits, and HR', icon: '🎉', category: 'HR', verified: true },
    
    // Finance
    { name: 'Stripe', description: 'Payment processing platform', icon: '💳', category: 'Finance', verified: true },
    { name: 'PayPal', description: 'Digital payment platform', icon: '💙', category: 'Finance', verified: true },
    { name: 'QuickBooks', description: 'Accounting software', icon: '📚', category: 'Finance', verified: true },
    { name: 'Xero', description: 'Cloud accounting software', icon: '📊', category: 'Finance', verified: true },
    { name: 'FreshBooks', description: 'Accounting for small business', icon: '📋', category: 'Finance', verified: true },
    { name: 'Square', description: 'Payment and business solutions', icon: '⬜', category: 'Finance', verified: true },
    
    // E-commerce
    { name: 'Shopify', description: 'E-commerce platform', icon: '🛒', category: 'E-commerce', verified: true },
    { name: 'WooCommerce', description: 'WordPress e-commerce plugin', icon: '🛍️', category: 'E-commerce', verified: true },
    { name: 'Magento', description: 'E-commerce platform', icon: '🏪', category: 'E-commerce', verified: true },
    { name: 'BigCommerce', description: 'E-commerce software', icon: '🏬', category: 'E-commerce', verified: true },
    { name: 'Amazon', description: 'Online marketplace', icon: '📦', category: 'E-commerce', verified: true },
    { name: 'eBay', description: 'Online auction platform', icon: '🔨', category: 'E-commerce', verified: true },
    
    // Communication
    { name: 'Slack', description: 'Team communication platform', icon: '💬', category: 'Communication', verified: true },
    { name: 'Microsoft Teams', description: 'Collaboration platform', icon: '👥', category: 'Communication', verified: true },
    { name: 'Zoom', description: 'Video conferencing platform', icon: '📹', category: 'Communication', verified: true },
    { name: 'Discord', description: 'Voice and text chat platform', icon: '🎮', category: 'Communication', verified: true },
    { name: 'Twilio', description: 'Cloud communications platform', icon: '📱', category: 'Communication', verified: true },
    { name: 'SendGrid', description: 'Email delivery service', icon: '📧', category: 'Communication', verified: true },
    
    // Productivity
    { name: 'Microsoft 365', description: 'Complete productivity suite', icon: '📊', category: 'Productivity', verified: true },
    { name: 'Google Workspace', description: 'Cloud productivity tools', icon: '☁️', category: 'Productivity', verified: true },
    { name: 'Notion', description: 'All-in-one workspace', icon: '📝', category: 'Productivity', verified: true },
    { name: 'Asana', description: 'Project management tool', icon: '✅', category: 'Productivity', verified: true },
    { name: 'Trello', description: 'Visual project management', icon: '📋', category: 'Productivity', verified: true },
    { name: 'Monday.com', description: 'Work operating system', icon: '📅', category: 'Productivity', verified: true },
    
    // Analytics
    { name: 'Google Analytics', description: 'Web analytics service', icon: '📈', category: 'Analytics', verified: true },
    { name: 'Mixpanel', description: 'Product analytics platform', icon: '🔬', category: 'Analytics', verified: true },
    { name: 'Amplitude', description: 'Digital analytics platform', icon: '📊', category: 'Analytics', verified: true },
    { name: 'Tableau', description: 'Data visualization software', icon: '📋', category: 'Analytics', verified: true },
    { name: 'Power BI', description: 'Business analytics tool', icon: '⚡', category: 'Analytics', verified: true },
    { name: 'Looker', description: 'Business intelligence platform', icon: '👁️', category: 'Analytics', verified: true },
    
    // Development
    { name: 'GitHub', description: 'Code hosting platform', icon: '🐙', category: 'Development', verified: true },
    { name: 'GitLab', description: 'DevOps lifecycle tool', icon: '🦊', category: 'Development', verified: true },
    { name: 'Jira', description: 'Issue tracking software', icon: '🎫', category: 'Development', verified: true },
    { name: 'Jenkins', description: 'Automation server', icon: '🔧', category: 'Development', verified: true },
    { name: 'Docker', description: 'Containerization platform', icon: '🐳', category: 'Development', verified: true },
    { name: 'AWS', description: 'Cloud computing services', icon: '☁️', category: 'Development', verified: true }
  ];

  // Generate categories with correct counts
  const categories = [
    { name: 'All Connectors', count: allConnectorsData.length },
    { name: 'Popular', count: 10 },
    { name: 'CRM', count: allConnectorsData.filter(c => c.category === 'CRM').length },
    { name: 'ERP', count: allConnectorsData.filter(c => c.category === 'ERP').length },
    { name: 'Marketing', count: allConnectorsData.filter(c => c.category === 'Marketing').length },
    { name: 'Sales', count: allConnectorsData.filter(c => c.category === 'Sales').length },
    { name: 'HR', count: allConnectorsData.filter(c => c.category === 'HR').length },
    { name: 'Finance', count: allConnectorsData.filter(c => c.category === 'Finance').length },
    { name: 'E-commerce', count: allConnectorsData.filter(c => c.category === 'E-commerce').length },
    { name: 'Communication', count: allConnectorsData.filter(c => c.category === 'Communication').length },
    { name: 'Productivity', count: allConnectorsData.filter(c => c.category === 'Productivity').length },
    { name: 'Analytics', count: allConnectorsData.filter(c => c.category === 'Analytics').length },
    { name: 'Development', count: allConnectorsData.filter(c => c.category === 'Development').length }
  ];

  // Popular connectors (top 10 most used)
  const popularConnectors = [
    allConnectorsData.find(c => c.name === 'Salesforce'),
    allConnectorsData.find(c => c.name === 'Microsoft 365'),
    allConnectorsData.find(c => c.name === 'Slack'),
    allConnectorsData.find(c => c.name === 'HubSpot CRM'),
    allConnectorsData.find(c => c.name === 'Shopify'),
    allConnectorsData.find(c => c.name === 'Workday'),
    allConnectorsData.find(c => c.name === 'NetSuite'),
    allConnectorsData.find(c => c.name === 'Zoom'),
    allConnectorsData.find(c => c.name === 'Stripe'),
    allConnectorsData.find(c => c.name === 'Google Workspace')
  ].filter(Boolean);

  const connectors = {
    'All Connectors': allConnectorsData,
    'Popular': popularConnectors,
    'CRM': allConnectorsData.filter(c => c.category === 'CRM'),
    'ERP': allConnectorsData.filter(c => c.category === 'ERP'),
    'Marketing': allConnectorsData.filter(c => c.category === 'Marketing'),
    'Sales': allConnectorsData.filter(c => c.category === 'Sales'),
    'HR': allConnectorsData.filter(c => c.category === 'HR'),
    'Finance': allConnectorsData.filter(c => c.category === 'Finance'),
    'E-commerce': allConnectorsData.filter(c => c.category === 'E-commerce'),
    'Communication': allConnectorsData.filter(c => c.category === 'Communication'),
    'Productivity': allConnectorsData.filter(c => c.category === 'Productivity'),
    'Analytics': allConnectorsData.filter(c => c.category === 'Analytics'),
    'Development': allConnectorsData.filter(c => c.category === 'Development')
  };

  const templates = [
    {
      title: 'Build a workflow and expose it as an API',
      description: 'Create powerful API endpoints from your business logic',
      category: 'API Management',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Native Scraping Service',
      description: 'Use this native web scraper to get markdown content from webpages',
      category: 'Data Extraction',
      icon: Search,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Salesforce Batch & Bulk Update Records',
      description: 'Two options to make large scale record updates in Salesforce',
      category: 'CRM Integration',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Text Extraction Utility (OpenAI)',
      description: 'Enter your OpenAI credentials and infuse your process with AI in under 5 minutes',
      category: 'AI Integration',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Prompt Enhancement and Reasoning',
      description: 'Give the agent the ability to reason and expand on the original message',
      category: 'AI Enhancement',
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'E-commerce Order Processing',
      description: 'Automate order fulfillment across multiple platforms',
      category: 'E-commerce',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredConnectors = connectors[activeCategory] || [];
  const searchFilteredConnectors = filteredConnectors.filter(connector =>
    connector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connector.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={30}
        maxDistance={120}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={1.5}
        animationSpeed={0.3}
        opacity={0.3}
      />

      {/* Top Search Bar */}
      <section className="relative bg-white border-b border-purple-100/50 pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search all connectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/80 backdrop-blur-sm shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm py-16 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Universal Integration
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Connectors
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-family-headings">
              Automation for every tech stack
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our ready-to-use connectors to integrate your apps and databases. Access every datapoint - even custom fields and create and deploy automations across all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Take Interactive Tour
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Connectors Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Browse Our Connectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive library of pre-built connectors for seamless integration
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Menu */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-6 sticky top-24 bg-white/80 backdrop-blur-sm border-purple-100/50">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>

                {/* Category Menu */}
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        activeCategory === category.name
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                          : 'hover:bg-purple-50 text-gray-700 hover:text-primary'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        activeCategory === category.name
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Right Content - Connectors Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-9"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  {activeCategory} Connectors
                  <span className="text-primary ml-2">({searchFilteredConnectors.length})</span>
                </h3>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {searchTerm ? `Filtered by "${searchTerm}"` : 'All connectors'}
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {searchFilteredConnectors.map((connector, index) => (
                    <motion.div
                      key={connector.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-purple-100/50 hover:border-purple-200 bg-white/80 backdrop-blur-sm">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {connector.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {connector.name}
                              </h4>
                              {connector.verified && (
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                              {connector.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                                {connector.category}
                              </span>
                              <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {searchFilteredConnectors.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">No connectors found</h4>
                  <p className="text-gray-600">Try adjusting your search or browse other categories</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Ready-to-use Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jumpstart your automation with our proven templates for the AgenticView platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-purple-100/50 hover:border-purple-200 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <template.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full mb-3 inline-block">
                        Template
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {template.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{template.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Discover More Templates
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Discover the Ultimate AI-Ready iPaaS
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Supercharge your business with quick, seamless ecosystem integrations that scale with your ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Take Interactive Tour
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
