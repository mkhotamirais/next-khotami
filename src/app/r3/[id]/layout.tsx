import React from "react";
import Link from "next/link";

export default function R3LayoutId({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string; idb: string };
}) {
  return (
    <div className="border rounded p-2">
      R3Layout
      <div className="flex gap-3 underline">
        <Link href={`/r3/${params.id}/detail`}>id {params.id} detail</Link>
        <Link href={`/r3/${params.id}/detail/1`}>id {params.id} detail 1</Link>
        <Link href={`/r3/${params.id}/detail/2`}>id {params.id} detail 2</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
