import React from "react";
import Link from "next/link";

export default function R2N2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      R2N2Layout
      <div className="flex gap-2">
        <Link href="/r2/r2n2/r2n2a" className="underline">
          r2n2a
        </Link>
        <Link href="/r2/r2n2/r2n2b" className="underline">
          r2n2b
        </Link>
      </div>
      {children}
    </div>
  );
}
