import { motion } from 'motion/react';
import { ArrowUpRight, Play, Calendar, Wrench, Code, Puzzle, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function BuildYourOwnPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                  <Wrench className="w-4 h-4 mr-2" />
                  Build Your Own AVi's
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Build Your Own AVi's
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-8 leading-relaxed">
                Custom Solutions. Unlimited Possibilities. Your Vision Realized.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc5Mzg3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Build Your Own AVi Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
              What are Build Your Own AVi's?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Build Your Own AVi's provide a comprehensive platform for creating custom AI agents 
              tailored to your specific business needs, with drag-and-drop tools, extensive APIs, 
              and enterprise-grade infrastructure to bring any automation vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "No-Code Builder",
                description: "Create sophisticated AI agents without writing a single line of code using our intuitive visual builder"
              },
              {
                icon: Puzzle,
                title: "Extensive Integrations",
                description: "Connect to thousands of applications and services with pre-built connectors and APIs"
              },
              {
                icon: Lightbulb,
                title: "AI-Powered Assistance",
                description: "Get intelligent suggestions and optimization recommendations as you build your custom agents"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's start automating
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}