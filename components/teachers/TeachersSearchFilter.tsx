'use client';

import { filterChips } from '@/lib/teacherData';
import { Search, SlidersHorizontal, LayoutGrid } from 'lucide-react';
import { useState } from 'react';


export default function TeachersSearchFilter() {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div className="flex w-full flex-col gap-4 rounded-design-lg border border-gray-100 bg-white p-5 pt-7 shadow-sm">
      {/* Top bar */}
      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        {/* Sorting & View controls */}
        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex items-center rounded-design-md border border-gray-200/60 bg-gray-100 p-1">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-design-sm text-gray-500 transition hover:bg-white"
              aria-label="قائمة"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-design-sm bg-white text-primary-dark shadow-sm"
              aria-label="شبكة"
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 rounded-design-md border border-gray-200 bg-gray-50 px-3 py-2">
            <span className="font-cairo text-sm font-medium text-gray-700">
              الأعلى تقييماً
            </span>
            <span className="font-cairo text-xs font-semibold text-gray-500">
              ترتيب حسب
            </span>
          </div>
        </div>

        {/* Search input */}
        <div className="relative w-full md:max-w-2xl">
          <input
            type="text"
            placeholder="ابحث باسم المقرئ، التخصص، أو الإجازة..."
            className="w-full rounded-design-md border border-gray-200 bg-gray-50 py-3 pr-12 pl-4 font-cairo text-sm text-text-primary placeholder:text-gray-400 focus:border-primary/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Search className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
        {filterChips.map((chip, i) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => setActiveChip(i)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-cairo text-sm transition-all ${
              activeChip === i
                ? 'border border-[#A7F3D0] bg-[#ECFDF5] font-bold text-[#047857]'
                : 'bg-gray-100 font-medium text-gray-700 hover:bg-gray-200'
            }`}
          >
            {chip.label}
            {activeChip === i && (
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}