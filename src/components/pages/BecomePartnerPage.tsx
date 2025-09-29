import React from 'react';
import { ArrowUpRight, Users, Code, Globe, Award, Shield, TrendingUp, Handshake, CheckCircle, Star, Heart, Target, Zap, Building } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { NetworkBackground } from '../NetworkBackground';

export function BecomePartnerPage() {
  const partnerLogos = [
    { name: 'AWS', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Workday', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'PWC', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'Snowflake', color: 'bg-cyan-100', textColor: 'text-cyan-700' },
    { name: 'Deloitte', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Oracle | NetSuite', color: 'bg-red-100', textColor: 'text-red-700' }
  ];

  const partnerPrograms = [
    {
      title: "System Integrator",
      subtitle: "System Integrator",
      description: "Join the System Integrator Partner Program to access exclusive resources, enhance client success, streamline workflows, and become a leader in automation and integration, driving growth and profits.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3NTg3MTk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Technology Partner",
      subtitle: "Technology Partner",
      description: "Join the Technology Partner Program to leverage the AgenticView platform, enhance deal closure, increase integration capabilities, and earn more through referrals and revenue sharing. You'll also have access to a vast expert network and connectors.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZWdyYXRpb24lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1ODcxOTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const benefits = [
    {
      category: "Go-to-market",
      icon: Target,
      items: [
        "AgenticView partner portal access",
        "Account mapping for referrals (Crossbeam/Reveal)",
        "Field Enablement",
        "Co-Marketing",
        "AgenticView App Directory Listing"
      ]
    },
    {
      category: "Support",
      icon: Shield,
      items: [
        "AgenticView developer account for build/test/demos",
        "AgenticView global support: customer technical support",
        "Partner manager and solution consultant"
      ]
    },
    {
      category: "Incentives",
      icon: TrendingUp,
      items: [
        "Revenue share program",
        "Additional contractual options"
      ]
    }
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        "The AgenticView ONE Platform",
        "Why AgenticView",
        "About us",
        "Pricing",
        "Customers",
        "Partners",
        "Careers",
        "AgenticView Cares",
        "Press"
      ]
    },
    {
      title: "Product",
      links: [
        "Enterprise iPaaS",
        "Embedded integrations",
        "Agentic",
        "API Management",
        "Data Orchestration",
        "Workflow Bots",
        "Low Code Apps",
        "B2B/EDI",
        "Insights",
        "Data Hub / MDM",
        "BPM Services"
      ]
    },
    {
      title: "Resources",
      links: [
        "Demo",
        "AgenticView Conference",
        "Documentation",
        "Training",
        "Certification",
        "Customer Success",
        "Company Blog",
        "Product Blog",
        "Integration Library"
      ]
    },
    {
      title: "Learn",
      links: [
        "What is an iPaaS?",
        "Why Embed?",
        "What is API Management?",
        "Software Integration Guide",
        "What is Process Automation?",
        "Workflow Automation Guide",
        "What is a System Integrator?",
        "API Integration Guide",
        "What is an Embedded iPaaS?",
        "Data Integration Guide",
        "Cloud Integration Guide"
      ]
    },
    {
      title: "Contact",
      links: [
        "Contact Sales",
        "Contact Support",
        "Office Hours"
      ]
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
            <Heart className="w-5 h-5 mr-3" />
            Welcome to THE AgenticView Automation League
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
            Partner Program
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            By becoming a partner, you're not just joining a program; you're leading the charge in digital transformation and innovation.
          </p>

          {/* Partner Logos */}
          <div className="mb-12">
            <h3 className="text-lg text-gray-600 mb-8">Umbrella Partner Hero</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partnerLogos.map((logo, index) => (
                <div key={index} className={`px-6 py-3 rounded-xl ${logo.color} ${logo.textColor} font-semibold text-lg shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Winning Together Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Winning together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {partnerPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center text-white shadow-lg mb-4`}>
                      <program.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Learn more
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mr-4 shadow-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefit.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
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
            Join the AgenticView Automation League and accelerate your growth with the leading enterprise integration and AI platform.
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
              <Users className="w-5 h-5 mr-2" />
              Contact Partner Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="relative py-16 px-6 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <button className="text-gray-600 hover:text-primary transition-colors text-sm text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-12 px-6 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold text-gray-900 mb-2">User Reviews</h4>
              <div className="flex space-x-4">
                <span className="text-gray-600 text-sm">Gartner Peer Insights™</span>
                <span className="text-gray-600 text-sm">G2</span>
                <span className="text-gray-600 text-sm">TrustRadius</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              US (English)
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="relative py-8 px-6 bg-gray-100/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs text-gray-500 leading-relaxed">
            *GARTNER is a registered trademarks and service mark, and MAGIC QUADRANT is a registered trademark of Gartner, Inc. and/or its affiliates in the U.S. and internationally and are used herein with permission. All rights reserved. Gartner, Magic Quadrant for Integration Platform as a Service, Worldwide, May 19, 2025 by analysts: Andrew Humphreys, Andrew Comes, Keith Guttridge, and Allan Wilkins. GARTNER is a registered trademarks and service mark, and MAGIC QUADRANT is a registered trademark of Gartner, Inc. and/or its affiliates in the U.S. and internationally and are used herein with permission. All rights reserved. Gartner does not endorse any vendor, product or service depicted in its research publications, and does not advise technology users to select only those vendors with the highest ratings or other designation. Gartner research publications consist of the opinions of Gartner's research organization and should not be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability or fitness for a particular purpose. This graphic was published by Gartner, Inc. as part of a larger research document and should be evaluated in the context of the entire document. The Gartner document is available upon request from AgenticView.
          </p>
        </div>
      </section>
    </div>
  );
}