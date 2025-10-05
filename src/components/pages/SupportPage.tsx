
import { useEffect } from 'react';
import { ArrowUpRight, Calendar, Headphones, MessageCircle, Clock, Users, Shield, CheckCircle, Star, TrendingUp, Target, Search, Mail, BarChart3, Bot, Database, Lock, Workflow } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function SupportPage() {

  // Fast content loading - no delays
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Accelerate Resolution Time",
      description: "Empower customers with AI-driven self-service and instant answers, reducing resolution times and agent workload"
    },
    {
      icon: Star,
      title: "Improved Customer Satisfaction",
      description: "Boosts customer satisfaction by delivering fast, accurate, personalized, and efficient customer support experiences"
    },
    {
      icon: TrendingUp,
      title: "Maximize Support Efficiency",
      description: "Streamline workflows, automate responses, and optimize agent collaboration to handle more inquiries with fewer resources"
    },
    {
      icon: Target,
      title: "Scale With Confidence",
      description: "Enhance customer support at scale while ensuring security, compliance, and seamless integration across your tech stack"
    }
  ];

  const features = [
    {
      icon: Search,
      title: "AI-powered Search, Live Chat and Email Response",
      description: "Autonomously deliver relevant answers with AI-powered search, manage questions via live chat with seamless hand off to human agents, and auto-respond to and categorize email inquiries"
    },
    {
      icon: BarChart3,
      title: "Search and Agent Analytics",
      description: "Track search trends, click performance, and content gaps with detailed analytics on session volume, self-service success, and user engagement"
    },
    {
      icon: Bot,
      title: "Copilot for Support Agents",
      description: "Empower agents with full customer context and AI-driven actions. Support AVi's automate routine tasks, integrate seamlessly with CRMs, and accelerate resolution times—all without writing code"
    },
    {
      icon: Workflow,
      title: "LCNC Automation Builder",
      description: "Automate support workflows effortlessly. Support AVi's enable AI-driven actions, dynamic forms, and seamless integrations to optimize processes while keeping human approvals where needed"
    },
    {
      icon: Database,
      title: "Full Enterprise Context",
      description: "Pre-integrated with over 1,200 pre-built connectors for enterprise apps and data – on cloud and on-premise"
    },
    {
      icon: Lock,
      title: "Enterprise Grade Security and Governance",
      description: "User runtime authentication with complete auditability. Customer data and learnings are always kept separate. Precise IT control for all AVi access and actions. Robust governance and observability"
    }
  ];

  const preBuiltAvis = [
    {
      title: "Support AVi",
      description: "Support AVi autonomously resolves customer questions and issues with AI search and natural language AI chat, with the ability to take action by integrating with over 1,200 pre-built apps and data connectors.",
      image: "https://images.unsplash.com/photo-1698921974499-afab201f7397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwZ2VuaWUlMjBoZXJvJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODEzMjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-4">
                  <Headphones className="w-4 h-4 mr-2" />
                  Support AVi's
                </span>
              </div>
              

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
                Support AVi's
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Faster resolution time. More efficient support operations. Higher customer satisfaction.
              </p>
              
              <Button 
                size="lg"

                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>

            </div>

            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698921974499-afab201f7397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwZ2VuaWUlMjBoZXJvJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODEzMjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Support AVi's Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What are Support AVi's Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              What are Support AVi's?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Support AVi's are autonomous customer support agents that deliver AI-powered search, live chat and email response - accelerating resolution time and boosting customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-built AVi's Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Pre-built AVi's for Support
            </h2>
          </div>

          {preBuiltAvis.map((avi, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100"
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
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Support AVi's Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card className="p-8 h-full border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white">
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

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Support AVi's Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <Card className="p-8 h-full border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white group">
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
              </div>
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
              Transform your customer support with intelligent AI agents that provide instant, 
              personalized assistance around the clock.
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