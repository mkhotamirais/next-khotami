import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r6", label: "r6 home" },
    { href: "/route/r6/r6a", label: "r6a" },
  ];
  return (
    <div>
      R6Layout
      <div className="flex gap-3">
        R6Nav:
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
