import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, CheckCircle, Target, Users, Building, TrendingUp, Shield, Zap, Brain, Database, Workflow, BarChart3, MessageSquare, Settings } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

export function SolutionsPage() {
  const solutions = [
    {
      title: "Enterprise Integration",
      description: "Connect all your business applications and data sources with our comprehensive integration platform",
      icon: Database,
      features: ["10,000+ pre-built connectors", "Real-time data sync", "API management", "Cloud & on-premise"],
      color: "from-blue-600 to-cyan-600",
      stats: { integrations: "10k+", uptime: "99.9%", customers: "5000+" }
    },
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with intelligent workflows that adapt to your needs",
      icon: Workflow,
      features: ["Visual workflow builder", "AI-powered optimization", "Exception handling", "Real-time monitoring"],
      color: "from-purple-600 to-pink-600",
      stats: { efficiency: "85%", savings: "$2.5M", processes: "1000+" }
    },
    {
      title: "AI Agent Orchestration",
      description: "Deploy and manage AI agents across your organization with enterprise-grade security",
      icon: Brain,
      features: ["Multi-agent coordination", "Custom skill development", "Enterprise controls", "Advanced analytics"],
      color: "from-green-600 to-emerald-600",
      stats: { agents: "50+", productivity: "3x", accuracy: "96%" }
    },
    {
      title: "Data Orchestration",
      description: "Unify, transform, and activate your data across all systems and touchpoints",
      icon: BarChart3,
      features: ["ETL/ELT pipelines", "Data quality monitoring", "Real-time processing", "Compliance ready"],
      color: "from-orange-600 to-red-600",
      stats: { volume: "10TB+", quality: "99%", speed: "5x faster" }
    }
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Streamline operations, ensure compliance, and deliver exceptional customer experiences",
      icon: Building,
      useCases: ["KYC automation", "Risk management", "Customer onboarding", "Regulatory reporting"]
    },
    {
      title: "Healthcare",
      description: "Improve patient outcomes with integrated systems and automated workflows",
      icon: Shield,
      useCases: ["Patient data integration", "Claims processing", "Appointment scheduling", "Compliance monitoring"]
    },
    {
      title: "Manufacturing",
      description: "Optimize supply chains, automate production, and enhance quality control",
      icon: Settings,
      useCases: ["Supply chain optimization", "Quality assurance", "Inventory management", "Production planning"]
    },
    {
      title: "Retail & E-commerce",
      description: "Create seamless customer journeys and optimize operations across channels",
      icon: TrendingUp,
      useCases: ["Inventory sync", "Customer personalization", "Order fulfillment", "Marketing automation"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Accelerate Time-to-Market",
      description: "Deploy solutions 10x faster with pre-built components and no-code tools"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with bank-grade security and comprehensive audit trails"
    },
    {
      icon: Target,
      title: "Scalable Architecture",
      description: "Handle any volume with cloud-native architecture that scales automatically"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 support from integration experts and dedicated customer success teams"
    }
  ];

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
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Solutions for Every Business Need
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your organization with comprehensive integration, automation, and AI solutions designed for enterprise scale and security.
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive platform capabilities that work together to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(solution.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for specific industry challenges and requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                    {industry.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-gray-700 text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise scale with the flexibility to grow with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of enterprises who trust AgenticView to power their digital transformation journey.
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}