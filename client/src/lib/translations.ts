// ============================================================
// 📝 文字內容從外部 /content.json 動態載入
// 在 cPanel 中直接修改 content.json 即可更新網站文字
// ============================================================

import { useState, useEffect } from "react";
import defaultData from "./translations.json";

type TranslationEntry = { zh: string; en: string; cn: string };

// Runtime translations store - starts with defaults, gets overridden by content.json
let runtimeTranslations: Record<string, TranslationEntry> = { ...defaultData };
let loaded = false;
let loadPromise: Promise<void> | null = null;
let listeners: Array<() => void> = [];

export function onTranslationsLoaded(cb: () => void) {
  if (loaded) { cb(); return; }
  listeners.push(cb);
}

// Fetch content.json at runtime
function loadExternalTranslations(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = fetch("/content.json?t=" + Date.now(), { cache: "no-store" })
    .then(res => {
      if (!res.ok) throw new Error("Failed to load content.json");
      return res.json();
    })
    .then((data: Record<string, TranslationEntry>) => {
      runtimeTranslations = { ...defaultData, ...data };
      loaded = true;
      listeners.forEach(cb => cb());
      listeners = [];
    })
    .catch(err => {
      console.warn("content.json not found or invalid, using defaults:", err);
      loaded = true;
      listeners.forEach(cb => cb());
      listeners = [];
    });
  return loadPromise;
}

// Start loading immediately
loadExternalTranslations();

export const translations: Record<string, TranslationEntry> = new Proxy({} as any, {
  get(_target, prop: string) {
    return runtimeTranslations[prop];
  },
  has(_target, prop: string) {
    return prop in runtimeTranslations;
  },
  ownKeys() {
    return Object.keys(runtimeTranslations);
  },
  getOwnPropertyDescriptor(_target, prop: string) {
    if (prop in runtimeTranslations) {
      return { configurable: true, enumerable: true, value: runtimeTranslations[prop] };
    }
    return undefined;
  }
});

// Translation helper function
export function t(key: string, lang: "zh" | "en" | "cn" = "zh"): string {
  const translation = runtimeTranslations[key];
  if (!translation) return key;
  if (lang === "cn") return translation.cn;
  return lang === "zh" ? translation.zh : translation.en;
}

/**
 * Hook that triggers a re-render when content.json finishes loading.
 * Use this in your top-level App or Layout component to ensure
 * all translated text updates after content.json is fetched.
 */
export function useTranslationsReady(): boolean {
  const [ready, setReady] = useState(loaded);
  useEffect(() => {
    if (loaded) {
      setReady(true);
      return;
    }
    const cb = () => setReady(true);
    listeners.push(cb);
    return () => {
      const idx = listeners.indexOf(cb);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);
  return ready;
}
