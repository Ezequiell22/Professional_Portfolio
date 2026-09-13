import type { Dictionary, Lang } from "./types";
import en from "../locales/en.json";
import ptBR from "../locales/pt-BR.json";

export const dictionaries: Record<Lang, Dictionary> = {
  en: en as Dictionary,
  "pt-BR": ptBR as Dictionary,
};

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt-BR", label: "PT-BR" },
];

export const DEFAULT_LANG: Lang = "en";

export function langFromPath(path: string): Lang | null {
  if (path === "/pt-BR" || path.startsWith("/pt-BR/") || path === "/pt") {
    return "pt-BR";
  }
  return null;
}

export function pathForLang(lang: Lang): string {
  return lang === "pt-BR" ? "/pt-BR" : "/";
}
