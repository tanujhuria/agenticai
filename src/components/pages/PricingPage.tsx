import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowUpRight, Star, Users, Zap, Shield, Globe, Code, BarChart3, Settings, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { NetworkBackground } from '../NetworkBackground';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started with workflow automation',
      monthlyPrice: 20,
      yearlyPrice: 200,
      monthlyExecutions: '2.5k',
      yearlyExecutions: '25k',
      highlight: false,
      color: 'from-blue-500 to-cyan-500',
      features: {
        core: [
          'Leading editor UI',
          'All integrations (nodes)',
          'Streaming and bulk operations',
          'Easily merge data',
          'Workflow templates',
          'Workflow history (1 day)',
        ],
        developer: [
          'Code steps in workflows (JS/Python)',
          'Custom API requests (HTTP, GraphQL, etc.)',
          'Import cURL commands',
          'Trigger from webhooks, queues',
          'Control n8n via API',
          'Global Variables',
        ],
        workflow: [
          'Unlimited active workflows',
          'Automatic retries',
          '2.5k saved executions',
          '7 days execution log retention',
          '5 concurrent executions',
        ],
        collaboration: [
          'Unlimited users',
          '1 shared project',
        ]
      }
    },
    {
      name: 'Pro',
      description: 'Advanced features for growing teams and businesses',
      monthlyPrice: 50,
      yearlyPrice: 500,
      monthlyExecutions: '10k',
      yearlyExecutions: '100k',
      highlight: true,
      color: 'from-purple-500 to-pink-500',
      features: {
        core: [
          'Everything in Starter',
          'Workflow history (5 days)',
          'Advanced workflow templates',
          'Priority support access',
        ],
        developer: [
          'Everything in Starter',
          'Run bash scripts',
          'Available in self-hosted',
          'Control n8n via CLI',
          '2 environments (dev/prod)',
        ],
        workflow: [
          'Everything in Starter',
          '25k saved executions',
          '30 days execution log retention',
          '20 concurrent executions',
        ],
        debugging: [
          'Execution logging',
          'Error workflows',
          'Debug in editor',
          'AI Assistant (upon request)',
        ],
        collaboration: [
          'Everything in Starter',
          '3 shared projects',
          'Project admins',
          'Project editors',
        ]
      }
    },
    {
      name: 'Enterprise',
      description: 'Full-scale automation for large organizations',
      monthlyPrice: null,
      yearlyPrice: null,
      monthlyExecutions: 'Custom',
      yearlyExecutions: 'Custom',
      highlight: false,
      color: 'from-gray-700 to-gray-900',
      features: {
        core: [
          'Everything in Pro',
          'Workflow history (365+ days)',
          'Custom SLA support',
          'Dedicated success manager',
        ],
        developer: [
          'Everything in Pro',
          'Custom nodes',
          'Version control using Git',
          'API additional scope control',
          'Unlimited environments',
        ],
        workflow: [
          'Everything in Pro',
          '50k+ saved executions',
          'Unlimited execution log retention',
          '200+ concurrent executions',
        ],
        enterprise: [
          'Queue mode (Multiple instances)',
          'Worker view',
          'External storage in S3',
          'Multi-main setup',
        ],
        security: [
          'Encrypted secrets store',
          'SSO SAML and LDAP',
          'Enforce 2FA across instance',
          'External secret store integration',
        ],
        collaboration: [
          'Everything in Pro',
          'Unlimited shared projects',
          'Instance admins',
          'Project viewers',
          'Advanced permissions',
        ]
      }
    }
  ];

  const companyLogos = [
    { name: 'Wayfair', logo: '🛋️' },
    { name: 'Unbabel', logo: '🗣️' },
    { name: 'OnFleet', logo: '🚚' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'SEAT', logo: '🚗' },
    { name: 'Zendesk', logo: '🎧' },
    { name: 'Paddle', logo: '🚣' }
  ];

  const faqs = [
    {
      id: 'executions',
      question: 'What are executions (and why are they more powerful than on other products)?',
      answer: 'Executions are complete workflow runs from start to finish. Unlike other platforms that charge per operation or step, we only charge when your entire workflow completes successfully. This means you can have complex workflows with hundreds of steps and only pay once per execution.'
    },
    {
      id: 'assess',
      question: 'How can I assess how many production executions I need?',
      answer: 'Start by analyzing your current automation needs. Consider how often your workflows will run (hourly, daily, triggered by events) and multiply by the expected volume. Most businesses start with the Starter plan and scale up as needed.'
    },
    {
      id: 'monitor',
      question: 'How will I see how many production executions I\'ve used?',
      answer: 'Your dashboard provides real-time execution tracking with detailed analytics. You can see daily, weekly, and monthly usage patterns, plus get alerts when approaching your limits.'
    },
    {
      id: 'self-hosted',
      question: 'How does AgenticView monitor my usage on a self-hosted instance?',
      answer: 'Self-hosted instances report usage metrics securely to our licensing servers. All data is encrypted and we only collect execution counts, not your actual workflow data or business information.'
    },
    {
      id: 'support',
      question: 'Does the business plan include support?',
      answer: 'Yes! Pro plans include email support with faster response times. Enterprise plans include dedicated support with custom SLAs and phone support options.'
    },
    {
      id: 'collaboration',
      question: 'What does \'collaborate on workflows\' mean?',
      answer: 'Multiple team members can work on the same workflows simultaneously, with version control, change tracking, and role-based permissions. You can have viewers, editors, and admins with different access levels.'
    },
    {
      id: 'upgrade',
      question: 'What happens after I subscribe? How does the upgrade work?',
      answer: 'Upgrades are instant! Your new features activate immediately, and any overage charges are prorated. You can upgrade or downgrade at any time from your account settings.'
    },
    {
      id: 'quota',
      question: 'What happens when I hit my execution quota?',
      answer: 'Your workflows will pause temporarily until the next billing cycle, or you can purchase additional executions. We send alerts at 80% and 95% usage to give you time to upgrade if needed.'
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
        animationSpeed={0.2}
        opacity={0.2}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-purple-900 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-family-headings">
              Build as much as you want.
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-family-headings">
              Pay only when your workflows run.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg"
              >
                Cloud
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Self-Hosted
              </Button>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${isMonthly ? 'text-white' : 'text-gray-300'}`}>Monthly</span>
              <button
                onClick={() => setIsMonthly(!isMonthly)}
                className="relative w-14 h-7 bg-gray-600 rounded-full transition-colors duration-300"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${!isMonthly ? 'translate-x-7' : ''}`} />
              </button>
              <span className={`text-lg ${!isMonthly ? 'text-white' : 'text-gray-300'}`}>Annually</span>
            </div>

            <p className="text-gray-300 text-sm">*14 days free trial. No credit card required.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${plan.highlight ? 'scale-105' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`p-8 h-full ${plan.highlight ? 'border-purple-200 shadow-2xl' : 'border-gray-200'} bg-white/90 backdrop-blur-sm`}>
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                        {plan.name.charAt(0)}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      
                      {plan.monthlyPrice ? (
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            €{isMonthly ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                            <span className="text-lg text-gray-500">/month</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            {isMonthly ? plan.monthlyExecutions : plan.yearlyExecutions} executions included
                          </div>
                          {!isMonthly && (
                            <div className="text-sm text-green-600 font-medium">
                              Save €{(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="mb-6">
                          <div className="text-2xl font-bold text-gray-900 mb-2">Contact us</div>
                          <div className="text-sm text-gray-500">Custom executions and pricing</div>
                        </div>
                      )}
                      
                      <Button 
                        className={`w-full py-3 ${plan.highlight 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                          : 'bg-gray-900 hover:bg-gray-800'
                        } text-white`}
                      >
                        {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                      {plan.features.core && (
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Core Features</h4>
                          <ul className="space-y-2">
                            {plan.features.core.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {plan.features.developer && (
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Developer Tools</h4>
                          <ul className="space-y-2">
                            {plan.features.developer.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {plan.features.collaboration && (
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Collaboration</h4>
                          <ul className="space-y-2">
                            {plan.features.collaboration.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              Looking for something else?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              See why AgenticView is the most cost-effective option in the market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cost Effectiveness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full bg-white/90 backdrop-blur-sm border-purple-100/50">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Effective Pricing</h3>
                <p className="text-gray-600 mb-6">
                  You only pay for full workflow executions, not for each operation, step, or task.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>

            {/* Community Edition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full bg-white/90 backdrop-blur-sm border-purple-100/50">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Edition</h3>
                <p className="text-gray-600 mb-6">
                  A standard, self-hosted version of AgenticView is available on GitHub.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Docs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>

            {/* Startup Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center h-full bg-white/90 backdrop-blur-sm border-purple-100/50">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Startup Plan</h3>
                <p className="text-gray-600 mb-6">
                  For startups with up to 20 employees that raised up to $5M.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Let's Start
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 mb-8">
              The world's most popular workflow automation platform for technical teams including
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-semibold text-lg">{company.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              What's included?
            </h2>
          </motion.div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Features</th>
                    <th className="text-center py-4 px-6">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-900">Starter</span>
                        <span className="text-sm text-gray-500">€20/month</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-900">Pro</span>
                        <span className="text-sm text-gray-500">€50/month</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-900">Enterprise</span>
                        <span className="text-sm text-gray-500">Custom</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Leading editor UI', starter: true, pro: true, enterprise: true },
                    { feature: 'All integrations (nodes)', starter: true, pro: true, enterprise: true },
                    { feature: 'Workflow templates', starter: true, pro: true, enterprise: true },
                    { feature: 'Code steps (JS/Python)', starter: true, pro: true, enterprise: true },
                    { feature: 'Unlimited active workflows', starter: true, pro: true, enterprise: true },
                    { feature: 'Workflow history', starter: '1 day', pro: '5 days', enterprise: '365+ days' },
                    { feature: 'Concurrent executions', starter: '5', pro: '20', enterprise: '200+' },
                    { feature: 'Shared projects', starter: '1', pro: '3', enterprise: 'Unlimited' },
                    { feature: 'SSO & LDAP', starter: false, pro: false, enterprise: true },
                    { feature: 'Custom nodes', starter: false, pro: false, enterprise: true },
                    { feature: 'Queue mode', starter: false, pro: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-purple-50/30">
                      <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 font-family-headings">
              FAQs
            </h2>
            <p className="text-xl text-gray-600">Frequently asked questions</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="border border-purple-100/50 rounded-lg px-6 bg-white/90 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of teams already automating their workflows with Agentic View.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}