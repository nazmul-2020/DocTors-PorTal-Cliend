import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/appointment">Appointment</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
    </>
    return (
        <div className="navbar bg-base-100 px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">DocTors PorTal</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;