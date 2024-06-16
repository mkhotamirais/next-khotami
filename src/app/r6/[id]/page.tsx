import { notFound } from "next/navigation";

export default function R6Id({ params }: { params: { id: string } }) {
  const { id } = params;
  if (parseInt(id) > 10) {
    notFound();
  }
  return <div>R6Id: {id}</div>;
}
