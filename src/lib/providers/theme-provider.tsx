"use client";

import { createThemeStore, type TThemeStore } from "@/lib/stores/theme-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

// store 생성함수 type
export type TThemeStoreApi = ReturnType<typeof createThemeStore>;

// context 생성
export const ThemeStoreContext = createContext<TThemeStoreApi | undefined>(
  undefined
);

// provider props type
export interface IThemeStoreProviderProps {
  children: ReactNode;
}

// provider 생성
export const ThemeStoreProvider = ({ children }: IThemeStoreProviderProps) => {
  // useRef를 통해 생성한 store 연결
  const themeRef = useRef<TThemeStoreApi | null>(null);
  if (themeRef.current === null) {
    themeRef.current = createThemeStore();
  }

  // provider에 값 담기
  return (
    <ThemeStoreContext.Provider value={themeRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
};

// 스토어 hook 생성 (selector와 useContext 활용)
export const useThemeStore = <T,>(selector: (store: TThemeStore) => T): T => {
  const themeStoreContext = useContext(ThemeStoreContext);

  if (!themeStoreContext) {
    throw new Error(`useThemeStore must be used within ThemeStoreProvider`);
  }

  return useStore(themeStoreContext, selector);
};
