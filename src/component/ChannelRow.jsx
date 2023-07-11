import Avatar from './Avatar'
import React from 'react'
import "./ChannelRow.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image, channel, verified, subscribers, novideos, description}) {
  return (
    <div>
        <div className='channelRow'>
            <Avatar 
                image={image}
                className="channelRow_logo"
            />
            <div className='channelRow_text'>
              <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
              <p>{subscribers} subscribers &nbsp; <strong>.</strong> {novideos} videos</p>
              <p>{description}</p>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default ChannelRow