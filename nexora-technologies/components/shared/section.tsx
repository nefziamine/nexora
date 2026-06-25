import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 lg:py-28",
        variant === "muted" && "bg-muted/50",
        variant === "gradient" &&
          "bg-gradient-to-b from-nexora-blue/5 via-transparent to-nexora-purple/5",
        className
      )}
    >
      {children}
    </section>
  );
}
