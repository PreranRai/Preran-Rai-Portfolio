"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";

// Suppress the React 19 warning about script tags inside Client Components.
// This is a known false positive with next-themes in Next.js 15+.
if (typeof window !== 'undefined') {
  const orig = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return;
    orig.apply(console, args);
  };
}

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
