'use client';

import { useState } from 'react';

import TrustBadges from '@/components/auth/TrustBadge';
import StudentForm from '../../components/auth/signup/StudentForm/StudentsForm';
import TeacherForm from '../../components/auth/signup/TeacherForm/TeacherForm';
import Header from '@/components/auth/signup/Header';

export default function SignUpPage() {
  const [activeRole, setActiveRole] = useState<'teacher' | 'student'>('teacher');

  return (
    <main className="min-h-screen bg-background-soft px-4 py-20">
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-amiri text-[48px] font-bold leading-[42px] tracking-tight text-primary">
            مرحباً بك في أكاديمية سفينة الإتقان
          </h1>
          <p className="max-w-[467px] text-center font-amiri text-xl leading-[22px] text-text-body">
            بوابتك للاتصال بالسند المتصل وتعلم القرآن الكريم والقراءات العشر بإتقان
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-[896px] rounded-design-md bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          {/* Decorative Band */}
          <div className="h-2 rounded-t-design-md bg-gradient-to-l from-primary via-primary to-[#775700]" />

          <div className="flex flex-col gap-8 p-8 md:p-12">
            {/* Header */}

            <Header activeRole={activeRole}/>
            {/* Role Switcher */}
            <div className="flex justify-center gap-2 rounded-design-md bg-background-green-soft p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveRole('teacher')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-design-sm px-4 py-2.5 transition-all duration-200 ${
                  activeRole === 'teacher'
                    ? 'bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'
                    : 'hover:bg-white/50'
                }`}
              >
                <div className="flex flex-col items-end">
                  <span
                    className={`font-amiri text-base font-bold ${
                      activeRole === 'teacher' ? 'text-primary' : 'text-text-body'
                    }`}
                  >
                    المقرئ والمعلم
                  </span>
                  <span className="font-amiri text-[11px] font-bold tracking-wide text-primary-dark">
                    إدارة الحلقات ورصد السند
                  </span>
                </div>
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-design-full ${
                    activeRole === 'teacher' ? 'bg-primary/10' : 'bg-transparent'
                  }`}
                >
                  <svg className="h-3 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveRole('student')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-design-sm px-4 py-2.5 transition-all duration-200 ${
                  activeRole === 'student'
                    ? 'bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]'
                    : 'hover:bg-white/50'
                }`}
              >
                <div className="flex flex-col items-end">
                  <span
                    className={`font-amiri text-base font-bold ${
                      activeRole === 'student' ? 'text-primary' : 'text-text-body'
                    }`}
                  >
                    حساب الطالب
                  </span>
                  <span className="font-amiri text-[11px] font-bold tracking-wide text-text-muted">
                    متابعة الحفظ والحلقات
                  </span>
                </div>
                <div className="h-3 w-4 flex-shrink-0">
                  <svg
                    className={`h-full w-full ${
                      activeRole === 'student' ? 'text-primary' : 'text-text-body'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Notification */}
            

            {/* Form */}
            {activeRole === 'teacher' ? <TeacherForm /> : <StudentForm />}
          </div>
        </div>

        <TrustBadges />
      </div>
    </main>
  );
}