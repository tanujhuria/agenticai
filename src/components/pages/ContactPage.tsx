import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'sales@agenticview.ai',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+1 (647) 936-1891',
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
    contact: 'Toronto, Canada',
    color: 'from-orange-600 to-red-600'
  }
];

const offices = [
  {
    city: 'Toronto',
    address: '28 Freeland Street, Toronto, Ontario, Canada',
    phone: '+1 (647) 936-1891',
    hours: 'Mon-Fri: 9AM-6PM EST'
  },
  {
    city: 'Gurgaon',
    address: 'M2K Symphony Floor, Sector-51, Gurgaon, India',
    phone: '+918950449974',
    hours: 'Mon-Fri: 9AM-6PM IST'
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    usecase: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string; department?: string; usecase?: string; phone?: string }>({});

  const freeEmailDomains = new Set([
    'gmail.com','yahoo.com','hotmail.com','outlook.com','live.com','msn.com','aol.com','icloud.com','me.com','mac.com','protonmail.com','pm.me','yandex.com','mail.ru','gmx.com','zoho.com','fastmail.com'
  ]);

  const isBusinessEmail = (email: string) => {
    const match = email.toLowerCase().match(/^([a-z0-9._%+-]+)@([a-z0-9.-]+\.[a-z]{2,})$/i);
    if (!match) return false;
    const domain = match[2];
    return !freeEmailDomains.has(domain);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const cleaned = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, name: cleaned });
      if (errors.name) setErrors({ ...errors, name: undefined });
      return;
    }

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: digits });
      if (errors.phone) setErrors({ ...errors, phone: undefined });
      return;
    }

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; company?: string; department?: string; usecase?: string } = {};

    const nameVal = formData.name.trim();
    const emailVal = formData.email.trim();
    const companyVal = formData.company.trim();
    const deptVal = formData.department.trim();
    const usecaseVal = formData.usecase.trim();
    const phoneVal = (formData as any).phone ? (formData as any).phone.trim() : '';

    if (!nameVal) newErrors.name = 'Full name is required';
    else if (!/^[A-Za-z\s]+$/.test(nameVal)) newErrors.name = 'Name should contain only letters and spaces';

    if (!emailVal) newErrors.email = 'Business email is required';
    else if (!/^([a-z0-9._%+-]+)@([a-z0-9.-]+\.[a-z]{2,})$/i.test(emailVal)) newErrors.email = 'Please enter a valid email address';
    else if (!isBusinessEmail(emailVal)) newErrors.email = 'Please enter a valid business email (personal domains are not accepted)';

    if (!companyVal) newErrors.company = 'Company name is required';
    if (!deptVal) newErrors.department = 'Department is required';
    if (!usecaseVal) newErrors.usecase = 'Use case is required';

    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (!digitsOnly) newErrors.phone = 'Phone number is required';
    else if (digitsOnly.length !== 10) newErrors.phone = 'Phone number must be exactly 10 digits';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Submit form
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
<motion.section 
        className="pt-20 pb-8 px-6"
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
<h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">Get in touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? We're here to help you get started.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
<section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                {method.title === 'Email Us' ? (
                  <a href={`mailto:${method.contact}`} className="text-primary font-semibold cursor-pointer">{method.contact}</a>
                ) : method.title === 'Call Us' ? (
                  <a href={`tel:${method.contact.replace(/[^\d+]/g, '')}`} className="text-primary font-semibold cursor-pointer">{method.contact}</a>
                ) : (
                  <p className="text-primary font-semibold">{method.contact}</p>
                )}
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
              
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
<label className="block text-gray-700 font-medium mb-3">Full Name <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (<p className="mt-2 text-sm text-red-700">{errors.name}</p>)}
                </div>

                <div>
<label className="block text-gray-700 font-medium mb-3">Business Email <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Enter your business email"
                    />
                  </div>
                  {errors.email && (<p className="mt-2 text-sm text-red-700">{errors.email}</p>)}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Phone Number <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={(formData as any).phone || ''}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (<p className="mt-2 text-sm text-red-700">{errors.phone}</p>)}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Company Name <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Enter your company name"
                    />
                  </div>
                  {errors.company && (<p className="mt-2 text-sm text-red-700">{errors.company}</p>)}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Department <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Enter your department"
                    />
                  </div>
                  {errors.department && (<p className="mt-2 text-sm text-red-700">{errors.department}</p>)}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Use case <span className="text-red-700">*</span></label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-primary w-5 h-5" />
                    <textarea
                      name="usecase"
                      rows={4}
                      value={formData.usecase}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none h-24 overflow-y-auto text-base sm:text-lg placeholder-gray-500 placeholder-mobile-0_9rem"
                      placeholder="Briefly describe your use case"
                    />
                  </div>
                  {errors.usecase && (<p className="mt-2 text-sm text-red-700">{errors.usecase}</p>)}
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

              {offices.map((office, index) => {
                const tel = `tel:${office.phone.replace(/[^\d+]/g, '')}`;
                return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  role="button"
                  onClick={() => { window.location.href = tel; }}
                >
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={tel} onClick={(e) => e.stopPropagation()} className="text-gray-600 hover:text-primary cursor-pointer">{office.phone}</a>
                    </div>
                    
                  </div>
                </motion.div>
                );
              })}

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