
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, Play, Calendar, Star, Heart, MessageCircle, TrendingUp, 
  Users, Target, BarChart3, CheckCircle, Zap, Shield, Settings
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useCache } from '../CacheManager';

export function CustomerExperiencePage() {
  const [activeTab, setActiveTab] = useState('cx');
  const [contentLoaded, setContentLoaded] = useState(false);
  const { setCacheData, hasCacheData } = useCache('customer_experience_page');

  // Memoize static data to prevent recreations
  const benefits = useMemo(() => [
    {
      icon: Users,
      title: "Personalized Customer Focus",
      description: "Enables Customer Success Managers to prioritize high-impact support, onboarding, and renewal tasks, ensuring tailored next steps for each customer"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Action", 
      description: "Transforms customer data, surveys, and escalations into actionable insights, driving timely follow-up and informed feature development"
    },
    {
      icon: Zap,
      title: "Reduced Manual Work",
      description: "Autonomously manages manual tasks so Customer Success Managers can focus on working with customers and driving customer success"
    },
    {
      icon: Heart,
      title: "Improved Customer Experience",
      description: "Delivers proactive engagement and issue resolution, accelerating renewals and fostering stronger customer relationships"
    }
  ], []);

  const features = useMemo(() => [
    {
      icon: CheckCircle,
      title: "Pre-built and Ready to Deploy",
      description: "Deploy pre-built AVi's in days not months, accelerating time to value and reducing technical complexity"
    },
    {
      icon: Star,
      title: "Powered by Deep Action ™",
      description: "Customize each AVi for your unique KPIs, and equip AVi's with the skills, actions, and knowledge to achieve goals autonomously"
    },
    {
      icon: Settings,
      title: "Full Enterprise Context",
      description: "Connect to 10,000+ applications, knowledge bases, enterprise data, and more"
    },
    {
      icon: Shield,
      title: "Built on a Secure, Enterprise-Ready Foundation",
      description: "AVi's are trusted and secure, with robust governance, compliance and observability, and precise IT control for all AVi access and actions"
    }
  ], []);

  const tabContent = useMemo(() => ({
    cx: {
      title: "CX AVi",
      description: "CX AVi autonomously orchestrates customer insights from feedback to action, turning surveys and escalations into actionable intelligence for new features and account follow-up - delivering an always-on, connected, and scalable customer experience."
    },
    csm: {
      title: "CSM AVi",
      description: "CSM AVi autonomously manages customer success workflows, monitors health scores, and proactively identifies opportunities for upsells, renewals, and expansion while ensuring customer satisfaction and retention."
    }
  }), []);

  // Fast content loading
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if content is cached
    if (hasCacheData()) {
      setContentLoaded(true);
    } else {
      // Progressive loading for new visitors
      const timer = setTimeout(() => {
        setContentLoaded(true);
        setCacheData({ loaded: true }, 10 * 60 * 1000); // 10 minutes cache
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hasCacheData, setCacheData]);

  // Optimized scroll animation (throttled)
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking && contentLoaded) {
        requestAnimationFrame(() => {
          const elements = document.querySelectorAll('[data-animate]:not(.animate-in)');
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
              element.classList.add('animate-in');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    if (contentLoaded) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentLoaded]);

  // Show shimmer while loading
  if (!contentLoaded) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Shimmer */}
        <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-8 shimmer"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-12 w-3/4 shimmer"></div>
                <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-48 shimmer"></div>
              </div>
              <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl shimmer"></div>
            </div>
          </div>
        </section>
        
        {/* Content Shimmer */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-8 shimmer"></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-12 shimmer"></div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 content-loading content-loaded">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                  <Heart className="w-4 h-4 mr-2" />
                  Customer Experience
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Customer Experience AVi's
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed">
                Personalized customer focus. Improved customer experience. More renewals.
              </p>
              
              <Button 
                size="lg"

                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-10 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Schedule a demo
                <ArrowUpRight className="w-6 h-6 ml-3" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative content-loading content-loaded">
              <div className="relative group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform scale-110"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Customer Experience AVi Dashboard"
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-gray-600">More Renewals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What are Customer Experience AVi's Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
            What are Customer Experience AVi's?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            Customer Experience AVi's are a suite of autonomous AI agents that deliver an always-on and 
            personalized customer experience, elevating customer success and driving renewals.
          </p>
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-16">
            Pre-built AVi's for Customer Experience
          </h3>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto" data-animate>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-white p-2 rounded-xl shadow-lg">
              <TabsTrigger 
                value="cx" 
                className="text-lg py-4 px-8 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
              >
                CX AVi
              </TabsTrigger>
              <TabsTrigger 
                value="csm"
                className="text-lg py-4 px-8 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
              >
                CSM AVi
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="cx">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {tabContent.cx.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {tabContent.cx.description}
                  </p>
                </div>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="csm">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {tabContent.csm.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {tabContent.csm.description}
                  </p>
                </div>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
              CX AVi's Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children" data-animate>
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 h-full border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
              CX AVi's Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children" data-animate>
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 h-full border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transform Your Customer Experience
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to deliver personalized, autonomous customer experiences that drive satisfaction and renewals?
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
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch demo video
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}