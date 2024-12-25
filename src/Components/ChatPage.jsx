import React, { useEffect, useRef, useState } from "react";
import "@/CssFiles/chat.css";
import useGetConnectedUsers from "@/hooks/useGetConnectedUsers";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "@/redux/userSlice";
import { LuMessagesSquare } from "react-icons/lu";
import axios from "axios";
import { setMessages } from "@/redux/chatSlice";
import useGetAllMessages from "@/hooks/useGetAllMessages";
import useGetRTM from "@/hooks/useGetRTM";
import { Button } from "./ui/button";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChatPage = () => {
  useGetRTM();
  useGetConnectedUsers();
  useGetAllMessages();
  const dispatch = useDispatch();
  const connectedUsers = useSelector((state) => state.userAuth.connectedUsers);
  const selectedUser = useSelector((state) => state.userAuth.selectedUser);
  const onlineUsers = useSelector((state) => state.chat.onlineUsers);
  const user = useSelector((state) => state.userAuth.user);
  const [textMessage, setTextMessage] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const messagesEndRef = useRef(null);

  const sendMessageHandler = async (receiverId) => {
    if (!textMessage.trim()) {
      console.log("Cannot send empty message");
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${receiverId}`,
        { textMessage },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setTextMessage("");
        dispatch(setMessages([...messages, res.data.newMessage]));
      }
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
    // Scroll to the bottom of the messages container
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedUser]); 

  useEffect(() => {
    return () => {
      dispatch(setSelectedUser(null));
    };
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents new line in the input field
      sendMessageHandler(selectedUser?._id); // Call send message on Enter
    }
  };
  return (
    <>
      <div className="h-[100vh]">
        <div className="flex">
          <section className="discussions">
            <div className="discussion">
              <Link to="/">
                <Button className="ml-[20px]">
                  <AiFillHome className="h-6 w-6 " />
                </Button>
              </Link>
            </div>
            {connectedUsers && connectedUsers.length > 0 ? (
              connectedUsers.map((user) => {
                const isOnline = onlineUsers.includes(user?._id);
                return (
                  <div
                    onClick={() => dispatch(setSelectedUser(user))}
                    key={user._id}
                    className={`discussion ${
                      selectedUser?._id === user._id ? "message-active" : ""
                    } hover:bg-gray-100`}
                  >
                    <div className="photo"> 
                      <div
                        className={`online ${
                          isOnline ? "bg-green-300" : "bg-red-400"
                        }`}
                      ></div>
                    </div>
                    <div className="desc-contact">
                      <p className="name">{user?.name}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No connected users found.</p>
            )}
          </section>

          {selectedUser ? (
            <>
              <section className="chat">
                <div className="header-chat ">
                  <p className="name">{selectedUser?.name}</p>
                </div>

                <div className="messages-chat overflow-y-auto">
                  {messages &&
                    Array.isArray(messages) &&
                    messages.map((msg) => (
                      <>
                        <div
                          className={`message ${
                            msg.senderId === user?._id
                              ? "justify-end"
                              : "justify-start"
                          }`}
                          key={msg._id}
                        >
                          <p
                            className={`chat-text-item ${
                              msg.senderId === user?._id
                                ? "bg-[#f6f6f6]"
                                : "bg-black text-white"
                            }`}
                          >
                            {msg.message}
                          </p>
                        </div>
                      </>
                    ))}
                  <div ref={messagesEndRef} />
                </div >
                <div className="footer-chat">
                  <input
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                    name="message"
                    className="write-message"
                    placeholder="Type your message here"
                  ></input>

                  <Button
                    type="submit"
                    onClick={() => sendMessageHandler(selectedUser?._id)}
                  >
                    Send
                  </Button>
                </div>
              </section>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center mx-auto">
              <LuMessagesSquare className="w-32 h-32 my-4 text-gray-800" />
              <h1 className="font-bold">Your messages</h1>
              <span>Send a message to start conversation</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
