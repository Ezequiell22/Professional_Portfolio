"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary, Lang } from "./types";
import {
  DEFAULT_LANG,
  dictionaries,
  langFromPath,
  pathForLang,
} from "./dictionaries";

const STORAGE_KEY = "lang";

interface LanguageContextValue {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolveInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const fromPath = langFromPath(window.location.pathname);
  if (fromPath) return fromPath;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt-BR") return stored;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Resolve the real language client-side (after hydration) to avoid a
  // flash/hydration mismatch while keeping the URL as the source of truth.
  useEffect(() => {
    const initial = resolveInitialLang();
    // Intentional: sync React state with the URL/localStorage after hydration.
    // Deferring to an effect (instead of the initial render) avoids a hydration
    // mismatch while the URL remains the source of truth for the language.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(initial);
    if (initial !== DEFAULT_LANG) {
      window.history.replaceState(null, "", pathForLang(initial));
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const fromPath = langFromPath(window.location.pathname);
      setLangState(fromPath ?? DEFAULT_LANG);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, next);
    const target = pathForLang(next);
    if (window.location.pathname !== target) {
      window.history.pushState(null, "", target);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: dictionaries[lang], setLang }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
