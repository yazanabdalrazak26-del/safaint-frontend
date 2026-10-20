import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeachersPagination() {
  const pages = [1, 2, 3, 4];
  const current = 1;

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-gray-200/80 pt-6">
      {/* Page list */}
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            className="flex h-9 w-11 items-center justify-center rounded-design-sm border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
            aria-label="السابق"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
        {pages.map((p) => (
          <li key={p}>
            <button
              type="button"
              className={`flex h-9 w-10 items-center justify-center rounded-design-sm border font-cairo text-sm transition ${
                p === current
                  ? 'border-transparent bg-[#0F4C3A] font-bold text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          </li>
        ))}
        <li>
          <span className="flex h-9 w-7 items-center justify-center font-cairo text-sm text-gray-400">
            ...
          </span>
        </li>
        <li>
          <button
            type="button"
            className="flex h-9 w-11 items-center justify-center rounded-design-sm border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
            aria-label="التالي"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </li>
      </ul>

      {/* Page info */}
      <p className="font-cairo text-sm text-gray-500">
        صفحة <strong className="font-bold text-[#0F4C3A]">{current}</strong> من{' '}
        <strong className="font-bold text-gray-700">16</strong>
      </p>
    </nav>
  );
}