"use client";

import { create } from "zustand";

type tBasic = {
  dark: boolean;
  openNav: boolean;
  openAside: boolean;
  toggleDark(): void;
  removeDark(): void;
  toggleOpenNav(): void;
  removeOpenNav(): void;
  toggleOpenAside(): void;
  removeOpenAside(): void;
};

export const useBasic = create<tBasic>((set) => ({
  dark: false,
  openNav: false,
  openAside: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
  removeDark: () => set(() => ({ dark: false })),
  toggleOpenNav: () => set((state) => ({ openNav: !state.openNav })),
  removeOpenNav: () => set(() => ({ openNav: false })),
  toggleOpenAside: () => set((state) => ({ openAside: !state.openAside })),
  removeOpenAside: () => set(() => ({ openAside: false })),
}));
