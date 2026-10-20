export default function TrustQualitySection() {
  return (
    <section className="mx-auto w-full max-w-7xl rounded-design-xl bg-white p-8 md:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:items-center">
        {/* Card */}
        <div className="flex flex-col items-center gap-4 rounded-design-lg border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-1 pb-3">
            <span className="font-cairo text-xs text-[#775700]">
              مراجعة السند والإجازات
            </span>
            <h4 className="text-center font-amiri text-base font-bold text-[#0F4C3A]">
              توثيق كامل لكل مقرئ
            </h4>
          </div>
          <button
            type="button"
            className="w-full rounded-design-md bg-[#008744] px-5 py-3 font-cairo text-sm font-bold text-white shadow-md transition hover:bg-[#0F4C3A]"
          >
            تعرّف على معايير القبول
          </button>
        </div>

        {/* Text block */}
        <div className="flex flex-col items-end gap-3">
          <span className="rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 font-amiri text-base text-[#775700]">
            ضمان الجودة والإتقان
          </span>
          <h2 className="text-right font-amiri text-2xl font-extrabold text-[#111E17] md:text-3xl">
            منظومة تحقق متكاملة قبل وبعد الانضمام
          </h2>
          <p className="text-right font-cairo text-base leading-6 text-[#3E4A3F]/90">
            يخضع كل مقرئ ومقرئة لسلسلة دقيقة من الاختبارات التخصصية والمقابلات
            الإقرائية أمام لجان علمية معتمدة للتأكد من سلامة السند وجودة النطق
            والتمكن التربوي في إدارة الحصص الإلكترونية بمرونة وتفانٍ.
          </p>
        </div>
      </div>
    </section>
  );
}