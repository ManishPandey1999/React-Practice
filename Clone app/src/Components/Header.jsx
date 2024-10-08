import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { LuBadgeHelp } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import Login from './Login'

export default function Header() {
    const[toggle, setToggle] = useState(false);
    const[togglelogin, setTogglelogin] = useState(false);
    
    const showSidemenu = () => {
        setToggle(true)
    }
    const hideSidemenu = () => {
        setToggle(false)
    }

    const showlogin = () => {
        setTogglelogin(true)
    }
    const hidelogin = () => {
        setTogglelogin(false)
    }
    const showMenuonmobile = () => {
        const togglemenuclass = document.getElementById("showonmobscreen");
        togglemenuclass.classList.toggle("showonmobscreen")
    }
    
    const headerList =[
        {
            icon: <FaSearch/>,
            name: "Search",
            url: "/search"
        },
        {
            icon: <BiSolidOffer/>,
            name: "Offers",
            url: "/Offers"
            
        },
        {
            icon: <LuBadgeHelp/>,
            name: "Help",
            url: "/help"
        },
        {
            icon: <FaRegUser/>,
            name: "Sign In",
            url: "/signIn"
        },
        {
            icon: <CiShoppingCart/>,
            name: "Cart",
            url: "/cart"
        },
    ]


  return (
    <>
        <div className='background-overlay h-full w-full absolute z-[100] duration-500' onClick={hideSidemenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden",
            position: toggle ? "fixed" : "absolute"

        }}>
            <div onClick={(e) => {e.stopPropagation();}} className='bg-white w-[450px] absolute h-full duration-[400ms] flex justify-center' style={{left: toggle ? "0%" : "-100%"}}>
                <div className='pt-[100px]'>
                    <div className='pb-7 w-8'>
                        <span className='cursor-pointer' onClick={hideSidemenu} style={{
                            opacity: toggle ? 1 : 0,
                            visibility: toggle ? "visible" : "hidden"
                        }}><IoMdClose fontSize={30} /></span>
                    </div>
                    <div>
                        <input type="text" placeholder='Search items...' className='border-2 w-[300px] py-1 px-2 rounded-lg focus:outline-none focus:shadow' />
                    </div>
                </div>
            </div>
        </div>
        <header className='p-4 shadow-xl bg-white sticky top-0 z-50 '>
            <div className='flex max-w-[1200px] mx-auto relative items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-[70px] flex items-center'>
                        {/* <img src="images/logo.png" alt="" className='w-full' /> */}
                        <h1 className='text-3xl font-bold'><Link to="/">S</Link></h1>
                    </div>
                    <div className='md:block hidden'>
                        <span className='font-bold border-b-2 border-black cursor-pointer hover:text-[red] hover:border-[red]'> Gagaha </span> Gorakhpur, Uttar Pradesh, India <RxCaretDown onClick={showSidemenu} fontSize={25} className='inline text-[red] cursor-pointer' />
                    </div>
                </div>
                <div>
                    <div className='md:hidden block cursor-pointer' onClick={showMenuonmobile}><FaBars /></div>
                    <div className='hidden md:flex items-center gap-5' id='showonmobscreen'>
                        <ul className='block md:flex items-center gap-10'>
                            {
                                headerList.map(
                                    (list, index) => {
                                    return <li className='cursor-pointer' onClick={showMenuonmobile} key={index}>
                                            <Link to={list.url} className='flex items-center gap-2'>
                                                {list.icon}
                                                {list.name}
                                            </Link>
                                        </li>
                                    }
                                )
                            }
                        </ul>
                        <div>
                            <button className='py-1 px-2 border border-gray-400 rounded-lg' onClick={showlogin}>Login</button>
                            <div className='h-lvh bg-white w-[350px] top-[50px] right-[-80px] absolute shadow-2xl p-5 z-[100] duration-500' style={{   
                                opacity: togglelogin ? 1 : 0,
                                visibility: togglelogin ? "visible" : "hidden",                            
                                }}>
                                <span className='cursor-pointer' onClick={hidelogin}><IoMdClose fontSize={30} /></span>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}