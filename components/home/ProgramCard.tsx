import type { LucideIcon } from "lucide-react";

import Button from "@/components/ui/Button";

type ProgramCardProps = {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  icon: LucideIcon;
  highlighted?: boolean;
};

export default function ProgramCard({
  title,
  description,
  features,
  buttonText,
  href,
  icon: Icon,
  highlighted = false,
}: ProgramCardProps) {
  return (
    <article
      className={`
        relative
        flex
        min-h-[395px]
        w-full
        flex-col
        justify-between
        rounded-design-lg
        p-8
        transition-all
        duration-200
        ${
          highlighted
            ? `
              border-2
              border-gold
              bg-gradient-to-b
              from-white
              to-background-green-soft/40
              shadow-[0_4px_6px_-4px_rgba(212,175,55,0.10),0_10px_15px_-3px_rgba(212,175,55,0.10)]
            `
            : `
              border
              border-border-design
              bg-white
            `
        }
      `}
    >
      {/* Popular Badge */}
      {highlighted && (
        <span
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            rounded-full
            bg-gold
            px-4
            py-1
            font-cairo
            text-xs
            font-bold
            leading-4
            text-primary-deep
            shadow-sm
          "
        >
          المسار الأكثر طلبًا
        </span>
      )}

      {/* Card Content */}
      <div className="flex flex-col gap-[7px]">
        {/* Icon */}
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-design-md
            ${
              highlighted
                ? "bg-gold text-primary-deep shadow-sm"
                : "bg-primary-dark/10 text-primary"
            }
          `}
        >
          <Icon
            size={28}
            strokeWidth={2.33}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-[9px]
            font-cairo
            text-xl
            font-bold
            leading-7
            text-text-primary
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            min-h-[46px]
            font-cairo
            text-sm
            font-normal
            leading-[22.75px]
            text-text-body
          "
        >
          {description}
        </p>

        {/* Features */}
        <ul
          dir="rtl"
          className="
            mt-[9px]
            flex
            flex-col
            gap-2.5
            font-cairo
            text-sm
            leading-5
            text-text-body
          "
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                w-full
                items-center
                justify-start
                gap-2
                text-right
              "
            >
              {/* Check — RIGHT */}
              <span
                aria-hidden="true"
                className={`
                  shrink-0
                  font-amiri
                  text-sm
                  font-bold
                  leading-5
                  ${
                    highlighted
                      ? "text-gold-dark"
                      : "text-primary"
                  }
                `}
              >
                ✓
              </span>

              {/* Text — next to check */}
              <span
                className="
                  whitespace-nowrap
                  text-right
                "
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        href={href}
        variant={highlighted ? "primary" : "outline"}
        className={`
          h-10
          w-full
          rounded-design-md
          px-4
          py-2
          text-sm
          font-bold
          leading-5
          transition-colors
          duration-200
          ${
            highlighted
              ? `
                bg-primary
                text-white
                shadow-[0_2px_4px_-2px_rgba(0,0,0,0.10),0_4px_6px_-1px_rgba(0,0,0,0.10)]
                hover:bg-primary-dark
                active:bg-primary-dark
              `
              : `
                !border-transparent
                !bg-background-green-soft
                !text-primary
                shadow-none
                hover:!bg-[#D1FAE5]
                active:!bg-primary
                active:!text-white
              `
          }
        `}
      >
        {buttonText}
      </Button>
    </article>
  );
}