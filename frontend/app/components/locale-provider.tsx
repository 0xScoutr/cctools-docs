"use client";

import { createContext, useContext } from "react";
import type { Locale } from "../lib/i18n-shared";
import type { UIStrings } from "../lib/ui-strings";

export type SerializedCategory = {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  colorDim: string;
  articles: {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    sections: { heading: string; body: string }[];
  }[];
};

type LocaleContextType = {
  lang: Locale;
  categories: SerializedCategory[];
  t: UIStrings;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  lang,
  categories,
  t,
  children,
}: LocaleContextType & { children: React.ReactNode }) {
  return (
    <LocaleContext.Provider value={{ lang, categories, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
