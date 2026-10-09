import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "gold"|"softprimary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-primary
    text-white
    hover:bg-primary-dark
  `,

  outline: `
    border
    border-border-design
    bg-white
    text-text-secondary
    shadow-sm
    hover:border-primary/20
    hover:bg-background-green-soft
  `,

  gold: `
    bg-gold-light
    text-primary-deep
    shadow-sm
    hover:bg-gold
  `,

  softprimary: `
    bg-background-green-soft
    text-primary
    hover:bg-[#D1FAE5]
    active:bg-primary
    active:text-white
  `,
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        shrink-0
        items-center
        justify-center
        rounded-design-md
        font-cairo
        transition-all
        duration-200
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}