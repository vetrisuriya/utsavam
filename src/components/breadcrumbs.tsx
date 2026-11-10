import Link from "next/link";
import { ChevronDownIcon } from "@/components/ui-icons";

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint">
        <li>
          <Link href="/" className="transition hover:text-gold">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              <ChevronDownIcon className="h-3 w-3 -rotate-90 text-white/20" />
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-gold">
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? "text-muted" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
