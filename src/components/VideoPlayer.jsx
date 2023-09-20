const VideoPlayer = ({ video }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={`https://www.youtube.com/embed/${video?.id?.videoId}?autoplay=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
