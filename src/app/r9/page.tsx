import Link from "next/link";

export const metadata = {
  title: "r9",
};

export default function R9() {
  return (
    <div>
      R9:
      <div>
        <Link href="/r9/1">click me id 1</Link>
        <Link href="/r9/2">click me id 2</Link>
      </div>
    </div>
  );
}
