import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Users, Code, Globe, Award, Shield, TrendingUp, Handshake, CheckCircle, Star, Heart, Target, Zap, Building, ChevronDown, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { NetworkBackground } from '../NetworkBackground';

export function TechnologyPartnersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    website: '',
    jobTitle: '',
    activeCustomerNeed: ''
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologyPartnerLogos = [
    { name: 'ZoomInfo', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Epicor', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Conga', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'LivePerson', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'Creatio', color: 'bg-cyan-100', textColor: 'text-cyan-700' },
    { name: 'Dun & Bradstreet', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Sage', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Marketo', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'HubSpot', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Adobe', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Gong', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'Iterable', color: 'bg-blue-100', textColor: 'text-blue-700' }
  ];

  const partnerLogos = [
    { name: 'AWS', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Workday', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'UKG', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Snowflake', color: 'bg-cyan-100', textColor: 'text-cyan-700' },
    { name: 'Zendesk', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Oracle | NetSuite', color: 'bg-red-100', textColor: 'text-red-700' }
  ];

  const benefits = [
    {
      title: "Improve deal close rates",
      description: "Leverage AgenticView's capabilities to address your clients' integration requirements, significantly improving deal close rates.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Increased deal value",
      description: "Grow your deal sizes by positioning integration as an additional value of your product. This leads to larger lands, larger expansions and improved customer retention rates.",
      icon: Award,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Diversified revenue opportunities",
      description: "Unlock new avenues for revenue with our referral and revenue-sharing program, designed to amplify your earning potential.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Access to AgenticView's ecosystem",
      description: "Gain exclusive access to AgenticView's network of integration subject matter experts, worldwide support team, 1,000+ connectors, 11,000 customers and our leading solutions/technical team best positioned to support your customers.",
      icon: Users,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const partnerBenefits = [
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland', 'Austria',
    'Belgium', 'Spain', 'Italy', 'Japan', 'Singapore', 'Other'
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Network Background with scroll effect */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={40}
        maxDistance={150}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={2}
        animationSpeed={0.2}
        opacity={0.4}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-16 pb-20 px-6" 
               style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 font-medium mb-8 transform hover:scale-105 transition-transform duration-300">
            <Heart className="w-5 h-5 mr-3" />
            Welcome to THE AgenticView Automation League
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
            Technology Partner Program
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your integration capabilities.
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Handshake className="w-5 h-5 mr-2" />
            Become a Partner
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Technology Partner Hero */}
          <div className="mt-16">
            <h3 className="text-lg text-gray-600 mb-8">Technology Partner Hero</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              {technologyPartnerLogos.map((logo, index) => (
                <div key={index} 
                     className={`px-4 py-2 rounded-xl ${logo.color} ${logo.textColor} font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                     style={{ transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 5}px)` }}>
                  {logo.name}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partnerLogos.map((logo, index) => (
                <div key={index} 
                     className={`px-6 py-3 rounded-xl ${logo.color} ${logo.textColor} font-bold text-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                     style={{ transform: `translateY(${Math.sin((scrollY + index * 150) * 0.008) * 8}px)` }}>
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's in it for you Section */}
      <section className="relative py-20 px-6" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              What's in it for you?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're dedicated to building a best-in-class enterprise integration and automation platform that helps you say "yes" to all customer and partner integration requests.
            </p>
          </div>

          {/* Animated feature highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {['Improve deal close rates', 'Increased deal value', 'Diversified revenue opportunities', 'Access to AgenticView\'s ecosystem'].map((item, index) => {
              const IconComponent = benefits[index].icon;
              return (
                <div key={index} 
                     className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 transform hover:scale-105"
                     style={{ transform: `translateY(${Math.sin((scrollY + index * 200) * 0.005) * 10}px)` }}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${benefits[index].gradient} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item}</h3>
                </div>
              );
            })}
          </div>

          {/* Detailed benefits */}
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} 
                      className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm transform hover:scale-105"
                      style={{ transform: `translateY(${Math.sin((scrollY + index * 300) * 0.003) * 15}px)` }}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-white mr-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits Grid */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm"
               style={{ transform: `translateY(${scrollY * 0.01}px)` }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} 
                      className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm transform hover:scale-105"
                      style={{ transform: `translateY(${Math.sin((scrollY + index * 400) * 0.004) * 12}px)` }}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mr-4 shadow-lg">
                      <IconComponent className="w-6 h-6" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 px-6" style={{ transform: `translateY(${scrollY * 0.015}px)` }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Backed by Technology Partner leaders
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto p-8 lg:p-12 border-purple-100/50 bg-white/90 backdrop-blur-sm shadow-xl">
            <div className="flex items-start space-x-6">
              <Quote className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  "Salesloft is excited to be partnered with AgenticView. Their platform helps connect more than 1,000 cloud apps to Salesloft, where customers can then automate any action available through our API."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces"
                    alt="Dante Gordon"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Dante Gordon</div>
                    <div className="text-gray-600">Partner Sales Director, Salesloft</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm"
               style={{ transform: `translateY(${scrollY * 0.005}px)` }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Join the Technology Partner Program today
            </h2>
          </div>

          <Card className="p-8 lg:p-12 bg-white/90 backdrop-blur-sm border-purple-100/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    *First name
                  </label>
                  <Input
                    placeholder="What's your first name?"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    *Last name
                  </label>
                  <Input
                    placeholder="What's your last name?"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  *Company email
                </label>
                <Input
                  type="email"
                  placeholder="yourname@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  *Company name
                </label>
                <Input
                  placeholder="Where do you work?"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  *Country:
                </label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  *Company website
                </label>
                <Input
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  *Job Title:
                </label>
                <Input
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have an active customer need?:
                </label>
                <Select value={formData.activeCustomerNeed} onValueChange={(value) => handleInputChange('activeCustomerNeed', value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="maybe">Maybe / Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}