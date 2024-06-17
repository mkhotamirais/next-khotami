"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace("/");
  };
  return (
    <div>
      R7: redirect & use client mulai
      <div>
        <button type="button" onClick={handleClick} className="border rounded leading-none p-2">
          back to home
        </button>
      </div>
    </div>
  );
}
