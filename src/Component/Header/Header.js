import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-accent px-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        <li><NavLink to='/home'
                                title='Home'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-info  transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4'}
                            >Home</NavLink></li>
                            <li><NavLink to='statistics'
                                className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-info e transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}
                                title='Statistics'
                            >Statistics</NavLink></li>
                            <li><NavLink to='blog'
                                title='Blog'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-info transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">Pro Quiz World</NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home'
                                title='Home'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-info  transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4'}
                            >Home</NavLink></li>
                            <li><NavLink to='statistics'
                                className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded tracking-wide text-info e transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white  transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}
                                title='Statistics'
                            >Statistics</NavLink></li>
                            <li><NavLink to='blog'
                                title='Blog'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded tracking-wide text-info transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}>Blog</NavLink></li>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};



export default Header;