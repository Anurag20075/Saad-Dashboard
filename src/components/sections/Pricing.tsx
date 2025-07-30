import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/section-wrapper";
import { PricingCard } from "../ui/pricing-card";
import { DollarSign } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generation (500 pieces/month)",
        "Basic Analytics Dashboard",
        "Email Marketing Automation",
        "Social Media Scheduling",
        "Standard Support",
        "1 Brand Profile"
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "AI Content Generation (2,500 pieces/month)",
        "Advanced Analytics & Insights",
        "Multi-Channel Campaign Management",
        "A/B Testing & Optimization",
        "Customer Journey Mapping",
        "Priority Support",
        "5 Brand Profiles",
        "Team Collaboration Tools"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "White-label Solutions",
        "Advanced Integrations & API",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Unlimited Brand Profiles",
        "Custom Reporting & Analytics",
        "Security & Compliance Features"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <SectionWrapper id="pricing" className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Choose the Perfect Plan
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              for Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our free trial and scale as you grow. All plans include our core AI features with different usage limits and support levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try ADmyBRAND AI Suite risk-free for 30 days. If you're not completely satisfied with the results, 
            we'll refund your money, no questions asked.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}