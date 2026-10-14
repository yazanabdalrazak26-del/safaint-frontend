import React from 'react';

function PersonalInfo() {
    // will chnage when add custome input component
  const inputClass =
    'w-full rounded-design-sm bg-background-green-soft px-4 py-3 font-amiri text-base text-text-primary shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30';

  return (
    <fieldset dir="rtl" className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-border-design pb-2">
        <span className="font-amiri text-[11px] font-bold uppercase tracking-wide text-text-muted">
          القسم الأول
        </span>
        <div className="flex items-center gap-2">
          <legend className="font-amiri text-xl font-bold text-text-primary">
            المعلومات الشخصية
          </legend>
          <span className="flex h-7 w-7 items-center justify-center rounded-design-full bg-primary font-sans text-sm font-bold text-white">
            1
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              الاسم الكامل
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <input
            type="text"
            placeholder="أدخل اسمك كما تريد أن يظهر في الحلقات"
            className={`${inputClass} text-right`}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              البريد الإلكتروني
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <input
            type="email"
            dir="ltr"
            placeholder="student@example.com"
            className={`${inputClass} text-left`}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              رقم الهاتف
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <input
            type="tel"
            dir="ltr"
            placeholder="+966 50 000 0000"
            className={`${inputClass} text-left`}
          />
        </div>

        {/* Age */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              العمر
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <input
            type="number"
            placeholder="مثال: 12"
            className={`${inputClass} text-right`}
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center justify-end gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              الجنس
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
          <div className="flex gap-2">
            <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-design-sm bg-primary/10 px-4 py-2 transition-all">
              <span className="font-amiri text-[15px] font-semibold text-primary-dark">
                أنثى
              </span>
              <input type="radio" name="gender" className="h-3.5 w-3.5 accent-primary" />
            </label>
            <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-design-sm bg-background-green-soft px-4 py-2 transition-all">
              <span className="font-amiri text-[15px] font-semibold text-text-primary">
                ذكر
              </span>
              <input
                type="radio"
                name="gender"
                defaultChecked
                className="h-3.5 w-3.5 accent-primary"
              />
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default PersonalInfo;