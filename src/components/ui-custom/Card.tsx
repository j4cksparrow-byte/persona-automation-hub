
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outlined' | 'elevated';
  isHoverable?: boolean;
  isInteractive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', isHoverable = false, isInteractive = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-card text-card-foreground',
      glass: 'glass-card',
      outlined: 'border bg-transparent',
      elevated: 'bg-card text-card-foreground shadow-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden',
          variants[variant],
          isHoverable && 'transition-all duration-300 hover:shadow-md hover:-translate-y-1',
          isInteractive && 'cursor-pointer transition-all duration-200 hover:shadow-md active:shadow-sm active:translate-y-0.5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
