import { motion } from 'motion/react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 49,
    description: 'Perfect for small teams getting started with AI automation',
    features: [
      'Up to 5 AI agents',
      '1,000 automation runs/month',
      'Basic integrations',
      'Email support',
      'Dashboard analytics',
      'Community access'
    ],
    color: 'from-blue-600 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
    icon: Crown,
    price: 149,
    description: 'Advanced features for growing businesses',
    features: [
      'Up to 25 AI agents',
      '10,000 automation runs/month',
      'Premium integrations',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'API access',
      'Team collaboration'
    ],
    color: 'from-purple-600 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: 'Custom',
    description: 'Unlimited power for large organizations',
    features: [
      'Unlimited AI agents',
      'Unlimited automation runs',
      'Enterprise integrations',
      'Dedicated support',
      'Custom analytics',
      'White-label options',
      'SSO & advanced security',
      'Custom training',
      'SLA guarantees'
    ],
    color: 'from-green-600 to-emerald-600',
    popular: false
  }
];

const features = [
  {
    category: 'AI Agents',
    starter: '5 agents',
    professional: '25 agents',
    enterprise: 'Unlimited'
  },
  {
    category: 'Automation Runs',
    starter: '1,000/month',
    professional: '10,000/month',
    enterprise: 'Unlimited'
  },
  {
    category: 'Integrations',
    starter: 'Basic (50+)',
    professional: 'Premium (500+)',
    enterprise: 'Enterprise (1000+)'
  },
  {
    category: 'Support',
    starter: 'Email',
    professional: 'Priority',
    enterprise: 'Dedicated'
  },
  {
    category: 'Analytics',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Custom'
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-6"
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
              <span className="text-gray-900">Simple</span>
              <span className="block gradient-text-animate">Transparent Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. Start free, upgrade when you're ready.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border ${plan.popular ? 'border-primary ring-4 ring-primary/20' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 gradient-text-animate">Compare Plans</h2>
            <p className="text-xl text-gray-600">Detailed feature comparison across all plans</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                <tr>
                  <th className="text-left p-6">Features</th>
                  <th className="text-center p-6">Starter</th>
                  <th className="text-center p-6">Professional</th>
                  <th className="text-center p-6">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="p-6 font-semibold">{feature.category}</td>
                    <td className="p-6 text-center">{feature.starter}</td>
                    <td className="p-6 text-center">{feature.professional}</td>
                    <td className="p-6 text-center">{feature.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 gradient-text-animate">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer: "Yes, you can change your plan at any time. Changes take effect immediately and billing is prorated."
              },
              {
                question: "What happens if I exceed my plan limits?",
                answer: "We'll notify you before you reach your limits. You can upgrade your plan or purchase additional resources as needed."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes, we offer 20% discount for annual billing on all plans."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}