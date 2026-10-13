"use client";

import { useId, useState } from "react";

import type { FAQItemData } from "@/data/homeData";

interface FAQItemProps {
  item: FAQItemData;
}

export default function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen ?? false);
  const answerId = useId();

  return (
    <article
      dir="rtl"
      className="
        overflow-hidden
        rounded-design-lg
        border
        border-primary/15
        bg-white
        transition-shadow
        duration-200
        hover:shadow-sm
      "
    >
      {/* السؤال */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          flex
          min-h-[64px]
          w-full
          items-center
          justify-between
          gap-6
          px-5
          py-5
          text-right
          font-cairo
          outline-none
          transition-colors
          duration-200
          focus-visible:ring-2
          focus-visible:ring-primary/30
        "
      >
        {/* السؤال — اليمين */}
        <span
          className="
            min-w-0
            flex-1
            text-right
            text-base
            font-bold
            leading-6
            text-text-primary
          "
        >
          {item.question}
        </span>

        {/* زر السهم — اليسار */}
        <span
          aria-hidden="true"
          className={`
            flex
            size-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-primary/10
            font-sans
            text-sm
            font-bold
            leading-5
            text-primary
            transition-transform
            duration-200
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        >
          ▼
        </span>
      </button>

      {/* الجواب */}
      {isOpen && (
        <div
          id={answerId}
          className="
            border-t
            border-slate-100
            px-5
            pb-5
            pt-3
          "
        >
          <p
            className="
              font-cairo
              text-sm
              font-normal
              leading-5
              text-text-body
              text-right
            "
          >
            {item.answer}
          </p>
        </div>
      )}
    </article>
  );
}