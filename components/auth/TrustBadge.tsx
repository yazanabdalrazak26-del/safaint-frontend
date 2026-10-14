const badges = [
  {
    title: 'سند متصل معتمد',
    subtitle: 'إجازات قرآنية موثقة ومعتمدة',
    icon: (
      <svg className="h-4 w-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'ربط الحلقات الذكية',
    subtitle: 'دخول مباشر لغرف الزوم والمقرأة',
    icon: (
      <svg className="h-3.5 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
      </svg>
    ),
  },
  {
    title: 'جلسات مشفرة',
    subtitle: 'خصوصية تامة لبيانات التسميع',
    icon: (
      <svg className="h-4 w-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <div className="mx-auto w-full max-w-[620px]">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-3 rounded-design-md border border-background-green-soft bg-white/80 px-4 py-3.5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-sm"
          >
            <div className="flex flex-col items-end">
              <span className="font-amiri text-[13px] font-bold text-text-primary">
                {badge.title}
              </span>
              <span className="font-amiri text-[11px] font-bold tracking-wide text-text-body">
                {badge.subtitle}
              </span>
            </div>
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-design-full bg-background-green-soft">
              {badge.icon}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center font-amiri text-[11px] font-bold tracking-wide text-text-body">
        جميع الحقوق محفوظة © أكاديمية سفينة الإتقان لتعليم القرآن والقراءات بالسند المتصل
      </p>
    </div>
  );
}