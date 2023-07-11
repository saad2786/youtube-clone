import React from 'react'
import './Sidebar.css'
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@mui/icons-material/Home'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import HistoryIcon from '@mui/icons-material/History'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
function Sidebar() {
  return (
    <div className="side_page">
      <div>
        <Sidebarrow selected Icon={HomeIcon} title="Home" />
        <Sidebarrow Icon={SubscriptionsIcon} title="Subscription" />
        <Sidebarrow Icon={WhatshotIcon} title="Trending" />
        <Sidebarrow Icon={SlowMotionVideoIcon} title="Shorts" />
      </div>
      <hr />
      <div>
        <Sidebarrow Icon={HistoryIcon} title="History" />
        <Sidebarrow Icon={VideoLibraryIcon} title="Library" />
        <Sidebarrow Icon={WatchLaterIcon} title="Watch Later" />
        <Sidebarrow Icon={ThumbUpOffAltIcon} title="Liked Video" />
        <Sidebarrow Icon={KeyboardArrowDownIcon} title="Show more" />
      </div>
      <hr/>
    </div>
  )
}

export default Sidebar
