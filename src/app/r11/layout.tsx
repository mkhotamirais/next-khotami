"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const r11Menus = [
  { href: "/r11/satu", text: "satu" },
  { href: "/r11/dua", text: "dua" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      layout R11 <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded"
        placeholder="input"
      />
      <p>Ketika pindah navigasi, input tidak terhapus</p>
      <p>jika file ini diubah dari layout.tsx menjadi template.tsx maka input akan berpengaruh (terhapus)</p>
      <div className="flex gap-3">
        {r11Menus.map((item, i) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={i} href={item.href} className={`${isActive ? "text-blue-500" : ""}`}>
              {item.text}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
