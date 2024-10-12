import React, { useState } from 'react';
import { Images } from "../constant";
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className='flex justify-between items-center pt-5 px-28 bg-[#faf6fa] fixed top-0 left-0 right-0 z-20 '>
                <div className='left-0 mr-16'>
                    <img src={Images.logo} className="w-44" alt="" />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNav}>
                        {navOpen ? <FaTimes className="w-6 h-6 " /> : <FaBars className="w-6 h-6" />} 
                    </button>
                </div>

                <div className='hidden md:flex gap-14 font-bold text-lg'>
                    <a className='hover:text-purple-500' href="#Home">Home</a>
                    <a className='hover:text-purple-500' href="#About">About</a>
                    <a className='hover:text-purple-500' href="#Projects">Projects</a>
                    <a className='hover:text-purple-500' href="#Skills">Skills</a>
                    <a className='hover:text-purple-500' href="#Contact">Contact</a>
                </div>
            </div>

            <div className={`fixed top-0 left-0 h-full w-full bg-[#faf6fa] z-10 transform ${navOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
                <div className='flex flex-col gap-6 text-center pt-20 font-bold text-lg'>
                    <a className='hover:text-purple-500' href="#Home" onClick={toggleNav}>Home</a>
                    <a className='hover:text-purple-500' href="#About" onClick={toggleNav}>About</a>
                    <a className='hover:text-purple-500' href="#Projects" onClick={toggleNav}>Projects</a>
                    <a className='hover:text-purple-500' href="#Skills" onClick={toggleNav}>Skills</a>
                    <a className='hover:text-purple-500' href="#Contact" onClick={toggleNav}>Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
