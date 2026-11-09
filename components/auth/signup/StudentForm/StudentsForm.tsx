
'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

import PersonalInfo from './PersonalInfo';
import LevelsAndGoals from './LevelsAndGoals';
import Security from './Security';
import { registerAccount } from '@/lib/api/auth';

export default function StudentForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const password = String(data.get('password') || '');
    const confirmPassword = String(data.get('confirmPassword') || '');

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }
    if (data.get('acceptTerms') === null) {
     setError('يرجى الموافقة على الميثاق والشروط المطلوبة.');
     return;
     }
 

    const payload = {
      role: 'student' as const,
      firstName: String(data.get('firstName') || '').trim(),
      lastName: String(data.get('lastName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      password,
      gender: String(data.get('gender') || 'male') as 'male' | 'female',
      dateOfBirth: String(data.get('dateOfBirth') || ''),
      locale: 'ar' as const,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      acceptTerms: true,
      marketingOptIn: false,
      clientType: 'web' as const,
    };

    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.email ||
      !payload.phone ||
      !payload.dateOfBirth
    ) {
      setError('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    try {
      setLoading(true);

      const response = await registerAccount(payload);

      if (response.type === 'created') {
        setSuccess('تم إنشاء حسابك بنجاح!');
        // لا نخزّن التوكن في localStorage.
        // نكمل إعداد جلسة الدخول بعد تحديد آلية المصادقة.
        form.reset();
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'حدث خطأ غير متوقع.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <PersonalInfo />
      <LevelsAndGoals />
      <Security />

      {error && (
        <p
          role="alert"
          className="rounded-design-sm bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      {success && (
        <p
          role="status"
          className="rounded-design-sm bg-green-50 p-3 text-sm text-primary"
        >
          {success}
        </p>
      )}

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-design-sm bg-primary px-8 py-3.5 font-amiri text-base font-bold text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'جارٍ إنشاء الحساب...' : 'إنشاء حساب الطالب'}
        </button>

        <div className="flex items-center gap-2">
          <span className="font-amiri text-[15px] text-text-body">
            لديك حساب بالفعل؟
          </span>

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
