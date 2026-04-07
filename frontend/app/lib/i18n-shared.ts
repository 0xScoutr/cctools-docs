/**
 * Shared i18n types and constants that are safe for both client and server.
 * Does NOT import Node.js modules.
 */

export const LOCALES = ["en", "es", "pt", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  zh: "中文",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  pt: "🇧🇷",
  zh: "🇨🇳",
};

export function isValidLocale(lang: string): lang is Locale {
  return LOCALES.includes(lang as Locale);
}
