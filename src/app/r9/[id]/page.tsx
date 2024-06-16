import { Metadata } from "next";

type tR9Id = {
  params: { id: string };
};
export const generateMetadata = async ({ params }: tR9Id): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`r9id ${params.id}`);
    }, 1000);
  });
  return {
    title,
  };
};

export default function R9Id({ params }: tR9Id) {
  return <div>R9Id detail id {params.id}</div>;
}
