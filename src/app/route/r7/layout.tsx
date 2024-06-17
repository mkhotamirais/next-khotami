"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const menus = [
    { href: "/route/r7", label: "r7 home" },
    { href: "/route/r7/r7a", label: "r7a" },
    { href: "/route/r7/r7b", label: "r7b" },
  ];

  return (
    <div>
      R7Layout
      <div>
        <button type="button" onClick={() => setCount((prev) => prev + 1)} className="border rounded leading-none p-2">
          clickme {count} times
        </button>
      </div>
      <div className="flex gap-3">
        R6Nav:
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
