import React from "react";
import Link from "next/link";

type tR3Layout = {
  children: React.ReactNode;
  params: { id: string; idb: string };
};

export default function R3LayoutId({ children, params }: tR3Layout) {
  const menus = [
    { href: `/route/r3/${params.id}/detail`, label: `id ${params.id} detail` },
    { href: `/route/r3/${params.id}/detail/1`, label: `id ${params.id} detail 1` },
    { href: `/route/r3/${params.id}/detail/2`, label: `id ${params.id} detail 2` },
  ];
  return (
    <div className="border rounded p-2">
      R3Layout
      <div className="flex gap-3">
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
