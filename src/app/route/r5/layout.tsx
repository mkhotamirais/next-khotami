import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r5/r5a1", label: "r5a1" },
    { href: "/route/r5/r5a2", label: "r5a2" },
    { href: "/route/r5/r5b1", label: "r5b1" },
    { href: "/route/r5/r5b2", label: "r5b2" },
  ];
  return (
    <div>
      R5Layout
      <div className="flex gap-3">
        R5Nav:
        {menus.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-cyan-500">
            {item.label}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
