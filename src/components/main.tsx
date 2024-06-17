"use client";

import { useBasic } from "@/store/basic";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { AsideCollapse, AsideMain } from "./aside";

export default function Main({ children }: { children: React.ReactNode }) {
  const { openNav, openAside, removeOpenNav, removeOpenAside } = useBasic();
  const pathname = usePathname();
  const handleClick = () => {
    removeOpenNav();
    if (openAside) removeOpenAside();
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) removeOpenNav();
      if (openAside) removeOpenAside();
    });
  }, [openNav, openAside, removeOpenAside, removeOpenNav]);

  let content;
  if (pathname === "/")
    content = (
      <main className="px-3 lg:px-12 flex-grow" onClick={handleClick}>
        {children}
      </main>
    );
  else
    content = (
      <>
        <main className="px-3 lg:px-12 flex-grow grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5" onClick={handleClick}>
          <AsideCollapse />
          <AsideMain />
          <div className="sm:col-span-3 lg:col-span-1">{children}</div>
        </main>
      </>
    );
  return content;
}
