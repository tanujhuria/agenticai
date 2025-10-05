import { motion } from 'motion/react';
import { Book, Code, Zap, FileText, Settings, HelpCircle } from 'lucide-react';

const sections = [
  {
    icon: Zap,
    title: 'Quick Start Guide',
    description: 'Get up and running with Agentic View in minutes',
    items: ['Installation', 'Initial Setup', 'First Agent', 'Basic Configuration']
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete documentation for our REST API',
    items: ['Authentication', 'Endpoints', 'Examples', 'SDKs']
  },
  {
    icon: FileText,
    title: 'Agent Library',
    description: 'Pre-built agents and templates',
    items: ['Agent Types', 'Templates', 'Custom Agents', 'Best Practices']
  },
  {
    icon: Settings,
    title: 'Integration Guides',
    description: 'Connect with your favorite tools',
    items: ['Salesforce', 'Slack', 'Microsoft 365', 'Custom Integrations']
  }
];

export function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 

        className="pt-24 pb-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-gray-900">Developer</span>
              <span className="block gradient-text-animate">Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and manage AI agents with Agentic View.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Documentation Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors cursor-pointer">
                      <span>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 gradient-text-animate">Popular Resources</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Getting Started', time: '5 min read', type: 'Guide' },
              { title: 'API Authentication', time: '3 min read', type: 'Tutorial' },
              { title: 'Agent Templates', time: '8 min read', type: 'Reference' },
              { title: 'Webhook Setup', time: '6 min read', type: 'Guide' },
              { title: 'Error Handling', time: '4 min read', type: 'Best Practice' },
              { title: 'Advanced Workflows', time: '12 min read', type: 'Tutorial' }
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-2xl hover:border-primary transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-primary rounded-full text-sm">{resource.type}</span>
                  <span className="text-gray-500 text-sm">{resource.time}</span>
                </div>
                <h3 className="text-lg font-semibold">{resource.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}