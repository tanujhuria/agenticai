
import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowUpRight, Play, Calendar, Zap, Target, TrendingUp, Users, 
  BarChart3, CheckCircle, Star, Shield 
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function MarketingPage() {
  const [activeTab, setActiveTab] = useState('campaign');


  // Memoize static data to prevent recreations
  const benefits = useMemo(() => [
    {
      icon: Zap,
      title: "Faster Campaign Launch Cycles",
      description: "Autonomous analysis, testing, optimization, and delivery of outbound email campaigns, shrinking campaign launch cycles from days to hours"
    },
    {
      icon: Target,
      title: "Personalization at Scale", 
      description: "Highly personalized campaigns for different personas that automatically incorporate data-drive best practices to maximize relevancy and engagement"
    },
    {
      icon: TrendingUp,
      title: "Faster Time to First Call",
      description: "Autonomously identify and route the right leads to the right reps fast, accelerating time to first meeting, and driving higher lead conversion"
    },
    {
      icon: BarChart3,
      title: "Expert Insights",
      description: "Explore deep campaign insights and suggest new campaign tactics and optimization using natural language"
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
      description: "Customize each AVi for your unique campaigns and KPIs, and equip AVi's with the skills, actions, and knowledge to achieve goals autonomously"
    },
    {
      icon: Users,
      title: "Full Enterprise Context",
      description: "Connect to 10,000+ applications - CRM, CMS, email automation, reporting tools, knowledge bases, enterprise data, and more"
    },
    {
      icon: Shield,
      title: "Built on a Secure, Enterprise-Ready Foundation",
      description: "AVi's are trusted and secure, with robust governance, compliance and observability, and precise IT control for all AVi access and actions"
    }

  ], []);

  const tabContent = useMemo(() => ({
    campaign: {
      title: "Campaign AVi",
      description: "Campaign AVi autonomously analyzes, tests, optimizes, and delivers outbound email campaigns, shrinking campaign launch cycles from days to hours and ensuring your outbound efforts are highly personalized at scale."
    },
    lead: {
      title: "Lead AVi",
      description: "Lead AVi autonomously identifies and routes the right leads to the right reps fast, accelerating time to first meeting and driving higher lead conversion rates through intelligent lead scoring and prioritization."
    }

  }), []);

  // Fast content loading - no delays
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Optimized */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Marketing AgenticView
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed">
                Faster Campaigns. More Pipeline. Autonomous Results.
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
            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform scale-110"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Marketing AVi Dashboard"
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-primary mb-2">87%</div>
                  <div className="text-sm text-gray-600">Faster Campaigns</div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                  <div className="text-sm text-gray-600">More Pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Marketing AVi's Section */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
            What are Marketing AVi's?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            Marketing AVi's are a suite of autonomous AI agents that rapidly launch and scale 
            personalized, self-optimizing marketing campaigns - driving new leads and accelerating 
            pipeline growth.
          </p>
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-16">
            Pre-built AVi's for Marketing
          </h3>
        </div>
      </section>

      {/* Tabs Section - Simplified */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 bg-white p-2 rounded-xl shadow-lg">
              <TabsTrigger 
                value="campaign" 
                className="text-lg py-4 px-8 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
              >
                Campaign AVi
              </TabsTrigger>
              <TabsTrigger 
                value="lead"
                className="text-lg py-4 px-8 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
              >
                Lead AVi
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="campaign">

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {tabContent.campaign.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {tabContent.campaign.description}
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
            
            <TabsContent value="lead">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    {tabContent.lead.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {tabContent.lead.description}
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


      {/* Benefits Section - Optimized */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
              Marketing AVi's Benefits
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
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


      {/* Features Section - Optimized */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
              Marketing AVi's Features
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
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

    </div>
  );
}