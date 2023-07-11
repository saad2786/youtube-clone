import React from 'react'
import './VideoCard.css'
import Avatar from './Avatar.jsx'
function VideoCard({
  thumbnail_image,
  channelImage,
  title,
  channel,
  views,
  timeStamp,
}) {
  return (
    <div className="VideoCard">
      <img alt="thumbnail" src={thumbnail_image} className="thumbnail_image" />
      <div className="video_info">
        <Avatar image={channelImage} className="channel_image"/>
        <div className='videoCard_text'>
          <h4 className="title">{title}</h4>
          <p>{channel}</p>
          <p>
            {views} <strong>&middot;</strong> {timeStamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
