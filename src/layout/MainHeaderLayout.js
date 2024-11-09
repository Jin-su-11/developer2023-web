import React from 'react';
import { Outlet } from "react-router";

const MainHeaderLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainHeaderLayout;

