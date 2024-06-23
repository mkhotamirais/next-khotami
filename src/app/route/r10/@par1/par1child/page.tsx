import Link from "next/link";

export default function Par1Child() {
  return (
    <div className="border rounded p-2">
      Par1Child <br />
      <Link href="/route/r10" className="underline">
        back
      </Link>
    </div>
  );
}
