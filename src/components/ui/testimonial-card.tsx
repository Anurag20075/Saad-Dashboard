import { CustomCard } from "./custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <CustomCard className="h-full">
      <div className="space-y-4">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-lg leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">
              {role} at {company}
            </div>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}