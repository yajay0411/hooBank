import React, { useState } from 'react';
import { navLinks } from "../constants/index.js";
import { close, menu, logo } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo}
                alt="hoobank"
                className='w-[124px] h-[32px]
                sm:ml-20 ml-10'></img>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 sm:mr-20 mr-15'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                        font-normal 
                        cursour-pointer 
                        text-[16px]
                        text-white
                        hover:text-secondary
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    >
                        <a
                            href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}

            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] mr-5 object-contain'
                    onClick={() => { setToggle((prev) => (!prev)) }}></img>
                <div
                    className={`${toggle ? "flex" : "hidden"} p-5 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 pr-5 '>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins
                        font-normal
                        cursour-pointer 
                        text-[16px]
                        text-white
                        pb-1
                      
                        ${index === navLinks.length - 1 ? "mr-0" : "mb-5"}`}
                            >
                                <a
                                    href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>



        </nav>
    )
}

export default Navbar
