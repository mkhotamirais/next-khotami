"use client";

import { useBasic } from "@/store/basic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

// const homeMenus = [

//   { href: "/r7login", text: "r7login" },
//   { href: "/r7register", text: "r7register" },
//   { href: "/r7forgotpass", text: "r7forgotpass" },
//   { href: "/r8a", text: "r8a" },
//   { href: "/r8b", text: "r8b" },
//   { href: "/r9", text: "r9" },
//   { href: "/r10", text: "r10" },
//   { href: "/r11", text: "r11" },
//   { href: "/r12", text: "r12" },
//   { href: "/r13", text: "r13" },
// ];

const routeMenus = [
  { href: "/route", label: "route home" },
  { href: "/route/r1", label: "r1: route start" },
  { href: "/route/r2", label: "r2: nested route" },
  { href: "/route/r3", label: "r3: dinaic route" },
  { href: "/route/r4", label: "r4: caltch all" },
  { href: "/route/r5", label: "r5: grouping route" },
  { href: "/route/r6", label: "r6: metadata" },
  { href: "/route/r7", label: "r7: redirect" },
  { href: "/route/r8", label: "r8: template.tsx" },
  { href: "/route/r9", label: "r9: error.tsx" },
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
