import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "", // menimpa semua value yang lain
    default: "r6", // default untuk child
    template: "%s | dinamis", // nilai dinamis tergantung childnya
  },
  description: "R6 Metadata",
};
export default function Page() {
  return <div>R6: Metadata</div>;
}
