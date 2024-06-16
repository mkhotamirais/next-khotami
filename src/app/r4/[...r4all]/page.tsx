export default function R4All({ params }: { params: { r4all: string[] } }) {
  const { r4all } = params;
  if (r4all.length === 2) {
    return (
      <div>
        R4All: param0: {r4all[0]}, param1: {r4all[1]}
      </div>
    );
  } else if (r4all.length === 1) {
    return <div>R4All: param0: {r4all[0]}</div>;
  } else return <div>no param</div>;
}
