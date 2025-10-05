import React, { useState, useEffect, Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProgressiveLoader, FastLoader, MinimalLoader } from "./components/ProgressiveLoader";
import { FullPageShimmer, PageHeaderShimmer } from "./components/ShimmerComponents";
import { CacheManager } from "./components/CacheManager";

// Lazy load all page components for better performance
const HeroBanner = lazy(() => import("./components/HeroBanner").then(module => ({ default: module.HeroBanner })));
const CircularAnimation = lazy(() => import("./components/CircularAnimation").then(module => ({ default: module.CircularAnimation })));
const CompanyTicker = lazy(() => import("./components/CompanyTicker").then(module => ({ default: module.CompanyTicker })));
const ContentSections = lazy(() => import("./components/ContentSections").then(module => ({ default: module.ContentSections })));
const InteractiveSections = lazy(() => import("./components/InteractiveSections").then(module => ({ default: module.InteractiveSections })));
const DashboardSection = lazy(() => import("./components/DashboardSection").then(module => ({ default: module.DashboardSection })));

// Lazy load pages
const LoginPage = lazy(() => import("./components/LoginPage").then(module => ({ default: module.LoginPage })));
const GetTrialPage = lazy(() => import("./components/GetTrialPage").then(module => ({ default: module.GetTrialPage })));

// Critical pages (load faster)
const MarketingPage = lazy(() => import("./components/pages/MarketingPage").then(module => ({ default: module.MarketingPage })));
const SupportPage = lazy(() => import("./components/pages/SupportPage").then(module => ({ default: module.SupportPage })));
const PricingPage = lazy(() => import("./components/pages/PricingPage").then(module => ({ default: module.PricingPage })));

// Other pages
const AgentsPage = lazy(() => import("./components/pages/AgentsPage").then(module => ({ default: module.AgentsPage })));
const PlatformPage = lazy(() => import("./components/pages/PlatformPage").then(module => ({ default: module.PlatformPage })));
const SolutionsPage = lazy(() => import("./components/pages/SolutionsPage").then(module => ({ default: module.SolutionsPage })));
const ResourcesPage = lazy(() => import("./components/pages/ResourcesPage").then(module => ({ default: module.ResourcesPage })));
const PartnersPage = lazy(() => import("./components/pages/PartnersPage").then(module => ({ default: module.PartnersPage })));
const FindPartnerPage = lazy(() => import("./components/pages/FindPartnerPage").then(module => ({ default: module.FindPartnerPage })));
const BecomePartnerPage = lazy(() => import("./components/pages/BecomePartnerPage").then(module => ({ default: module.BecomePartnerPage })));
const TechnologyPartnersPage = lazy(() => import("./components/pages/TechnologyPartnersPage").then(module => ({ default: module.TechnologyPartnersPage })));
const SystemIntegratorsPage = lazy(() => import("./components/pages/SystemIntegratorsPage").then(module => ({ default: module.SystemIntegratorsPage })));
const SecurityPage = lazy(() => import("./components/pages/SecurityPage").then(module => ({ default: module.SecurityPage })));
const SalesPage = lazy(() => import("./components/pages/SalesPage").then(module => ({ default: module.SalesPage })));
const HRPage = lazy(() => import("./components/pages/HRPage").then(module => ({ default: module.HRPage })));
const ITPage = lazy(() => import("./components/pages/ITPage").then(module => ({ default: module.ITPage })));
const CustomerExperiencePage = lazy(() => import("./components/pages/CustomerExperiencePage").then(module => ({ default: module.CustomerExperiencePage })));
const BuildYourOwnPage = lazy(() => import("./components/pages/BuildYourOwnPage").then(module => ({ default: module.BuildYourOwnPage })));
const AboutPage = lazy(() => import("./components/pages/AboutPage").then(module => ({ default: module.AboutPage })));
const DocumentationPage = lazy(() => import("./components/pages/DocumentationPage").then(module => ({ default: module.DocumentationPage })));
const BlogPage = lazy(() => import("./components/pages/BlogPage").then(module => ({ default: module.BlogPage })));
const ContactPage = lazy(() => import("./components/pages/ContactPage").then(module => ({ default: module.ContactPage })));
const IntegrationPage = lazy(() => import("./components/pages/IntegrationPage").then(module => ({ default: module.IntegrationPage })));
const EnterpriseMCPPage = lazy(() => import("./components/pages/EnterpriseMCPPage").then(module => ({ default: module.EnterpriseMCPPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const cache = CacheManager.getInstance();

  useEffect(() => {
    const hasVisited = cache.has('app_visited');
    if (hasVisited) setIsInitialLoad(false);
    else {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
        cache.set('app_visited', true, 24 * 60 * 60 * 1000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setIsScrolled(window.scrollY > 50); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const preloadPages = async () => {
      if (!isInitialLoad) {
        import("./components/pages/PricingPage");
        import("./components/pages/MarketingPage");
        import("./components/pages/SupportPage");
      }
    };
    preloadPages();
  }, [isInitialLoad]);

  // lightweight global navigation event for cross-component navigation
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      if (typeof detail === 'string') setCurrentPage(detail);
    };
    window.addEventListener('app:navigate', handler as EventListener);
    return () => window.removeEventListener('app:navigate', handler as EventListener);
  }, []);

  const handleLoginClick = () => setCurrentPage("login");
  const handleDemoClick = () => setCurrentPage("trial");
  const handleTalkToSalesClick = () => setCurrentPage("contact");
  const handleLogoClick = () => setCurrentPage("home");
  const handleNavigationClick = (page: string) => { if (page !== currentPage) setCurrentPage(page); };

  // set page from URL hash on load and when hash changes
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const route = hash || 'home';
      // map legacy routes if needed
      const normalized = route === 'connectors' ? 'integration' : route;
      setCurrentPage(normalized);
    };
    parseHash();
    const onHashChange = () => parseHash();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // keep URL updated when currentPage changes
  useEffect(() => {
    const desired = `#/${currentPage}`;
    if (window.location.hash !== desired) {
      window.location.hash = desired;
    }
  }, [currentPage]);
  const handleMenuStateChange = (isOpen: boolean) => setIsMenuOpen(isOpen);

  const criticalPages = ['home', 'pricing', 'marketing', 'support'];
  const isCriticalPage = criticalPages.includes(currentPage);
  const getPageLoader = (pageKey: string, children: React.ReactNode) => {
    if (isCriticalPage) return <FastLoader>{children}</FastLoader>;
    if (cache.has(`page_${pageKey}`)) return <MinimalLoader pageKey={pageKey}>{children}</MinimalLoader>;
    return <ProgressiveLoader pageKey={pageKey} showContentImmediately={pageKey === 'home'}>{children}</ProgressiveLoader>;
  };

  if (currentPage === "login") {
    return (
      <Suspense fallback={<PageHeaderShimmer />}>
        <LoginPage onBack={() => setCurrentPage("home")} onTrialClick={() => setCurrentPage("trial")} onTalkToSalesClick={handleTalkToSalesClick} />
      </Suspense>
    );
  }

  if (currentPage === "trial") {
    return (
      <Suspense fallback={<PageHeaderShimmer />}>
        <GetTrialPage onBack={() => setCurrentPage("home")} />
      </Suspense>
    );
  }

  if (isInitialLoad) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading AgenticView...</p>
        </div>
      </div>
    );
  }

  if (currentPage === "home") {
    return (
      <div className="min-h-screen bg-white">
        <Header onLoginClick={handleLoginClick} onTrialClick={handleDemoClick} onTalkToSalesClick={handleTalkToSalesClick} onLogoClick={handleLogoClick} isWhiteBackground={true} onNavigationClick={handleNavigationClick} onMenuStateChange={handleMenuStateChange} />
        <div className={`transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
          <Suspense fallback={<PageHeaderShimmer />}>
            <HeroBanner onTrialClick={handleDemoClick} onTalkToSalesClick={handleTalkToSalesClick} />
          </Suspense>
          <Suspense fallback={<div className="py-8" />}>
            <div className="my-4"><CircularAnimation /></div>
          </Suspense>
          <Suspense fallback={<div className="py-16" />}><ContentSections onTrialClick={handleDemoClick} /></Suspense>
          <Suspense fallback={<div className="py-16" />}><InteractiveSections onTrialClick={handleDemoClick} /></Suspense>
          <Suspense fallback={<div className="py-16" />}><DashboardSection /></Suspense>
          <Footer onNavigationClick={handleNavigationClick} />
        </div>
        <ScrollToTop page={currentPage} />
      </div>
    );
  }

  const pageComponents: Record<string, React.ReactNode> = {
    marketing: getPageLoader('marketing', <MarketingPage />),
    support: getPageLoader('support', <SupportPage />),
    pricing: getPageLoader('pricing', <PricingPage />),
    security: getPageLoader('security', <SecurityPage />),
    sales: getPageLoader('sales', <SalesPage />),
    hr: getPageLoader('hr', <HRPage />),
    it: getPageLoader('it', <ITPage />),
    "customer-experience": getPageLoader('customer-experience', <CustomerExperiencePage />),
    "build-your-own": getPageLoader('build-your-own', <BuildYourOwnPage />),
    agents: getPageLoader('agents', <AgentsPage />),
    platform: getPageLoader('platform', <PlatformPage />),
    solutions: getPageLoader('solutions', <SolutionsPage />),
    resources: getPageLoader('resources', <ResourcesPage />),
    partners: getPageLoader('partners', <PartnersPage onNavigationClick={handleNavigationClick} />),
    "find-partner": getPageLoader('find-partner', <FindPartnerPage />),
    "become-partner": getPageLoader('become-partner', <BecomePartnerPage />),
    "technology-partners": getPageLoader('technology-partners', <TechnologyPartnersPage />),
    "system-integrators": getPageLoader('system-integrators', <SystemIntegratorsPage />),
    about: getPageLoader('about', <AboutPage />),
    documentation: getPageLoader('documentation', <DocumentationPage />),
    blog: getPageLoader('blog', <BlogPage />),
    contact: getPageLoader('contact', <ContactPage />),
    integration: getPageLoader('integration', <IntegrationPage />),
    "enterprise-mcp": getPageLoader('enterprise-mcp', <EnterpriseMCPPage />),
  };

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} onTrialClick={handleDemoClick} onTalkToSalesClick={handleTalkToSalesClick} onLogoClick={handleLogoClick} isWhiteBackground={true} onNavigationClick={handleNavigationClick} onMenuStateChange={handleMenuStateChange} />
      <div className={`transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
        {pageComponents[currentPage] || (
          <div className="p-10 text-center text-gray-500 min-h-[60vh] flex items-center justify-center">
            <div>
              <h2 className="text-2xl mb-4">Page not found</h2>
              <button onClick={() => setCurrentPage("home")} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">Go Home</button>
            </div>
          </div>
        )}
        <Footer onNavigationClick={handleNavigationClick} />
      </div>
      <ScrollToTop page={currentPage} />
    </div>
  );
}
