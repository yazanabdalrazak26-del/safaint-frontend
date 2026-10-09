"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "الرئيسية", href: "/" },
  { label: "برامجنا التدريبية", href: "/programs" },
  { label: "من نحن", href: "/about" },
  { label: "باقاتنا", href: "/subscriptions" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="w-full px-[50px] py-3">
      <nav
        className="
          mx-auto
          flex
          min-h-[126px]
          w-full
          max-w-[1247px]
          items-center
          gap-[30px]
          rounded-design-lg
          border
          border-primary/10
          bg-white/80
          px-[30px]
          py-3
          shadow-sm
          backdrop-blur-[12px]
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="الصفحة الرئيسية لأكاديمية سفينة الإتقان"
          className="
            relative
            flex
            h-[100px]
            w-[100px]
            shrink-0
            items-center
            justify-center
            rounded-design-sm
            p-1
          "
        >
          <Image
            src="/logo.jpg"
            alt="أكاديمية سفينة الإتقان"
            width={100}
            height={100}
            priority
            className="h-full w-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      whitespace-nowrap
                      font-cairo
                      text-sm
                      font-semibold
                      leading-5
                      transition-colors
                      duration-200
                      ${
                        active
                          ? "text-primary"
                          : "text-text-secondary hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          {/* Date */}
          <button
            type="button"
            aria-label="اختيار التاريخ"
            className="
              relative
              h-10
              w-[148px]
              rounded-design-md
              border
              border-primary/20
              bg-white/90
              font-cairo
              transition-all
              duration-200
              hover:border-primary/30
              hover:bg-background-green-soft
            "
          >
            {/* Left Chevron */}
            <span
              className="
                absolute
                left-[5px]
                top-1/2
                flex
                -translate-y-1/2
                items-center
                justify-center
              "
            >
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className="text-primary"
              />
            </span>

            {/* Center Text */}
            <span
              className="
                absolute
                left-1/2
                top-1/2
                flex
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
                justify-center
                leading-none
              "
            >
              <span className="text-xs font-medium text-primary">
                14 مارس
              </span>

              <span className="mt-0.5 text-[10px] text-primary">
                الثلاثاء
              </span>
            </span>

            {/* Right Calendar */}
            <span
              className="
                absolute
                right-[5px]
                top-1/2
                flex
                h-6
                w-[26px]
                -translate-y-1/2
                items-center
                justify-center
                rounded-design-sm
                bg-[#E1F2E6]
              "
            >
              <CalendarDays
                size={15}
                strokeWidth={2}
                className="text-primary-dark"
              />
            </span>
          </button>

          {/* Trial Session */}
          <Link
            href="/trial"
            className="
              flex
              h-10
              w-[138px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-design-md
              bg-gold-light
              px-4
              py-2
              font-cairo
              text-sm
              font-bold
              leading-5
              text-primary-deep
              shadow-sm
              transition-all
              duration-200
              hover:bg-gold
            "
          >
            احجز حصة تجريبية
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="
              flex
              h-10
              w-[106px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-design-md
              border
              border-primary/20
              bg-transparent
              px-[14px]
              py-2
              font-cairo
              text-sm
              font-semibold
              leading-5
              text-primary
              transition-all
              duration-200
              hover:bg-background-green-soft
            "
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMenuOpen}
          className="
            mr-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-design-md
            border
            border-primary/15
            bg-white
            text-primary
            transition
            hover:bg-background-green-soft
            xl:hidden
          "
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            mx-auto
            mt-2
            w-full
            max-w-[1247px]
            overflow-hidden
            rounded-design-lg
            border
            border-primary/10
            bg-white/95
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            backdrop-blur-[12px]
            xl:hidden
          "
        >
          <div className="flex flex-col p-4">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        block
                        rounded-design-md
                        px-4
                        py-3
                        font-cairo
                        text-sm
                        font-semibold
                        transition-colors
                        duration-200
                        ${
                          active
                            ? "bg-background-green-soft text-primary"
                            : "text-text-secondary hover:bg-[#F8FCF9] hover:text-primary"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Actions */}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="
                  flex
                  h-11
                  min-w-0
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-design-md
                  border
                  border-primary/20
                  px-2
                  font-cairo
                  text-sm
                  font-semibold
                  text-primary
                "
              >
                تسجيل الدخول
              </Link>

              <Link
                href="/trial"
                onClick={() => setIsMenuOpen(false)}
                className="
                  flex
                  h-11
                  min-w-0
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-design-md
                  bg-gold-light
                  px-2
                  font-cairo
                  text-sm
                  font-bold
                  text-primary-deep
                "
              >
                احجز حصة تجريبية
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}