import React from "react";
import "./menu.css";

import Menutop from "./Menutop";
import Menudown from "./Menudown";
const Menu = () => {
    return (
        <div className="menu-section">
            <Menutop />
            <Menudown />
        </div>
    );
};

export default Menu;
