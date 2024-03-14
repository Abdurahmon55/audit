import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { RiFindReplaceLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useDispatch} from 'react-redux'
import { setProduct } from '../../redux/ProductSlice';
function SidebarAuth() {

    const sidebarInfo=[
        {name:'add grup', icon:<GrUpdate />, id:1},
        {name:'add product', icon:<MdProductionQuantityLimits />, id:2},
        {name:'balance', icon:<FaBalanceScaleLeft />, id:3},
        {name:'grup', icon:<RiFindReplaceLine />,  id:4},
        {name:'product', icon:<RiFindReplaceLine />,  id:5},
    ]

    const dispatch=useDispatch()

  return (
    <div className=' border-r px-4'>
        <div className='flex items-center gap-1 py-5 border-b-2'>
            <i><IoPersonCircleSharp /></i>
            <span>user name</span>
        </div>
        <div className='mt-2'>
            {sidebarInfo.map((item)=>(
                <div key={item.id} className='flex items-center gap-1 hover:text-cyan-500 cursor-pointer mt-2'>
                    <i>{item.icon}</i>
                    <div onClick={()=>dispatch(setProduct(item.name))}>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SidebarAuth