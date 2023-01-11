import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import SmallNavbar from '../Shared/Navbar/SmallNavbar';
import { contextAPI } from '../UseContext/useContex';

const Main = () => {
    const { isOpen } = useContext(contextAPI);
    return (
        <div>
            <Navbar />
            {
                isOpen && <SmallNavbar />
            }
            <Outlet />
        </div>
    );
};

export default Main;