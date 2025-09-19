import { motion } from 'motion/react';
import { Bot, Zap, Shield, BarChart3, Users, Workflow } from 'lucide-react';
import { NetworkBackground } from './NetworkBackground';

const sections = [
  {
    icon: Bot,
    title: "Intelligent AI Agents",
    subtitle: "Deploy smart agents that understand your business",
    description: "Our AI agents learn from your data and workflows to provide intelligent automation across all departments. From customer service to data analysis, they adapt to your unique business needs.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Integration",
    subtitle: "Connect everything in minutes, not months",
    description: "With over 1000+ pre-built connectors, integrate your favorite tools and services instantly. Our platform handles the complexity while you focus on results.",
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    subtitle: "Bank-grade security for your peace of mind",
    description: "End-to-end encryption, SOC2 compliance, and advanced threat protection ensure your data remains secure while enabling powerful automation.",
    gradient: "from-red-600 to-pink-600"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    subtitle: "Data-driven insights at your fingertips",
    description: "Real-time dashboards and intelligent reporting help you understand performance, identify bottlenecks, and optimize your workflows for maximum efficiency.",
    gradient: "from-orange-600 to-yellow-600"
  },
  {
    icon: Users,
    title: "Collaborative Workflows",
    subtitle: "Bring teams together seamlessly",
    description: "Enable cross-functional collaboration with shared workflows, automated notifications, and role-based access controls that keep everyone aligned.",
    gradient: "from-indigo-600 to-blue-600"
  },
  {
    icon: Workflow,
    title: "No-Code Automation",
    subtitle: "Build powerful workflows without coding",
    description: "Drag-and-drop interface makes it easy for anyone to create sophisticated automation. From simple tasks to complex multi-step processes, anyone can build.",
    gradient: "from-purple-600 to-pink-600"
  }
];

interface ContentSectionsProps {
  onTrialClick?: () => void;
}

export function ContentSections({ onTrialClick = () => {} }: ContentSectionsProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-6 overflow-hidden">
      {/* Subtle Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={25}
        maxDistance={100}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={1}
        animationSpeed={0.2}
        opacity={0.2}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          {/* Decorative line above title */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent w-32"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Powerful features for
            </span>
            <span 
              className="block gradient-text-animate"
            >
              modern enterprises
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your business with AI-powered automation and intelligent workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sections.slice(0, 3).map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-4 sm:mb-6`}>
                <section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{section.subtitle}</p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{section.description}</p>
            </motion.div>
          ))}
        </div>



        {/* Additional sections (hidden initially) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {sections.slice(3).map((section, index) => (
            <motion.div
              key={index + 3}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-4 sm:mb-6`}>
                <section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{section.subtitle}</p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{section.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button 
            onClick={onTrialClick}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}