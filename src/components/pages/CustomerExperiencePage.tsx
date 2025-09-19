import { motion } from 'motion/react';
import { ArrowUpRight, Play, Calendar, Star, Heart, MessageCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function CustomerExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Customer Experience AVi's
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Customer Experience AVi's
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-8 leading-relaxed">
                Exceptional Service. Personalized Journeys. Customer Delight.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGV4cGVyaWVuY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3OTM4NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Customer Experience AVi Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
              What are Customer Experience AVi's?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Customer Experience AVi's are specialized AI agents that create personalized, seamless customer 
              journeys across all touchpoints, proactively addressing needs and delivering exceptional 
              service that drives loyalty and satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's start automating
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a demo
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}