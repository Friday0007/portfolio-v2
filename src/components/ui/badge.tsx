import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "secondary" | "outline" | "success";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-foreground text-background",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-transparent text-foreground",
    success:
      "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
