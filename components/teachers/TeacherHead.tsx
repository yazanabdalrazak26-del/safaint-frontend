export default function TeachersHeader() {
  return (
    <section className="w-full border-b border-gray-100 bg-gradient-to-b from-white via-[#EDF7F2]/40 to-[#F8FAF9] py-10 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8">
        <h1 className="text-center font-amiri text-3xl font-bold leading-tight text-[#0D3D2F] md:text-5xl">
          نخبة المعلمين والمقرئين المُجازين بالسند المتصل
        </h1>
        <p className="max-w-3xl text-center font-cairo text-base leading-7 text-text-body md:text-xl md:leading-8">
          معلمون ومعلمات ذوو كفاءة عالية وخبرة تربوية متخصصة في الإقراء وضبط
          المتون وإتقان التجويد، مؤهلون لتعليم الكبار والناشئة وفق أعلى معايير
          الضبط والتدقيق.
        </p>
      </div>
    </section>
  );
}