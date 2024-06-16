import React from "react";

export default function Nested2Id({ params }: { params: { route2Id: string; nested2Id: string } }) {
  return (
    <div>
      Nested2Id {params.route2Id} - {params.nested2Id}
    </div>
  );
}
