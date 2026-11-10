import type { MetadataRoute } from "next";
import { SITE, SITE_DESCRIPTION } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — celebration links`,
    short_name: SITE.name,
    description: SITE_DESCRIPTION,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#08050f",
    theme_color: "#08050f",
    categories: ["lifestyle", "social", "entertainment"],
    lang: "en-IN",
    dir: "ltr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Browse celebrations",
        short_name: "Browse",
        url: "/celebrations",
      },
      {
        name: "Create a Diwali card",
        short_name: "Diwali",
        url: "/create/diwali",
      },
      {
        name: "Create a wedding invitation",
        short_name: "Wedding",
        url: "/create/wedding",
      },
    ],
  };
}
