import { createStore } from "zustand";

// state type
export interface IThemeState {
  theme: "light" | "dark";
}

// actions type
export interface IThemeActions {
  toggleTheme: () => void;
}

// store type (state & actions)
export type TThemeStore = IThemeState & IThemeActions;

// 초기 state 지정
export const defaultInitState: IThemeState = {
  theme: "light",
};

// store 생성 (state, actions)
export const createThemeStore = (initState: IThemeState = defaultInitState) => {
  return createStore<TThemeStore>()((set) => ({
    ...initState,
    toggleTheme: () =>
      set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  }));
};
