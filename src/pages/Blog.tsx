import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCard } from "@/components/ui/custom-card";
import { CustomButton } from "@/components/ui/custom-button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the way brands connect with their audiences and drive meaningful engagement.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Maximizing ROI with Automated Ad Campaigns",
    excerpt: "Learn proven strategies to optimize your advertising spend and achieve higher returns through intelligent automation.",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Building Brand Authority Through Content Intelligence",
    excerpt: "Understand how data-driven content strategies can establish your brand as a thought leader in your industry.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Cross-Platform Analytics: A Complete Guide",
    excerpt: "Master the art of tracking and analyzing customer journeys across multiple digital touchpoints.",
    author: "David Park",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Personalization at Scale: Best Practices",
    excerpt: "Explore how to deliver personalized experiences to thousands of customers without losing the human touch.",
    author: "Lisa Thompson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Personalization",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Voice Search Optimization for 2024",
    excerpt: "Stay ahead of the curve with voice search optimization strategies that will dominate the marketing landscape.",
    author: "James Wilson",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "AI Trends", "Automation", "Content Strategy", "Analytics", "Personalization", "SEO"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>{" "}
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with insights, strategies, and trends in AI-powered marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <CustomButton
                key={category}
                variant={category === "All" ? "primary" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </CustomButton>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CustomCard className="group h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      
                      <CustomButton variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </CustomButton>
                    </div>
                  </div>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Marketing Insights
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest trends, strategies, and insights delivered to your inbox weekly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <CustomButton className="sm:w-auto">
                Subscribe
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}