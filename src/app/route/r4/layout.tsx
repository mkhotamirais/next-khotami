import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r4", label: "home" },
    { href: "/route/r4/catchall/satu/dua", label: "catchall" },
    { href: "/route/r4/catchall2/satu/dua", label: "catchall2" },
  ];
  return (
    <div>
      R4Layout
      <div className="flex gap-3">
        R4Nav:
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
