import { Metadata } from "next";

type tR6Id = {
  params: { id: string };
};
export const generateMetadata = async ({ params }: tR6Id): Promise<Metadata> => {
  //   const title: string = await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(`r6id ${params.id}`);
  //     }, 1000);
  //   });
  return {
    title: `r6a ${params.id}`,
  };
};

export default function Page({ params }: tR6Id) {
  return <div>R6aId, dinamic metadata: {params.id}</div>;
}
