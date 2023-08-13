import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex-auto w-72">
          <iframe
          className="w-full"
            height="315"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex-auto w-28">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
