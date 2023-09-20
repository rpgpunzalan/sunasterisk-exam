
const VideoMeta = ({video}) => {
  return (
    <div className='flex flex-col'>
      <span className='text-2xl font-bold'>{video?.snippet?.title}</span>
      <span>{video?.snippet?.description}</span>
    </div>
  )
}

export default VideoMeta