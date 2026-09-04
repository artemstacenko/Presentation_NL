import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium outline-none select-none transition-[background-color,color,box-shadow,opacity,scale] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-ink-soft",
        forest: "bg-forest text-paper hover:bg-forest-deep",
        ghost:
          "bg-transparent text-ink hover:bg-ink/[0.06] shadow-none",
        outline:
          "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
      },
      size: {
        default: "h-11 rounded-md px-4",
        sm: "h-10 rounded-sm px-3 text-sm",
        icon: "size-11 rounded-md",
        iconSm: "size-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
