import React from 'react'
import Avatar from './Avatar'
import "./VideoRow.css"
function VideoRow({
  thumbnail,
  channel_image,
  channel,
  title,
  views,
  timeStamp,
  description,
}) {
  return (
    <div className='videoRow'>
    
    <div className='videoRow_image'>
      <img src={thumbnail} alt="videoRow_image" className='thumbnail_image'/>

    </div>

      <div className="videoRow_text">
        <h4>{title}</h4>
        <p>{views} views &nbsp;<strong>&middot;</strong> {timeStamp}</p>
        <div className='channel_logo'>
<Avatar image={channel_image} className="channel_image"/> 
        <h5>{channel}</h5>
         </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
