import React from "react";

type tProps = {
  children: React.ReactNode;
  par1: React.ReactNode;
  par2: React.ReactNode;
  protectPar: React.ReactNode;
};
export default function Layout({ children, par1, par2, protectPar }: tProps) {
  const isProtect = false;
  return !isProtect ? (
    <>
      <div>{children}</div>
      <div>{par1}</div>
      <div>{par2}</div>
    </>
  ) : (
    <>{protectPar}</>
  );
}
