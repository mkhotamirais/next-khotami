import Link from "next/link";
import React from "react";

export default function R2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      R2Layout
      <div className="flex gap-3 *:underline">
        <Link href="/r2/r2n1">r2n1</Link>
        <Link href="/r2/r2n2">r2n2</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
