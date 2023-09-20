import React from "react";

const VideoThumbnail = ({ video }) => {
  return (
    <div className="flex gap-2 w-full">
      <div
        className="bg-gray-500 w-[15vw] aspect-video"
        style={{
          backgroundImage: `url(${video?.snippet?.thumbnails?.medium?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <span className="w-[15vw]">{video.snippet.title}</span>
    </div>
  );
};

export default VideoThumbnail;
