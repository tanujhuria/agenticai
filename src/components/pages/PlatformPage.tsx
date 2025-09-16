import { motion } from 'motion/react';
import { Cpu, Zap, Shield, Globe, Layers, BarChart3, Settings, Cloud, Database, Lock } from 'lucide-react';

const platformFeatures = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Advanced AI Engine",
    description: "Powered by state-of-the-art machine learning models and neural networks",
    details: ["GPT-4 Integration", "Custom Model Training", "Real-time Processing", "Multi-modal AI"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud-Native Architecture", 
    description: "Scalable, reliable, and secure cloud infrastructure built for enterprise",
    details: ["Auto-scaling", "99.99% Uptime", "Global CDN", "Edge Computing"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Unified Data Platform",
    description: "Centralized data management with real-time analytics and insights",
    details: ["Data Lakes", "Stream Processing", "Advanced Analytics", "Data Governance"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance",
    details: ["SOC 2 Certified", "GDPR Compliant", "Zero Trust", "Audit Trails"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Modular Architecture",
    description: "Flexible, composable platform that adapts to your business needs",
    details: ["Microservices", "API-First", "Plugin System", "Custom Integrations"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Deep insights and predictive analytics powered by AI",
    details: ["Predictive Models", "Real-time Dashboards", "Custom Reports", "ML Insights"]
  }
];

const integrations = [
  "Salesforce", "HubSpot", "Microsoft 365", "Google Workspace", "Slack", "Jira",
  "ServiceNow", "Zendesk", "AWS", "Azure", "Shopify", "SAP", "Oracle", "MongoDB",
  "PostgreSQL", "Redis", "Kafka", "Elasticsearch"
];

const architectureLayers = [
  {
    name: "AI & ML Layer",
    description: "Advanced machine learning models and AI processing engines",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Application Layer", 
    description: "Business logic, workflows, and application services",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "API & Integration Layer",
    description: "RESTful APIs, webhooks, and third-party integrations",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Data & Storage Layer",
    description: "Distributed databases, data lakes, and caching systems",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Infrastructure Layer",
    description: "Cloud infrastructure, containers, and orchestration",
    color: "from-gray-600 to-slate-700"
  }
];

export function PlatformPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              The <span style={{
                background: 'linear-gradient(122deg, #b3fef7 26.03%, #5159f6 115.94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built for scale, designed for innovation. Our enterprise-grade AI platform 
              provides the foundation for intelligent automation across your entire organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Platform Architecture
          </motion.h2>

          <div className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`bg-gradient-to-r ${layer.color} p-6 rounded-2xl text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{layer.name}</h3>
                    <p className="text-white/90">{layer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Core Platform Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 group cursor-pointer border border-gray-800 hover:border-gray-600"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Seamless Integrations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-800 transition-colors border border-gray-800 hover:border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{integration}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Platform Performance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.99%", label: "Platform Uptime", icon: <Zap className="w-8 h-8" /> },
              { metric: "<100ms", label: "API Response Time", icon: <Settings className="w-8 h-8" /> },
              { metric: "10M+", label: "API Calls per Day", icon: <BarChart3 className="w-8 h-8" /> },
              { metric: "250+", label: "Global Edge Locations", icon: <Globe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{
                  background: 'linear-gradient(122deg, #b3fef7 26.03%, #5159f6 115.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.metric}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build on Our Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the power of enterprise-grade AI infrastructure. 
              Start building intelligent applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                style={{
                  background: 'linear-gradient(135deg, #67eadd 0%, #4dd5c7 50%, #33c1b3 100%)'
                }}
                className="px-8 py-4 rounded-xl text-black font-semibold hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get API Access
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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