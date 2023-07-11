import React from 'react'
import './Searchpage.css'
import ChannelRow from './ChannelRow.jsx'
import VideoRow from "./VideoRow.jsx"
import TuneIcon from '@mui/icons-material/Tune'
import Thumb from './images/images.jpg'
import Logo from "./images/logo.png"
function Searchpage() {
  return (
    <div className="search_page">
      <div className="filter">
        <TuneIcon />
        <h3>Filter</h3>
      </div>
      <hr />
      <ChannelRow
        image={Logo}
        channel="Halal Habibi"
        verified
        subscribers="1.24M"
        novideos="320"
        description="lorem Voluptate aliquip officia nulla sit incididunt magna do consequat in quis eiusmod amet."
      />
      <hr/>
      <div className='VideoRows'>
        <h3>Latest from Halal Habibi</h3>
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      <VideoRow 
        thumbnail={Thumb}
        channel_image={Logo}
        channel="Habibi Halal"
        title="Culpa ea et esse duis et aliqua aliqua proident labore ex."
        views="232k"
        timeStamp="3 days ago"
        description="Voluptate velit duis laboris excepteur ut ex sunt duis nulla sunt consectetur."

      />
      </div>
    </div>
  )
}

export default Searchpage
