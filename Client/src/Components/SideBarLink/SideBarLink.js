import React from 'react'
import './SideBarLink.css';

function SideBarLink({text,Icon,handlenavigate}) {
  return (
    <div className="link" onClick={handlenavigate}>
          <Icon/>
          <h2>{text}</h2>
    </div>
  )
}

export default SideBarLink