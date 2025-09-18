import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, TrendingUp, Clock, Target, Users, CheckCircle, Star, BarChart3, Zap, Brain, Database, Lock, DollarSign, PieChart, LineChart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

export function SalesPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Time-to-Close",
      description: "Streamlines quoting, admin, and research tasks - reducing manual effort and enabling faster deal closure"
    },
    {
      icon: Target,
      title: "Larger Deal Size",
      description: "Surfaces winning strategies and optimal pricing, empowering reps to identify high-value opportunities and maximize deal size"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Sales Productivity",
      description: "Frees up reps to focus on selling by handling routine admin tasks and providing deep account insights for better call preparation"
    },
    {
      icon: DollarSign,
      title: "Predictable Revenue Growth",
      description: "Transforms revenue operations with proactive pipeline analysis, improving forecast accuracy, ramp time, and overall win rates"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Pre-built and Ready to Deploy",
      description: "Deploy pre-built AVi's in days not months, accelerating time to value and reducing technical complexity"
    },
    {
      icon: Brain,
      title: "Powered by Deep Action™",
      description: "Customize each AVi for your unique KPIs, and equip AVi's with the skills, actions, and knowledge to achieve goals autonomously"
    },
    {
      icon: Database,
      title: "Full Enterprise Context",
      description: "Connect to 10,000+ applications, knowledge bases, enterprise data, and more"
    },
    {
      icon: Lock,
      title: "Built on a Secure, Enterprise-Ready Foundation",
      description: "AVi's are trusted and secure, with robust governance, compliance and observability, and precise IT control for all AVi access and actions"
    }
  ];

  const preBuiltAvis = [
    {
      title: "CPQ AVi",
      description: "CPQ AVi turbocharges the configure-price-quote process by leveraging data to recommend the best product configurations and pricing, instantly delivering error-free quotes - slashing manual effort from hours to minutes, and driving faster deals.",
      image: "https://images.unsplash.com/photo-1527957557037-d079c24f24be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUFElMjBjb25maWd1cmUlMjBwcmljZSUyMHF1b3RlfGVufDF8fHx8MTc1ODEzNDExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Rep AVi",
      description: "Rep AVi empowers sales representatives with intelligent automation, lead prioritization, and personalized insights to accelerate deal closure and maximize productivity.",
      image: "https://images.unsplash.com/photo-1696180844025-59a07a2606da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHJlcCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NTgxMzQxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "RevOps AVi",
      description: "RevOps AVi transforms revenue operations with advanced analytics, pipeline optimization, and forecasting intelligence to drive predictable revenue growth and operational excellence.",
      image: "https://images.unsplash.com/photo-1732767751346-cb97d4eee70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXZlbnVlJTIwb3BlcmF0aW9ucyUyMHJldm9wc3xlbnwxfHx8fDE3NTgxMzQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={30}
        maxDistance={120}
        backgroundColor="transparent"
        primaryColor="#8b5cf6"
        secondaryColor="#a855f7"
        particleSize={1.5}
        lineWidth={0.5}
        animationSpeed={0.3}
        opacity={0.4}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Sales AVi's
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
                Sales AVi's
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Sales productivity. Predictable pipeline. Larger deals.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTgwNDYxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sales AVi's Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What are Sales AVi's Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              What are Sales AVi's?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sales AVi's are a suite of autonomous AI agents that accelerate deal cycles, boost rep productivity, and drive larger, faster, and more predictable deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre-built AVi's Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Pre-built AVi's for Sales
            </h2>
          </motion.div>

          <div className="space-y-16">
            {preBuiltAvis.map((avi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100/50"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      {avi.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {avi.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={avi.image}
                        alt={avi.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Sales AVi's Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Sales AVi's Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-fade-up"
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
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
              Let's start automating
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your sales operations with intelligent AI agents that accelerate deal cycles, 
              boost productivity, and drive predictable revenue growth.
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