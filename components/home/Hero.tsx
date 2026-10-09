import Image from "next/image";
import { ArrowLeft, Play } from "lucide-react";

import Button from "@/components/ui/Button";

const heroStats = [
  {
    value: "+42 دولة",
    label: "حول قارات العالم",
    valueClass: "text-primary",
  },
  {
    value: "4.9 / 5.0",
    label: "تقييم الطلاب وأولياء الأمور",
    valueClass: "text-gold-dark",
  },
  {
    value: "100%",
    label: "جلسات فردية خاصة",
    valueClass: "text-primary",
  },
];

export default function Hero() {
  return (
    <section className="bg-background-soft">
      <div
        className="
          mx-auto
          max-w-[1347px]
          px-8
          pt-12
          pb-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1246px]
            grid-cols-1
            gap-x-12
            gap-y-[53px]
            lg:grid-cols-12
            lg:[direction:ltr]
          "
        >
          {/* =====================================================
              LEFT — TEACHER VISUAL
          ====================================================== */}
          <div
            className="
              relative
              lg:col-start-1
              lg:col-span-5
              lg:[direction:rtl]
            "
          >
            {/* Gold Accent Ring */}
            <div
              className="
                absolute
                -top-6
                -right-6
                z-0
                h-16
                w-16
                rounded-full
                bg-gold-light/20
                backdrop-blur-[24px]
              "
            />

            {/* Teacher Card */}
            <div
              className="
                relative
                z-10
                mx-auto
                flex
                h-[530px]
                w-full
                max-w-[448px]
                flex-col
                gap-3
                rounded-design-xl
                border
                border-primary-dark/10
                bg-white
                p-4
                shadow-card
              "
            >
              {/* =================================================
                  Teacher Photo
              ================================================== */}
              <div
                className="
                  relative
                  h-[414px]
                  w-full
                  overflow-hidden
                  rounded-design-md
                  bg-surface-muted
                "
              >
                <Image
                  src="/teacher.jpg"
                  alt="الشيخ المقرئ د. عبد الرحمن المنشاوي"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 414px"
                  className="object-cover"
                />

                {/* Photo Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-primary-deep/85
                    via-primary-deep/20
                    to-transparent
                  "
                />

                {/* Live Session */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    flex
                    h-[30px]
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-primary-dark/90
                    px-3
                    py-1.5
                    backdrop-blur-[12px]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-live-dot
                    "
                  />

                  <span
                    className="
                      whitespace-nowrap
                      font-cairo
                      text-xs
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    حصة إقراء مباشرة 1:1
                  </span>
                </div>

                {/* Teacher Details */}
                <div
                  className="
                    absolute
                    right-4
                    bottom-5
                    left-4
                    text-right
                    text-white
                  "
                >
                  <h2
                    className="
                      font-cairo
                      text-lg
                      font-bold
                      leading-7
                    "
                  >
                    الشيخ المقرئ د. عبد الرحمن المنشاوي
                  </h2>

                  <p
                    className="
                      font-cairo
                      text-xs
                      font-medium
                      leading-4
                    "
                  >
                    مجاز بالقراءات العشر الصغرى والكبرى بالسند المتصل
                  </p>
                </div>
              </div>

              {/* =================================================
                  Audio Preview
                  RIGHT: PLAY BUTTON
                  LEFT: TEXT
              ================================================== */}

<div
  className="
    flex
    h-[66px]
    w-[414px]
    max-w-full
    items-center
    justify-between
    rounded-[12px]
    border
    border-border-design
    bg-surface-muted
    px-[12px]
    py-[12px]
  "
>
  {/* Play Button — RIGHT */}
  <button
    type="button"
    aria-label="استمع لنموذج التلاوة"
    className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-primary
      shadow-sm
      transition-transform
      duration-200
      hover:scale-105
    "
  >
    <Play
      size={16}
      fill="currentColor"
      strokeWidth={0}
      className="ml-0.5 text-gold-light"
    />
  </button>

  {/* Text — LEFT */}
  <div
    className="
      min-w-0
      flex-1
      pr-3
      text-right
    "
  >
    <p
      className="
        truncate
        font-cairo
        text-xs
        font-bold
        leading-4
        text-text-secondary
      "
    >
      تلاوة نموذجية بالسند
    </p>

    <p
      className="
        truncate
        font-cairo
        text-[11px]
        font-normal
        leading-[16.5px]
        text-text-muted
      "
    >
      سورة الفاتحة وماتيسر من البقرة
    </p>
  </div>
</div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <div
            className="
              flex
              flex-col
              text-right
              lg:col-start-6
              lg:col-span-7
              lg:-mt-3
              lg:[direction:rtl]
            "
          >
            {/* Badge */}
            <div
              className="
                flex
                h-[34px]
                w-fit
                items-center
                gap-2.5
                rounded-full
                border
                border-primary-dark/20
                bg-primary-dark/10
                px-4
                py-1.5
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  shrink-0
                  rounded-full
                  bg-gold
                "
              />

              <span
                className="
                  whitespace-nowrap
                  font-cairo
                  text-sm
                  font-bold
                  leading-5
                  text-primary-deep
                "
              >
                القرآن طريق المستقبل وميراث النبوة
              </span>
            </div>

            {/* Main Heading */}
            <div>
              {/* 24px top padding from badge + 25px gap */}
              <h1
                className="
                  mt-[24px]
                  font-cairo
                  text-[40px]
                  font-bold
                  leading-[48px]
                  tracking-[-1.2px]
                  text-text-primary
                "
              >
                تعليم قرآني عالمي عن بعد..
              </h1>

              {/* 25px below H1 */}
              <div className="mt-[25px]">
                <p
                  className="
                    w-[619px]
                    max-w-full
                    font-amiri
                    text-[60px]
                    font-normal
                    leading-[60px]
                    tracking-[-1.2px]
                    text-right
                    text-transparent
                    bg-gradient-to-l
                    from-primary-dark
                    to-primary-light
                    bg-clip-text
                  "
                >
                  <span className="block">
                    جلسات إقراء فردية مع نخبة من
                  </span>

                  <span className="block">
                    المقرئين المجازين
                  </span>
                </p>
              </div>
            </div>

            {/* Description — 15px below Amiri heading */}
            <div className="mt-[15px] max-w-[672px]">
              <p
                className="
                  font-cairo
                  text-[18px]
                  font-normal
                  leading-[28px]
                  text-text-body
                "
              >
                نمكّنك وأبناءك من إتقان تلاوة وحفظ وتدبر كتاب الله تعالى
                بالسند المتصل إلى رسول الله ﷺ، عبر فصول تفاعلية حية، بمواعيد
                مرنة تناسب جدول حياتك وبمناهج مدروسة.
              </p>
            </div>

            {/* =================================================
                ACTION BUTTONS
                39px below description
                TRIAL — RIGHT
                LOGIN — LEFT
            ================================================== */}
            <div
              className="
                mt-[39px]
                flex
                flex-col
                gap-4
                sm:flex-row-reverse
                sm:items-center
                sm:justify-end
                sm:gap-[81px]
              "
            >
              {/* Login — LEFT */}
              <Button
                href="/login"
                variant="outline"
                className="
                  h-[54px]
                  w-full
                  max-w-[240px]
                  px-6
                  text-[16px]
                  font-semibold
                  leading-[24px]
                "
              >
                تسجيل الدخول لمنصة الطالب
              </Button>

              {/* Trial — RIGHT */}
              <Button
                href="/trial"
                variant="primary"
                className="
                  h-[52px]
                  w-full
                  max-w-[256px]
                  justify-between
                  gap-7
                  px-2
                  pr-7
                  text-[16px]
                  font-bold
                  leading-[24px]
                  shadow-button
                "
              >
                <span className="whitespace-nowrap">
                  احجز حصة تجريبية مجانية
                </span>

                <ArrowLeft
                  size={20}
                  strokeWidth={1.67}
                  className="shrink-0"
                />
              </Button>
            </div>

            {/* =================================================
                STATS
                39px below buttons
            ================================================== */}
            <div
              className="
                mt-[39px]
                border-t
                border-border-design/80
                pt-4
              "
            >
              <div className="grid grid-cols-3 gap-6">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      flex
                      min-w-0
                      flex-col
                      gap-0.5
                      text-right
                    "
                  >
                    <span
                      className={`
                        font-cairo
                        text-2xl
                        font-extrabold
                        leading-xl
                        ${stat.valueClass}
                      `}
                    >
                      {stat.value}
                    </span>

                    <span
                      className="
                        font-cairo
                        text-xs
                        font-medium
                        leading-4
                        text-text-muted
                      "
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}