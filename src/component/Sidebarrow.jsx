import React from 'react'
import "./Sidebarrow.css"

function Sidebarrow({selected, Icon, title}) {
  return (
    <div className= {`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow_Icon"/>
        <h3 className='sidebarRow_title'>{title}</h3>
    </div>
  )
}

export default Sidebarrow