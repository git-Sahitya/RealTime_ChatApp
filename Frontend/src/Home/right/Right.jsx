import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

const Right = () => {
  return (
    <div className=" w-[70%]  bg-slate-950 text-white">
      <Chatuser></Chatuser>
      <div
        className="py-2 flex-scroll overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 12vh)" }}
      >
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  );
};

export default Right;
