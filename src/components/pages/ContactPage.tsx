import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'hello@agenticview.com',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+1 (555) 123-4567',
    color: 'from-green-600 to-emerald-600'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with support',
    contact: 'Available 24/7',
    color: 'from-purple-600 to-pink-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters',
    contact: 'San Francisco, CA',
    color: 'from-orange-600 to-red-600'
  }
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    hours: 'Mon-Fri: 9AM-6PM PST'
  },
  {
    city: 'New York',
    address: '456 Business Ave, New York, NY 10001',
    phone: '+1 (555) 987-6543',
    hours: 'Mon-Fri: 9AM-6PM EST'
  },
  {
    city: 'London',
    address: '789 Tech Street, London, UK EC1A 1BB',
    phone: '+44 20 1234 5678',
    hours: 'Mon-Fri: 9AM-5PM GMT'
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-gray-900">Get in</span>
              <span className="block gradient-text-animate">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? We're here to help you get started.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-primary font-semibold">{method.contact}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 gradient-text-animate">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Message *</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-8 gradient-text-animate">Our Offices</h2>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Response Info */}
              <motion.div
                className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="mb-4 opacity-90">
                  Need immediate assistance? Our support team is available 24/7 to help you with any questions.
                </p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Average response time: {"< 2 hours"}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}