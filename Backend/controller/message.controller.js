import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // current logged in user id

    let conversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
        message: [],
      });
    }

    conversation.message.push(newMessage._id);
    await Promise.all([conversation.save(), newMessage.save()]);

    res
      .status(201)
      .json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.log("Error in sending message:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("message");
    if (!conversation) {
      return res.status(201).json({ message: "No conversation found" });
    }
    const message = conversation.message;
    res.status(201).json({ message });
  } catch (error) {
    console.log("Message getting error", error);
    res.status(500).json({error : "Internal server error"})
  }
};
