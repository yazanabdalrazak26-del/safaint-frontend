import { subscriptionPlans } from "@/data/subscriptionPlans";
import SubscriptionPlanCard from "@/components/subscriptions/SubscriptionPlanCard";
import SubscriptionAssurance from "@/components/subscriptions/SubscriptionAssurance";

export default function SubscriptionsPage() {
  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        overflow-hidden
        bg-background-soft
        pb-16
        font-amiri
        text-text-primary
      "
    >
      {/* Page Hero */}
      <section
        aria-labelledby="subscriptions-title"
        className="
          mx-auto flex w-full max-w-[896px]
          flex-col items-center gap-[31px]
          px-6 pb-12 pt-14 text-center
          sm:pt-[66px]
        "
      >
        <h1
          id="subscriptions-title"
          className="
            pt-2 font-amiri text-4xl font-bold
            leading-10 tracking-[-0.9px]
            text-[#092E1D]
            sm:text-5xl
          "
        >
          باقات الاشتراك
        </h1>

        <p
          className="
            mx-auto max-w-[672px]
            font-amiri text-xl font-normal
            leading-[1.65] text-[#465D50]
            sm:text-[25px] sm:leading-[41px]
          "
        >
          اختر الباقة الأنسب لرحلتك القرآنية أو رحلة أبنائك؛
          جلسات فردية مباشرة مع نخبة من المقرئين والمقرئات المجازين.
        </p>
      </section>

      {/* Subscription Plans */}
      <section
        aria-label="باقات الاشتراك المتاحة"
        className="
          mx-auto w-full max-w-[1152px]
          px-4 sm:px-6 lg:px-6
        "
      >
        <div
          className="
            mx-auto grid w-full max-w-[1104px]
            grid-cols-1 items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-3 lg:gap-5
          "
        >
          {subscriptionPlans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </section>

      {/* Assurance / Benefits */}
      <div className="mx-auto mt-12 w-full px-4 sm:px-6">
        <SubscriptionAssurance />
      </div>
    </main>
  );
}