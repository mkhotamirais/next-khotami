import React from "react";

// export const metadata = {
//   title: "about",
//   description: "about page",
// };

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
