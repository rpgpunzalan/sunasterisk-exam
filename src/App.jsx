import { useEffect, useState } from "react";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import VideoMeta from "./components/VideoMeta";
import VideoThumbnail from "./components/VideoThumbnail";
import useSearch from "./hooks/useSearch";

function App() {
  const [nextVideos, setNextVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const { searchResults } = useSearch();

  useEffect(() => {
    const vids = searchResults;
    setActiveVideo(vids.shift());
    setNextVideos(vids);
  }, [searchResults]);

  const playVideo = (video) => {
    setActiveVideo(video);
  }

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <Header />
      {searchResults.length > 0 && (
        <div className="flex gap-10 w-full h-full">
          {/* Viewport */}
          <div className="flex flex-col grow h-full p-10 gap-2">
            <VideoPlayer video={activeVideo} />
            <VideoMeta video={activeVideo} />
          </div>
          {/* Next videos */}
          <div className="flex flex-col w-[30vw] gap-5 p-5 overflow-y-auto h-full">
            {nextVideos?.map((video) => (
              <div key={video.id.videoId} onClick={()=>{playVideo(video)}} className="hover:cursor-pointer">
                <VideoThumbnail video={video} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
