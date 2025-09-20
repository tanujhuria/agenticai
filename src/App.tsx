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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  };

  const handleMenuStateChange = (isOpen: boolean) => setIsMenuOpen(isOpen);

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
        <ScrollToTop page={currentPage} />
      </div>
    );
  }

  // All other pages use the same layout
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

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "blur-sm" : ""
        }`}
      >
        {pageComponents[currentPage] || (
          <div className="p-10 text-center text-gray-500">
            Page not found
          </div>
        )}
        <Footer onNavigationClick={handleNavigationClick} />
      </div>

      {/* Global scroll-to-top */}
      <ScrollToTop page={currentPage} />
    </div>
  );
}
