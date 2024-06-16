"use client";
import { useRouter } from "next/navigation";

export default function R12() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace("/");
  };

  return (
    <div>
      R12 <br />
      <button type="button" onClick={handleClick} className="border rounded p-1">
        back to home btn
      </button>
    </div>
  );
}
