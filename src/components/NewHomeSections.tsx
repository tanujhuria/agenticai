import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewHomeSections() {
  return (
    <div className="bg-black">
      {/* The new way to get work done */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The new way to get work done
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              One place to work with your Genies, take action and drive outcomes.
            </p>
          </div>

          {/* Apple Screen with Dashboard */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-800 rounded-3xl p-6 shadow-2xl">
              {/* MacBook Pro Frame */}
              <div className="bg-black rounded-2xl p-1">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="h-8 bg-gray-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-gray-400 text-sm">Genies Dashboard</span>
                    </div>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1717632464000-15a5e883ab3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMG1hY2Jvb2slMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzU3ODQ1MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Genie Dashboard Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* One prompt to turn ideas into workflows */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
                One prompt to turn ideas into workflows
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Workato's leading iPaaS engine connects your systems, applies business logic, and automates tasks.
              </p>
              <button 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #67eadd 0%, #4dd5c7 50%, #33c1b3 100%)',
                  color: '#000'
                }}
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NzQ4NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workflow Automation Interface"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* One prompt to turn roles into agents */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578070581071-d9b52bf80993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFnZW50JTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1Nzg0NTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Agent Interface"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
                One prompt to turn roles into agents
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Give your Genie a job description, define their KPIs, provide company docs, and have them work side-by-side with your team.
              </p>
              <button 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #67eadd 0%, #4dd5c7 50%, #33c1b3 100%)',
                  color: '#000'
                }}
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}