import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileAvatar from "../../../assets/image-avatar.png";
import hamburger from "../../../assets/icon-hamburger.svg";
import productImage from "../../../assets/image-product-1.jpg";
import deleteIcon from "../../../assets/icon-delete.svg";
import { contextAPI } from '../../UseContext/useContex';


const Navbar = () => {

    const { isOpen, setIsOpen, shoeQuantity, setShoeQuantity } = useContext(contextAPI);

    const totalPrice = shoeQuantity * 125;

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid orange" : "",
            fontWeight: isActive ? "bold" : "",
            borderRadius: "0px",
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
        <div className="navbar border-b-2 lg:h-24 p-0">
            <div className="navbar-start flex justify-between w-full">
                <div className="dropdown">
                    <label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img src={hamburger} alt="" />
                    </label>
                </div>
                <Link className="btn btn-ghost lowercase lg:hidden font-bold text-xl">sneakerz</Link>
            </div>


            <div className="navbar-center hidden lg:flex justify-between lg:w-full items-center h-full">
                <div className='h-full'>
                    <Link className="btn !bg-transparent border-none lowercase font-bold text-3xl text-black">sneakerz</Link>
                    <ul className="menu menu-horizontal px-1 text-black h-full gap-x-2">
                        {navLink}
                    </ul>
                </div>

                <div className='flex items-center gap-x-8'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-secondary border-none text-white">{shoeQuantity}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow-lg rounded-md">
                            <div className="card-body">
                                <div>
                                    <h3 className='font-semibold'>Cart</h3>
                                    <div className="divider w-full"></div>
                                </div>
                                {
                                    shoeQuantity ?
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <img className='w-12 rounded' src={productImage} alt="shoe" />
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-lg text-gray-400'>Fall Limited Sneakers</h4>
                                                <h4 className='font-semibold text-lg text-gray-400'>$125.00 x {shoeQuantity} = <span className='font-extrabold text-black'>${totalPrice}</span></h4>
                                            </div>
                                            <div className='h-8 w-8 rounded-full bg-secondary flex justify-center items-center'>
                                                <button onClick={() => setShoeQuantity(0)}><img src={deleteIcon} alt="" /></button>
                                            </div>
                                        </div>
                                        : <h4 className='font-semibold text-secondary'>Your Cart's Empty</h4>
                                }
                                <div className="card-actions">
                                    <button className='flex justify-center gap-x-2 items-center bg-[#E07338] w-full h-12 rounded-lg text-white font-bold hover:shadow-orange-400 hover:shadow-lg'>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 h-10 rounded-full border-4 border-orange-700">
                                <img src={profileAvatar} alt='avatar' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;