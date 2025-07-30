import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Play, Users, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  const features = [
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Intuitive dashboard that anyone can master in minutes"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Watch your marketing metrics improve in real-time"
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Smart automation that learns and adapts to your business"
    }
  ];

  const benefits = [
    "300% increase in marketing ROI",
    "75% reduction in manual work",
    "Real-time campaign optimization",
    "Advanced audience targeting",
    "Cross-platform integration",
    "24/7 AI-powered support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Experience the
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future of Marketing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See our AI-powered marketing platform in action. This interactive demo shows you exactly how to transform your marketing strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch Our Platform in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive walkthrough of our AI marketing suite
            </p>
          </div>
          
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video placeholder */}
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    15-Minute Product Demo
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Complete walkthrough of features and capabilities
                  </p>
                </div>
                <CustomButton 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Play Demo Video
                </CustomButton>
              </div>
            </div>
            
            {/* Replace with actual video */}
            {/* 
            <video 
              controls 
              className="w-full h-full"
              poster="/demo-thumbnail.jpg"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </div>
      </SectionWrapper>

      {/* Key Features */}
      <SectionWrapper className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll See in the Demo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the key features that make our platform revolutionary
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Results You Can Expect
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our demo showcases real customer success stories and the tangible benefits you'll achieve with our platform.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">300%</div>
                  <div className="text-lg font-medium">Average ROI Increase</div>
                  <div className="text-sm text-muted-foreground">
                    Based on 6-month customer data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven marketing automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CustomButton size="lg" className="group">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton variant="outline" size="lg" asChild>
              <Link to="/">
                Back to Home
              </Link>
            </CustomButton>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Demo;