import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Shield, Clock, Users, CheckCircle, Star, TrendingUp, Target, AlertTriangle, Lock, Zap, Settings, Brain, Database, Eye } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

export function SecurityPage() {
  const benefits = [
    {
      icon: Users,
      title: "Reduces Analyst Fatigue",
      description: "Automatically filters thousands of daily alerts, allowing teams to focus on real threats"
    },
    {
      icon: Clock,
      title: "Accelerates Response Times",
      description: "Cuts manual investigation from hours to minutes with automated, playbook-driven actions with full audit trail"
    },
    {
      icon: Target,
      title: "Improves Alert Accuracy",
      description: "Deep analysis and continuous monitoring increase the accuracy of threat detection and prioritization"
    },
    {
      icon: Lock,
      title: "Empowers Agile Security Operations Teams",
      description: "Enables teams to operate more effectively and adapt quickly"
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
      title: "Sec Ops AVi",
      description: "Sec Ops AVi autonomously monitors security alerts 24/7, analyzes threats, and executes playbook-driven responses - reducing manual investigation, boosting alert accuracy, and reducing response time, enabling a more agile and effective Sec Ops team.",
      image: "https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG9wZXJhdGlvbnMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MTMzMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        particleCount={30}
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
                  <Shield className="w-4 h-4 mr-2" />
                  Security AVi's
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
                Security AVi's
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Faster response times. Improved alert accuracy. Agile security operations.
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
                  src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG9wZXJhdGlvbnMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MTMzMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Security AVi's Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What are Security AVi's Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              What are Security AVi's?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Security AVi's are autonomous AI agents that monitor alerts 24/7, analyze threats, and accelerate response - improving Sec Ops speed and efficiency.
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
              Pre-built AVi's for Security
            </h2>
          </motion.div>

          {preBuiltAvis.map((avi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100/50"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {avi.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {avi.description}
                  </p>
                </div>
                <div className="relative">
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
              Security AVi's Benefits
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
              Security AVi's Features
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
              Transform your security operations with intelligent AI agents that provide 24/7 monitoring, 
              threat analysis, and automated response capabilities.
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