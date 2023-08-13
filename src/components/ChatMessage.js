import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex my-2 items-center">
      <div className="w-6 h-6 text-center rounded-full before: bg-black text-white user-img">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="ms-2 w-auto me-2 text-slate-950 font-semibold">
        {name}
      </div>
      <div className="flex-auto message-container text-slate-700">
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
