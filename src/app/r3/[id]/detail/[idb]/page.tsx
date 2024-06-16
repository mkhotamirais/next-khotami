export default function DetailIdb({ params }: { params: { id: string; idb: string } }) {
  const { id, idb } = params;
  return (
    <div>
      DetailIdb, id: {id} - idb: {idb}
    </div>
  );
}
