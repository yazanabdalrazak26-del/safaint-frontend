'use client';

import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import AvailabilityandPassword from './AvailabilityandPassword';
import { Info, ArrowRight } from 'lucide-react';

export default function TeacherForm() {
  return (
    <form dir="rtl" className="flex flex-col gap-8">
      {/* Notice banner */}
      <div className="flex items-start justify-end gap-3 rounded-design-md bg-background-green-soft p-4">
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-right font-amiri text-[15px] font-bold text-text-primary">
            ملاحظة هامة
          </span>
          <span className="text-right font-amiri text-[13px] leading-[21px] text-text-body">
            سيتم التحقق من صحة الإجازات والسند المرفق من قبل لجنة مختصة
            خلال 48 ساعة من تقديم الطلب.
          </span>
        </div>
        <div className="mt-0.5 flex-shrink-0 text-primary">
          <Info className="h-5 w-5" strokeWidth={2.2} />
        </div>
      </div>

      <PersonalInfo />
      <Experience />
      <AvailabilityandPassword />

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-design-sm bg-primary px-8 py-3.5 font-amiri text-base font-bold text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-colors hover:bg-primary-dark"
        >
          <ArrowRight className="h-4 w-4 text-white" strokeWidth={2.5} />
          إرسال طلب الانضمام
        </button>
        <div className="flex items-center gap-2">
          <span className="font-amiri text-[15px] font-normal text-text-body">
            لديك حساب بالفعل؟
          </span>
          <a
            href="/signin"
            className="group flex items-center gap-1 font-amiri text-[15px] font-bold text-primary underline-offset-4 transition-colors hover:text-primary-dark hover:underline"
          >
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            سجل دخولك
          </a>
        </div>
      </div>
    </form>
  );
}