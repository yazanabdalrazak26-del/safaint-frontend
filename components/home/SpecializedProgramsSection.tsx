import {
  BadgeCheck,
  BookOpen,
  BookMarked,
} from "lucide-react";

import ProgramCard from "./ProgramCard";

const programs = [
  {
    title: "مسار تحفيظ القرآن",
    description:
      "خطة تدريجية لحفظ كتاب الله كاملاً أو أجزاء منه، مع ضبط المتشابهات اللفظية والربط الموضوعي والمراجعة اليومية الراسخة.",
    features: [
      "جلسات 3 أو 5 أيام أسبوعياً",
      "جدول مراجعة تلقائي رقمي",
      "اختبار دوري لكل 5 أجزاء",
    ],
    buttonText: "انضم لمسار الحفظ",
    href: "/programs/hifz",
    icon: BookOpen,
  },
  {
    title: "مسار تصحيح التلاوة",
    description:
      "تحسين القراءة والنطق والأداء بثقة وإتقان.",
    features: [
      "روايات: حفص، ورش، قالون وغيرها",
      "دراسة متن الجزرية وتحفة الأطفال",
      "شهادة موثقة ومعتمدة دولياً",
    ],
    buttonText: "التسجيل لمسار التلاوة",
    href: "/programs/recitation",
    icon: BadgeCheck,
    highlighted: true,
  },
  {
    title: "مسار أحكام التجويد",
    description:
      "تعليم مبسط وسلس لقواعد أحكام التجويد وتطبيقاتها العملية.",
    features: [
      "تعليم مبسط",
      "تطبيق عملي",
      "شهادة موثقة ومعتمدة دولياً",
    ],
    buttonText: "ابدأ مسار أحكام التجويد",
    href: "/programs/tajweed",
    icon: BookMarked,
  },
];

export default function SpecializedProgramsSection() {
  return (
    <section
      id="programs"
      dir="rtl"
      className="
        bg-background-soft
        py-8
        font-cairo
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[619px]
          w-full
          max-w-[1280px]
          flex-col
          gap-12
          px-8
        "
      >
        {/* Section Header */}
        <header
          className="
            mx-auto
            flex
            w-full
            max-w-[768px]
            flex-col
            items-center
            gap-[9px]
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
            برامج تعليمية متخصصة
          </span>

          <h2
            className="
              font-cairo
              text-[36px]
              font-extrabold
              leading-10
              text-text-primary
            "
          >
            مسارات التعلم المتخصصة مع معلمين مجازين
          </h2>

          <p
            className="
              max-w-[581px]
              font-cairo
              text-base
              font-normal
              leading-6
              text-text-body
            "
          >
            خطط منهجية محددة التوقيت والأهداف تناسب الكبار والناشئة،
            تحت إشراف معلمين مجازين.
          </p>
        </header>

        {/* Programs Grid */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}