import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AwardsSections() {
  return (
    <div className="bg-white">
      {/* Gartner Awards Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-6 mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738528333768-6e2e0932c40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJ0bmVyJTIwbG9nbyUyMGF3YXJkc3xlbnwxfHx8fDE3NTc4NDY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gartner Logo"
                  className="h-12 w-auto"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738528333768-6e2e0932c40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJ0bmVyJTIwbG9nbyUyMGF3YXJkc3xlbnwxfHx8fDE3NTc4NDY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gartner Magic Quadrant 2025"
                  className="h-16 w-auto"
                />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                Agentic View is proud to be recognized as a Leader
              </h2>

              <div className="flex items-center space-x-8 mb-6">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="text-2xl font-bold text-gray-300">
                      {num < 4 ? (
                        <span style={{ color: '#67eadd' }}>0{num}</span>
                      ) : (
                        <span>0{num}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl mb-4">
                2025 Gartner® Magic Quadrant™ for Integration Platform as a Service
              </h3>

              <button 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white"
              >
                <span>Read report</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <p className="text-lg mt-6 mb-2">see why we're</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4" style={{ color: '#67eadd' }}>📊</div>
                <h3 className="text-2xl mb-2">Magic Quadrant</h3>
                <p className="text-gray-600">Leader Position</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by the Best Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Trusted by the very best
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6">
                <div className="mb-6">
                  <h3 className="text-2xl mb-4">Atlassian</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#67eadd' }}>
                        100k+
                      </div>
                      <p className="text-gray-600">hours saved</p>
                    </div>
                    
                    <div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#67eadd' }}>
                        98%
                      </div>
                      <p className="text-gray-600">faster to process employee relocation requests</p>
                    </div>
                  </div>

                  <button 
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:scale-105 mb-6 bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch video</span>
                  </button>
                </div>

                <blockquote className="text-gray-700 italic mb-4">
                  "Business users have organically started using Agentic View. Once we identify those business users, we elevate them to be champions to empower other teams or other people, and use them to get the next wave of scale."
                </blockquote>

                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzc2OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mohit Rao"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Mohit Rao</p>
                    <p className="text-sm text-gray-600">Head of Intelligent Automation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                  <span 
                    className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  >
                    Let's start automating.
                  </span>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}