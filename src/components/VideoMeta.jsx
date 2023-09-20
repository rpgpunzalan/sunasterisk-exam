import { formatText } from "../utils/textUtil"

const VideoMeta = ({video}) => {
  return (
    <div className='flex flex-col'>
      <span className='text-2xl font-bold'>{formatText(video?.snippet?.title)}</span>
      <span>{formatText(video?.snippet?.description)}</span>
    </div>
  )
}

export default VideoMeta