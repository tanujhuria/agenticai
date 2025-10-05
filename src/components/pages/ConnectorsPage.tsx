
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, Search, Filter, ExternalLink, Zap, Database, Cloud, Globe, Users, ShoppingCart, CreditCard, MessageSquare, FileText, Settings, Mail, Video, BarChart3, Briefcase, Building, Server, Smartphone, PieChart, Code, Package, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

import salesforceLogo from '../../assets/salesforce.png';
import slackLogo from '../../assets/Slack.svg';
import salesloftLogo from '../../assets/salesloft.png';
import convertkitLogo from '../../assets/convertkit.png';
import apolloLogo from '../../assets/apollo.png';
import pipedriveLogo from '../../assets/Pipedrive_Logo_Green.png';
import hubspotLogo from '../../assets/hubspot_ogo.png';
import zohoCrmLogo from '../../assets/zohocrm.png';
import microsoft365Logo from '../../assets/Microsoft_365_logo.png';
import shopifyLogo from '../../assets/shopify.png';
import workdayLogo from '../../assets/Workday-Emblem.png';
import netsuiteLogo from '../../assets/Netsuite.png';
import zoomLogo from '../../assets/zoom-logo.png';
import stripeLogo from '../../assets/Stripe.png';
import googleWorkspaceLogo from '../../assets/Google_workspace.jpg';
import mailchimpLogo from '../../assets/mailchimp.png';
import marketoLogo from '../../assets/Marketto.png';
import pardotLogo from '../../assets/pardot.png';
import constantContactLogo from '../../assets/constantcontact.png';
import activeCampaignLogo from '../../assets/Activecompaign.png';
import outreachLogo from '../../assets/outreach.png';
import gongLogo from '../../assets/gong.png';
import sapLogo from '../../assets/Sap.jpeg';
import oracleErpLogo from '../../assets/oracle_cloud_erp_logo.png';
import odooLogo from '../../assets/odoo.jpeg';
import zoominfoLogo from '../../assets/zoominfo.png';
import linkedinLogo from '../../assets/linkedin.png';
import greenhouseLogo from '../../assets/Greenhouse.png';
import leverLogo from '../../assets/lever.jpg';
import gustoLogo from '../../assets/gusto-logo.png';
import payPalLogo from '../../assets/paypal.webp';
import quickBooksLogo from '../../assets/Quickbooks.png';
import xeroLogo from '../../assets/Xero.png';
import freshBooksLogo from '../../assets/freshbooks-logo.png';
import squareLogo from '../../assets/Square-Logo.png';
import wooCommerceLogo from '../../assets/WooCommerce_logo.svg.png';
import magentoLogo from '../../assets/Magento.png';
import bigCommerceLogo from '../../assets/bigcommerce.png';
import amazonLogo from '../../assets/amazon.jpg';
import eBayLogo from '../../assets/ebay.png';
import microsoftTeamsLogo from '../../assets/Microsoft_Teams-Logo.wine.png';
import discordLogo from '../../assets/discord-logo.webp';
import twilioLogo from '../../assets/twillio.png';
import sendGridLogo from '../../assets/Sendgrid.jpg';
import notionLogo from '../../assets/notion_logo.png';
import asanaLogo from '../../assets/Asana.png';
import trelloLogo from '../../assets/trello_logo.webp';
import mondayLogo from '../../assets/monday-1.svg';
import googleAnalyticsLogo from '../../assets/Google-Analytics-Logo.png';
import mixpanelLogo from '../../assets/mixpanel-logo.png';
import amplitudeLogo from '../../assets/amplitude_logo.png';
import tableauLogo from '../../assets/Tableau-Symbol.png';
import powerBiLogo from '../../assets/Power-BI-Logo.png';
import lookerLogo from '../../assets/looker.png';
import gitHubLogo from '../../assets/github-logo.jpg';
import gitLabLogo from '../../assets/gitlab.jpg';
import jiraLogo from '../../assets/jira.svg';
import jenkinsLogo from '../../assets/Jenkins-Emblem.png';
import dockerLogo from '../../assets/Docker.png';
import awsLogo from '../../assets/Aws.webp';
import microsoftDynamicsCrmLogo from '../../assets/microsoft_dynamic_crm.jpeg';
import fallbackImage from '../../assets/RE1Mu3b.png';

export function ConnectorsPage({ hideHero = false }: { hideHero?: boolean }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Icon colors mapping for visual distinction
  const getIconConfig = (name) => {
    const iconConfigs = {
      'Salesforce': { image: salesforceLogo, color: 'from-blue-600 to-blue-400', bg: 'bg-white' },
      'HubSpot CRM': { image: hubspotLogo, color: 'from-orange-600 to-orange-400', bg: 'bg-white' },
      'Pipedrive': { image: pipedriveLogo, color: 'from-green-600 to-green-400', bg: 'bg-white' },
      'Zoho CRM': { image: zohoCrmLogo, color: 'from-red-600 to-red-400', bg: 'bg-white' },
      'Microsoft Dynamics CRM': { image: microsoftDynamicsCrmLogo, color: 'from-blue-800 to-blue-600', bg: 'bg-blue-50' },
      'NetSuite': { image: netsuiteLogo, color: 'from-gray-700 to-gray-500', bg: 'bg-white' },
      'SAP': { image: sapLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Oracle ERP': { image: oracleErpLogo, color: 'from-red-700 to-red-500', bg: 'bg-red-50' },
      'Microsoft Dynamics 365': { image: microsoftDynamicsCrmLogo, color: 'from-blue-800 to-blue-600', bg: 'bg-blue-50' },
      'Odoo': { image: odooLogo, color: 'from-purple-600 to-purple-400', bg: 'bg-purple-50' },
      'Mailchimp': { image: mailchimpLogo, color: 'from-yellow-600 to-yellow-400', bg: 'bg-white' },
      'Marketo': { image: marketoLogo, color: 'from-purple-700 to-purple-500', bg: 'bg-white' },
      'Pardot': { image: pardotLogo, color: 'from-orange-700 to-orange-500', bg: 'bg-white' },
      'Constant Contact': { image: constantContactLogo, color: 'from-blue-600 to-blue-400', bg: 'bg-white' },
      'ActiveCampaign': { image: activeCampaignLogo, color: 'from-purple-600 to-purple-400', bg: 'bg-white' },
      'ConvertKit': { image: convertkitLogo, color: 'from-pink-600 to-pink-400', bg: 'bg-white' },
      'Outreach': { image: outreachLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-white' },
      'SalesLoft': { image: salesloftLogo, color: 'from-green-700 to-green-500', bg: 'bg-white' },
      'Apollo': { image: apolloLogo, color: 'from-indigo-600 to-indigo-400', bg: 'bg-white' },
      'ZoomInfo': { image: zoominfoLogo, color: 'from-orange-600 to-orange-400', bg: 'bg-white' },
      'LinkedIn Sales Navigator': { image: linkedinLogo, color: 'from-blue-800 to-blue-600', bg: 'bg-white' },
      'Gong': { image: gongLogo, color: 'from-purple-700 to-purple-500', bg: 'bg-white' },
      'Workday': { image: workdayLogo, color: 'from-orange-700 to-orange-500', bg: 'bg-white' },
      'BambooHR': { image: null, icon: Users, color: 'from-green-600 to-green-400', bg: 'bg-green-50' },
      'ADP': { image: null, icon: CreditCard, color: 'from-red-600 to-red-400', bg: 'bg-red-50' },
      'Greenhouse': { image: greenhouseLogo, color: 'from-green-700 to-green-500', bg: 'bg-green-50' },
      'Lever': { image: leverLogo, color: 'from-purple-600 to-purple-400', bg: 'bg-purple-50' },
      'Gusto': { image: gustoLogo, color: 'from-green-600 to-green-400', bg: 'bg-green-50' },
      'Stripe': { image: stripeLogo, color: 'from-indigo-700 to-indigo-500', bg: 'bg-white' },
      'PayPal': { image: payPalLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'QuickBooks': { image: quickBooksLogo, color: 'from-blue-600 to-blue-400', bg: 'bg-blue-50' },
      'Xero': { image: xeroLogo, color: 'from-blue-800 to-blue-600', bg: 'bg-blue-50' },
      'FreshBooks': { image: freshBooksLogo, color: 'from-green-700 to-green-500', bg: 'bg-green-50' },
      'Square': { image: squareLogo, color: 'from-gray-800 to-gray-600', bg: 'bg-gray-50' },
      'Shopify': { image: shopifyLogo, color: 'from-green-700 to-green-500', bg: 'bg-white' },
      'WooCommerce': { image: wooCommerceLogo, color: 'from-purple-700 to-purple-500', bg: 'bg-purple-50' },
      'Magento': { image: magentoLogo, color: 'from-orange-700 to-orange-500', bg: 'bg-orange-50' },
      'BigCommerce': { image: bigCommerceLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Amazon': { image: amazonLogo, color: 'from-yellow-600 to-orange-500', bg: 'bg-yellow-50' },
      'eBay': { image: eBayLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Slack': { image: slackLogo, color: 'from-purple-600 to-purple-400', bg: 'bg-white' },
      'Microsoft Teams': { image: microsoftTeamsLogo, color: 'from-blue-800 to-blue-600', bg: 'bg-blue-50' },
      'Zoom': { image: zoomLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-white' },
      'Discord': { image: discordLogo, color: 'from-indigo-700 to-indigo-500', bg: 'bg-indigo-50' },
      'Twilio': { image: twilioLogo, color: 'from-red-700 to-red-500', bg: 'bg-red-50' },
      'SendGrid': { image: sendGridLogo, color: 'from-blue-600 to-blue-400', bg: 'bg-blue-50' },
      'Microsoft 365': { image: microsoft365Logo, color: 'from-blue-800 to-blue-600', bg: 'bg-white' },
      'Google Workspace': { image: googleWorkspaceLogo, color: 'from-blue-600 to-green-500', bg: 'bg-white' },
      'Notion': { image: notionLogo, color: 'from-gray-800 to-gray-600', bg: 'bg-gray-50' },
      'Asana': { image: asanaLogo, color: 'from-pink-600 to-pink-400', bg: 'bg-pink-50' },
      'Trello': { image: trelloLogo, color: 'from-blue-600 to-blue-400', bg: 'bg-blue-50' },
      'Monday.com': { image: mondayLogo, color: 'from-purple-600 to-purple-400', bg: 'bg-purple-50' },
      'Google Analytics': { image: googleAnalyticsLogo, color: 'from-orange-600 to-red-500', bg: 'bg-orange-50' },
      'Mixpanel': { image: mixpanelLogo, color: 'from-purple-600 to-blue-500', bg: 'bg-purple-50' },
      'Amplitude': { image: amplitudeLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Tableau': { image: tableauLogo, color: 'from-blue-700 to-orange-500', bg: 'bg-blue-50' },
      'Power BI': { image: powerBiLogo, color: 'from-yellow-600 to-yellow-400', bg: 'bg-yellow-50' },
      'Looker': { image: lookerLogo, color: 'from-green-600 to-blue-500', bg: 'bg-green-50' },
      'GitHub': { image: gitHubLogo, color: 'from-gray-800 to-gray-600', bg: 'bg-gray-50' },
      'GitLab': { image: gitLabLogo, color: 'from-orange-600 to-red-500', bg: 'bg-orange-50' },
      'Jira': { image: jiraLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Jenkins': { image: jenkinsLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'Docker': { image: dockerLogo, color: 'from-blue-700 to-blue-500', bg: 'bg-blue-50' },
      'AWS': { image: awsLogo, color: 'from-orange-600 to-yellow-500', bg: 'bg-orange-50' }
    };
    return iconConfigs[name] || { image: fallbackImage, color: 'from-gray-500 to-gray-400', bg: 'bg-gray-50' };
  };

  const allConnectorsData = [
    // Popular/CRM
    { name: 'Salesforce', description: 'Leading enterprise CRM platform', category: 'CRM', verified: true },
    { name: 'HubSpot CRM', description: 'Free CRM with sales tools', category: 'CRM', verified: true },
    { name: 'Pipedrive', description: 'Sales-focused CRM platform', category: 'CRM', verified: true },
    { name: 'Zoho CRM', description: 'Comprehensive CRM solution', category: 'CRM', verified: true },
    { name: 'Microsoft Dynamics CRM', description: 'Enterprise CRM solution', category: 'CRM', verified: true },
    // ERP
    { name: 'NetSuite', description: 'Cloud-based ERP solution', category: 'ERP', verified: true },
    { name: 'SAP', description: 'Enterprise resource planning', category: 'ERP', verified: true },
    { name: 'Oracle ERP', description: 'Cloud ERP applications', category: 'ERP', verified: true },
    { name: 'Microsoft Dynamics 365', description: 'Business applications suite', category: 'ERP', verified: true },
    { name: 'Odoo', description: 'Open source business apps', category: 'ERP', verified: true },
    // Marketing
    { name: 'Mailchimp', description: 'Email marketing platform', category: 'Marketing', verified: true },
    { name: 'Marketo', description: 'Marketing automation platform', category: 'Marketing', verified: true },
    { name: 'Pardot', description: 'B2B marketing automation', category: 'Marketing', verified: true },
    { name: 'Constant Contact', description: 'Email marketing service', category: 'Marketing', verified: true },
    { name: 'ActiveCampaign', description: 'Customer experience automation', category: 'Marketing', verified: true },
    { name: 'ConvertKit', description: 'Email marketing for creators', category: 'Marketing', verified: true },
    // Sales
    { name: 'Outreach', description: 'Sales engagement platform', category: 'Sales', verified: true },
    { name: 'SalesLoft', description: 'Sales development platform', category: 'Sales', verified: true },
    { name: 'Apollo', description: 'Sales intelligence platform', category: 'Sales', verified: true },
    { name: 'ZoomInfo', description: 'B2B contact database', category: 'Sales', verified: true },
    { name: 'LinkedIn Sales Navigator', description: 'Social selling platform', category: 'Sales', verified: true },
    { name: 'Gong', description: 'Revenue intelligence platform', category: 'Sales', verified: true },
    // HR
    { name: 'Workday', description: 'Human capital management', category: 'HR', verified: true },
    { name: 'BambooHR', description: 'HR software for small businesses', category: 'HR', verified: true },
    { name: 'ADP', description: 'Payroll and HR services', category: 'HR', verified: true },
    { name: 'Greenhouse', description: 'Hiring and onboarding platform', category: 'HR', verified: true },
    { name: 'Lever', description: 'Talent acquisition suite', category: 'HR', verified: true },
    { name: 'Gusto', description: 'Payroll, benefits, and HR', category: 'HR', verified: true },
    // Finance
    { name: 'Stripe', description: 'Payment processing platform', category: 'Finance', verified: true },
    { name: 'PayPal', description: 'Digital payment platform', category: 'Finance', verified: true },
    { name: 'QuickBooks', description: 'Accounting software', category: 'Finance', verified: true },
    { name: 'Xero', description: 'Cloud accounting software', category: 'Finance', verified: true },
    { name: 'FreshBooks', description: 'Accounting for small business', category: 'Finance', verified: true },
    { name: 'Square', description: 'Payment and business solutions', category: 'Finance', verified: true },
    // E-commerce
    { name: 'Shopify', description: 'E-commerce platform', category: 'E-commerce', verified: true },
    { name: 'WooCommerce', description: 'WordPress e-commerce plugin', category: 'E-commerce', verified: true },
    { name: 'Magento', description: 'E-commerce platform', category: 'E-commerce', verified: true },
    { name: 'BigCommerce', description: 'E-commerce software', category: 'E-commerce', verified: true },
    { name: 'Amazon', description: 'Online marketplace', category: 'E-commerce', verified: true },
    { name: 'eBay', description: 'Online auction platform', category: 'E-commerce', verified: true },
    // Communication
    { name: 'Slack', description: 'Team communication platform', category: 'Communication', verified: true },
    { name: 'Microsoft Teams', description: 'Collaboration platform', category: 'Communication', verified: true },
    { name: 'Zoom', description: 'Video conferencing platform', category: 'Communication', verified: true },
    { name: 'Discord', description: 'Voice and text chat platform', category: 'Communication', verified: true },
    { name: 'Twilio', description: 'Cloud communications platform', category: 'Communication', verified: true },
    { name: 'SendGrid', description: 'Email delivery service', category: 'Communication', verified: true },
    // Productivity
    { name: 'Microsoft 365', description: 'Complete productivity suite', category: 'Productivity', verified: true },
    { name: 'Google Workspace', description: 'Cloud productivity tools', category: 'Productivity', verified: true },
    { name: 'Notion', description: 'All-in-one workspace', category: 'Productivity', verified: true },
    { name: 'Asana', description: 'Project management tool', category: 'Productivity', verified: true },
    { name: 'Trello', description: 'Visual project management', category: 'Productivity', verified: true },
    { name: 'Monday.com', description: 'Work operating system', category: 'Productivity', verified: true },
    // Analytics
    { name: 'Google Analytics', description: 'Web analytics service', category: 'Analytics', verified: true },
    { name: 'Mixpanel', description: 'Product analytics platform', category: 'Analytics', verified: true },
    { name: 'Amplitude', description: 'Digital analytics platform', category: 'Analytics', verified: true },
    { name: 'Tableau', description: 'Data visualization software', category: 'Analytics', verified: true },
    { name: 'Power BI', description: 'Business analytics tool', category: 'Analytics', verified: true },
    { name: 'Looker', description: 'Business intelligence platform', category: 'Analytics', verified: true },
    // Development
    { name: 'GitHub', description: 'Code hosting platform', category: 'Development', verified: true },
    { name: 'GitLab', description: 'DevOps lifecycle tool', category: 'Development', verified: true },
    { name: 'Jira', description: 'Issue tracking software', category: 'Development', verified: true },
    { name: 'Jenkins', description: 'Automation server', category: 'Development', verified: true },
    { name: 'Docker', description: 'Containerization platform', category: 'Development', verified: true },
    { name: 'AWS', description: 'Cloud computing services', category: 'Development', verified: true }
  ];

  // Generate categories with correct counts
  const categories = [
    { name: 'All', count: allConnectorsData.length },
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
    'All': allConnectorsData,
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

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const baseForSearch = normalizedSearch ? allConnectorsData : filteredConnectors;
  const searchFilteredConnectors = baseForSearch.filter(connector => {
    const name = connector.name.toLowerCase();
    const desc = connector.description.toLowerCase();
    const cat = (connector.category || '').toLowerCase();
    return (
      name.includes(normalizedSearch) ||
      desc.includes(normalizedSearch) ||
      cat.includes(normalizedSearch)
    );
  });

  
  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const totalItems = searchFilteredConnectors.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedConnectors = searchFilteredConnectors.slice(startIndex, endIndex);

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

     
      {/* Hero Section */}
      {!hideHero && (
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm py-16 px-4 sm:px-6">
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
      )}

      {/* Interactive Connectors Section */}
      <section className={`relative ${hideHero ? 'pt-10 pb-16' : 'py-20'} px-4 sm:px-6`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Browse Our Connectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive library of pre-built connectors for seamless integration
            </p>
          </motion.div>

          {/* Mobile-First Flexible Layout */}
          <div className="flex mt-6 gap-6 items-end">
            {/* Left Menu - Compact width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

              className="w-56 max-w-full sm:max-w-md lg:w-72 lg:flex-shrink-0"
            >
<Card className="p-4 lg:p-6 lg:sticky lg:top-24 bg-white/80 backdrop-blur-sm border-purple-100/50 min-h-[50rem]">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
                {/* Category Menu */}
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}

                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        activeCategory === category.name
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                          : 'hover:bg-purple-50 text-gray-700 hover:text-primary'
                      }`}
                    >

                      <span className="font-medium text-sm truncate pr-2">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
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

              className="flex-1 min-w-0"
            >
              <div className="mb-4 grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-2 items-end gap-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {activeCategory === 'All' ? 'All' : activeCategory}
                    <span className="text-primary ml-2">({searchFilteredConnectors.length})</span>
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {searchTerm ? `Filtered by \"${searchTerm}\"` : (activeCategory === 'All' ? 'All' : activeCategory)}
                    </span>
                  </div>
                </div>
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-6 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 text-sm md:text-base border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/90 backdrop-blur-sm shadow-sm"
                  />
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}

                  className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                  {paginatedConnectors.map((connector, index) => (
                    <motion.div
                      key={connector.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}

                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="p-4 lg:p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-purple-100/50 hover:border-purple-200 bg-white/80 backdrop-blur-sm">
                        <div className="flex items-start space-x-3 lg:space-x-4">
                          {(() => {
                            const iconConfig = getIconConfig(connector.name);
                            if (iconConfig.image) {
                              return (
                                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${iconConfig.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-200/50`}>
                                  <img
                                    src={iconConfig.image}
                                    alt={`${connector.name} logo`}
                                    className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
                                    onError={(e) => { e.currentTarget.src = fallbackImage; }}
                                  />
                                </div>
                              );
                            }
                            const IconComponent = iconConfig.icon;
                            return (
                              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r ${iconConfig.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                              </div>
                            );
                          })()}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm lg:text-base truncate">
                                {connector.name}
                              </h4>
                            </div>
                            <p className="text-gray-600 text-xs lg:text-sm mb-3 leading-relaxed line-clamp-2">
                              {connector.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                                {connector.category}
                              </span>

                              <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

                {/* Pagination */}
              {totalPages > 1 && totalItems > 0 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-md border text-sm transition-colors ${
                      currentPage === 1
                        ? 'opacity-50 cursor-not-allowed border-gray-300 text-gray-400'
                        : 'border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-primary hover:text-primary'
                    }`}
                    aria-label="Previous page"
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    const isActive = page === currentPage;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-md border text-sm transition-all ${
                          isActive
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:border-primary hover:text-primary'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={`Page ${page}`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md border text-sm transition-colors ${
                      currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed border-gray-300 text-gray-400'
                        : 'border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-primary hover:text-primary'
                    }`}
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>
              )}
              
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
      <section className="relative pt-12 pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {templates.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >

                  <Card onClick={() => { window.location.hash = '#/contact'; }} className="p-6 lg:p-8 h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-purple-100/50 hover:border-purple-200 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <template.icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
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
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
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
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
