'use client';

import React, { useState } from 'react';
import { Sparkles, GraduationCap, Check } from 'lucide-react';

const levels = [
  { value: 'beginner', label: 'مبتدئ', sublabel: 'القاعدة النورانية' },
  { value: 'intermediate', label: 'متوسط', sublabel: 'حفظ وتلاوة' },
  { value: 'advanced', label: 'متقدم', sublabel: 'إجازة بالسند' },
];

const goals = [
  { id: 'hifz', label: 'حفظ القرآن الكريم كاملاً' },
  { id: 'tajweed', label: 'إتقان أحكام التجويد' },
  { id: 'ijazah', label: 'الحصول على إجازة بالسند' },
  { id: 'tilawah', label: 'تصحيح التلاوة' },
];

function LevelsAndGoals() {
  const [level, setLevel] = useState('beginner');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['hifz', 'tajweed']);

  const toggleGoal = (id: string) =>
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );

  return (
    <fieldset dir="rtl" className="flex flex-col gap-4 rounded-design-md bg-background-green-soft p-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-primary/15 pb-2">
        <span className="flex items-center gap-1 rounded-design-full bg-[rgba(255,223,160,0.4)] px-2.5 py-1 font-amiri text-[11px] font-bold tracking-wide text-[#775700]">
          <Sparkles className="h-3 w-3 text-[#775700]" strokeWidth={2.5} />
          قسم مميز
        </span>
        <div className="flex items-center gap-2">
          <legend className="font-amiri text-xl font-bold text-text-primary">
            مستواك وأهدافك
          </legend>
          <span className="flex h-7 w-7 items-center justify-center rounded-design-full bg-primary font-sans text-sm font-bold text-white">
            2
          </span>
        </div>
      </div>

      {/* Level */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center justify-end gap-1">
          <span className="font-amiri text-sm font-semibold text-text-primary">
            مستواك الحالي في القرآن
          </span>
          <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {levels.map((lvl) => (
            <button
              key={lvl.value}
              type="button"
              onClick={() => setLevel(lvl.value)}
              className={`flex flex-col items-center gap-0 rounded-design-sm p-3 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all ${
                level === lvl.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-primary hover:bg-white/80'
              }`}
            >
              <span className="font-amiri text-[15px] font-bold">{lvl.label}</span>
              <span
                className={`font-amiri text-[11px] ${
                  level === lvl.value ? 'text-white/80' : 'text-text-body'
                }`}
              >
                {lvl.sublabel}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center justify-end gap-1">
          <span className="font-amiri text-sm font-semibold text-text-primary">
            أهدافك من الانضمام
          </span>
          <span className="font-sans text-sm font-semibold text-[#BA1A1A]">*</span>
        </label>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {goals.map((goal) => {
            const checked = selectedGoals.includes(goal.id);
            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => toggleGoal(goal.id)}
                className={`flex items-center justify-end gap-3 rounded-design-sm p-3 text-right shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all ${
                  checked ? 'bg-primary/10 ring-1 ring-primary/30' : 'bg-white'
                }`}
              >
                <span className="font-amiri text-[15px] font-bold text-text-primary">
                  {goal.label}
                </span>
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
    </fieldset>
  );
}

export default LevelsAndGoals;