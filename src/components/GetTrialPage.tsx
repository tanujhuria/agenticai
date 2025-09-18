import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Building, Mail, CheckCircle, Zap, Shield, Headphones } from 'lucide-react';
import { Header } from './Header';

interface GetTrialPageProps {
  onBack: () => void;
}

const companies = [
  'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Salesforce', 
  'Adobe', 'Netflix', 'PayPal', 'Shopify', 'Zoom', 'Slack'
];

export function GetTrialPage({ onBack }: GetTrialPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleDummyClick = () => {
    console.log('Demo functionality');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <Header 
        onLoginClick={handleDummyClick}
        onTrialClick={handleDummyClick}
        onTalkToSalesClick={handleDummyClick}
        onLogoClick={onBack}
        isWhiteBackground={true}
        onNavigationClick={() => {}}
        onMenuStateChange={() => {}}
      />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="text-gray-900">Request your</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent gradient-text-animate">
                personalized demo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the power of AI-driven automation. Schedule a personalized demo and see how Agentic View can transform your business.
            </p>
          </motion.div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-2xl border border-purple-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl mb-4 gradient-text-animate">Schedule your demo</h2>
                <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg text-gray-700 mb-3">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-lg"
                      placeholder="Enter your business email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-lg text-gray-700 mb-3">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-lg"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-lg"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-xl transition-all hover:scale-105 font-semibold flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-secondary text-white text-xl shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Schedule Demo</span>
                </button>
              </form>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="text-2xl mb-6 gradient-text-animate">What you'll get:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Personalized 30-minute demo tailored to your use case</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Free 14-day trial with full platform access</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Custom integration recommendations</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Headphones className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Dedicated implementation support</span>
                  </li>
                </ul>
              </div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white"
              >
                <h4 className="text-xl mb-6">Why choose Agentic View?</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-sm opacity-90">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10k+</div>
                    <div className="text-sm opacity-90">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">SOC2</div>
                    <div className="text-sm opacity-90">Compliant</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Company Logos */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-8 text-lg">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="px-6 py-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{company}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}