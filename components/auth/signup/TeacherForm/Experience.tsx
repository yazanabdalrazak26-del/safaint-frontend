'use client';

import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  GraduationCap,
  Upload,
  FileText,
  Check,
} from 'lucide-react';

const experienceLevels = [
  { value: '1-3', label: '1-3 سنوات', sublabel: 'خبرة مبتدئة' },
  { value: '3-5', label: '3-5 سنوات', sublabel: 'خبرة متوسطة' },
  { value: '5-10', label: '5-10 سنوات', sublabel: 'خبرة متقدمة' },
  { value: '10+', label: '+10 سنوات', sublabel: 'خبرة خبير' },
];

const ijazahs = [
  { id: 'hafs', label: 'إجازة برواية حفص عن عاصم', sublabel: 'السند المتصل' },
  { id: 'warsh', label: 'إجازة برواية ورش عن نافع', sublabel: 'السند المتصل' },
  { id: 'qiraat', label: 'إجازة بالقراءات العشر', sublabel: 'السند المتصل' },
  { id: 'tajweed', label: 'شهادة في التجويد والعلوم', sublabel: 'معتمدة' },
];

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('5-10');
  const [selectedIjazahs, setSelectedIjazahs] = useState<string[]>(['hafs', 'qiraat']);

  const toggleIjazah = (id: string) => {
    setSelectedIjazahs((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <fieldset dir="rtl" className="flex flex-col gap-4 rounded-design-md bg-background-green-soft p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-design-full bg-[rgba(255,223,160,0.4)] px-2.5 py-1 font-amiri text-[11px] font-bold tracking-wide text-[#775700]">
          <Sparkles className="h-3 w-3 text-[#775700]" strokeWidth={2.5} />
          قسم مميز
        </span>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <legend className="font-amiri text-xl font-bold text-text-primary">
              الخبرات التعليمية والإجازات
            </legend>
            <span className="font-amiri text-[13px] text-text-body">
              يرجى تحديد الإجازات التي تحملها بدقة
            </span>
          </div>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-design-full bg-[#946F0F] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
            <GraduationCap className="h-4 w-4 text-white" strokeWidth={2.2} />
          </span>
        </div>
      </div>

      {/* Years of Experience */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center justify-end gap-1">
          <span className="font-amiri text-sm font-semibold text-text-primary">
            سنوات الخبرة في التعليم
          </span>
          <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {experienceLevels.map((level) => (
            <button
              key={level.value}
              type="button"
              onClick={() => setSelectedExperience(level.value)}
              className={`flex flex-col items-center justify-center gap-0 rounded-design-sm p-3 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all ${
                selectedExperience === level.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-primary hover:bg-white/80'
              }`}
            >
              <span className="font-amiri text-[15px] font-bold">{level.label}</span>
              <span
                className={`font-amiri text-[11px] ${
                  selectedExperience === level.value
                    ? 'text-white/80'
                    : 'text-text-primary/80'
                }`}
              >
                {level.sublabel}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Ijazahs */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-amiri text-[11px] font-bold tracking-wide text-primary">
            تحديد متعدد
          </span>
          <label className="flex items-center gap-1">
            <span className="font-amiri text-sm font-semibold text-text-primary">
              الإجازات القرآنية الحاصل عليها
            </span>
            <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {ijazahs.map((ijazah) => {
            const checked = selectedIjazahs.includes(ijazah.id);
            return (
              <button
                key={ijazah.id}
                type="button"
                onClick={() => toggleIjazah(ijazah.id)}
                className={`flex items-center justify-end gap-3 rounded-design-sm p-3 text-right shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all ${
                  checked
                    ? 'bg-primary/10 ring-1 ring-primary/30'
                    : 'bg-white hover:bg-white/80'
                }`}
              >
                <div className="flex flex-col items-end">
                  <span className="font-amiri text-[15px] font-bold text-text-primary">
                    {ijazah.label}
                  </span>
                  <span className="font-amiri text-[11px] font-bold tracking-wide text-text-body">
                    {ijazah.sublabel}
                  </span>
                </div>
                <span
                  className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-[2.5px] ${
                    checked ? 'bg-primary' : 'border border-[#767676] bg-white'
                  }`}
                >
                  {checked && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sanad Chain */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-amiri text-[11px] font-bold tracking-wide text-text-muted">
            اختياري
          </span>
          <label className="font-amiri text-sm font-semibold text-text-primary">
            تفاصيل السند المتصل بالنبي ﷺ
          </label>
        </div>
        <textarea
          rows={3}
          placeholder="اذكر سلسلة الشيوخ والإجازات بالتفصيل..."
          className="w-full resize-none rounded-design-sm bg-white px-3 py-3 text-right font-amiri text-[15px] leading-6 text-text-primary shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Teaching Experience */}
      <div className="flex flex-col gap-1.5">
        <label className="text-right font-amiri text-sm font-semibold text-text-primary">
          ملخص الخبرة التعليمية السابقة
        </label>
        <textarea
          rows={3}
          placeholder="اذكر خبراتك في التدريس والحلقات القرآنية..."
          className="w-full resize-none rounded-design-sm bg-white px-3 py-3 text-right font-amiri text-[15px] leading-6 text-text-primary shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Upload */}
      <div className="flex flex-col gap-1.5">
        <label className="text-right font-amiri text-sm font-semibold text-text-primary">
          إرفاق الشهادات والإجازات (PDF / صور)
        </label>
        <div className="flex flex-col items-center justify-center gap-2 rounded-design-md bg-white p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-design-full bg-primary/10">
            <Upload className="h-5 w-5 text-primary" strokeWidth={2.2} />
          </div>
          <span className="font-amiri text-[15px] font-bold text-text-primary">
            اسحب الملفات هنا أو اضغط للرفع
          </span>
          <span className="font-amiri text-[11px] font-bold tracking-wide text-text-body">
            الحد الأقصى 10 ميجابايت لكل ملف
          </span>
          <span className="mt-1 flex items-center gap-1.5 rounded-design-full bg-background-green-soft px-3 py-1 font-amiri text-[11px] text-text-body">
            <FileText className="h-3 w-3 text-text-body" strokeWidth={2.2} />
            صيغ مدعومة: PDF, JPG, PNG
          </span>
        </div>
      </div>
    </fieldset>
  );
}

export default Experience;