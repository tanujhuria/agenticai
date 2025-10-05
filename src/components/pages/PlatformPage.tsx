
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Shield, 
  Monitor, 
  TrendingUp, 
  HeadphonesIcon, 
  Search,
  Zap,
  Bot,
  Settings,
  Database,
  Globe,
  BarChart3,
  Lock,
  Cloud,
  Workflow,
  FileText
} from 'lucide-react';

// Platform overview image placeholder - replace with Unsplash image
const platformImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

interface Section {
  id: string;
  title: string;
  subtitle: string;
}

const sections: Section[] = [
  { id: 'hero', title: 'Platform Overview', subtitle: 'Leading Agentic-Orchestration Platform' },
  { id: 'genies', title: "AgenticView AVi's", subtitle: 'Prebuilt AI Agents' },
  { id: 'go', title: 'AgenticView GO', subtitle: 'Intelligent Starting Point' },
  { id: 'agentic', title: 'AgenticView Agentic', subtitle: 'Enterprise Agent Studio' },
  { id: 'orchestrate', title: 'AgenticView Orchestrate', subtitle: 'Unified Orchestration Platform' },
  { id: 'connectivity', title: 'Universal Connectivity', subtitle: 'Connect Everything' },
  { id: 'enterprise', title: 'Enterprise Grade', subtitle: 'Built for Mission-Critical Operations' }
];

const genieCategories = [
  {
    id: 'cx',
    icon: <Users className="w-8 h-8" />,
    title: 'Customer Experience',
    description: "Use AVi's to capture feedback, tailor content, and guide onboarding — ensuring consistent, high-quality customer experiences at scale.",
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'hr',
    icon: <Users className="w-8 h-8" />,
    title: 'HR & Recruiting',
    description: "AVi's streamline the employee journey — sourcing candidates, guiding onboarding, and answering HR questions instantly.",
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'it',
    icon: <Shield className="w-8 h-8" />,
    title: 'IT & Security',
    description: "Let AVi's handle routine IT tasks — from password resets to system escalations — so users get faster help and IT gets time back.",
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 'marketing',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Marketing',
    description: "Accelerate pipeline with AVi's that identify leads, personalize outreach, and launch campaigns — automatically and at scale.",
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'sales',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Sales',
    description: "Empower reps with AVi's that handle research, CRM updates, and follow-ups — so they can focus on selling, not admin.",
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'support',
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Support',
    description: "Deploy AVi's that resolve common issues, surface knowledge, and keep systems updated — so human agents can focus on the tough stuff.",
    gradient: 'from-teal-500 to-cyan-600'
  }
];

const goFeatures = [
  {
    id: 'search',
    size: 'lg',
    icon: <Search className="w-8 h-8" />,
    title: 'Enterprise Search',
    description: 'Find what you actually need — not just links. Search across 10,000+ apps, data sources, and real-time content in a single, secure experience.',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'assistant',
    size: 'sm',
    icon: <Bot className="w-8 h-8" />,
    title: 'Employee Assistant',
    description: 'AI-powered help desk for everyone. From PTO to IT to procurement, employee assistants handle requests and resolve issues fast.',
    gradient: 'from-green-500 to-blue-600'
  },
  {
    id: 'deep',
    size: 'sm',
    icon: <Zap className="w-8 h-8" />,
    title: 'Deep Action™',
    description: 'Go beyond chat. Deploy agents that can update records, trigger workflows, and orchestrate real business outcomes — instantly and securely.',
    gradient: 'from-purple-500 to-pink-600'
  }
];

const agenticFeatures = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Agent Studio',
    description: 'Design, test, and deploy enterprise-grade agents in a low-code studio grounded in your systems, logic, and business processes.',
    gradient: 'from-primary to-secondary'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Agent Acumen',
    description: 'Agents act on your KPIs with access to enterprise data, documents, APIs, and logic — taking informed actions that move the metrics.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Agent Trust',
    description: 'Govern agents with role-based access, audit trails, and policies — built to meet enterprise-grade security, risk, and compliance standards.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'AgenticView MCP',
    description: 'Model Context Protocol lets agents act safely across your stack — with 10,000+ integrations, execution context, and full auditability.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Agent Orchestration',
    description: 'Agents coordinate with people, systems, and each other to complete workflows, collaborate across teams, and drive real business outcomes.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Agent Insights',
    description: 'Track agent performance, usage, and impact — with full transparency into workflows, KPIs, and ROI to optimize behavior and ensure trust.',
    gradient: 'from-teal-500 to-cyan-600'
  }
];

const orchestrateFeatures = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Process',
    description: 'Manage the moving parts of your business — workflows, documents, legacy screens, and real-time insights — in one cohesive system of execution.',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Apps',
    description: 'Power real-time business by connecting to the events that matter — from app updates to partner workflows and external transactions.',
    gradient: 'from-green-500 to-blue-600'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data',
    description: 'Unify your data without moving it. Support real-time access, master data consistency, and federated views across your enterprise.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'API',
    description: 'Securely expose and manage APIs with built-in gateway, federation, and portal capabilities — designed for internal teams and external partners alike.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'AI Models',
    description: 'Embed AI in workflows for routing, summarization, approvals, and decisions — with oversight and human-in-the-loop controls.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AgenticView AIRO™',
    description: 'Your AI copilot to build faster and run smarter — with real-time diagnostics, smart suggestions, and guided optimization at every step.',
    gradient: 'from-primary to-secondary'
  }
];

const connectivityFeatures = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'SaaS / On-Prem',
    description: 'Connect to the systems that run your business — from modern SaaS like Salesforce and Workday to on-prem ERPs like SAP and ServiceNow.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Warehouse / Data Lakes',
    description: 'Access and move data across Snowflake, Redshift, and other cloud data platforms — all without copying or duplicating unnecessarily.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Databases',
    description: 'Integrate with enterprise databases like Oracle, SQL Server, Db2, and MySQL to orchestrate data-driven processes in real time.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'LLMs',
    description: 'Bring generative AI into your workflows with seamless connections to models like OpenAI, Claude, Llama, and more.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Unstructured',
    description: 'Work with documents, media, and transcripts — extracting insights from contracts, invoices, and more with ease.',
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Traditional',
    description: 'Don\'t leave legacy behind. Connect to mainframes, SFTP servers, archives, and custom-built systems — no modernization required.',
    gradient: 'from-gray-500 to-slate-600'
  }
];

const enterpriseFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Built-in Security and Governance',
    description: 'From BYOK and hourly key rotation to container isolation and full audit trails, AgenticView offers end-to-end protection aligned with enterprise compliance standards like SOC 2, ISO 27001, and PCI.',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Always-On Infrastructure',
    description: 'Zero-downtime upgrades, auto-scaling, and 99.9% uptime ensure your mission-critical operations never skip a beat.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Serverless + Containerized Runtime',
    description: 'Modern, cloud-native architecture supports any workload — with elastic performance and stateful execution for long-running or complex processes.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Effortless Elasticity',
    description: 'Whether you\'re scaling to new geographies or responding to surges in demand, AgenticView\'s platform handles it — automatically and instantly.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Operational Transparency',
    description: 'Track performance, usage, and system health in real time with built-in diagnostics, logs, and analytics — so you\'re always in control.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Enterprise SLAs & Support',
    description: 'Backed by contractual SLAs, 24/7 global support, and dedicated success teams — because real transformation needs real partnership.',
    gradient: 'from-teal-500 to-cyan-600'
  }
];

export function PlatformPage() {

  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollNavVisible, setIsScrollNavVisible] = useState(false);
  const [activeAvi, setActiveAvi] = useState(genieCategories[0]?.id || 'cx');
  const [activeGo, setActiveGo] = useState<'search' | 'assistant' | 'deep'>('search');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show/hide scroll navigation based on scroll position
      setIsScrollNavVisible(scrollY > windowHeight * 0.5);

      // Determine active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offsetTop: document.getElementById(section.id)?.offsetTop || 0
      })).filter(section => section.element);

      const currentSection = sectionElements.find((section, index) => {
        const nextSection = sectionElements[index + 1];
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = nextSection ? nextSection.offsetTop - 200 : document.body.scrollHeight;
        
        return scrollY >= sectionTop && scrollY < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const searchFeature = goFeatures.find(f => (f as any).id === 'search') as any;
  const assistantFeature = goFeatures.find(f => (f as any).id === 'assistant') as any;
  const deepFeature = goFeatures.find(f => (f as any).id === 'deep') as any;

  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Scroll Navigation */}
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
        isScrollNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Platform Sections</h3>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform scale-105'
                    : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                }`}
              >
                <div className="font-medium text-sm">{section.title}</div>
                <div className={`text-xs mt-1 ${
                  activeSection === section.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {section.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              THE AGENTICVIEW ONE PLATFORM
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              The Leading Agentic-Orchestration Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Deliver expert agents for your entire business. Power them with enterprise orchestration. All in a single platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a demo
            </motion.button>
          </motion.div>

          {/* Platform Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-6xl mx-auto"
          >
            <img 
              src={platformImage} 
              alt="AgenticView Platform Overview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>


      {/* One Platform Showcase: AVi's -> GO continuous sticky panel */}
      <section id="genies" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left content (scrolls) */}
          <div className="lg:col-span-6 space-y-24">
            {/* AVi's block */}
            <div id="genies-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AgenticView AVi's
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  AgenticView AVi's are prebuilt AI agents designed to handle high-impact work within key business functions—like CPQ in Sales or onboarding in HR. They integrate with your systems, operate securely, and are customizable to your needs—so you can put AI to work, fast.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {genieCategories.map((category) => (
                  <button
                    key={category.id}
                    onMouseEnter={() => setActiveAvi(category.id)}
                    onClick={() => setActiveAvi(category.id)}
                    className={`w-full p-5 rounded-xl text-left border transition-all duration-300 ${
                      activeAvi === category.id
                        ? 'border-primary ring-2 ring-primary/30 bg-purple-50/50'
                        : 'border-gray-200 hover:border-primary/40 hover:bg-purple-50/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} text-white flex items-center justify-center shrink-0`}>
                        {category.icon}
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{category.title}</div>
                        <div className="text-gray-600 text-sm mt-1">{category.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* GO block (anchor preserved) */}
            <div id="go">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AgenticView GO
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Meet AgenticView GO — your intelligent starting point for work. Search across systems, get help from AI-powered assistants, and take real action — all in one place. Powered by enterprise agents that understand your business and get things done.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {goFeatures.map((feature: any) => (
                  <button
                    key={feature.id}
                    onMouseEnter={() => setActiveGo(feature.id)}
                    onClick={() => setActiveGo(feature.id)}
                    className={`w-full p-5 rounded-xl text-left border transition-all duration-300 ${
                      activeGo === feature.id
                        ? 'border-primary ring-2 ring-primary/30 bg-purple-50/50'
                        : 'border-gray-200 hover:border-primary/40 hover:bg-purple-50/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} text-white flex items-center justify-center shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{feature.title}</div>
                        <div className="text-gray-600 text-sm mt-1">{feature.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right sticky neon panel (morphs between grids) */}
          <div className="lg:col-span-6">
            <div className="sticky top-28">
<div className="relative rounded-3xl p-6 bg-white text-gray-900 border border-primary/30 shadow-[0_0_30px_rgba(124,58,237,0.25)]">
                <div className="border border-dashed border-primary/40 rounded-xl px-4 py-2 inline-flex text-xs tracking-widest uppercase text-primary/80 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span key={activeGo ? 'go' : 'avi'} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.25 }}>
                      {activeGo ? 'AgenticView GO' : "AgenticView AVi's"}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  {/* AVi grid 3x2 */}
                  {(!activeGo || activeGo === 'search' || activeGo === 'assistant' || activeGo === 'deep') && (
                    <motion.div
                      key={activeAvi ? 'avi-grid' : 'avi-grid'}
                      initial={{ opacity: 0, scaleY: 0.95 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      {genieCategories.map((cat) => (
<div key={cat.id} className={`rounded-xl p-4 bg-gradient-to-br from-purple-50/60 to-white/90 border ${activeAvi === cat.id ? 'border-primary ring-2 ring-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]' : 'border-primary/10'}`}>
                          <div className={`w-10 h-10 rounded-lg mb-3 bg-gradient-to-r ${cat.gradient} flex items-center justify-center text-white`}>
                            {cat.icon}
                          </div>
                          <div className="text-sm">{cat.title}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* GO layout: big + two small */}
                  {activeGo && (
                    <motion.div
                      key={`go-grid-${activeGo}`}
                      initial={{ opacity: 0, scaleY: 0.9 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.9 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-2 gap-4"
                    >
<div className={`col-span-2 rounded-xl p-6 bg-gradient-to-br from-purple-50/60 to-white/90 border ${activeGo === 'search' ? 'border-primary ring-2 ring-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]' : 'border-primary/10'}`}>
                        <div className={`w-12 h-12 rounded-lg mb-3 bg-gradient-to-r ${searchFeature?.gradient} flex items-center justify-center text-white`}>
                          {searchFeature?.icon}
                        </div>
                        <div className="text-lg font-semibold">{searchFeature?.title}</div>
<div className="text-sm text-gray-600 mt-1">{searchFeature?.description}</div>
                      </div>
<div className={`rounded-xl p-5 bg-gradient-to-br from-purple-50/60 to-white/90 border ${activeGo === 'assistant' ? 'border-primary ring-2 ring-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]' : 'border-primary/10'}`}>
                        <div className={`w-10 h-10 rounded-lg mb-2 bg-gradient-to-r ${assistantFeature?.gradient} flex items-center justify-center text-white`}>
                          {assistantFeature?.icon}
                        </div>
                        <div className="text-sm font-medium">{assistantFeature?.title}</div>
                      </div>
<div className={`rounded-xl p-5 bg-gradient-to-br from-purple-50/60 to-white/90 border ${activeGo === 'deep' ? 'border-primary ring-2 ring-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]' : 'border-primary/10'}`}>
                        <div className={`w-10 h-10 rounded-lg mb-2 bg-gradient-to-r ${deepFeature?.gradient} flex items-center justify-center text-white`}>
                          {deepFeature?.icon}
                        </div>
                        <div className="text-sm font-medium">{deepFeature?.title}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic View Agentic Section */}
      <section id="agentic" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AgenticView Agentic
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Design, test, and deploy enterprise-grade agents in a low-code studio grounded in your systems, logic, and business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agenticFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agentic View Orchestrate Section */}
      <section id="orchestrate" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AgenticView Orchestrate
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Orchestrate data, apps, processes, experiences, and agents in one place. Built on a leading iPaaS with API management, integration, B2B/EDI, and document processing, it unifies bots, logic, and AI to drive execution across your entire stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orchestrateFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Connectivity Section */}
      <section id="connectivity" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Universal Connectivity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From modern SaaS to legacy mainframes, connect every system — including custom apps, databases, data lakes, LLMs, and on-prem infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connectivityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-grade Section */}
      <section id="enterprise" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enterprise-grade by design
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              The trusted foundation for mission-critical Agentic-Orchestration
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AgenticView ONE isn't just powerful — it's built for the demands of modern enterprises. Behind every agent, automation, and workflow is a platform engineered for scale, resilience, and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the power of the leading Agentic-Orchestration platform. 
              Start building intelligent, automated workflows today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}