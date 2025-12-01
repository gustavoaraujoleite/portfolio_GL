import React from "react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function MockNextRouter({ children }: { children: React.ReactNode }) {
  const router = {
    push: () => {},
    replace: () => {},
    forward: () => {},
    back: () => {},
    refresh: () => {},
    prefetch: () => Promise.resolve(),
  };

  return (
    <AppRouterContext.Provider value={router}>
      {children}
    </AppRouterContext.Provider>
  );
}
