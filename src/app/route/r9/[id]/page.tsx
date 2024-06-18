"use client";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  if (id === "3") {
    throw new Error("error loading view dari page r9id");
  }
  return <div>R9 id {id}</div>;
}
