import React from "react";
import { AsideBtn } from "./aside";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="flex text-2xl items-center gap-2 my-2">
      <AsideBtn />
      <div className="text-xl">{children}</div>
    </h1>
  );
}
