import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI Automation in Enterprise',
    excerpt: 'Exploring how AI agents are transforming business operations and what to expect in 2024.',
    author: 'Sarah Chen',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Industry Insights',
    featured: true
  },
  {
    title: 'Building Your First AI Agent: A Complete Guide',
    excerpt: 'Step-by-step tutorial on creating and deploying your first intelligent automation agent.',
    author: 'Mike Rodriguez',
    date: 'Dec 12, 2024',
    readTime: '12 min read',
    category: 'Tutorial'
  },
  {
    title: 'ROI Analysis: AI Automation Success Stories',
    excerpt: 'Real-world case studies showing measurable business impact from AI agent implementations.',
    author: 'Lisa Wang',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    category: 'Case Studies'
  },
  {
    title: 'Security Best Practices for AI Agents',
    excerpt: 'Essential security considerations when deploying AI agents in enterprise environments.',
    author: 'David Kim',
    date: 'Dec 8, 2024',
    readTime: '10 min read',
    category: 'Security'
  },
  {
    title: 'Integration Spotlight: Salesforce + Agentic View',
    excerpt: 'How to supercharge your CRM with intelligent automation and AI-powered insights.',
    author: 'Emma Thompson',
    date: 'Dec 5, 2024',
    readTime: '7 min read',
    category: 'Integrations'
  },
  {
    title: 'The Evolution of Workflow Automation',
    excerpt: 'From simple scripts to intelligent agents: the journey of business process automation.',
    author: 'Alex Johnson',
    date: 'Dec 3, 2024',
    readTime: '9 min read',
    category: 'Technology'
  }
];

const categories = [
  'All Posts',
  'Industry Insights',
  'Tutorial',
  'Case Studies',
  'Security',
  'Integrations',
  'Technology'
];

export function BlogPage() {
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
              <span className="text-gray-900">Agentic View</span>
              <span className="block gradient-text-animate">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and stories from the world of AI automation and intelligent agents.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                    : 'bg-white text-gray-600 hover:text-primary border border-gray-200 hover:border-primary'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold">
                Featured
              </span>
              <span className="px-4 py-2 bg-purple-100 text-primary rounded-full text-sm">
                {blogPosts[0].category}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{blogPosts[0].title}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{blogPosts[0].excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              
              <motion.button 
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-primary rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <motion.div 
                  className="flex items-center text-primary font-medium group"
                  whileHover={{ x: 5 }}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights on AI automation and intelligent agents delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button 
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}