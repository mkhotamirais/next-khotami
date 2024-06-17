import { notFound } from "next/navigation";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  if (parseInt(id) > 10) {
    notFound();
  }
  return <div>page {id}</div>;
}
