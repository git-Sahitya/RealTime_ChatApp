import React from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log("Messages is :", messages);
  
  return (
    <>
      <div className="" style={{ minHeight: "calc(90vh - 12vh)" }}>
        <Message />
      </div>
    </>
  );
};

export default Messages;
