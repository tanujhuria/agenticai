<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { CircularAnimation } from "./components/CircularAnimation";
import { CompanyTicker } from "./components/CompanyTicker";
import { ContentSections } from "./components/ContentSections";
import { InteractiveSections } from "./components/InteractiveSections";
import { DashboardSection } from "./components/DashboardSection";
import { AwardsSections } from "./components/AwardsSections";
import { Footer } from "./components/Footer";
import { LoginPage } from "./components/LoginPage";
import { GetTrialPage } from "./components/GetTrialPage";
import { AgentsPage } from "./components/pages/AgentsPage";
import { PlatformPage } from "./components/pages/PlatformPage";
import { MarketingPage } from "./components/pages/MarketingPage";
import { SupportPage } from "./components/pages/SupportPage";
import { SecurityPage } from "./components/pages/SecurityPage";
import { SalesPage } from "./components/pages/SalesPage";
import { HRPage } from "./components/pages/HRPage";
import { ITPage } from "./components/pages/ITPage";
import { CustomerExperiencePage } from "./components/pages/CustomerExperiencePage";
import { BuildYourOwnPage } from "./components/pages/BuildYourOwnPage";
import { ConnectorsPage } from "./components/pages/ConnectorsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { PricingPage } from "./components/pages/PricingPage";
import { DocumentationPage } from "./components/pages/DocumentationPage";
import { BlogPage } from "./components/pages/BlogPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Loader } from "./components/Loader";
import { ScrollToTop } from "./components/ScrollToTop";
=======
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProgressiveLoader, FastLoader, MinimalLoader } from "./components/ProgressiveLoader";
import { FullPageShimmer, PageHeaderShimmer } from "./components/ShimmerComponents";
import { CacheManager, useCache } from "./components/CacheManager";

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
const ConnectorsPage = lazy(() => import("./components/pages/ConnectorsPage").then(module => ({ default: module.ConnectorsPage })));
const EnterpriseMCPPage = lazy(() => import("./components/pages/EnterpriseMCPPage").then(module => ({ default: module.EnterpriseMCPPage })));
>>>>>>> e35854f (Whole new code so many changes which are not pushed)

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Header color change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const handleLoginClick = () => setCurrentPage("login");
  const handleDemoClick = () => setCurrentPage("trial");
  const handleTalkToSalesClick = () => console.log("Talk to sales clicked");
  const handleLogoClick = () => setCurrentPage("home");

  const handleNavigationClick = (page: string) => {
    setCurrentPage(page);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
=======
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const cache = CacheManager.getInstance();

  // Fast initial load
  useEffect(() => {
    // Check if this is a returning user
    const hasVisited = cache.has('app_visited');
    if (hasVisited) {
      setIsInitialLoad(false);
    } else {
      // First time visitor - minimal delay
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
        cache.set('app_visited', true, 24 * 60 * 60 * 1000); // 24 hours
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Header color change on scroll - optimized
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload critical pages
  useEffect(() => {
    const preloadPages = async () => {
      if (!isInitialLoad) {
        // Preload critical pages after initial load
        import("./components/pages/PricingPage");
        import("./components/pages/MarketingPage");
        import("./components/pages/SupportPage");
      }
    };
    preloadPages();
  }, [isInitialLoad]);

  // Handlers
  const handleLoginClick = () => setCurrentPage("login");
  const handleDemoClick = () => setCurrentPage("trial");
  const handleTalkToSalesClick = () => setCurrentPage("contact");
  const handleLogoClick = () => setCurrentPage("home");

  const handleNavigationClick = (page: string) => {
    if (page === currentPage) return; // Don't reload same page
    setCurrentPage(page);
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
  };

  const handleMenuStateChange = (isOpen: boolean) => setIsMenuOpen(isOpen);

<<<<<<< HEAD
  // Login & trial pages (full screen, no header/footer)
  if (currentPage === "login") {
    return (
      <LoginPage
        onBack={() => setCurrentPage("home")}
        onTrialClick={() => setCurrentPage("trial")}
        onTalkToSalesClick={handleTalkToSalesClick}
      />
    );
  }
  if (currentPage === "trial") {
    return <GetTrialPage onBack={() => setCurrentPage("home")} />;
  }

  // Loader
  if (isLoading) {
    return <Loader />;
  }

  // Page map for simple routing
  const pageComponents: Record<string, JSX.Element> = {
    marketing: <MarketingPage />,
    support: <SupportPage />,
    security: <SecurityPage />,
    sales: <SalesPage />,
    hr: <HRPage />,
    it: <ITPage />,
    "customer-experience": <CustomerExperiencePage />,
    "build-your-own": <BuildYourOwnPage />,
    agents: <AgentsPage />,
    platform: <PlatformPage />,
    about: <AboutPage />,
    pricing: <PricingPage />,
    documentation: <DocumentationPage />,
    blog: <BlogPage />,
    contact: <ContactPage />,
  };

  // Home page special layout
=======
  // Critical pages get different loading treatment
  const criticalPages = ['home', 'pricing', 'marketing', 'support'];
  const isCriticalPage = criticalPages.includes(currentPage);

  // Page loader component selector
  const getPageLoader = (pageKey: string, children: React.ReactNode) => {
    if (isCriticalPage) {
      return <FastLoader>{children}</FastLoader>;
    }
    
    const hasVisited = cache.has(`page_${pageKey}`);
    if (hasVisited) {
      return <MinimalLoader pageKey={pageKey}>{children}</MinimalLoader>;
    }
    
    return (
      <ProgressiveLoader 
        pageKey={pageKey}
        showContentImmediately={pageKey === 'home'}
      >
        {children}
      </ProgressiveLoader>
    );
  };

  // Login & trial pages (full screen, no header/footer)
  if (currentPage === "login") {
    return (
      <Suspense fallback={<PageHeaderShimmer />}>
        <LoginPage
          onBack={() => setCurrentPage("home")}
          onTrialClick={() => setCurrentPage("trial")}
          onTalkToSalesClick={handleTalkToSalesClick}
        />
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

  // Show loading only on very first visit
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

  // Home page with progressive loading
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
  if (currentPage === "home") {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onLoginClick={handleLoginClick}
          onTrialClick={handleDemoClick}
          onTalkToSalesClick={handleTalkToSalesClick}
          onLogoClick={handleLogoClick}
          isWhiteBackground={true}
          onNavigationClick={handleNavigationClick}
          onMenuStateChange={handleMenuStateChange}
        />

<<<<<<< HEAD
        <div
          className={`transition-all duration-300 ${
            isMenuOpen ? "blur-sm" : ""
          }`}
        >
          <HeroBanner
            onTrialClick={handleDemoClick}
            onTalkToSalesClick={handleTalkToSalesClick}
          />
          <CircularAnimation />
          <CompanyTicker />
          <ContentSections onTrialClick={handleDemoClick} />
          <InteractiveSections onTrialClick={handleDemoClick} />
          <DashboardSection />
          <AwardsSections />
          <Footer onNavigationClick={handleNavigationClick} />
        </div>

        {/* Global scroll-to-top */}
=======
        <div className={`transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
          <Suspense fallback={<PageHeaderShimmer />}>
            <HeroBanner
              onTrialClick={handleDemoClick}
              onTalkToSalesClick={handleTalkToSalesClick}
            />
          </Suspense>
          
          <Suspense fallback={<div className="py-8" />}>
            <div className="my-4">
              <CircularAnimation />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="py-8" />}>
            <CompanyTicker />
          </Suspense>
          
          <Suspense fallback={<div className="py-16" />}>
            <ContentSections onTrialClick={handleDemoClick} />
          </Suspense>
          
          <Suspense fallback={<div className="py-16" />}>
            <InteractiveSections onTrialClick={handleDemoClick} />
          </Suspense>
          
          <Suspense fallback={<div className="py-16" />}>
            <DashboardSection />
          </Suspense>
          
          <Footer onNavigationClick={handleNavigationClick} />
        </div>

>>>>>>> e35854f (Whole new code so many changes which are not pushed)
        <ScrollToTop page={currentPage} />
      </div>
    );
  }

<<<<<<< HEAD
  // All other pages use the same layout
=======
  // Page components with optimized loading
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
    connectors: getPageLoader('connectors', <ConnectorsPage />),
    "enterprise-mcp": getPageLoader('enterprise-mcp', <EnterpriseMCPPage />),
  };

  // All other pages use optimized layout
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
  return (
    <div className="min-h-screen">
      <Header
        onLoginClick={handleLoginClick}
        onTrialClick={handleDemoClick}
        onTalkToSalesClick={handleTalkToSalesClick}
        onLogoClick={handleLogoClick}
        isWhiteBackground={true}
        onNavigationClick={handleNavigationClick}
        onMenuStateChange={handleMenuStateChange}
      />

<<<<<<< HEAD
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "blur-sm" : ""
        }`}
      >
        {pageComponents[currentPage] || (
          <div className="p-10 text-center text-gray-500">
            Page not found
=======
      <div className={`transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
        {pageComponents[currentPage] || (
          <div className="p-10 text-center text-gray-500 min-h-[60vh] flex items-center justify-center">
            <div>
              <h2 className="text-2xl mb-4">Page not found</h2>
              <button
                onClick={() => setCurrentPage("home")}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Go Home
              </button>
            </div>
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
          </div>
        )}
        <Footer onNavigationClick={handleNavigationClick} />
      </div>

<<<<<<< HEAD
      {/* Global scroll-to-top */}
      <ScrollToTop page={currentPage} />
    </div>
  );
}
=======
      <ScrollToTop page={currentPage} />
    </div>
  );
}
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
