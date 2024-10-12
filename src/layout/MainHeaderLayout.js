import React from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router";


const MainHeaderLayout = () => {
    return (
        <div>
            <Header style={{background: "#182737"}}/>
            <main>
                <Outlet />
            </main>



        </div>
    )
}

export default MainHeaderLayout;