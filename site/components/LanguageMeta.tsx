"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function LanguageMeta() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;

    const { title, description, ogTitle, ogDescription } = t.meta;
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDescription);
    upsertMeta("property", "og:locale", lang === "pt-BR" ? "pt_BR" : "en_US");
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDescription);
  }, [lang, t]);

  return null;
}
