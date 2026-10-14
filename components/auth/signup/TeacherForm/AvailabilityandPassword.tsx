'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const availabilityOptions = [
  { value: 'morning', label: 'صباحاً', sublabel: '8 ص - 12 م' },
  { value: 'afternoon', label: 'ظهراً', sublabel: '12 م - 5 م' },
  { value: 'evening', label: 'مساءً', sublabel: '5 م - 10 م' },
];

function AvailabilityandPassword() {
  const [selectedAvailability, setSelectedAvailability] = useState('evening');
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputClass =
    'w-full rounded-design-sm bg-background-green-soft px-4 py-3 font-amiri text-base text-text-primary shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30';

  return (
    <fieldset dir="rtl" className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-border-design pb-2">
        <span className="font-amiri text-[11px] font-bold uppercase tracking-wide text-text-muted">
          القسم الثالث
        </span>
        <div className="flex items-center gap-2">
          <legend className="font-amiri text-xl font-bold text-text-primary">
            التفرغ والأمان
          </legend>
          <span className="flex h-7 w-7 items-center justify-center rounded-design-full bg-primary font-sans text-sm font-bold text-white">
            3
          </span>
        </div>
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center justify-end gap-1">
          <span className="font-amiri text-sm font-semibold text-text-primary">
            فترة التفرغ المفضلة
          </span>
          <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {availabilityOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedAvailability(opt.value)}
              className={`flex items-center justify-center gap-2 rounded-design-sm p-3 transition-all ${
                selectedAvailability === opt.value
                  ? 'bg-primary/10 ring-1 ring-primary/30'
                  : 'bg-background-green-soft'
              }`}
            >
              <span
                className={`flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full ${
                  selectedAvailability === opt.value
                    ? 'border border-primary bg-primary'
                    : 'border border-[#767676] bg-white'
                }`}
              >
                {selectedAvailability === opt.value && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <div className="flex flex-col items-end">
                <span className="font-amiri text-[15px] font-bold text-text-primary">
                  {opt.label}
                </span>
                <span className="font-amiri text-[11px] text-text-muted">
                  {opt.sublabel}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Password */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              كلمة المرور
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              className={`${inputClass} pl-10 text-left`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-primary"
              aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Eye className="h-4 w-4" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              تأكيد كلمة المرور
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              className={`${inputClass} pl-10 text-left`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-primary"
              aria-label={showConfirmPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Eye className="h-4 w-4" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Agreement */}
      <label className="flex cursor-pointer items-center justify-end gap-4 rounded-design-md bg-background-green-soft p-4">
        <span className="font-amiri text-[13px] leading-[21px] text-text-primary">
          أوافق على{' '}
          <span className="font-amiri font-semibold text-primary">
            ميثاق شرف معلمي القرآن بالأكاديمية
          </span>{' '}
          وأتعهد بالالتزام بمعايير الجودة والأمانة في التعليم.
        </span>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-5 w-5 flex-shrink-0 accent-primary"
        />
      </label>
    </fieldset>
  );
}

export default AvailabilityandPassword;