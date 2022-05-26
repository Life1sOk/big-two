import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../navigation/nav.component";
import TopNav from "../top-nav/top.nav.component";

const MainNav = () => {
    return(
        <div> 
            <TopNav />
            <Navigation />
            <Outlet />
        </div>
    )
}

export default MainNav;