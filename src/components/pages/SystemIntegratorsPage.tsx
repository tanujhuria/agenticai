import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle, Users, TrendingUp, Shield, Star, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { NetworkBackground } from '../NetworkBackground';

export function SystemIntegratorsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const partners = [
    { name: 'PWC', logo: 'PWC' },
    { name: 'Viseo', logo: 'Viseo' },
    { name: 'Pointstar Consulting', logo: 'Pointstar' },
    { name: 'Allcloud', logo: 'Allcloud' },
    { name: 'Virtuoso', logo: 'Virtuoso' },
    { name: 'Incentro', logo: 'Incentro' },
    { name: 'Eide Bailly', logo: 'EideBailly' },
    { name: 'Slalom', logo: 'Slalom' },
    { name: 'DynPro', logo: 'DynPro' },
    { name: 'Dispatch', logo: 'Dispatch' },
    { name: 'HCLTech', logo: 'HCLTech' },
    { name: 'Deloitte', logo: 'Deloitte' }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Strengthen client relationships with transformative solutions',
      description: 'Lead the charge in integration and automation by providing clients with cutting-edge enterprise solutions. Strengthen your client relationships with impactful, long-term engagements that enhance retention and drive transformation.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Accelerated growth and increased profitability',
      description: 'Harness the power of Workato\'s platform to streamline complex workflows with minimal coding. Our solution not only accelerates project delivery but also drives operational efficiency, empowering your team to take on a greater number of client projects simultaneously leading to increased profitability.',
      color: 'from-green-600 to-green-400'
    },
    {
      icon: Shield,
      title: 'Access to exclusive Workato resources and support',
      description: 'Leverage dedicated partner resources, integration experts, and receive support from Workato\'s global team. Utilize over 1,000 Workato Connectors and leverage insights from 11,000 customers to drive your clients\' success.',
      color: 'from-purple-600 to-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={40}
        maxDistance={150}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={2}
        animationSpeed={0.4}
        opacity={0.2}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Partner Program
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Welcome to the Workato Automation League:
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 font-family-headings">
              System Integrator Partner Program
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join the integration and automation movement.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Become a Partner
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* System Integrator Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-lg font-bold shadow-lg">
              <Star className="w-6 h-6 mr-3" />
              System Integrator Hero
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="relative py-16 px-4 sm:px-6 bg-gray-50/80">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-24 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm group-hover:text-primary transition-colors">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's in it for you Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              What's in it for you?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As a Workato Partner, you join a growth-focused alliance shaping the future of automation and integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
            >
              Explore the benefits
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-purple-100/50 bg-white/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-family-headings">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Backed by System Integrator leaders
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 bg-white/90 backdrop-blur-sm border-purple-100/50 shadow-xl">
              <div className="text-center">
                <div className="text-6xl text-purple-200 mb-6">"</div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  Workato has come to the table as true partners, looking at how we can work together to drive more growth, add more value, and unlock more innovation with our mutual customers.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    NM
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Nick Mortensen</div>
                    <div className="text-sm text-gray-600">Principal over Development and Integration, Eide Bailly</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Join the System Integrator Partner Program today
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-white/90 backdrop-blur-sm border-purple-100/50 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Tell us about your integration needs..."
                  />
                </div>

                <div className="text-center pt-6">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Application
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Ready to Transform Together?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading system integrators who are already leveraging Workato to deliver exceptional results for their clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us Today
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}