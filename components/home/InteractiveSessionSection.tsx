import SessionRoadmapCard from "./SessionRoadmapCard";

import { academyBenefits } from "@/data/homeData";

export default function InteractiveSessionSection() {
  return (
    <section
      id="interactive-session"
      dir="rtl"
      className="
        bg-background-soft
        py-12
        font-cairo
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1216px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        <div
          dir="ltr"
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[7fr_5fr]
            lg:gap-10
          "
        >
          {/* =====================================================
              LEFT — Interactive Session Roadmap
              ===================================================== */}
          <div
            dir="rtl"
            className="
              order-2
              min-w-0
              lg:order-1
            "
          >
            <SessionRoadmapCard />
          </div>

          {/* =====================================================
              RIGHT — Academy Explanation
              ===================================================== */}
          <div
            dir="rtl"
            className="
              order-1
              flex
              min-w-0
              flex-col
              gap-6
              pt-1
              text-right
              lg:order-2
            "
          >
            {/* Eyebrow */}
            <span
              className="
                font-cairo
                text-base
                font-extrabold
                leading-5
                tracking-[0.7px]
                text-gold-dark
              "
            >
              منظومة أكاديمية رائدة
            </span>

            {/* Heading */}
            <h2
              className="
                max-w-[531px]
                font-cairo
                text-[32px]
                font-bold
                leading-[1.4]
                text-text-primary
                sm:text-[36px]
                sm:leading-[50px]
              "
            >
              نظام تعليمي متكامل يرتقي بتلاوتك وحفظك من راحة منزلك
            </h2>

            {/* Description */}
            <p
              className="
                max-w-[483px]
                font-cairo
                text-base
                font-normal
                leading-6
                text-text-body
              "
            >
              لا نعتمد على الترديد العشوائي، بل نوفر منظومة تربوية دقيقة تقيس كل
              خطوة في مسيرة الطالب، وتضمن ثبات المحفوظ وحسن تدبره وتجويده.
            </p>

            {/* Benefits */}
            <ul
              className="
                flex
                flex-col
                gap-3
                pt-2
              "
            >
              {academyBenefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="
                    flex
                    items-center
                    justify-start
                    gap-3
                    text-right
                  "
                >
                  {/* Number — RIGHT */}
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      font-cairo
                      text-xs
                      font-bold
                      leading-4
                      text-white
                    "
                  >
                    {index + 1}
                  </span>

                  {/* Text — LEFT */}
                  <span
                    className="
                      font-cairo
                      text-sm
                      font-medium
                      leading-5
                      text-text-secondary
                    "
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}