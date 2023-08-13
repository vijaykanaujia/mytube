import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName } from "../Utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const useMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorem Ipsum is Lorem Ipsum",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="flex flex-col-reverse h-80 overflow-auto ms-2 px-2 shadow-lg border-2 border-gray-200 bg-slate-100">
        {useMessages.map((c) => {
          return <ChatMessage name={c.name} message={c.message} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.length == 0) {
            alert("Please Type a Message");
            return;
          }
          dispatch(
            addMessage({
              name: "hello boy",
              message: liveMessage,
            })
          );
        }}
        className="w-full border-2 border-slate-400 px-1 py-2 mt-2"
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-52 border-2"
          type="text"
        />{" "}
        <button className="bg-green-600 text-white px-2 rounded-sm">
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
