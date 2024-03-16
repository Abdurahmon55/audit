import React  from 'react'
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { authId,  selectAuthData} from '../redux/AuthSlice';
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const naviget = useNavigate()
    const Auth = useSelector(selectAuthData)
    const dispatch=useDispatch()

    const logOut=()=>{
        localStorage.removeItem('authId')
        dispatch(authId(0))
        naviget('/login/')
    }

    return (
        <div className='p-2 bg-slate-200 grid grid-cols-12 gap-2 '>
            <NavLink to='/' className='flex items-center gap-2 w-min hover:text-green-500 px-2 cursor-pointer col-span-2'>
                <button className='font-semibold hover:text-slate-500'>Audit</button>
                <i><MdAccountBalanceWallet /></i>
            </NavLink>
            <div className='flex items-center justify-between bg-white md:col-span-4 col-span-9'>
                <input className='w-full' type="text" />
                <i><IoSearch /></i>
            </div>
            <div className='flex items-center md:col-span-2 gap-1 hover:text-green-500 cursor-pointer col-span-4 pl-2'>
                <span className='font-semibold  hover:text-slate-500'>balance</span>
                <i><FaBalanceScaleLeft /></i>
            </div>
            <NavLink to='/account/'  className='flex items-center gap-1 cursor-pointer hover:text-green-500 md:col-span-2  col-span-4'>
                <span className='font-semibold  hover:text-slate-500'>{Auth && Auth.username}</span>
                <i className=''><RiAccountPinCircleFill /></i>
            </NavLink>
            <div className='md:col-span-2 col-span-4'>
                <button onClick={logOut} className='px-2 font-semibold rounded-lg hover:bg-green-500 bg-red-500 text-white'>sing out</button>
            </div>
        </div>
    )
}

export default Navbar