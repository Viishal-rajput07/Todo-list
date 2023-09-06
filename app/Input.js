"use client";
import { useState } from "react";

export default function Input() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const handleDelete = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="mb-3">
          <div className="flex justify-around items-center">
            <h3 className="text-xl font-semibold">
              {i + 1})&nbsp; &nbsp;&nbsp;{t.title}
            </h3>
            <h3>{t.desc}</h3>
            <div className="flex justify-center items-center">
              <div className="form-control ">
                <label className="cursor-pointer label">
                  {/* <span className="label-text mr-2">Done</span> */}
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <button
                onClick={() => {
                  handleDelete(i);
                }}
                className="ml-6 btn btn-sm bg-red-500 text-white hover:text-black"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="rounded-xl border-2 border-black my-5 p-3 text-xl"
          type="text"
          placeholder="Enter Your title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="rounded-xl border-2 border-black my-5 p-3 text-xl"
          type="text"
          placeholder="Enter your description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <div className="flex justify-center items-center">
          <button className="  btn btn-sm btn-success">Add Task</button>
        </div>
      </form>
      <hr className="h-0.5 w-9/12 bg-black mt-9" />
      <div className=" mt-10 bg-slate-300 p-5 w-11/12 rounded-xl">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
