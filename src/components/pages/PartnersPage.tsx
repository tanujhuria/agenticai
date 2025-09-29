import React from 'react';
import { ArrowUpRight, Calendar, Handshake, Award, Target, Users, Globe, TrendingUp, CheckCircle, Star, Building, Zap, Shield, Code, Search } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

interface PartnersPageProps {
  onNavigationClick?: (page: string) => void;
}

export function PartnersPage({ onNavigationClick }: PartnersPageProps) {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that integrate with our platform to deliver enhanced solutions",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      benefits: [
        "Native integrations",
        "Joint go-to-market",
        "Technical co-development",
        "Shared roadmap planning"
      ],
      stats: { partners: "200+", integrations: "1000+", coverage: "95%" }
    },
    {
      title: "Solution Partners",
      description: "Certified consultants and system integrators who implement and customize our solutions",
      icon: Building,
      color: "from-green-600 to-emerald-600",
      benefits: [
        "Certified expertise",
        "Implementation services",
        "Custom development",
        "24/7 support"
      ],
      stats: { partners: "150+", projects: "5000+", satisfaction: "98%" }
    },
    {
      title: "Channel Partners",
      description: "Resellers and distributors who extend our reach across global markets",
      icon: Globe,
      color: "from-purple-600 to-pink-600",
      benefits: [
        "Global distribution",
        "Local market expertise",
        "Sales enablement",
        "Marketing support"
      ],
      stats: { partners: "300+", markets: "50+", growth: "150%" }
    },
    {
      title: "Strategic Partners",
      description: "Enterprise partnerships that drive innovation and create new market opportunities",
      icon: Handshake,
      color: "from-orange-600 to-red-600",
      benefits: [
        "Strategic alignment",
        "Innovation labs",
        "Joint ventures",
        "Market expansion"
      ],
      stats: { partners: "25+", revenue: "$500M+", markets: "Global" }
    }
  ];

  const partnerBenefits = [
    {
      icon: Award,
      title: "Certification & Training",
      description: "Comprehensive training programs and certifications to become an expert"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Proven partner programs that drive significant revenue growth"
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "Dedicated technical support and engineering resources"
    },
    {
      icon: Users,
      title: "Marketing Support",
      description: "Co-marketing opportunities and lead generation programs"
    }
  ];

  const partnerTiers = [
    {
      tier: "Silver",
      level: "Entry Level",
      requirements: ["Basic certification", "1+ successful implementation", "Active customer base"],
      benefits: ["Technical support", "Marketing resources", "Partner portal access"],
      color: "from-gray-400 to-gray-600"
    },
    {
      tier: "Gold",
      level: "Advanced",
      requirements: ["Advanced certification", "5+ successful implementations", "Proven expertise"],
      benefits: ["Priority support", "Co-marketing opportunities", "Early access to features"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      tier: "Platinum",
      level: "Elite",
      requirements: ["Expert certification", "25+ implementations", "Strategic account management"],
      benefits: ["Dedicated support", "Joint go-to-market", "Product roadmap input"],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const successStories = [
    {
      partner: "GlobalTech Solutions",
      type: "Solution Partner",
      achievement: "500% Revenue Growth",
      description: "Achieved 500% revenue growth in 18 months by specializing in AgenticView implementations for manufacturing clients.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      results: ["$50M+ in deals", "200+ implementations", "99% client satisfaction"]
    },
    {
      partner: "InnovateCorp",
      type: "Technology Partner",
      achievement: "Market Leadership",
      description: "Became the leading integration platform for financial services through strategic partnership and joint innovation.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
      results: ["#1 in FinTech", "1M+ users", "50+ enterprise clients"]
    },
    {
      partner: "CloudScale Partners",
      type: "Channel Partner",
      achievement: "Global Expansion",
      description: "Expanded to 15 new markets across APAC and EMEA, becoming our fastest-growing channel partner.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      results: ["15 new markets", "300% growth", "50+ local deals"]
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
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 font-medium mb-8">
            <Handshake className="w-5 h-5 mr-3" />
            Partner Ecosystem
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
            Grow Your Business with AgenticView
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join our global partner ecosystem and accelerate your growth with the leading enterprise integration and AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => onNavigationClick?.('become-partner')}
            >
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              onClick={() => onNavigationClick?.('find-partner')}
            >
              <Search className="w-5 h-5 mr-2" />
              Find a Partner
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to partner with us based on your strengths and market focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {type.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(type.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Partner Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance through our partner tiers to unlock greater benefits and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <Card key={index} className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                  <Award className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.tier}
                </h3>
                <p className="text-gray-600 mb-6">{tier.level}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {tier.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from partners who have transformed their business with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="h-full overflow-hidden border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.partner}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      {story.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.partner}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-primary font-semibold">{story.achievement}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {story.description}
                  </p>
                  
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Why Partner with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support and resources to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 h-full text-center border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of partners worldwide who are growing their business with AgenticView. 
            Let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Apply Now
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}