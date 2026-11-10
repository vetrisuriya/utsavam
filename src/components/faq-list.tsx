import type { Faq } from "@/lib/celebrations/types";

export function FaqList({
  faqs,
  className = "",
}: {
  faqs: Faq[];
  className?: string;
}) {
  return (
    <div className={`divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      {faqs.map((faq, index) => (
        <details key={`${faq.q}-${index}`} className="group bg-white/[0.02]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-ink transition hover:bg-white/[0.04] [&::-webkit-details-marker]:hidden">
            <span>{faq.q}</span>
            <span
              aria-hidden="true"
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-muted transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-7 text-muted">{faq.a}</div>
        </details>
      ))}
    </div>
  );
}
