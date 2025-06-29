import React, { useEffect, useState } from "react";
import useConversation from "../../statemanage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const response = await axios.get(
            `/api/message/get/${selectedConversation._id}/messages1`
          );
          setMessages(response.data);
          setLoading(false);
        } catch (error) {
          console.log("Error in useGetMessages:", error);
        }
      }
    };
    getMessages();
  }, [selectedConversation.setMessages]);
  return {
    messages,
    loading,
  };
};

export default useGetMessage;
