'use client';

import TrustBadges from '@/components/auth/TrustBadge';
import { useState } from 'react';
import { GraduationCap, User, Info } from 'lucide-react';
import SignInForm from '../../components/auth/signin/SignInForm';

export default function SignInPage() {
  const [activeRole, setActiveRole] = useState<'student' | 'teacher'>('student');

  return (
    <main className="min-h-screen bg-background-soft px-4 py-20">
      <div className="mx-auto flex max-w-[620px] flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-amiri text-[56px] font-bold leading-20 tracking-tight text-primary">
            مرحباً بك في أكاديمية سفينة الإتقان
          </h1>
          <p className="max-w-[467px] text-center font-amiri text-2xl leading-[30px] text-text-body">
            بوابتك للاتصال بالسند المتصل وتعلم القرآن الكريم والقراءات العشر بإتقان
          </p>
        </div>

        {/* Sign In Card */}
        <div className="w-full rounded-design-md bg-white p-6 shadow-[0px_12px_36px_-6px_rgba(11,83,54,0.08),0px_4px_16px_-2px_rgba(11,83,54,0.04)] md:p-8">
          <div className="flex flex-col gap-6">
            {/* Role Switcher */}
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2 rounded-design-md bg-background-green-soft p-1.5">
                {/* Teacher Tab */}
                <button
                  type="button"
                  onClick={() => setActiveRole('teacher')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-design-sm px-4 py-3 transition-all ${
                    activeRole === 'teacher'
                      ? 'bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'
                      : ''
                  }`}
                >
                  <div className="flex flex-col items-end">
                    <span
                      className={`font-amiri text-lg font-bold ${
                        activeRole === 'teacher' ? 'text-primary' : 'text-text-body'
                      }`}
                    >
                      المقرئ والمعلم
                    </span>
                    <span className="font-amiri text-[13px] font-bold tracking-wide text-text-body">
                      إدارة الحلقات ورصد السند
                    </span>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-design-sm bg-background-green-soft">
                    <GraduationCap className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                </button>

                {/* Student Tab */}
                <button
                  type="button"
                  onClick={() => setActiveRole('student')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-design-sm px-4 py-3 transition-all ${
                    activeRole === 'student'
                      ? 'bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'
                      : ''
                  }`}
                >
                  <div className="flex flex-col items-end">
                    <span
                      className={`font-amiri text-lg font-bold ${
                        activeRole === 'student' ? 'text-primary' : 'text-text-body'
                      }`}
                    >
                      حساب الطالب
                    </span>
                    <span className="font-amiri text-[13px] font-bold tracking-wide text-text-body">
                      متابعة الحفظ والحلقات
                    </span>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-design-sm bg-background-green-soft">
                    <User className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                </button>
              </div>

              {/* Dynamic subtext */}
              <div className="flex items-center justify-end gap-2 rounded-design-sm bg-[#EDFEF1] px-3 py-2.5">
                <span className="text-right font-amiri text-[15px] text-primary-dark">
                  {activeRole === 'student'
                    ? 'تسجيل دخول الطلاب المستمرين وأصحاب خطط الحفظ والإجازة.'
                    : 'تسجيل دخول المقرئين والمعلمين لإدارة الحلقات ورصد الإجازات.'}
                </span>
                <Info className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
              </div>
            </div>

            <SignInForm role={activeRole} />
          </div>
        </div>

        <TrustBadges />
      </div>
    </main>
  );
}