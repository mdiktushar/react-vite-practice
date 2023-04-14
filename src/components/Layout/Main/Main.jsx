import React from 'react';
import Nav from '../Header/Nav';
import { Outlet } from 'react-router-dom/dist';

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Main;