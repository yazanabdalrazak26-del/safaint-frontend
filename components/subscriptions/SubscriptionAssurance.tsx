import {
  GraduationCap,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const assurances = [
  {
    title: "مشايخ ومقرئون مجازون",
    description:
      "أساتذة معتمدون بخبرة طويلة في التعليم والتحفيظ القرآني.",
    icon: GraduationCap,
  },
  {
    title: "مرونة المواعيد",
    description:
      "اختر الأوقات التي تناسب جدولك اليومي وفارق توقيت بلدك.",
    icon: Clock3,
  },
  {
    title: "ضمان الرضا 14 يوماً",
    description:
      "استرداد كامل الرسوم حال عدم الرضا وفق شروط سياسة الاسترداد.",
    icon: ShieldCheck,
  },
];

export default function SubscriptionAssurance() {
  return (
    <section
      aria-label="مميزات الاشتراك"
      dir="rtl"
      className="
        mx-auto grid w-full max-w-[848px]
        grid-cols-1 gap-6 rounded-design-lg
        border border-primary-dark/5 bg-white
        p-6 shadow-sm
        sm:p-8
        md:grid-cols-3 md:gap-5
      "
    >
      {assurances.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-start gap-3.5"
          >
            <Icon
              aria-hidden="true"
              className="mt-1 size-6 shrink-0 text-primary-dark"
              strokeWidth={1.7}
            />

            <div className="min-w-0">
              <h3 className="font-amiri text-sm font-bold leading-5 text-[#092E1D]">
                {item.title}
              </h3>

              <p className="mt-1 font-amiri text-xs leading-[19.5px] text-[#526A5C]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}