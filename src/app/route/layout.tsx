import { Title } from "@/components/components";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Title>Router</Title>
      <div>{children}</div>
    </div>
  );
}
