import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/section-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced natural language processing models trained on high-converting marketing content. You simply provide your brand guidelines, target audience, and campaign goals, and our AI generates compelling copy, social media posts, email campaigns, and ad content that aligns with your brand voice and objectives."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing tools?",
      answer: "Yes! ADmyBRAND AI Suite integrates with over 200+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, WordPress, and many more. Our API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "How accurate is the AI-generated content?",
      answer: "Our AI generates content with 95%+ accuracy and relevance. However, we always recommend reviewing and customizing the content to match your specific brand requirements. The AI learns from your feedback and improves over time, becoming more aligned with your brand voice."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support including 24/7 chat support for all plans, priority email support for Professional plans, and dedicated account management with phone support for Enterprise customers. We also provide extensive documentation, video tutorials, and weekly webinars."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most customers see initial improvements within the first week of implementation. Significant results like increased engagement rates and lead generation typically become evident within 2-4 weeks. For comprehensive campaign optimization and ROI improvements, expect to see full results within 6-8 weeks."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade security measures including AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is never shared with third parties or used to train our models for other customers. We maintain strict data isolation and provide detailed security reports upon request."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel during your trial period or within the first 30 days, you'll receive a full refund. After that, you'll have access to your account until the end of your current billing period."
    },
    {
      question: "Do you offer custom AI training for large enterprises?",
      answer: "Yes, our Enterprise plan includes custom AI model training tailored to your specific industry, brand voice, and customer base. This ensures even more accurate and relevant content generation that perfectly aligns with your unique business requirements and market positioning."
    }
  ];

  return (
    <SectionWrapper id="faq" className="bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}