export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>R6a: metadata loading 2 second for first render because settimeout</div>;
}
