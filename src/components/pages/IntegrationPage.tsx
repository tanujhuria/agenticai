import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, Search, Filter, ExternalLink, Zap, Database, Cloud, Globe, Users, ShoppingCart, CreditCard, MessageSquare, FileText, Settings, Mail, Video, BarChart3, Briefcase, Building, Server, Smartphone, PieChart, Code, Package, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';
import { ConnectorsPage } from './ConnectorsPage';

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

export function IntegrationPage() {
  const [activeCategory, setActiveCategory] = useState('All Connectors');
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getIconConfig = (name: string) => {
    const iconConfigs: any = {
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
    { name: 'Salesforce', description: 'Leading enterprise CRM platform', category: 'CRM', verified: true },
    { name: 'HubSpot CRM', description: 'Free CRM with sales tools', category: 'CRM', verified: true },
    // ... (omitted for brevity, same data as ConnectorsPage)
  ];

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

  const connectors: Record<string, any[]> = {
    'All Connectors': allConnectorsData,
    'Popular': [],
    'CRM': allConnectorsData.filter(c => c.category === 'CRM'),
    'ERP': allConnectorsData.filter(c => c.category === 'ERP'),
    // ...
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const baseForSearch = normalizedSearch ? allConnectorsData : connectors[activeCategory] || [];
  const searchFilteredConnectors = baseForSearch.filter((connector) => {
    const name = connector.name.toLowerCase();
    const desc = connector.description.toLowerCase();
    const cat = (connector.category || '').toLowerCase();
    return name.includes(normalizedSearch) || desc.includes(normalizedSearch) || cat.includes(normalizedSearch);
  });

  const totalItems = searchFilteredConnectors.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedConnectors = searchFilteredConnectors.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <NetworkBackground className="absolute inset-0" nodeCount={30} maxDistance={120} nodeColor="#8b5cf6" lineColor="#a855f7" nodeSize={1.5} animationSpeed={0.3} opacity={0.3} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Universal Integration
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Integration
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-family-headings">Automation for every tech stack</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our ready-to-use integrations to connect your apps and databases. Access every datapoint and deploy automations across all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => { window.location.hash = '#/contact'; }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Talk to Sales
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connectors listing reused from existing page, without duplicate hero */}
      <ConnectorsPage hideHero />
    </div>
  );
}
