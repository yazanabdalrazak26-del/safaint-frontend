export type Teacher = {
  id: number;
  initials: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  students: number;
  sessions: number;
  badge: string;
  isOnline: boolean;
};

export const teachers: Teacher[] = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  initials: ['ع', 'م', 'ح', 'س'][i % 4],
  name: 'الشيخ د. عبد الرحمن المنشاوي',
  specialty: 'مقرئ بالقراءات العشر ومجاز بالسند العالي',
  rating: 4.9,
  reviews: 145,
  students: 18,
  sessions: 320,
  badge: 'مجاز بالقراءات العشر',
  isOnline: i % 3 !== 0,
}));

export const filterChips = [
  { label: 'الكل', active: true },
  { label: 'مجاز بالقراءات العشر', active: false },
  { label: 'مجاز بالقراءات السبع', active: false },
  { label: 'معلم التجويد', active: false },
  { label: 'تحفيظ القرآن', active: false },
  { label: 'التفسير وعلوم القرآن', active: false },
];