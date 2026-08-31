import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
  showScore?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  max = 5,
  className,
  starClassName,
  showScore = false,
}) => {
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, index) => {
          const filled = index < Math.floor(rating);
          const half = !filled && index < rating;

          return (
            <Star
              key={index}
              className={cn(
                "w-4 h-4 transition-colors",
                filled
                  ? "fill-accent-500 text-accent-500"
                  : half
                  ? "fill-accent-300 text-accent-500"
                  : "fill-cream-300 text-cream-300",
                starClassName
              )}
            />
          );
        })}
      </div>
      {showScore && (
        <span className="text-xs font-semibold text-charcoal-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
