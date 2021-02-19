import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {/* if sidebar is selected add the selected class */}
            <Icon className= "sidebarRow__Icon" /> 
          <h2 className= "sidebarRow__title">{title}</h2>  
        </div>
    )
}

export default SidebarRow
