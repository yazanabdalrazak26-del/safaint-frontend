import { communityTestimonial } from "@/data/homeData";
import Button from "@/components/ui/Button";
import TestimonialCard from "./TestimonialCard";

export default function CommunitySection() {
  return (
    <section
      id="community"
      dir="ltr"
      className="
        border-t
        border-primary/15
        bg-background-community
        py-16
        font-cairo
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1283px]
          grid-cols-1
          gap-12
          px-4
          sm:px-8
          lg:grid-cols-[minmax(0,617.5px)_minmax(0,617.5px)]
          lg:gap-12
        "
      >
        {/* LEFT — Testimonial */}
        <div
          dir="ltr"
          className="
            flex
            min-h-[331px]
            items-center
            justify-center
            lg:justify-start
          "
        >
          <TestimonialCard testimonial={communityTestimonial} />
        </div>

        {/* RIGHT — CTA */}
        <div
          dir="rtl"
          className="
            flex
            flex-col
            items-start
            justify-center
            text-right
            lg:min-h-[292px]
          "
        >
          {/* Eyebrow */}
          <span
            className="
              pt-[3px]
              font-cairo
              text-sm
              font-extrabold
              leading-5
              tracking-[0.7px]
              text-gold-dark
            "
          >
            مجتمع قرآني مبارك
          </span>

          {/* Heading */}
          <h2
            className="
              mt-2
              max-w-[618px]
              font-cairo
              text-[30px]
              font-extrabold
              leading-10
              text-text-primary
              sm:text-[36px]
            "
          >
            انضم لأكثر من 15,000 طالب وطالبة
            <br className="hidden sm:block" />
            يحفظون كتاب الله بثقة وسرور
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[544px]
              font-cairo
              text-base
              font-normal
              leading-[26px]
              text-text-body
            "
          >
            نفخر بأن نكون الجسر الإيماني الذي يربط المسلمين في مشارق الأرض
            ومغاربها بالقرآن الكريم، بأسلوب عصري يجمع بين الأصالة الشرعية
            والتقنية المتطورة.
          </p>

          {/* CTA */}
          <div
            className="
              mt-6
              flex
              w-full
              flex-col
              items-start
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <Button
              href="/trial"
              variant="gold"
              className="
                h-14
                rounded-xl
                px-8
                text-base
                font-black
                text-primary-deep
                shadow-[0_4px_6px_-4px_rgba(212,175,55,0.2),0_10px_15px_-3px_rgba(212,175,55,0.2)]
              "
            >
              ابدأ تجربتك المجانية اليوم
            </Button>

            <span
              className="
                font-cairo
                text-xs
                font-normal
                leading-4
                text-text-muted
              "
            >
              ✓ بدون بطاقة بنكية • حصة تقييم مجانية 30 دقيقة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}