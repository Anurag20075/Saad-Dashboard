import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/section-wrapper";
import { TestimonialCard } from "../ui/testimonial-card";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc",
      image: "/placeholder.svg",
      quote: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 250% increase in qualified leads within just 3 months. The AI-generated content is incredibly engaging and converts better than our previous manual efforts.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Dynamics",
      image: "/placeholder.svg",
      quote: "The automation features saved us countless hours while improving our campaign performance. The ROI tracking and optimization suggestions are game-changers for our business.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      company: "Innovate Solutions",
      image: "/placeholder.svg",
      quote: "I was skeptical about AI-generated content at first, but the quality and relevance of what ADmyBRAND produces is outstanding. Our engagement rates have never been higher.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Brand Manager",
      company: "Creative Agency Pro",
      image: "/placeholder.svg",
      quote: "The customer journey mapping feature helped us identify gaps in our funnel that we never knew existed. Our conversion rate improved by 180% after implementing their recommendations.",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "Head of Marketing",
      company: "E-commerce Plus",
      image: "/placeholder.svg",
      quote: "The multi-channel campaign management is seamless. We can now run coordinated campaigns across all platforms with minimal effort and maximum impact.",
      rating: 5
    },
    {
      name: "Robert Williams",
      role: "Marketing Consultant",
      company: "Strategic Growth",
      image: "/placeholder.svg",
      quote: "ADmyBRAND AI Suite is the best investment we've made for our marketing stack. The insights and automation have transformed how we approach customer acquisition.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <SectionWrapper id="testimonials" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by Marketing
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours are achieving incredible results with our AI-powered marketing platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-8">Trusted by 50,000+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechStart", "Growth Dynamics", "Innovate Solutions", "Creative Agency", "E-commerce Plus", "Strategic Growth"].map((company, index) => (
              <div key={index} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}