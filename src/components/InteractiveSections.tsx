import { motion } from 'motion/react';
import { ArrowRight, Workflow, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { FloatingShapes } from './FloatingShapes';

interface InteractiveSectionsProps {
  onTrialClick?: () => void;
}

export function InteractiveSections({ onTrialClick }: InteractiveSectionsProps) {
  return (

    <section className="relative bg-white py-12 sm:py-16 px-6 overflow-hidden">
      {/* Floating Shapes Background */}
      <FloatingShapes />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* First Section - Image Left, Text Right */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Left */}
          <div className="relative">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1729184648177-937c20cc3166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb24lMjBkYXNoYm9hcmQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc5Mjk5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workflow automation dashboard"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Workflow className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Content Right */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                One prompt to turn ideas into{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  workflows
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                AVi's leading iPaaS engine connects your systems, applies business logic, and automates tasks. 
                Transform complex processes into simple, intelligent workflows with just a single prompt.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Connect 1000+ apps and services instantly',
                  'AI-powered workflow optimization',
                  'Real-time monitoring and analytics',
                  'Enterprise-grade security and compliance'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={onTrialClick}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Section - Text Left, Image Right */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Content Left */}
          <div className="space-y-6 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                One prompt to turn roles into{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  agents
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Give your AVi a job description, define their KPIs, provide company docs, and have them work 
                side-by-side with your team. Create intelligent agents that understand your business context.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Natural language agent configuration',
                  'Custom role-based AI assistants',
                  'Seamless team collaboration',
                  'Continuous learning and improvement'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={onTrialClick}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Image Right */}
          <div className="relative lg:order-2">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1715410057922-b7dfaaa40334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFnZW50JTIwcm9ib3QlMjB3b3JrcGxhY2UlMjB0ZWFtfGVufDF8fHx8MTc1NzkyOTkxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI agents working with team"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-secondary/20"></div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <Users className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}