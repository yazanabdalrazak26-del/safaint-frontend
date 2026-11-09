import { academyFeatures } from "@/data/homeData";
import FeatureCard from "./FeatureCard";

export default function AcademyFeaturesSection() {
  return (
    <section
      id="academy-features"
      dir="rtl"
      className="
        border-t
        border-primary-dark/10
        bg-background-feature/60
        py-12
        font-cairo
        sm:py-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-8
        "
      >
        {/* عنوان القسم */}
        <header
          className="
            mx-auto
            flex
            max-w-[672px]
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
            لماذا أكاديمية القرآن؟
          </span>

          <h2
            className="
              font-cairo
              text-[28px]
              font-extrabold
              leading-tight
              text-text-primary
              sm:text-3xl
              lg:text-[36px]
              lg:leading-10
            "
          >
            أركان الأكاديمية ومميزاتها الحصرية
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
            صممت كل تفصيلة لتمنحك ولأسرتك بيئة إيمانية علمية رصينة ومريحة
          </p>
        </header>

        {/* شبكة المميزات: عمودان وصفّان على الشاشات الواسعة */}
        <div
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-[1024px]
            grid-cols-1
            gap-6
            sm:gap-8
            md:grid-cols-2
            lg:mt-12
            lg:grid-cols-2
            lg:gap-x-8
            lg:gap-y-8
          "
        >
          {academyFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}