import type { SVGProps } from "react";
import type { MotifId } from "@/lib/celebrations/types";

type MotifProps = SVGProps<SVGSVGElement> & {
  name: MotifId;
  title?: string;
};

function Paths({ name }: { name: MotifId }) {
  switch (name) {
    case "diya":
      return (
        <>
          <path d="M3.5 13.5c1.4 3.4 4.5 5 8.5 5s7.1-1.6 8.5-5c-2.6.8-5.4 1.2-8.5 1.2S6.1 14.3 3.5 13.5Z" />
          <path d="M12 3c1.9 2.6 3 4.2 3 5.7A3 3 0 0 1 12 12a3 3 0 0 1-3-3.3C9 7.2 10.1 5.6 12 3Z" />
          <path d="M5 17.5c1.9 1.6 4.2 2.4 7 2.4s5.1-.8 7-2.4" />
        </>
      );
    case "rangoli":
      return (
        <>
          <circle cx="12" cy="12" r="2.1" />
          <path d="M12 9.9c.7-2.4.4-4.2-.9-5.6M12 14.1c-.7 2.4-.4 4.2.9 5.6M9.9 12c-2.4-.7-4.2-.4-5.6.9M14.1 12c2.4.7 4.2.4 5.6-.9M10.5 10.5c-1.6-1.6-3.2-2.2-4.9-2.1M13.5 13.5c1.6 1.6 3.2 2.2 4.9 2.1M13.5 10.5c1.6-1.6 3.2-2.2 4.9-2.1M10.5 13.5c-1.6 1.6-3.2 2.2-4.9 2.1" />
          <circle cx="12" cy="12" r="8.5" strokeDasharray="1 3" />
        </>
      );
    case "lantern":
      return (
        <>
          <path d="M12 2v3M9 5h6M9.5 5.5h5l1.5 3v6l-1.5 3h-5L8 14.5v-6l1.5-3Z" />
          <path d="M10 9.5h4M10 12h4M10 14.5h4M12 18v3M10 21h4" />
        </>
      );
    case "lotus":
      return (
        <>
          <path d="M12 4c1.8 2.2 2.7 4.4 2.7 6.4 0 2.6-1.2 4.6-2.7 5.8-1.5-1.2-2.7-3.2-2.7-5.8C9.3 8.4 10.2 6.2 12 4Z" />
          <path d="M12 16.2c-1.8-1.6-3.9-2.4-6.3-2.4.5 2.2 1.8 3.9 3.8 5M12 16.2c1.8-1.6 3.9-2.4 6.3-2.4-.5 2.2-1.8 3.9-3.8 5" />
          <path d="M4 19c2.2 1.4 4.9 2.1 8 2.1s5.8-.7 8-2.1" />
        </>
      );
    case "kalash":
      return (
        <>
          <path d="M8 7h8l-1 2h-6L8 7Z" />
          <path d="M9 9c-2 1.8-3 4-3 6.3C6 19 8.7 21 12 21s6-2 6-5.7C18 13 17 10.8 15 9" />
          <path d="M10 5.5c0-1 .9-2 2-2s2 1 2 2M7 6.5c1.2-1.5 2.9-2.4 5-2.4s3.8.9 5 2.4" />
          <path d="M9.5 14.5c1.5 1 3.5 1 5 0" />
        </>
      );
    case "om":
      return (
        <text
          x="12"
          y="17.5"
          textAnchor="middle"
          fontSize="17"
          fontWeight="600"
          fill="currentColor"
          stroke="none"
        >
          ॐ
        </text>
      );
    case "khanda":
      return (
        <>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 3.5v17M9.5 8.5 12 3l2.5 5.5M9.5 15.5 12 21l2.5-5.5" />
          <path d="M6.5 9c-1.6 1.8-2.4 3.8-2.4 6 0 1.6.4 3 1.2 4.2M17.5 9c1.6 1.8 2.4 3.8 2.4 6 0 1.6-.4 3-1.2 4.2" />
        </>
      );
    case "jain":
      return (
        <>
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="7.5" strokeDasharray="1.5 2.6" />
          <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4" />
        </>
      );
    case "cross":
      return (
        <>
          <path d="M12 3v18M6.5 8.5h11" />
          <path d="M12 3c-1.2 0-2 .8-2 2M12 3c1.2 0 2 .8 2 2" />
        </>
      );
    case "star":
      return (
        <>
          <path d="M12 2.5c.7 5.2 4.3 8.8 9.5 9.5-5.2.7-8.8 4.3-9.5 9.5-.7-5.2-4.3-8.8-9.5-9.5 5.2-.7 8.8-4.3 9.5-9.5Z" />
          <circle cx="19" cy="5" r="1" fill="currentColor" stroke="none" />
          <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
        </>
      );
    case "crescent":
      return (
        <>
          <path d="M15.5 3.8A8.5 8.5 0 1 0 20 15.7a7 7 0 0 1-4.5-11.9Z" />
          <path d="M17.5 5.5c.4 1.7 1.8 3 3.5 3.3-1.7.4-3.1 1.7-3.5 3.4-.4-1.7-1.8-3-3.5-3.4 1.7-.3 3.1-1.6 3.5-3.3Z" />
        </>
      );
    case "cake":
      return (
        <>
          <path d="M4.5 12.5h15V20h-15z" />
          <path d="M4.5 15.5c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0 2.5-1 3 0M8 12.5V9.5M12 12.5V8M16 12.5V9.5" />
          <path d="M8 7.5c0-1 .5-1.5.5-2.5M12 6c0-1 .5-1.5.5-2.5M16 7.5c0-1 .5-1.5.5-2.5" />
        </>
      );
    case "rings":
      return (
        <>
          <circle cx="9" cy="14" r="5.5" />
          <circle cx="15" cy="14" r="5.5" />
          <path d="M10.5 4.5 12 2l1.5 2.5-1.5 1.8-1.5-1.8Z" />
          <path d="M12 6.3v2.2" />
        </>
      );
    case "ear":
      return (
        <>
          <path d="M8.5 20c0-2 .2-3.4 1.5-4.8 1.2-1.3 2-2.5 2-4.2a3.5 3.5 0 1 1 7 0c0 2.2-1.6 3.4-3.2 4.6-1 .7-1.6 1.6-1.6 2.9v1" />
          <path d="M14 9.5a1.8 1.8 0 0 0-1.2 1.2M5.5 11.5c.8 0 1.4.3 2 .9M6 7.5c.5-.8 1.2-1.4 2.1-1.7" />
        </>
      );
    case "baby":
      return (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M8.5 7.5c.4-2 1.8-3.2 3.5-3.2s3.1 1.2 3.5 3.2" />
          <path d="M5 21c.6-4.1 3-6.3 7-6.3s6.4 2.2 7 6.3" />
          <circle cx="10.5" cy="8.5" r=".6" fill="currentColor" stroke="none" />
          <circle cx="13.5" cy="8.5" r=".6" fill="currentColor" stroke="none" />
          <path d="M10.7 10.5c.8.6 1.8.6 2.6 0" />
        </>
      );
    case "home":
      return (
        <>
          <path d="M3.5 11 12 3.5l8.5 7.5" />
          <path d="M5.5 10v10h13V10M10 20v-5h4v5" />
          <path d="M3 21h18" />
        </>
      );
    case "thread":
      return (
        <>
          <path d="M5 6.5c3 0 4 2.5 7 2.5s4-2.5 7-2.5M5 17.5c3 0 4-2.5 7-2.5s4 2.5 7 2.5" />
          <path d="M12 9c-2.2 0-4 1.3-4 3s1.8 3 4 3 4-1.3 4-3-1.8-3-4-3Z" />
          <path d="M12 9V6.5M12 15v2.5" />
        </>
      );
    case "moon":
      return (
        <path d="M15.5 3.8A8.5 8.5 0 1 0 20 15.7a7 7 0 0 1-4.5-11.9Z" />
      );
    case "kite":
      return (
        <>
          <path d="M12 2.5 19 9l-7 7-7-7 7-6.5Z" />
          <path d="M12 2.5v13.5M5 9h14M12 16c0 2.5-2 3-2 5M12 16c0 2.5 2 3 2 5" />
        </>
      );
    case "colors":
      return (
        <>
          <circle cx="8" cy="9" r="4" />
          <circle cx="16" cy="9" r="4" />
          <circle cx="12" cy="15.5" r="4" />
          <path d="M4 20.5c1.3-1 2.7-1 4 0s2.7 1 4 0 2.7-1 4 0 2.7 1 4 0" />
        </>
      );
    case "rakhi":
      return (
        <>
          <circle cx="12" cy="10" r="3.2" />
          <path d="M9.5 12.5C7 14 5 16 3 19M14.5 12.5C17 14 19 16 21 19" />
          <path d="M12 6.8c1.2-1.2 2.2-1.8 3.2-1.8M12 6.8c-1.2-1.2-2.2-1.8-3.2-1.8" />
          <path d="M3 19c1.3 1 2.7 1 4 0M17 19c1.3 1 2.7 1 4 0" />
        </>
      );
    case "sun":
      return (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8" />
        </>
      );
    case "mango":
      return (
        <>
          <path d="M8.5 9.5c2.5-2.5 6.3-2.4 8.6 0 2.5 2.6 2.4 7.2-.2 9.8-2.5 2.5-6.7 2.5-9.2 0-2.6-2.6-2.7-7.2-.2-9.8.3-.3.7-.3 1 0Z" />
          <path d="M14.5 8.5c.4-2.2 1.7-4 3.9-5M17 5.5c1.8 0 3.2.7 4 2-1.6.6-3.2.4-4.6-.7" />
        </>
      );
    case "flute":
      return (
        <>
          <path d="M3 16.5 18.5 4.5a2 2 0 0 1 2.5 3L5.5 19.5a2 2 0 0 1-2.5-3Z" />
          <path d="M7 13.5 9 15M10 11l2 1.5M13 8.5l2 1.5M16 6l2 1.5" />
          <path d="M4.5 18.5c1.8.6 3.2.3 4.5-1" />
        </>
      );
    case "trident":
      return (
        <>
          <path d="M12 21V5M7 5v4a5 5 0 0 0 10 0V5M4.5 5v3.5a7.5 7.5 0 0 0 15 0V5" />
          <path d="M12 2.5v2.5M9 18h6" />
        </>
      );
    case "bow":
      return (
        <>
          <path d="M5 4c5 2 8 5 8 10s-3 6-8 6" />
          <path d="M5 4v16M5 12h15M17 9l3 3-3 3" />
        </>
      );
    case "garba":
      return (
        <>
          <path d="M4 20 19 4M4 4l15 16" />
          <circle cx="12" cy="12" r="2.2" />
          <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
          <circle cx="18" cy="18" r="1" fill="currentColor" stroke="none" />
        </>
      );
    case "modak":
      return (
        <>
          <path d="M12 3c3.2 3.8 6.2 7.1 6.2 10.2A6.2 6.2 0 0 1 12 19.4a6.2 6.2 0 0 1-6.2-6.2C5.8 10.1 8.8 6.8 12 3Z" />
          <path d="M8.5 10.5c2.2 1.4 4.8 1.4 7 0M9.5 13.5c1.6.8 3.4.8 5 0" />
          <path d="M8 21h8" />
        </>
      );
    default:
      return <circle cx="12" cy="12" r="8" />;
  }
}

export function Motif({ name, title, ...props }: MotifProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <Paths name={name} />
    </svg>
  );
}
