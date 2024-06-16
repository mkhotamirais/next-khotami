export default function page({ params }: { params: { r5all: string[] } }) {
  const { r5all } = params;
  if (r5all?.length === 2) {
    return (
      <div>
        R4All: param0: {r5all[0]}, param1: {r5all[1]}
      </div>
    );
  } else if (r5all?.length === 1) {
    return <div>R4All: param0: {r5all[0]}</div>;
  } else return <div>no param</div>;
}
