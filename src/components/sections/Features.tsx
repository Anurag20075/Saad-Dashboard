import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/section-wrapper";
import { CustomCard } from "../ui/custom-card";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Shield,
  Rocket,
  TrendingUp
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Creation",
      description: "Generate compelling ad copy, social media posts, and email campaigns using advanced AI models trained on high-converting content."
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms and behavioral analysis."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor campaign performance with advanced analytics and receive AI-driven insights to optimize your marketing strategy."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automate your entire marketing funnel from lead generation to conversion with intelligent workflows and triggers."
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in your customer's journey with AI-powered journey mapping and optimization."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Monitor and protect your brand reputation across all digital channels with AI-powered sentiment analysis and threat detection."
    }
  ];

  return (
    <SectionWrapper id="features" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <Rocket className="h-4 w-4 text-primary" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need to
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools you need to create, manage, and optimize your marketing campaigns for maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CustomCard className="h-full hover:scale-105 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CustomCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results That Speak for Themselves
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our AI-powered platform has helped thousands of businesses achieve unprecedented growth in their marketing performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "300%", label: "Average ROI Increase" },
                { metric: "65%", label: "Time Saved on Campaigns" },
                { metric: "150%", label: "Lead Generation Boost" },
                { metric: "99.9%", label: "Platform Uptime" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}