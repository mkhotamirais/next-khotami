"use client";

import { useBasic } from "@/store/basic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const routeMenus = [
  { href: "/route", label: "r1 home" },
  { href: "/route/r1", label: "r1" },
  { href: "/route/r2", label: "r2" },
];

export function AsideBtn() {
  const { toggleOpenAside } = useBasic();
  const handleClick = () => {
    toggleOpenAside();
  };
  return (
    <button type="button" title="aside btn" onClick={handleClick} className="text-2xl block sm:hidden">
      <TbLayoutSidebarRightCollapse />
    </button>
  );
}

export function AsideContent() {
  const pathname = usePathname();
  let menus: { href: string; label: string }[] | null;
  if (pathname.split("/")[1] === "route") menus = routeMenus;
  else menus = [];
  const path = pathname.split("/")[2];

  return menus.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`${path === item.href.split("/")[2] ? "text-cyan-500" : ""} hover:text-cyan-500 py-1`}
    >
      {item.label}
    </Link>
  ));
}

export function AsideMain() {
  return (
    <aside className={`col-span-1 hidden sm:flex py-5 flex-col capitalize`}>
      <AsideContent />
    </aside>
  );
}

export function AsideCollapse() {
  const { openAside } = useBasic();
  return (
    <aside
      className={`fixed sm:hidden z-40 flex flex-col p-3 ${
        openAside ? "scale-x-100" : "scale-x-0"
      } origin-left capitalize bg-white dark:bg-slate-900 top-16 bottom-0 left-0 w-2/3 border-r rounded-r-lg transition-all duration-150`}
    >
      <AsideContent />
    </aside>
  );
}
