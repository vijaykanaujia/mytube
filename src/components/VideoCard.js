import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 mt-2 mr-2 w-80">
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt={title} />
      <ul>
        <li className="font-bold pt-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
