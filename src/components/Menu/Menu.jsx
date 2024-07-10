import "./Menu.css"
import React from 'react'
import MenuItem from "../MenuItem/MenuItem"

function Menu() {
    const menuDetails = [
        { menuTitle: "Home", subMenu: [] },
        { menuTitle: "Shop", subMenu: ["Laptop", "Mobile", "PC", "Camera", "TV"] },
        { menuTitle: "Deals", subMenu: ["Top Deals", "Black Friday in summer", "Laptops On Sale", "Top Smartphones Deals", "Big Screen TVs On Sale"] },
        { menuTitle: "Outlet", subMenu: ["Open Box Products", "Refurbished Products", "Clearance Products", "All Outlet Deals"] },
        { menuTitle: "Contact Us", subMenu: [] },
    ]

    return (
        <div className="menu-container"
            style={{
                gridTemplateColumns: `repeat(${menuDetails.length}, auto)`,
            }}>
            {menuDetails.map((item) => {
                return <MenuItem key={item.menuTitle} {...item} />
            })}
        </div>
    )
}

export default Menu