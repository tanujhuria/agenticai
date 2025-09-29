import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Bot, Database, Globe, Network, Layers, Building, Lock, TrendingUp, ArrowUpRight } from 'lucide-react';

export function EnterpriseMCPPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Network,
      title: "Connector-based MCP implementation",
      description: "Make your existing AgenticView applications agent-ready with minimal effort"
    },
    {
      icon: Shield,
      title: "Support for all system types",
      description: "From NetSuite and SAP to internal tools and databases, expose any system to your AI agents"
    },
    {
      icon: Lock,
      title: "Secure, scalable connectivity",
      description: "Ensure agents only access the systems and actions they're authorized to use"
    }
  ];

  const examples = [
    {
      icon: Database,
      title: "Inventory management agents with full context",
      description: "A company wants an inventory agent that can consolidate stock levels from Salesforce, NetSuite, and a custom on-prem database. Without MCP, the agent would only access SaaS APIs and operate with incomplete information. With AgenticView MCP Support, all systems are surfaced through a single, secure layer — ensuring smarter restocking recommendations and fewer fulfillment delays."
    },
    {
      icon: Users,
      title: "Customer support agents with true personalization", 
      description: "A customer agent built on Agentforce can answer billing questions, schedule deliveries, and even create service tickets — but only if it can securely access internal APIs. With MCP-enabled integrations, the agent can execute actionability across the business, delivering highly personalized service that goes beyond the data it has been trained on."
    },
    {
      icon: Building,
      title: "Scalable, secure agentic automation across departments",
      description: "IT teams can define once and reuse across many agents — ensuring consistency, scalability, and centralized governance. As organizations scale AI agent usage across teams, AgenticView MCP Support ensures there's no need to rebuild integrations from scratch for each use case, and that every backend system interaction is secure."
    }
  ];

  const ctaCards = [
    {
      icon: Globe,
      title: "Start your trial.",
      description: "Try AgenticView Anypoint Platform free for 30 days. No credit card, no installations.",
      buttonText: "Try for free",
      buttonIcon: ArrowUpRight
    },
    {
      icon: Users,
      title: "Talk to an expert.",
      description: "Tell us a bit more so the right person can reach out faster.",
      buttonText: "Request a call",
      buttonIcon: ArrowUpRight
    },
    {
      icon: TrendingUp,
      title: "Stay up to date.",
      description: "Get the latest news about integration, automation, API management, and AI.",
      buttonText: "Sign up for the newsletter",
      buttonIcon: ArrowUpRight
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-16 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Introducing AgenticView MCP Support</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform any application or API into{' '}
              <span className="gradient-text-animate">tools and resources</span> for AI agents
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We are excited to announce the GA release of Model Context Protocol (MCP) support across AgenticView's Anypoint Platform — enabling organizations to harness the full power of AI agents by seamlessly connecting them to enterprise systems and data.
            </motion.p>
          </div>

          {/* MCP Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-12 shadow-2xl border border-purple-100">
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Enterprise Systems</h3>
                  <p className="text-sm text-gray-600 mt-2">APIs, Databases, Legacy Systems</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2 rounded-lg">AgenticView MCP</h3>
                  <p className="text-sm text-gray-600 mt-2">Protocol Translation Layer</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">AI Agents</h3>
                  <p className="text-sm text-gray-600 mt-2">Smart Automation & Analysis</p>
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/4 w-1/4 h-px bg-gradient-to-r from-purple-400 to-purple-600 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-1/4 w-1/4 h-px bg-gradient-to-r from-purple-600 to-purple-400 transform -translate-y-1/2"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This marks a significant step forward in our vision that every organization will become AI-native. By adding support for MCP — the emerging standard for agent-to-tool communication — we're making it easy for enterprises to turn their existing APIs and integrations into dynamic, agent-ready actions. The result: faster development, richer context, and more intelligent, secure, and responsive agentic experiences across the business.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With these strategic investments, AgenticView is empowering customers to move beyond experimentation and into production with AI and agents — all while maintaining the governance, flexibility, and scale they rely on today.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Enabling AI Agents Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enabling AI agents to take action across your enterprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI agents are quickly becoming an essential part of the enterprise technology stack — powering everything from customer support to supply chain optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                But for agents to be effective, they need access to the full context of your business: data, logic, and systems. That's where MCP comes in.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Model Context Protocol (MCP) is an emerging standard that enables agents to securely and efficiently interact with enterprise systems. With AgenticView MCP Support, organizations can now:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expose any AgenticView-managed API or integration as an MCP server</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enable agents to discover and invoke enterprise actions through a standardized protocol</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Eliminate the need for writing custom agent-specific code to bring in critical business data</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Bot className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced AI Agent Context</h3>
                <p className="text-gray-600">
                  By turning your existing APIs and integrations into MCP-compatible assets, you empower agents to operate with real-time business context — increasing accuracy, reducing hallucinations, and unlocking entirely new levels of workflow automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key features of AgenticView MCP Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AgenticView's implementation of MCP is designed for flexibility, speed, and scale. With just a few clicks, developers can transform their APIs and AgenticView apps into MCP servers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            <div className="bg-purple-100 rounded-lg p-6 inline-block">
              <p className="text-purple-800 font-medium">
                Check out this guide to get started with MCP in Anypoint Platform today
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Real-world Examples Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real-world examples of agent-ready integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With MCP support, the possibilities are wide-ranging. Here are just a few ways organizations can use AgenticView to power more intelligent AI agent experiences.
            </p>
          </div>

          <div className="space-y-12">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                    <example.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{example.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{example.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Unified Approach Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            A unified approach to building AI ecosystems
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              By bringing MCP support into the AgenticView Anypoint Platform, we're continuing to deliver on our mission to help organizations connect everything, automate anything — and now, empower agents everywhere.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              MCP represents a unified, open approach to agentic integration. Rather than building custom adapters or dealing with fragmented tooling, developers can now use AgenticView to expose business capabilities in a standardized, agent-ready format.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white mt-12"
          >
            <blockquote className="text-xl italic mb-4">
              "The introduction of MCP represents a major leap forward in how enterprises connect their AI agents with backend systems. With our investment in MCP we're helping our customers accelerate time to value by transforming their AgenticView Apps into agent-ready assets in just a few clicks."
            </blockquote>
            <cite className="text-purple-200 font-medium">Andrew Comstock, GM, AgenticView</cite>
          </motion.div>
        </div>
      </motion.section>

      {/* What's Next Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What's Next?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AgenticView MCP Support is currently available in Anypoint Exchange.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We've also introduced AgenticView Governance for Agent Interactions, a set of capabilities to ensure that you can govern and control all your agent interactions with your applications and other agents. As part of this release, AgenticView Flex Gateway now supports MCP and Agent2Agent (A2A) protocols -- enabling you to apply API policies to these endpoints and monitor agent interactions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Along with the GA status and support, this connector version includes new features, performance improvements, and bug fixes over the previous Beta version.
            </p>
            
            <div className="bg-purple-100 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Upcoming Innovations</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Exposing the generative AI capabilities in our developer tooling as MCP servers to be used by MCP clients, like Cursor and Windsurf</li>
                <li>• Support for additional agent frameworks, like the Agent2Agent (A2A) Protocol</li>
                <li>• Enhancements to AgenticView for Agentforce: Topic Center to provide monitoring capabilities across third party systems being used by agents</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              As the role of AI agents in the enterprise continues to evolve, we're committed to giving our customers the tools they need to lead in this new era.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Extend your AI capabilities with AgenticView.
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Learn more about how AgenticView's MCP Support can transform your organization's AI capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ctaCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <card.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                <button className="flex items-center space-x-2 text-primary font-medium hover:text-purple-700 transition-colors group">
                  <span>{card.buttonText}</span>
                  <card.buttonIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}