import Link from "next/link";

export default function Par1() {
  return (
    <div className="border rounded p-2">
      Par1 <br />
      <Link href="/route/r10/par1child" className="underline">
        par1child btn
      </Link>
    </div>
  );
}
