import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <nav className="  sm:px-4 py-2.5 rounded navbar bg-accent text-white px-10">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">Pro Quiz World</NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
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
            </nav> */
            }


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