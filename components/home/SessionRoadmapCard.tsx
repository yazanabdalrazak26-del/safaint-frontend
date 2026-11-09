import Link from "next/link";

import { sessionSteps } from "@/data/homeData";

export default function SessionRoadmapCard() {
  return (
    <article
      dir="rtl"
      className="
        relative
        isolate
        overflow-hidden
        rounded-design-lg
        border
        border-session-border
        bg-session
        p-6
        shadow-session
        sm:p-8
        lg:p-10
      "
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-1/2
          -z-10
          h-48
          w-48
          -translate-x-1/2
          rounded-full
          bg-gold/10
          blur-[64px]
        "
      />

      <div className="flex min-h-[376px] flex-col gap-8">
        {/* =====================================================
            HEADER
            RIGHT  → جلسة 1:1 خاصة
            LEFT   → الخطة + العنوان
            ===================================================== */}
        <header
          className="
            flex
            min-h-[77px]
            items-start
            justify-between
            gap-4
            border-b
            border-white/10
            pb-6
          "
        >
          {/* LEFT */}
          <div
            className="
              flex
              min-w-0
              flex-col
              gap-1
              text-right
            "
          >
            <span
              className="
                font-cairo
                text-xs
                font-bold
                leading-4
                text-gold-light
              "
            >
              الخطة التفاعلية للحصة
            </span>

            <h3
              className="
                font-cairo
                text-2xl
                font-bold
                leading-8
                text-white
              "
            >
              رحلة الطالب في الحصة الفردية (45 دقيقة)
            </h3>
          </div>

          {/* RIGHT */}
          <span
            className="
              inline-flex
              h-6
              shrink-0
              items-center
              rounded-full
              bg-white/10
              px-3
              py-1
              font-amiri
              text-xs
              font-normal
              leading-4
              text-emerald-200
            "
          >
            جلسة 1:1 خاصة
          </span>
        </header>

        {/* =====================================================
            THREE SESSION STEPS
            ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >
          {sessionSteps.map((step) => (
            <article
              key={step.stage}
              className={`
                min-h-[196px]
                rounded-design-md
                border
                p-5
                backdrop-blur-[4px]
                ${
                  step.highlighted
                    ? "border-gold/40 bg-white/10"
                    : "border-white/10 bg-white/5"
                }
              `}
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                  gap-1
                  text-right
                "
              >
                <span
                  className="
                    font-cairo
                    text-xs
                    font-bold
                    leading-4
                    text-gold-light
                  "
                >
                  {step.stage} • {step.duration}
                </span>

                <h4
                  className="
                    font-cairo
                    text-base
                    font-bold
                    leading-6
                    text-white
                  "
                >
                  {step.title}
                </h4>

                <p
                  className="
                    pt-1
                    font-cairo
                    text-xs
                    font-normal
                    leading-[19.5px]
                    text-slate-300
                  "
                >
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM ROW
            LEFT  → جرّب حصة حية الآن
            RIGHT → تقرير الإنجاز
            ===================================================== */}
        <footer
          className="
            mt-auto
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* RIGHT — Report */}
          <div
            className="
              flex
              min-w-0
              items-center
              gap-2
              font-cairo
              text-xs
              leading-4
              text-emerald-200
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-gold-light
              "
            />

            <span>
              تقرير إنجاز إلكتروني فوري يصل لوحة تحكم ولي الأمر عقب كل حصة تلقائياً.
            </span>
          </div>

          {/* LEFT — Live Session CTA */}
          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              font-cairo
              text-xs
              font-bold
              leading-4
              text-gold-light
              transition-colors
              duration-200
              hover:text-gold 
            "
          >
            <span className="text-gold-light">جرّب حصة حية الآن</span>

            <span
              aria-hidden="true"
              className="
                transition-transform
                duration-200
                group-hover:-translate-x-1 
                text-gold-light
              "
            >
              ←
            </span>
          </Link>
        </footer>
      </div>
    </article>
  );
}