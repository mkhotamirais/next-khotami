import React from "react";
import Link from "next/link";

export default function R3Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r3/1", label: "id1" },
    { href: "/route/r3/2", label: "id2" },
    { href: "/route/r3/11", label: "id11" },
  ];
  return (
    <div>
      R3Layout
      <div className="flex gap-3">
        R3NAV:
        {menus.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-cyan-500">
            {item.label}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
