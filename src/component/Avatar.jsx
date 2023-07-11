import React from 'react'
import "./VideoCard.css"
function Avatar({image, className }) {
  return (
    <div>
        <img src={image} alt="channel_image" className={className}/>
    </div>
  )
}

export default Avatar