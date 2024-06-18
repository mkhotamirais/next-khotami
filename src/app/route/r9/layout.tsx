import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r9", label: "r9 home" },
    { href: "/route/r9/1", label: "id1" },
    { href: "/route/r9/2", label: "id2" },
    { href: "/route/r9/3", label: "id3 error" },
  ];
  return (
    <div>
      R9Layout <br />
      Error id 3 di development mode dengan di production tampilannya beda. <br />
      untuk mencoba production mode, gunakan `npm run build` lalu `npm run start` <br />
      tapilan error production mode akan seperti ini:
      <pre className="overflow-x-scroll">{`
Application error: a server-side exception has occurred (see the server logs for more information).
                              Digest: 2759172053
`}</pre>
      <div className="flex gap-3">
        R9Nav:
        {menus.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-cyan-500 min-w-max">
            {item.label}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
