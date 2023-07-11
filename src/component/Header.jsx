import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/icons-material/AccountCircle'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom"

function Header(){
    const [inputSearch, setInput] = useState("")
   return (
       <div className="header">
        <div className="header_left">
        <MenuIcon />
        <Link to="/" className="link_items">
        <YouTubeIcon className="header__logo" sx={{fontSize:38}}/>
        <p className="brand">YouTube</p>
           </Link>
     </div>
     <div className="header__mid">
        <div className="header_input"> 
        <input onChange={event => {
         setInput(event.target.value)
        }} value={inputSearch} placeholder="Search" type="text"></input>
        <Link to={`search/${inputSearch}`} className="link_items">
        <div className="header_inputButton">
         <SearchIcon />
        </div>
        </Link>
        </div>
        <MicIcon className="micIcon" />
     </div>
       <div className="header__right">
        <VideoCallIcon className="right_icon"/>
        <NotificationsIcon className="right_icon"/>
        <Avatar className="right_icon"/>
       </div>
        
       </div>
       
    )
 }

  export default Header;