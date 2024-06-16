import React, { ReactNode } from "react";

export default function Route3Slug({ params }: { params: { slug: string[] } }) {
  let content: ReactNode;
  if (params.slug.length === 2)
    content = (
      <div>
        slug0 = {params.slug[0]}, slug1 = {params.slug[1]}
      </div>
    );
  else if (params.slug.length === 1) content = <div>slug0 = {params.slug[0]}</div>;
  else content = <div>tidak ada param slug</div>;
  return (
    <div>
      Route3Slug length {params.slug.length} {content}
    </div>
  );
}
