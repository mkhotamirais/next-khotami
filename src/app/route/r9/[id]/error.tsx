// "use client";

// export default function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <div className="border rounded p-2 leading-none border-red-500 bg-red-400 w-fit">
//       ErrorBoundary karena id tidak boleh 3, pesannya: {error.message}
//     </div>
//   );
// }

"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="border rounded p-2 leading-none border-red-500 bg-red-400 w-fit">
      ErrorBoundary karena id tidak boleh 3, pesannya: {error.message} <br />
      <button type="button" onClick={reset} className="border rounded leading-none p-1 bg-blue-500 text-white">
        try again
      </button>
      page.tsx pada error ini menggunakna `use client`. kalau idnya random dan digenerate selain 3 maka errornya hilang.
    </div>
  );
}
