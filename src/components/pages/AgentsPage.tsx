import { useState } from 'react';
import { motion } from 'motion/react';
<<<<<<< HEAD
import { Bot, Zap, Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle, Star, TrendingUp, MessageSquare, Calendar, FileText, Database, Settings, Workflow, Brain, Target, Lightbulb } from 'lucide-react';

const agentTypes = [
  {
    icon: MessageSquare,
    title: "Customer Service AVi",
    description: "24/7 intelligent customer support that learns from every interaction",
    features: ["Multi-language support", "Sentiment analysis", "Escalation handling", "Integration with CRM"],
    color: "from-blue-600 to-cyan-600",
    stats: { efficiency: "90%", satisfaction: "95%", resolution: "24/7" }
=======
import { Bot, Zap, Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle, Star, TrendingUp, MessageSquare, Calendar, FileText, Database, Settings, Workflow, Brain, Target, Lightbulb, Headphones } from 'lucide-react';

const agentTypes = [
  // Row 1: Marketing, Sales, Customer Experience
  {
    icon: Target,
    title: "Marketing AVi",
    description: "Automated marketing campaign management with AI-driven optimization",
    features: ["Multi-channel campaigns", "A/B testing", "Audience segmentation", "ROI optimization"],
    color: "from-purple-600 to-pink-600",
    stats: { roi: "300%", efficiency: "80%", campaigns: "50+" }
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
  },
  {
    icon: TrendingUp,
    title: "Sales AVi",
    description: "Automated lead qualification and sales process optimization",
    features: ["Lead scoring", "Pipeline management", "Follow-up automation", "Performance analytics"],
    color: "from-green-600 to-emerald-600",
    stats: { conversion: "40%", revenue: "$2.5M", leads: "10k+" }
  },
  {
<<<<<<< HEAD
    icon: BarChart3,
    title: "Analytics AVi",
    description: "Real-time data analysis and intelligent business insights",
    features: ["Predictive analytics", "Custom dashboards", "Automated reports", "Anomaly detection"],
    color: "from-purple-600 to-pink-600",
    stats: { accuracy: "98%", insights: "500+", decisions: "2x faster" }
  },
  {
    icon: Users,
    title: "HR AVi",
=======
    icon: MessageSquare,
    title: "Customer Experience AVi",
    description: "24/7 intelligent customer support that learns from every interaction",
    features: ["Multi-language support", "Sentiment analysis", "Escalation handling", "Integration with CRM"],
    color: "from-blue-600 to-cyan-600",
    stats: { efficiency: "90%", satisfaction: "95%", resolution: "24/7" }
  },
  // Row 2: Support, HR Recruiting, IT
  {
    icon: Headphones,
    title: "Support AVi",
    description: "Autonomous customer support agents with AI-powered search and response",
    features: ["AI-powered search", "Live chat management", "Email automation", "Knowledge base integration"],
    color: "from-indigo-600 to-purple-600",
    stats: { resolution: "2x faster", accuracy: "95%", satisfaction: "98%" }
  },
  {
    icon: Users,
    title: "HR Recruiting AVi",
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
    description: "Streamline recruitment, onboarding, and employee management",
    features: ["Resume screening", "Interview scheduling", "Onboarding workflows", "Performance tracking"],
    color: "from-orange-600 to-red-600",
    stats: { hiring: "60% faster", satisfaction: "92%", retention: "85%" }
  },
  {
<<<<<<< HEAD
=======
    icon: Settings,
    title: "IT AVi",
    description: "Automated IT operations, monitoring, and infrastructure management",
    features: ["System monitoring", "Incident response", "Resource optimization", "Automated deployments"],
    color: "from-gray-600 to-slate-600",
    stats: { uptime: "99.9%", response: "< 2min", efficiency: "85%" }
  },
  // Row 3: Security, Build Your Own, View All
  {
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
    icon: Shield,
    title: "Security AVi",
    description: "Proactive threat detection and automated security responses",
    features: ["Threat monitoring", "Incident response", "Compliance tracking", "Risk assessment"],
    color: "from-red-600 to-pink-600",
    stats: { threats: "99.9%", response: "< 1min", uptime: "99.99%" }
  },
  {
<<<<<<< HEAD
    icon: Calendar,
    title: "Operations AVi",
    description: "Optimize workflows and automate routine operational tasks",
    features: ["Process automation", "Resource optimization", "Schedule management", "Quality control"],
    color: "from-indigo-600 to-purple-600",
    stats: { efficiency: "75%", costs: "30% ↓", errors: "95% ↓" }
  },
  {
    icon: FileText,
    title: "Documentation AVi",
    description: "Automated document processing and knowledge management",
    features: ["Content generation", "Document classification", "Knowledge extraction", "Version control"],
    color: "from-teal-600 to-blue-600",
    stats: { processing: "10x faster", accuracy: "96%", storage: "50% ↓" }
  },
  {
    icon: Database,
    title: "Data AVi",
    description: "Intelligent data management and automated data workflows",
    features: ["Data cleansing", "ETL automation", "Quality monitoring", "Integration pipelines"],
    color: "from-cyan-600 to-teal-600",
    stats: { quality: "99%", processing: "5x faster", errors: "90% ↓" }
  },
  {
    icon: Settings,
    title: "DevOps AVi",
    description: "Automated deployment, monitoring, and infrastructure management",
    features: ["CI/CD automation", "Infrastructure monitoring", "Auto-scaling", "Incident management"],
    color: "from-gray-600 to-slate-600",
    stats: { deployment: "50x faster", uptime: "99.9%", recovery: "2min" }
=======
    icon: Brain,
    title: "Build Your Own AVi",
    description: "Create custom AI agents tailored to your specific business needs",
    features: ["Custom workflows", "No-code builder", "API integrations", "Advanced analytics"],
    color: "from-violet-600 to-purple-600",
    stats: { flexibility: "100%", deployment: "Days", custom: "∞" }
  },
  {
    icon: ArrowRight,
    title: "View All AVi's",
    description: "Explore our complete suite of AI agents and find the perfect solution",
    features: ["Browse catalog", "Compare features", "See pricing", "Get recommendations"],
    color: "from-teal-600 to-blue-600",
    stats: { agents: "50+", industries: "20+", solutions: "∞" }
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
  }
];

const featuredAgents = [
  {
    title: "Campaign AVi",
    description: "Automated marketing campaign management with AI-driven optimization",
    icon: Target,
    features: ["Multi-channel campaigns", "A/B testing", "Audience segmentation", "ROI optimization"],
    roi: "300%",
    efficiency: "80%",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Lead AVi",
    description: "Intelligent lead generation and nurturing with predictive scoring",
    icon: Lightbulb,
    features: ["Lead scoring", "Behavior tracking", "Automated nurturing", "Conversion optimization"],
    roi: "250%",
    efficiency: "65%",
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Workflow AVi",
    description: "End-to-end business process automation with intelligent routing",
    icon: Workflow,
    features: ["Process mapping", "Smart routing", "Exception handling", "Performance monitoring"],
    roi: "400%",
    efficiency: "90%",
    color: "from-green-600 to-emerald-600"
  }
];

const benefits = [
  { icon: Clock, title: "99.9% Faster", description: "Automate tasks in seconds, not hours" },
  { icon: Brain, title: "AI-Powered", description: "Machine learning that gets smarter over time" },
  { icon: Shield, title: "Enterprise Ready", description: "SOC2 compliant with bank-grade security" },
  { icon: Zap, title: "Instant Deployment", description: "Deploy agents in minutes, not months" }
];

export function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(agentTypes[0]);
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
<<<<<<< HEAD
        className="pt-32 pb-20 px-6"
=======
        className="pt-24 pb-20 px-6"
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-gray-900">Intelligent</span>
              <span className="block gradient-text-animate">AVi's Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Deploy specialized AI agents that understand your business and automate complex workflows with human-like intelligence.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Agents Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              <span className="gradient-text-animate">Featured AVi's</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI agents that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAgents.map((agent, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <agent.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{agent.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
                
                <div className="space-y-3 mb-6">
                  {agent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{agent.roi}</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{agent.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                </div>

                <motion.button 
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Deploy Agent</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Agents Grid */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              <span className="gradient-text-animate">Complete AVi's Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI agents for every department and use case
            </p>
          </motion.div>

          {/* 3x3 Grid with Motion Effects */}
          <div className="grid md:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedAgent(agent)}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <agent.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4">{agent.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(agent.stats).map(([key, value], idx) => (
                    <motion.div 
                      key={idx} 
                      className="text-center p-2 bg-gray-50 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="flex items-center text-primary font-medium"
                  whileHover={{ x: 10 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Details Section */}
      <motion.section 
        className="py-20 px-6 bg-white"
        key={selectedAgent.title}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${selectedAgent.color} rounded-3xl flex items-center justify-center mb-8`}>
                <selectedAgent.icon className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{selectedAgent.title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{selectedAgent.description}</p>
              
              <div className="space-y-4 mb-8">
                {selectedAgent.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-lg flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Deploy {selectedAgent.title}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="lg:pl-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(selectedAgent.stats).map(([key, value], index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-gray-600 capitalize">{key}</span>
                      <span className="text-2xl font-bold text-primary">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Deploy Your AI Agent?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free trial and see the difference AI agents can make for your business
            </p>
            <motion.button 
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}