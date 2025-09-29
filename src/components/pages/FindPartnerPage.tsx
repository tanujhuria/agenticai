import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, MapPin, Globe, Users, Building, Code, Handshake, ArrowUpRight, CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { NetworkBackground } from '../NetworkBackground';

interface Partner {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Registered';
  type: 'Service' | 'Technology';
  acceptingClients: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  specialties: string[];
  region: string;
  image: string;
  featured?: boolean;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Connor Group',
    tier: 'Platinum',
    type: 'Service',
    acceptingClients: true,
    rating: 5.0,
    reviewCount: 15,
    description: 'Connor Group specializes in end-to-end business process automation and integration solutions. We\'re a professional services firm focused on the most critical challenges and opportunities.',
    specialties: ['Process Automation', 'Business Integration', 'Digital Transformation', 'Consulting'],
    region: 'United States',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'DynPro',
    tier: 'Platinum', 
    type: 'Service',
    acceptingClients: true,
    rating: 4.5,
    reviewCount: 8,
    description: 'DynPro has been building expertise in workflow and business applications for over 20 years. We offer comprehensive system integration solutions tailored to customer needs.',
    specialties: ['Workflow Design', 'System Integration', 'Custom Applications', 'Training'],
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Twenty20 Systems',
    tier: 'Platinum',
    type: 'Service',
    acceptingClients: true,
    rating: 4.8,
    reviewCount: 12,
    description: 'Twenty20 Systems is a technology services company focused on delivering advanced business process automation solutions. We are leading technology experts.',
    specialties: ['Business Process Automation', 'Advanced Technology', 'Cloud Solutions', 'Integration'],
    region: 'Australia',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
    featured: true
  },
  {
    id: '4',
    name: 'Dispatch Integration',
    tier: 'Platinum',
    type: 'Service',
    acceptingClients: true,
    rating: 4.7,
    reviewCount: 9,
    description: 'Dispatch provides enterprise-class professional services that empower companies to deliver their strategic technology initiatives.',
    specialties: ['Enterprise Integration', 'Strategic Technology', 'Professional Services', 'Implementation'],
    region: 'United States',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=200&fit=crop'
  },
  {
    id: '5',
    name: 'Salesforce',
    tier: 'Platinum',
    type: 'Technology',
    acceptingClients: true,
    rating: 4.6,
    reviewCount: 25,
    description: 'Salesforce is the global leader in CRM, bringing companies and customers together in the digital age through cloud, mobile, social, AI, and IoT technologies.',
    specialties: ['CRM', 'Cloud Platform', 'AI', 'Sales Automation'],
    region: 'Global',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop'
  },
  {
    id: '6',
    name: 'ServiceNow',
    tier: 'Platinum',
    type: 'Technology',
    acceptingClients: true,
    rating: 4.4,
    reviewCount: 18,
    description: 'ServiceNow makes work better for everyone by digitizing and unifying every business experience across the enterprise. The Now Platform enables digital transformation.',
    specialties: ['IT Service Management', 'Digital Workflows', 'Enterprise Platform', 'Automation'],
    region: 'Global',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
  },
  {
    id: '7',
    name: 'Microsoft',
    tier: 'Platinum',
    type: 'Technology',
    acceptingClients: true,
    rating: 4.5,
    reviewCount: 32,
    description: 'Microsoft empowers every person and organization on the planet to achieve more through innovative cloud services, productivity tools, and business applications.',
    specialties: ['Cloud Services', 'Productivity Tools', 'Business Applications', 'AI Platform'],
    region: 'Global',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop'
  },
  {
    id: '8',
    name: 'Oracle',
    tier: 'Platinum',
    type: 'Technology',
    acceptingClients: true,
    rating: 4.3,
    reviewCount: 22,
    description: 'Oracle offers integrated suites of applications plus secure, autonomous infrastructure in the cloud to help organizations innovate faster and reduce IT costs.',
    specialties: ['Database Solutions', 'Cloud Infrastructure', 'Enterprise Applications', 'Analytics'],
    region: 'Global',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop'
  }
];

export function FindPartnerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedFunction, setSelectedFunction] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [activeTab, setActiveTab] = useState('service');
  const [availableExpertsOnly, setAvailableExpertsOnly] = useState(false);

  const regions = ['all', ...Array.from(new Set(partners.map(p => p.region)))];
  const tiers = ['all', 'Platinum', 'Gold', 'Silver', 'Registered'];
  const specialties = ['all', ...Array.from(new Set(partners.flatMap(p => p.specialties)))];
  const industries = ['all', 'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Technology'];
  const functions = ['all', 'Sales', 'Marketing', 'HR', 'IT', 'Finance'];
  const sizes = ['all', 'Small (1-50)', 'Medium (51-500)', 'Large (500+)', 'Enterprise (1000+)'];
  const serviceTypes = ['all', 'Implementation', 'Consulting', 'Support', 'Training'];

  const filteredPartners = useMemo(() => {
    return partners.filter(partner => {
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          partner.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = activeTab === 'all' || partner.type.toLowerCase() === activeTab;
      const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
      const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
      const matchesSpecialty = selectedSpecialty === 'all' || partner.specialties.includes(selectedSpecialty);
      const matchesAvailability = !availableExpertsOnly || partner.acceptingClients;

      return matchesSearch && matchesType && matchesRegion && matchesTier && matchesSpecialty && matchesAvailability;
    });
  }, [searchTerm, activeTab, selectedRegion, selectedTier, selectedSpecialty, availableExpertsOnly]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-700';
      case 'Gold': return 'bg-yellow-100 text-yellow-700';
      case 'Silver': return 'bg-gray-100 text-gray-700';
      case 'Registered': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={25}
        maxDistance={120}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={1.5}
        animationSpeed={0.2}
        opacity={0.15}
      />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900 font-family-headings">
              PARTNER DIRECTORY
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Explore the exceptional companies we proudly partner with
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <span>Interested in becoming an AgenticView partner?</span>
              <Button variant="link" className="p-0 h-auto text-primary font-medium">
                Learn more
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('service')}
                className={`px-8 py-4 text-lg font-medium border-b-4 transition-colors duration-200 flex items-center space-x-3 ${
                  activeTab === 'service'
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Service Partners</span>
              </button>
              <button
                onClick={() => setActiveTab('technology')}
                className={`px-8 py-4 text-lg font-medium border-b-4 transition-colors duration-200 flex items-center space-x-3 ${
                  activeTab === 'technology'
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Code className="w-5 h-5" />
                <span>Technology Partners</span>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-80 flex-shrink-0 space-y-6">
                {/* Let us match you section - Only show for Service Partners */}
                {activeTab === 'service' && (
                  <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-200 mb-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">Let us match you</h3>
                      <p className="text-sm text-gray-600 mb-4">AgenticView will do all the work to match you with the best Service Partners</p>
                      <div className="mb-4">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces"
                          alt="Partner matchmaker"
                          className="w-12 h-12 rounded-full mx-auto border-2 border-white shadow-sm"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mb-4">Meet Our Team, your Service Partner matchmaker.</p>
                      <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">
                        Get matched
                      </Button>
                    </div>
                  </div>
                )}

                {/* Filters */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map(region => (
                          <SelectItem key={region} value={region}>
                            {region === 'all' ? 'All Regions' : region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technology Solutions</label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map(specialty => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty === 'all' ? 'All Technologies' : specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry Specialty</label>
                    <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map(industry => (
                          <SelectItem key={industry} value={industry}>
                            {industry === 'all' ? 'All Industries' : industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Function Specialty</label>
                    <Select value={selectedFunction} onValueChange={setSelectedFunction}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {functions.map(func => (
                          <SelectItem key={func} value={func}>
                            {func === 'all' ? 'All Functions' : func}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application Speciality</label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map(specialty => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty === 'all' ? 'All Applications' : specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map(size => (
                          <SelectItem key={size} value={size}>
                            {size === 'all' ? 'All Sizes' : size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <Select value={selectedServiceType} onValueChange={setSelectedServiceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select options" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map(type => (
                          <SelectItem key={type} value={type}>
                            {type === 'all' ? 'All Service Types' : type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-3 pt-4">
                    <Switch
                      checked={availableExpertsOnly}
                      onCheckedChange={setAvailableExpertsOnly}
                      id="available-experts"
                    />
                    <label htmlFor="available-experts" className="text-sm font-medium">
                      Available experts only
                    </label>
                  </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search by name, service or phrases"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-base border-2 border-gray-200 focus:border-primary rounded-lg"
                  />
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredPartners.filter(p => p.type.toLowerCase() === activeTab).length} partners
                  {searchTerm && (
                    <span> for "{searchTerm}"</span>
                  )}
                </p>
              </div>

              {/* Partners Grid */}
              <div className="w-full">
                {activeTab === 'service' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPartners.filter(p => p.type === 'Service').map((partner) => (
                      <Card key={partner.id} className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white group">
                        <CardContent className="p-6">
                          {/* Header with Partner Tier */}
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`${getTierColor(partner.tier)} text-xs px-2 py-1 rounded-md font-medium uppercase`}>
                              {partner.tier}
                            </Badge>
                            {partner.acceptingClients && (
                              <div className="flex items-center space-x-1 text-green-600 text-xs">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Accepting new clients</span>
                              </div>
                            )}
                          </div>

                          {/* Company Logo Placeholder */}
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                            <Building className="w-8 h-8 text-gray-400" />
                          </div>

                          {/* Company Name */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                          
                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            {renderStars(partner.rating)}
                            {partner.rating > 0 && (
                              <span className="text-sm text-gray-600">
                                {partner.rating} ({partner.reviewCount})
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {partner.description}
                          </p>

                          {/* Specialties Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {partner.specialties.slice(0, 3).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {specialty}
                              </span>
                            ))}
                            {partner.specialties.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{partner.specialties.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Region */}
                          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-4">
                            <MapPin className="w-3 h-3" />
                            <span>{partner.region}</span>
                          </div>

                          {/* View Profile Link */}
                          <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer text-sm font-medium">
                            <span>View profile</span>
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === 'technology' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPartners.filter(p => p.type === 'Technology').map((partner) => (
                      <Card key={partner.id} className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white group">
                        <CardContent className="p-6">
                          {/* Header with Partner Tier */}
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`${getTierColor(partner.tier)} text-xs px-2 py-1 rounded-md font-medium uppercase`}>
                              {partner.tier}
                            </Badge>
                            {partner.acceptingClients && (
                              <div className="flex items-center space-x-1 text-green-600 text-xs">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Accepting new clients</span>
                              </div>
                            )}
                          </div>

                          {/* Company Logo Placeholder */}
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                            <Code className="w-8 h-8 text-gray-400" />
                          </div>

                          {/* Company Name */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                          
                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            {renderStars(partner.rating)}
                            {partner.rating > 0 && (
                              <span className="text-sm text-gray-600">
                                {partner.rating} ({partner.reviewCount})
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {partner.description}
                          </p>

                          {/* Specialties Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {partner.specialties.slice(0, 3).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {specialty}
                              </span>
                            ))}
                            {partner.specialties.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{partner.specialties.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Region */}
                          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-4">
                            <MapPin className="w-3 h-3" />
                            <span>{partner.region}</span>
                          </div>

                          {/* View Profile Link */}
                          <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer text-sm font-medium">
                            <span>View profile</span>
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Load more results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}