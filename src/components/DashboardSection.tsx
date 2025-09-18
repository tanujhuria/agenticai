import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NetworkBackground } from './NetworkBackground';

export function DashboardSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 px-6 overflow-hidden">
      {/* Subtle Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={20}
        maxDistance={80}
        nodeColor="#6366f1"
        lineColor="#8b5cf6"
        nodeSize={1}
        animationSpeed={0.15}
        opacity={0.15}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg mb-8">
            One place to work with your AVi's, take action and drive outcomes.
          </p>
        </motion.div>

        {/* Dashboard Display */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
            {/* Mock Dashboard Interface */}
            <div className="p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                    Agentic View ONE Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Complete platform interface showing multiple AVi's working together
                  </p>
                </div>
                <div className="flex space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dashboard Cards */}
                {[
                  { title: "Sales AVi", value: "87.5%", change: "+12.3%", color: "bg-blue-500" },
                  { title: "Support AVi", value: "142", change: "+8.7%", color: "bg-green-500" },
                  { title: "Marketing AVi", value: "23.4K", change: "+15.2%", color: "bg-purple-500" },
                  { title: "HR AVi", value: "94.2%", change: "+3.1%", color: "bg-orange-500" },
                  { title: "IT AVi", value: "99.8%", change: "+0.2%", color: "bg-cyan-500" },
                  { title: "Finance AVi", value: "$2.1M", change: "+18.5%", color: "bg-pink-500" }
                ].map((card, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-gray-900 font-medium">{card.title}</h4>
                      <div className={`w-3 h-3 ${card.color} rounded-full`}></div>
                    </div>
                    <div className="text-2xl text-gray-900 font-bold mb-2">{card.value}</div>
                    <div className="text-primary text-sm">{card.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Activity Feed */}
              <motion.div 
                className="mt-6 bg-white rounded-xl p-4 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-gray-900 font-medium mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {[
                    "Sales AVi processed 47 new leads",
                    "Support AVi resolved 23 tickets",
                    "Marketing AVi launched 3 campaigns",
                    "HR AVi onboarded 2 new employees"
                  ].map((activity, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Overlay gradient for better visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-50/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating elements for enhanced visual appeal */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full blur-sm opacity-60" />
          <div className="absolute top-1/4 -right-6 w-6 h-6 bg-gradient-to-r from-primary to-purple-400 rounded-full blur-sm opacity-60" />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the power of unified AI automation across all your departments. 
            Watch your AVi's collaborate seamlessly to drive business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}