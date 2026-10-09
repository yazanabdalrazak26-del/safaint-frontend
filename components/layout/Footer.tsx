import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";

const quranPaths = [
  "مسار الحفظ المتقن",
  "مسار الإجازة بالسند",
  "القاعدة النورانية للأطفال",
  "تصحيح التلاوة للكبار",
  "تفسير وغريب القرآن",
];

const academyLinks = [
  "منصة التعليم",
  "هيئة التدريس والمقرئين",
  "قصص وتجارب الطلاب",
  "الأسئلة الشائعة (FAQ)",
  "سياسة الخصوصية والأمان",
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-gold/20
        bg-gradient-to-r
        from-[#11462D]
        to-[#1E5B3E]
        font-cairo
        text-white
      "
    >
      <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-12">
        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-b
            border-white/10
            pb-10
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
          "
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4">
              <div
                className="
                  relative
                  h-12
                  w-12
                  shrink-0
                  overflow-hidden
                  rounded-design-md
                  bg-white
                "
              >
                <Image
                  src={logo}
                  alt="أكاديمية سفينة الإتقان"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold leading-tight text-white">
                  أكاديمية سفينة الإتقان
                </h2>

                <p className="mt-1 text-sm text-gold">
                  منصة التحفيظ والعلوم القرآنية
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[360px] text-sm leading-7 text-white/60">
              أكاديمية إسلامية عالمية متخصصة في تعليم القرآن الكريم وتجويده،
              وعلمت به بعد الأطفال والكبار من مختلف دول العالم.
            </p>

            {/* Payment Methods */}
            <div className="mt-6 flex w-full items-center gap-2 whitespace-nowrap">
              <span className="shrink-0 text-xs text-white/50">
                طرق دفع آمنة ومعتمدة:
              </span>

              <span
                className="
                  shrink-0
                  rounded-design-sm
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  text-gold
                "
              >
                Apple Pay
              </span>

              <span
                className="
                  shrink-0
                  rounded-design-sm
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  text-gold
                "
              >
                VISA
              </span>

              <span
                className="
                  shrink-0
                  rounded-design-sm
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  text-gold
                "
              >
                MADA
              </span>
            </div>
          </div>

          {/* Quran Paths */}
          <div>
            <h3 className="text-base font-bold text-white">
              المسارات القرآنية
            </h3>

            <ul className="mt-5 space-y-4">
              {quranPaths.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-sm
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-gold
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-base font-bold text-white">
              عن الأكاديمية
            </h3>

            <ul className="mt-5 space-y-4">
              {academyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-sm
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-gold
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white">
              تواصل معنا
            </h3>

            <div className="mt-5 space-y-5">
              {/* WhatsApp */}
              <div>
                <p className="text-sm">
                  <span className="text-gold">واتساب:</span>{" "}
                  <a
                    href="https://wa.me/9635222255232"
                    className="
                      text-white/55
                      transition-colors
                      hover:text-white
                    "
                    dir="ltr"
                  >
                    +9635222255232
                  </a>
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm">
                  <span className="text-gold">البريد:</span>{" "}
                  <a
                    href="mailto:safinet.al1@gmail.com"
                    className="
                      text-white/55
                      transition-colors
                      hover:text-white
                    "
                  >
                    safinet.al1@gmail.com
                  </a>
                </p>
              </div>

              <p className="text-sm leading-6 text-white/55">
                خدمة الدعم الفني والأكاديمي متاحة 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Copyright / Bottom Bar */}
        <div
          className="
            flex
            flex-col-reverse
            gap-6
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-white/45">
            © 2026 أكاديمية سفينة الإتقان. جميع الحقوق محفوظة.
          </p>

          <p className="font-amiri text-sm font-medium text-gold">
            ﴿خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ﴾
          </p>
        </div>
      </div>
    </footer>
  );
}