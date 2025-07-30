import { CustomCard } from "./custom-card";
import { CustomButton } from "./custom-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  onSelect?: () => void;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
  buttonText = "Get Started",
  onSelect,
}: PricingCardProps) {
  return (
    <CustomCard
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-2",
        popular && "ring-2 ring-primary scale-105"
      )}
    >
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className={cn("space-y-6", popular && "pt-8")}>
        <div className="text-center">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold">{price}</div>
          <div className="text-muted-foreground">{period}</div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <CustomButton
          className="w-full"
          variant={popular ? "primary" : "outline"}
          onClick={onSelect}
        >
          {buttonText}
        </CustomButton>
      </div>
    </CustomCard>
  );
}