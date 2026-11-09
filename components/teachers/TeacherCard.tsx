import { Teacher } from '@/lib/teacherData';
import { Star, ShieldCheck } from 'lucide-react';

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="relative flex flex-col rounded-design-lg border border-gray-200/90 bg-white p-5 transition-shadow hover:shadow-lg">
      {/* Top row: rating + badge */}
      <div className="flex items-center justify-between pb-3">
        {/* Badge */}
        <div className="flex items-center gap-1.5 rounded-full border border-[#B1DCC6] bg-[#EDF7F2] px-3 py-1">
          <ShieldCheck className="h-3 w-3 text-[#00753B]" />
          <span className="font-cairo text-[11px] font-bold text-[#0F4C3A]">
            {teacher.badge}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="font-cairo text-xs font-extrabold text-amber-600">
            {teacher.rating}
          </span>
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          <span className="font-cairo text-xs text-gray-400">
            ({teacher.reviews})
          </span>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex justify-center py-3">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0F4C3A] to-[#008744] p-0.5 shadow-md">
            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-slate-200">
              <span className="font-amiri text-3xl font-bold text-[#0D3D2F]">
                {teacher.initials}
              </span>
            </div>
          </div>
          {teacher.isOnline && (
            <span className="absolute bottom-1 left-1 h-4 w-4 rounded-full border-2 border-white bg-[#10B981]" />
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-center font-cairo text-base font-bold text-gray-900">
        {teacher.name}
      </h3>

      {/* Specialty */}
      <p className="mt-1 text-center font-cairo text-xs font-medium text-[#0F4C3A]">
        {teacher.specialty}
      </p>

      {/* Stats */}
      <div className="my-3 flex items-center justify-center gap-3 rounded-design-sm bg-gray-50 px-3 py-2">
        <p className="font-cairo text-xs text-gray-500">
          <span className="font-normal">دورة</span>{' '}
          <strong className="font-bold">{teacher.sessions}</strong>
        </p>
        <span className="h-1 w-1 rounded-full bg-gray-300" />
        <p className="font-cairo text-xs text-gray-500">
          <span className="font-normal">طالب</span>{' '}
          <strong className="font-bold">{teacher.students}</strong>
        </p>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="w-full rounded-design-md bg-[#008744] py-2.5 font-cairo text-xs font-bold text-white transition-colors hover:bg-[#0F4C3A]"
      >
        احجز جلسة
      </button>
    </article>
  );
}