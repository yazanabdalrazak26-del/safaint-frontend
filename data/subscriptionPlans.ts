import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crown,
  Gem,
} from "lucide-react";

export interface SubscriptionPlan {
  id: string;
  name: string;
  category: string;
  durationLabel: string;
  price: number;
  currency: string;
  billingNote: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  highlighted?: boolean;
  badge?: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "silver",
    name: "الباقة الفضية",
    category: "للمبتدئين وتأسيس التلاوة",
    durationLabel: "عرض فصلي",
    price: 119,
    currency: "$",
    billingNote: "3 شهور معاً (أو ما يعادل 445 ر.س)",
    description:
      "تأسيس صحيح للحروف، وضبط القراءة السليمة، ومدخل ميسر لأحكام التجويد الأساسية.",
    icon: BookOpen,
    features: [
      "3 شهور معاً (إجمالي 3 أشهر)",
      "32 حلقة قرآنية",
      "8 حلقات شهرياً",
      "مدة كل حلقة نصف ساعة (30 دقيقة فردية 1:1)",
      "معلمون مؤهلون لمتابعة التلاوة",
    ],
  },
  {
    id: "gold",
    name: "الباقة الذهبية",
    category: "للحفظ المنظم والتثبيت",
    durationLabel: "3 شهور معاً",
    price: 249,
    currency: "$",
    billingNote: "9 أشهر شاملة (أو ما يعادل 935 ر.س)",
    description:
      "المسار الأكثر توازناً لتثبيت الحفظ والتدرب على التلاوة مع ترسيخ الأحكام والتجويد العملي.",
    icon: Crown,
    highlighted: true,
    badge: "الخيار الأكثر تفضيلاً",
    features: [
      "6 أشهر + 3 شهور مجاناً (9 أشهر)",
      "108 حلقات قرآنية",
      "12 حلقة شهرياً",
      "مدة كل حلقة نصف ساعة (30 دقيقة فردية 1:1)",
      "مرونة إعادة جدولة الحصص عند الاعتذار",
      "اختبارات تقييم دورية بعد كل مرحلة",
    ],
  },
  {
    id: "diamond",
    name: "الباقة الماسية",
    category: "للختم الكامل والإتقان المتقدم",
    durationLabel: "4 شهور مجاناً",
    price: 489,
    currency: "$",
    billingNote: "16 شهراً شاملة (أو ما يعادل 1835 ر.س)",
    description:
      "خطة شاملة ومكثفة لختم المصحف كاملاً وضبط القراءات مع كبار المقرئين المجازين بالسند المتصل.",
    icon: Gem,
    features: [
      "12 شهر + 4 شهور مجاناً (إجمالي 16 شهراً)",
      "256 حلقة قرآنية",
      "16 حلقة شهرياً (4 حلقات أسبوعياً)",
      "مدة كل حلقة نصف ساعة (30 دقيقة فردية 1:1)",
      "مشايخ ذوو أسانيد عالية متصلة برسول الله ﷺ",
      "أولوية كاملة في اختيار وتعديل المواعيد",
    ],
  },
];