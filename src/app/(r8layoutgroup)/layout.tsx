import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>layout r8</div>
      {children}
    </div>
  );
}
