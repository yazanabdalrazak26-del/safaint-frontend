import type { Testimonial } from "@/data/homeData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div
      dir="ltr"
      className="
        relative
        h-[331px]
        w-full
        max-w-[448px]
      "
    >
      {/* Layer 3 — Deepest Background */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-[11px]
          top-[8px]
          h-[314px]
          rounded-[24px]
          bg-testimonial-back
          -rotate-6
        "
      />

      {/* Layer 2 — Middle Card */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-[331px]
          rounded-[24px]
          border
          border-testimonial-middle-border
          bg-testimonial-middle
          backdrop-blur-[12px]
          -rotate-3
        "
      />

      {/* Layer 1 — Front Active Card */}
      <article
        className="
          absolute
          left-1/2
          top-1/2
          w-[432px]
          max-w-[calc(100%-12px)]
          -translate-x-1/2
          -translate-y-1/2
          rotate-1
          rounded-[24px]
          border
          border-testimonial-front-border
          bg-white
          p-8
          shadow-testimonial
        "
      >
{/* Rating */}
<div
  dir="ltr"
  className="
    flex
    h-6
    w-full
    items-center
    justify-end
    gap-2
  "
>
  {/* Rating Text — LEFT */}
  <span
    dir="rtl"
    className="
      font-cairo
      text-xs
      font-bold
      leading-4
      text-text-body
    "
  >
    {testimonial.label}
  </span>

  {/* Stars — RIGHT */}
  <div className="flex shrink-0 items-center gap-1">
    {Array.from({ length: testimonial.rating }).map((_, index) => (
      <span
        key={index}
        aria-hidden="true"
        className="
          font-amiri
          text-base
          leading-6
          text-gold
        "
      >
        ★
      </span>
    ))}
  </div>
</div>

        {/* Quote */}
        <blockquote
          dir="rtl"
          className="
            mt-5
            border-b
            border-slate-100
            pb-4
            text-right
            font-cairo
            text-base
            font-medium
            leading-6
            text-slate-700
          "
        >
          {testimonial.quote}
        </blockquote>

{/* Student / Parent Information */}
<div
  dir="ltr"
  className="
    mt-4
    flex
    w-full
    items-center
    justify-between
    gap-3
    border-t
    border-slate-100
    pt-4
  "
>
  {/* LEFT — Subscription Badge */}
  <span
    className="
      shrink-0
      rounded-md
      bg-community-badge
      px-2.5
      py-1
      font-cairo
      text-xs
      font-semibold
      leading-4
      text-primary
    "
  >
    {testimonial.badge}
  </span>

  {/* CENTER — Name + Location */}
  <div
    dir="rtl"
    className="
      min-w-0
      flex-1
      text-right
    "
  >
    <h3
      className="
        font-cairo
        text-sm
        font-bold
        leading-5
        text-text-primary
      "
    >
      {testimonial.name}
    </h3>

    <p
      className="
        whitespace-nowrap
        font-cairo
        text-xs
        font-normal
        leading-4
        text-text-muted
      "
    >
      {testimonial.location} • {testimonial.role}
    </p>
  </div>

  {/* RIGHT — Avatar */}
  <div
    aria-hidden="true"
    className="
      flex
      size-10
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-primary
      font-cairo
      text-sm
      font-bold
      text-gold-light
      shadow-sm
    "
  >
    {testimonial.avatar}
  </div>
</div>
      </article>
    </div>
  );
}