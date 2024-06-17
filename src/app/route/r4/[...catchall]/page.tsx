import React from "react";

export default function R4All({ params }: { params: { catchall: string[] } }) {
  const { catchall } = params;
  let content: React.ReactNode;
  if (catchall?.length === 3)
    content = (
      <div>
        R4 Catch All: param0: {catchall[0]}, param1: {catchall[1]}, param2: {catchall[2]}
      </div>
    );
  else if (catchall?.length === 3)
    content = (
      <div>
        R4 Catch All: param0: {catchall[0]}, param1: {catchall[1]}
      </div>
    );
  else if (catchall?.length === 3) content = <div>R4 Catch All: param0: {catchall[0]}</div>;
  else content = <div>R4 Catch All no param</div>;
  return content;
}
