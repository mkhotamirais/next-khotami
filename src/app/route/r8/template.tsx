"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const menus = [
    { href: "/route/r8", label: "r8 home" },
    { href: "/route/r8/r8a", label: "r8a" },
    { href: "/route/r8/r8b", label: "r8b" },
  ];

  return (
    <div>
      R8Template (bukan layout) template mempengaruhi state saat ganti route
      <div>
        <button type="button" onClick={() => setCount((prev) => prev + 1)} className="border rounded leading-none p-2">
          clickme {count} times
        </button>
      </div>
      <div className="flex gap-3">
        R8av:
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
