import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  variant = "default",
}: SectionWrapperProps) {
  const bg = variant === "muted" ? "bg-neutral-50" : "bg-white";

  return (
    <section
      id={id}
      className={`${bg} ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24 md:py-32 lg:py-40">
        {children}
      </div>
    </section>
  );
}
