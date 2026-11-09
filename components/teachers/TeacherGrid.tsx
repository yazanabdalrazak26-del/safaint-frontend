
import { teachers } from '@/lib/teacherData';
import TeacherCard from './TeacherCard';

export default function TeachersGrid() {
  return (
    <section className="w-full px-8 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* Sub-info row */}
        <div className="mb-6 flex flex-col-reverse items-center justify-between gap-2 md:flex-row">
          <p className="font-cairo text-sm font-bold text-[#0F4C3A]">
            عرض <span className="font-bold">1</span> -{' '}
            <span className="font-bold">16</span> من{' '}
            <span className="font-bold">64</span> معلم
          </p>
          <p className="font-cairo text-xs text-gray-500">
            يتم تحديث النتائج تلقائياً بناءً على التصفية المحددة
          </p>
        </div>

        {/* 4x4 Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}