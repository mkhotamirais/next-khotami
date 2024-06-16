import React from "react";
import Link from "next/link";

export default function R3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded p-2">
      R3Layout
      <div className="flex gap-3 underline">
        <Link href="/r3/1">id1</Link>
        <Link href="/r3/2">id2</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
