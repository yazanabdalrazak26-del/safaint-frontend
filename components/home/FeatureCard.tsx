import type { AcademyFeature } from "@/data/homeData";

interface FeatureCardProps {
  feature: AcademyFeature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article
      dir="rtl"
      className="
        flex
        min-h-[170.25px]
        items-start
        gap-5
        rounded-design-lg
        border
        border-border-design/90
        bg-white
        p-6
        shadow-sm
        transition-shadow
        duration-200
        hover:shadow-md
        sm:p-8
      "
    >
      {/* الأيقونة — الجهة اليمنى */}
      <div
        className="
          flex
          size-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-primary-dark/10
        "
      >
        <Icon
          aria-hidden="true"
          className="size-6 text-primary"
          strokeWidth={2}
        />
      </div>

      {/* النص — الجهة اليسرى من الأيقونة */}
      <div className="min-w-0 flex-1 text-right">
        <h3
          className="
            font-cairo
            text-lg
            font-bold
            leading-7
            text-text-primary
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-[7px]
            font-cairo
            text-sm
            font-normal
            leading-[22.75px]
            text-text-body
          "
        >
          {feature.description}
        </p>
      </div>
    </article>
  );
}