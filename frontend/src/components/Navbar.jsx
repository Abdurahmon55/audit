import React from 'react'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div className='p-2 bg-slate-200 grid grid-cols-12 gap-2 '>
            <NavLink to='/' className='flex items-center gap-2 w-min hover:text-cyan-500 px-2 cursor-pointer col-span-2'>
                <span className='font-semibold hover:text-slate-500'>Audit</span>
                <i><MdAccountBalanceWallet /></i>
            </NavLink>
            <div className='flex items-center justify-between bg-white md:col-span-4 col-span-9'>
                <input className='w-full' type="text" />
                <i><IoSearch /></i>
            </div>
            <div className='flex items-center md:col-span-2 gap-1 hover:text-cyan-500 cursor-pointer col-span-4 pl-2'>
                <span className='font-semibold  hover:text-slate-500'>balance</span>
                <i><FaBalanceScaleLeft /></i>
            </div>
            <NavLink to='account/' className='flex items-center gap-1 cursor-pointer hover:text-cyan-500 md:col-span-2  col-span-4'>
                <span className='font-semibold  hover:text-slate-500'>abdurahmon</span>
                <i className=''><RiAccountPinCircleFill /></i>
            </NavLink>
            <div className='md:col-span-2 col-span-4'>
                <button className='px-2 font-semibold rounded-lg hover:bg-amber-400 bg-amber-500 hover:text-slate-400'>sing out</button>
            </div>
        </div>
    )
}

export default Navbar