'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus, ArrowLeft } from 'lucide-react';

export default function SignInForm({ role }: { role: 'student' | 'teacher' }) {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputClass =
    'w-full rounded-design-sm bg-background-green-soft px-4 py-3 font-amiri text-lg text-text-primary transition-all placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30';

  const isStudent = role === 'student';

  return (
    <form dir="rtl" className="flex flex-col gap-4">
      {/* Identifier */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="font-amiri text-base font-bold text-text-primary">
            {isStudent
              ? 'البريد الإلكتروني أو الرقم الأكاديمي للطالب'
              : 'البريد الإلكتروني الرسمي'}
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            dir="ltr"
            placeholder={isStudent ? 'student@example.com' : 'teacher@itqan-academy.com'}
            className={`${inputClass} pl-11 text-left`}
          />
          <Mail
            className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted"
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-amiri text-base font-bold text-text-primary">
            كلمة المرور
          </span>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••••••"
            className={`${inputClass} pl-11 text-left`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-primary"
            aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Eye className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between pt-1">
        <a
          href="#"
          className="font-amiri text-sm tracking-wide text-primary-dark transition-colors hover:text-primary hover:underline"
        >
          نسيت كلمة المرور؟
        </a>
        <label className="flex cursor-pointer items-center gap-2">
          <span className="font-amiri text-sm text-text-body">
            تذكر تسجيل دخولي في هذه الجلسة
          </span>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 flex w-full items-center justify-center gap-3 rounded-design-sm bg-primary px-6 py-3.5 font-amiri text-lg font-bold text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors hover:bg-primary-dark"
      >
        <LogIn className="h-5 w-5 text-white" strokeWidth={2.2} />
        {isStudent
          ? 'تسجيل الدخول إلى منصة الطالب'
          : 'تسجيل الدخول إلى منصة المعلم'}
      </button>

      {/* Dynamic registration footer */}
      <div className="mt-4 flex flex-col items-center gap-2.5 rounded-design-md bg-background-green-soft/60 p-5">
        <div className="flex items-center gap-2">
          <span className="font-amiri text-sm text-text-body">
            {isStudent
              ? 'طالب جديد وتريد الانضمام للأكاديمية؟'
              : 'معلم جديد وتريد الانضمام للأكاديمية؟'}
          </span>
          <a
            href="/signup"
            className="group flex items-center gap-1 font-amiri text-base font-bold text-primary-dark underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {isStudent ? 'إنشاء حساب' : 'قدّم طلب انضمامك الآن'}
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </form>
  );
}