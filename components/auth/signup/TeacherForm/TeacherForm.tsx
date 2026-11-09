
'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import AvailabilityandPassword from './AvailabilityandPassword';

import { Info, ArrowRight } from 'lucide-react';
import { registerAccount } from '@/lib/api/auth';

export default function TeacherForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const data = new FormData(form);
   const acceptTerms = data.get('acceptTerms');

    const password = String(data.get('password') || '');
    const confirmPassword = String(data.get('confirmPassword') || '');

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }


if (acceptTerms === null) {
  setError('يرجى الموافقة على الميثاق والشروط المطلوبة.');
  return;
}

    const payload = {
      role: 'teacher' as const,
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

      if (response.type === 'pending') {
        setSuccess(
          'تم إرسال طلبك بنجاح. طلبك الآن بانتظار موافقة الإدارة.'
        );
        form.reset();
      } else {
        setSuccess('تم إنشاء الحساب بنجاح.');
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
          className="flex w-full items-center justify-center gap-2 rounded-design-sm bg-primary px-8 py-3.5 font-amiri text-base font-bold text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          <ArrowRight className="h-4 w-4 text-white" strokeWidth={2.5} />

          {loading ? 'جارٍ إرسال الطلب...' : 'إرسال طلب الانضمام'}
        </button>

        <div className="flex items-center gap-2">
          <span className="font-amiri text-[15px] font-normal text-text-body">
            لديك حساب بالفعل؟
          </span>

          <a
            href="/signin"
            className="group flex items-center gap-1 font-amiri text-[15px] font-bold text-primary underline-offset-4 transition-colors hover:text-primary-dark hover:underline"
          >
            <ArrowRight className="h-3.5 w-3.5" />
            سجل دخولك
          </a>
        </div>
      </div>
    </form>
  );
}

