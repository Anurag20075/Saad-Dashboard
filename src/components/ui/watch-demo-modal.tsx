import { CustomButton } from "./custom-button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface WatchDemoButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export function WatchDemoButton({ 
  variant = "ghost", 
  size = "lg", 
  className = "",
  children 
}: WatchDemoButtonProps) {
  return (
    <CustomButton 
      variant={variant} 
      size={size} 
      className={`group ${className}`}
      asChild
    >
      <Link to="/demo">
        {children || (
          <>
            <Play className="h-5 w-5 mr-2" />
            Watch Demo
          </>
        )}
      </Link>
    </CustomButton>
  );
}