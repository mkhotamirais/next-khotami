import Link from "next/link";

export const metadata = {
  title: "r6a",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = [
    { href: "/route/r6/r6a", label: "r6a home" },
    { href: "/route/r6/r6a/1", label: "r6a 1" },
    { href: "/route/r6/r6a/2", label: "r6a 2" },
  ];
  return (
    <div>
      R6aLayout
      <div className="flex gap-3">
        R6aNav:
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
