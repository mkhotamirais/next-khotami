import Link from "next/link";

const r2Menus = [
  { href: "/route/r2", label: "Nested Home" },
  { href: "/route/r2/n1", label: "Nested1" },
  { href: "/route/r2/n2", label: "Nested2" },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      R2Layout
      <div className="flex gap-4">
        {r2Menus.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-cyan-500">
            {item.label}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
