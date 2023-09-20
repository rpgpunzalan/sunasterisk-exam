import React from "react";
import { formatText } from "../utils/textUtil";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
      <div className="flex flex-col w-[15vw]">
      <span className=" font-semibold">{formatText(video.snippet.title)}</span>
      <span className="text-sm">{dayjs(video.snippet.publishedAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default VideoThumbnail;
