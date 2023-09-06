import React from "react";
import Input from "./Input";

export default function page() {
  return (
    <div data-theme="cupcake">
      <h1 className="p-10 text-6xl font-bold bg-black text-center text-slate-400">Vishal's Todo List</h1>
      <div className="my-14  flex flex-col items-center justify-center">
        <Input />
      </div>
    </div>
  );
}
