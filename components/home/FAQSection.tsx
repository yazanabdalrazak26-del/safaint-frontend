import { faqItems } from "@/data/homeData";

import FAQItem from "./FAQItem";

export default function FAQSection() {
  return (
    <section
      id="faq"
      dir="rtl"
      className="
        border-t
        border-primary/15
       bg-background-soft
        py-12
        font-cairo
        sm:py-16
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[896px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* عنوان القسم */}
        <header
          className="
            flex
            w-full
            flex-col
            items-center
            gap-2
            pt-[3px]
            text-center
          "
        >
          <span
            className="
              font-cairo
              text-sm
              font-extrabold
              leading-5
              tracking-[0.7px]
              text-gold-dark
            "
          >
            كل ما تود معرفته
          </span>

          <h2
            className="
              font-cairo
              text-[30px]
              font-black
              leading-10
              text-text-primary
              sm:text-[36px]
            "
          >
            الأسئلة الشائعة
          </h2>

          <p
            className="
              font-cairo
              text-sm
              font-normal
              leading-6
              text-text-body
              sm:text-base
            "
          >
            إجابات وافية ومباشرة حول منهجية التحفيظ وأحكام التجويد والبرامج
          </p>
        </header>

        {/* الأسئلة */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            lg:mt-12
          "
        >
          {faqItems.map((item) => (
            <FAQItem
              key={item.question}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}