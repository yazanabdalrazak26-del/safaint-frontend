
import Link from "next/link";
import type { SubscriptionPlan } from "@/data/subscriptionPlans";
import { Check, ArrowLeft } from "lucide-react";

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
}

export default function SubscriptionPlanCard({
  plan,
}: SubscriptionPlanCardProps) {
  const Icon = plan.icon;

  return (
    <article
      dir="rtl"
      className={`
        relative flex h-full min-h-[538px] flex-col
        rounded-design-lg bg-white p-6 sm:p-7
        transition-shadow duration-200
        ${
          plan.highlighted
            ? "z-10 border-2 border-gold shadow-[0_4px_24px_-8px_rgba(20,50,30,0.12)] lg:-translate-y-1"
            : "border border-[#022C220D] shadow-[0_4px_24px_-8px_rgba(20,50,30,0.04)] hover:shadow-md"
        }
      `}
    >
      {plan.badge && (
        <span
          className="
            absolute -top-3 left-1/2 -translate-x-1/2
            whitespace-nowrap rounded-full bg-gold px-4 py-1
            font-amiri text-xs font-bold leading-4 text-white
          "
        >
          {plan.badge}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        {/* Top labels */}
        <div className="flex min-h-6 items-center justify-between gap-3">
          <span
            className="
              inline-flex items-center gap-1.5 rounded-full
              bg-background-green-soft px-3 py-1
              font-amiri text-xs leading-4 text-text-secondary
            "
          >
            <Icon
              aria-hidden="true"
              className="size-3.5 text-primary"
              strokeWidth={1.8}
            />
            {plan.category}
          </span>

          <span className="shrink-0 font-amiri text-xs leading-4 text-[#637D6E]">
            {plan.durationLabel}
          </span>
        </div>

        {/* Plan name and description */}
        <div className="mt-4">
          <h2 className="font-amiri text-2xl font-bold leading-8 text-[#092E1D]">
            {plan.name}
          </h2>

          <p className="mt-2 min-h-[39px] font-amiri text-xs font-normal leading-[19.5px] text-[#577062]">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-3 flex min-h-[65px] flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4">
          <div className="flex items-baseline gap-1">
            <span className="font-amiri text-4xl font-bold leading-10 text-[#0C3A25]">
              {plan.currency}
              {plan.price}
            </span>
          </div>

          <p className="font-amiri text-xs leading-4 text-[#5C7365]">
            {plan.billingNote}
          </p>
        </div>

        {/* Features */}
        <ul className="flex flex-1 flex-col gap-3.5 pt-4">
          {plan.features.map((feature, index) => {
            const isHighlightedFirstFeature =
              plan.highlighted && index === 0;

            return (
              <li
                key={feature}
                className="flex items-start gap-2.5 font-amiri text-xs leading-4"
              >
                {/* Check icon */}
                <span
                  className={`
                    mt-px flex size-[13.33px] shrink-0
                    items-center justify-center rounded-full
                    ${
                      plan.highlighted
                        ? "bg-[#135737]"
                        : "bg-transparent"
                    }
                  `}
                  aria-hidden="true"
                >
                  <Check
                    className={`size-[9px] ${
                      plan.highlighted
                        ? "text-white"
                        : "text-[#4E8A6B]"
                    }`}
                    strokeWidth={2.5}
                  />
                </span>

                {/* Feature text */}
                {isHighlightedFirstFeature ? (
                  <span className="text-[#33463A]">
                    <span className="font-normal">
                      (إجمالي 9 أشهر)
                    </span>{" "}
                    <span className="font-bold text-[#092E1D]">
                      6 شهور + 3 شهور مجاناً
                    </span>
                  </span>
                ) : (
                  <span className="text-[#33463A]">
                    {feature}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href={`/register?plan=${plan.id}`}
        className={`
          mt-6 inline-flex min-h-[42px] w-full
          items-center justify-center gap-1.5
          rounded-xl border px-4 py-3
          font-amiri text-xs font-bold leading-4
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-primary focus-visible:ring-offset-2
          ${
            plan.highlighted
              ? "border-primary bg-primary text-white hover:bg-primary-dark"
              : "border-[#C7E3D499] bg-[#F3F8F5] text-[#0F472D] hover:bg-background-green-soft"
          }
        `}
      >
        <span>اشترك الآن</span>

        <ArrowLeft
          aria-hidden="true"
          className="size-3 shrink-0"
          strokeWidth={2}
        />
      </Link>
    </article>
  );
}


