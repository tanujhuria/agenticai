import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, BookOpen, Video, FileText, Download, ExternalLink, Award, Users, Lightbulb, Target, Code, Play, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { NetworkBackground } from '../NetworkBackground';

export function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Documentation & Guides",
      description: "Comprehensive technical documentation, API references, and step-by-step guides",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
      resources: [
        "API Documentation",
        "Integration Guides",
        "Best Practices",
        "Troubleshooting"
      ]
    },
    {
      title: "Learning & Training",
      description: "Educational content, certification programs, and hands-on training materials",
      icon: Award,
      color: "from-purple-600 to-pink-600",
      resources: [
        "Online Courses",
        "Certification Programs",
        "Workshops",
        "Webinar Series"
      ]
    },
    {
      title: "Developer Tools",
      description: "SDKs, code samples, testing tools, and development resources",
      icon: Code,
      color: "from-green-600 to-emerald-600",
      resources: [
        "SDKs & Libraries",
        "Code Samples",
        "Testing Tools",
        "CLI Tools"
      ]
    },
    {
      title: "Community & Support",
      description: "Community forums, support channels, and expert guidance",
      icon: Users,
      color: "from-orange-600 to-red-600",
      resources: [
        "Community Forum",
        "Support Portal",
        "Expert Office Hours",
        "User Groups"
      ]
    }
  ];

  const featuredContent = [
    {
      type: "Guide",
      title: "Complete Integration Guide",
      description: "Learn how to integrate Agentic View with your existing systems in under 30 minutes",
      readTime: "15 min read",
      category: "Getting Started",
      image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop`
    },
    {
      type: "Video",
      title: "AI Agent Development Masterclass",
      description: "Build your first AI agent from scratch with our comprehensive video tutorial",
      readTime: "45 min watch",
      category: "Tutorial",
      image: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop`
    },
    {
      type: "Whitepaper",
      title: "The Future of Enterprise Automation",
      description: "Research-backed insights on automation trends and best practices for enterprise adoption",
      readTime: "20 min read",
      category: "Research",
      image: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop`
    }
  ];

  const quickLinks = [
    { title: "API Reference", icon: Code, description: "Complete API documentation with examples" },
    { title: "SDK Downloads", icon: Download, description: "Latest SDKs for all major platforms" },
    { title: "Video Tutorials", icon: Play, description: "Step-by-step video guides" },
    { title: "Community Forum", icon: MessageCircle, description: "Connect with other developers" },
    { title: "Support Portal", icon: Lightbulb, description: "Get help from our experts" },
    { title: "Status Page", icon: Target, description: "Real-time system status" }
  ];

  const learningPaths = [
    {
      title: "Integration Specialist",
      level: "Beginner to Advanced",
      duration: "4-6 weeks",
      modules: 8,
      description: "Master enterprise integration patterns and best practices",
      skills: ["API Integration", "Data Mapping", "Error Handling", "Security"]
    },
    {
      title: "AI Agent Developer",
      level: "Intermediate",
      duration: "3-4 weeks",  
      modules: 6,
      description: "Build and deploy intelligent AI agents for business automation",
      skills: ["Agent Design", "ML Integration", "Workflow Automation", "Testing"]
    },
    {
      title: "Platform Administrator",
      level: "Intermediate to Advanced",
      duration: "2-3 weeks",
      modules: 5,
      description: "Manage and optimize Agentic View deployments at scale",
      skills: ["System Administration", "Security", "Monitoring", "Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Network Background */}
      <NetworkBackground 
        className="absolute inset-0"
        nodeCount={30}
        maxDistance={120}
        nodeColor="#8b5cf6"
        lineColor="#a855f7"
        nodeSize={1.5}
        animationSpeed={0.3}
        opacity={0.3}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Developer Resources
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-family-headings">
              Everything You Need to Succeed
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive resources, documentation, and learning materials to help you build, integrate, and scale with Agentic View.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-family-headings">
              Quick Access
            </h2>
            <p className="text-gray-600">Jump to the resources you need most</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border-purple-100/50 hover:border-purple-200 bg-white/80 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-xs text-gray-600">{link.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized resources to help you at every stage of your journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.resources.map((resource, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{resource}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked resources to accelerate your learning and implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                        {content.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium">{content.category}</span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {content.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read more</span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 font-family-headings">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys to help you master specific skills and earn certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-purple-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {path.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {path.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium text-gray-900">{path.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{path.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Modules:</span>
                      <span className="font-medium text-gray-900">{path.modules}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Start Learning Path
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Need Additional Support?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our expert team is here to help you succeed with personalized guidance and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Expert Session
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}