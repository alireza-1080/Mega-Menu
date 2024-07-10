import "./MenuItem.css"
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

function MenuItem({ menuTitle, subMenu }) {

  return (
    <div className="menu-item-container">
      <div className="menu-title-container">
        <a href="#">{menuTitle}</a>
        {Boolean(subMenu.length) && <IoIosArrowUp className="arrow-icon" />}
        {Boolean(subMenu.length) && <ul className="sub-menu-container">
            {subMenu.map(subMenuItem => {
              return <li>{subMenuItem}</li>
            })}
          </ul>}
      </div>
    </div>
  )
}

export default MenuItem