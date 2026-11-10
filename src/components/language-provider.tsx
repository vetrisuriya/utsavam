"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANGUAGE,
  isLanguageCode,
  type LanguageCode,
} from "@/lib/language";

const STORAGE_KEY = "utsavam.language";

// A tiny external store keeps the choice in sync across every client component
// without an effect that writes state after hydration.
const listeners = new Set<() => void>();
let cachedLanguage: LanguageCode | null = null;

function readStoredLanguage(): LanguageCode {
  if (cachedLanguage) return cachedLanguage;
  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    stored = null;
  }
  cachedLanguage = isLanguageCode(stored) ? stored : DEFAULT_LANGUAGE;
  return cachedLanguage;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getServerSnapshot(): LanguageCode {
  return DEFAULT_LANGUAGE;
}

function writeLanguage(code: LanguageCode) {
  cachedLanguage = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Storage can be unavailable in private mode; the in-memory choice still works.
  }
  for (const listener of listeners) listener();
}

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    readStoredLanguage,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.secondLanguage = language;
  }, [language]);

  const setLanguage = useCallback((code: LanguageCode) => {
    writeLanguage(code);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}
