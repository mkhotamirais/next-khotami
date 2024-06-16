"use client";
import React, { useState } from "react";

export default function R13() {
  const [input, setInput] = useState("");
  return (
    <div>
      R13 <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded"
        placeholder="input"
      />
    </div>
  );
}
