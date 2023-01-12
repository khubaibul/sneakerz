import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from "../../../assets/icon-close.svg";
import { contextAPI } from '../../UseContext/useContex';

const SmallNavbar = () => {

    const { isOpen, setIsOpen } = useContext(contextAPI);

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid orange" : "",
            backgroundColor: isActive ? "transparent" : "transparent"
        }
    }

    const navLink = <>
        <li className='tracking-wide'>
            <NavLink className="transition duration-500" to="/collection" style={navLinkStyle}>Collection</NavLink>
        </li>
        <li className='tracking-wide'>
            <NavLink className="transition duration-500" to="/men" style={navLinkStyle}>Men</NavLink>
        </li>
        <li className='tracking-wide'>
            <NavLink className="transition duration-500" to="/" style={navLinkStyle}>Women</NavLink>
        </li>
        <li className='tracking-wide'>
            <NavLink className="transition duration-500" to="/about" style={navLinkStyle}>About</NavLink>
        </li>
        <li className='tracking-wide'>
            <NavLink className="transition duration-500" to="/contact" style={navLinkStyle}>Contact</NavLink>
        </li>
    </>

    return (
        <div className='top-0 left-0 fixed bg-white h-full w-[70vw] ease-in-out duration-500 translate-x-0 z-10'>
            <button onClick={() => setIsOpen(!isOpen)} className='w-10 h-10 rounded-full text-white  flex justify-center items-center mt-4 ml-3'>
                <img src={closeIcon} alt="" />
            </button>
            <ul className='p-10 flex flex-col gap-y-5 font-bold text-lg'>
                {navLink}
            </ul>
        </div>
    );
};

export default SmallNavbar;