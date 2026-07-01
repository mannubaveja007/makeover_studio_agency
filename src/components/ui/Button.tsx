import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 cursor-pointer";

const variants = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-lg shadow-neutral-900/20",
  secondary:
    "bg-transparent text-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full",
  ghost:
    "bg-transparent text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900",
} as const;

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base font-semibold",
} as const;

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
