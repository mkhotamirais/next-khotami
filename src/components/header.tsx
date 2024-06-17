"use client";

import Link from "next/link";
import { FaBars, FaGithub, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useBasic } from "@/store/basic";
import { useIsMounted } from "@/hooks/useIsMounted";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const homeMenus = [
  { href: "/", text: "Home" },
  { href: "/route", text: "Route" },
];

export function Header() {
  return (
    <>
      <header className="h-16 border-b w-full px-3 lg:px-12 sticky top-0 bg-white dark:bg-slate-800">
        <nav className="h-full flex gap-6 items-center justify-between">
          <Logo />
          <NavMain />
          <div className="flex gap-3">
            <SourceCode />
            <DarkMode />
            <NavBtn />
          </div>
        </nav>
      </header>
      <NavCollapse />
    </>
  );
}

export function NavBtn() {
  const { openNav, openAside, toggleOpenNav, removeOpenAside } = useBasic();
  const handleClick = () => {
    toggleOpenNav();
    if (openAside) removeOpenAside();
  };
  return (
    <button
      title="nav btn"
      type="button"
      onClick={handleClick}
      className={`block sm:hidden ${
        openNav ? "rotate-180" : ""
      } text-xl w-5 h-5 overflow-hidden transition-all duration-150`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
}

export function NavContent({ className }: { className?: string }) {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  const { removeOpenNav } = useBasic();
  return homeMenus.map((item, i) => (
    <Link
      key={i}
      href={item.href}
      onClick={removeOpenNav}
      className={`${className} ${path === item.href.split("/")[1] ? "text-cyan-500" : ""} hover:text-cyan-500`}
    >
      {item.text}
    </Link>
  ));
}

export function NavMain() {
  return (
    <nav className="hidden sm:flex gap-4 overflow-x-scroll w-full">
      <NavContent />
    </nav>
  );
}

export function NavCollapse() {
  const { openNav } = useBasic();
  return (
    <nav
      className={`z-40 block sm:hidden p-3 dark:bg-slate-900 bg-white ${
        openNav ? "scale-y-100" : "scale-y-0"
      } origin-top fixed top-16 w-full flex flex-col border-b rounded-b-lg shadow dark:bg-slate-900 transition-all duration-150`}
    >
      <NavContent className="py-2 border-b" />
    </nav>
  );
}

export function DarkMode() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button type="button" onClick={handleClick} className="w-5 h-5 text-xl overflow-hidden" title="dark mode">
      <FaMoon className={`${theme === "dark" ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${theme === "dark" ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
}

export function Logo() {
  return (
    <Link href="/" className="min-w-max flex gap-0 flex-col">
      <div className="text-xl">Khotami</div>
      <div className="text-sm">Next</div>
    </Link>
  );
}

export function SourceCode() {
  return (
    <a
      title="source code"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/mkhotamirais/next-khotami"
      className="text-xl"
    >
      <FaGithub />
    </a>
  );
}
