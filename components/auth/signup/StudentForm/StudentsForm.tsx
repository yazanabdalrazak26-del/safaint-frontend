'use client';

import PersonalInfo from './PersonalInfo';
import LevelsAndGoals from './LevelsAndGoals';
import Security from './Security';


export default function StudentForm() {
  
  return (
    <form dir="rtl" className="flex flex-col gap-8">

      <PersonalInfo/>
      <LevelsAndGoals/>
      <Security/>

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-design-sm bg-primary px-8 py-3.5 font-amiri text-base font-bold text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors hover:bg-primary-dark"
        >
          إنشاء حساب الطالب
        </button>
        <div className="flex items-center gap-2">
          <span className="font-amiri text-[15px] text-text-body">لديك حساب بالفعل؟</span>
          <a
            href="/signin"
            className="font-amiri text-[15px] font-bold text-primary hover:underline"
          >
            سجل دخولك
          </a>
        </div>
      </div>
    </form>
  );
}