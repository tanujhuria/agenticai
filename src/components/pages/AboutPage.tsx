import { motion } from 'motion/react';
import { Users, Target, Award, Globe, Heart, Zap, Shield } from 'lucide-react';

const stats = [
  { number: '10,000+', label: 'Enterprise Customers', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Target },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '$2B+', label: 'Cost Savings Generated', icon: Award }
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make puts our customers success at the center.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We push the boundaries of whats possible with AI and automation.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data security and privacy are our highest priorities.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best solutions come from working together.'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
<<<<<<< HEAD
        className="pt-32 pb-20 px-6"
=======
        className="pt-24 pb-16 px-6"
>>>>>>> e35854f (Whole new code so many changes which are not pushed)
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
              <span className="text-gray-900">About</span>
              <span className="block gradient-text-animate">Agentic View</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing how businesses operate with intelligent AI agents that transform workflows and accelerate growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 gradient-text-animate">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To democratize AI and make intelligent automation accessible to every business, regardless of size or technical expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Why We Started Agentic View</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We saw businesses struggling with repetitive tasks, inefficient processes, and the challenge of scaling operations. 
                Traditional automation solutions were complex, expensive, and required extensive technical knowledge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That's why we created Agentic View - to provide intelligent AI agents that anyone can deploy, 
                configure, and benefit from, regardless of their technical background.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                A world where every business, from startups to enterprises, can harness the power of AI to 
                automate workflows, increase efficiency, and focus on what matters most - growing their business and serving their customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 gradient-text-animate">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}