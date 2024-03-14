import React from 'react'
import SidebarAuth from '../components/Auth/SidebarAuth'
import {  useSelector } from 'react-redux'
import { selectProduct } from '../redux/ProductSlice'
import AddProduct from '../components/Auth/AddProduct'
function Auth() {
    const product=useSelector(selectProduct)
  return (
    <div className='grid grid-cols-12'>
        <div className='md:col-span-3 lg:col-span-2 col-span-4'>
            <SidebarAuth/>
        </div>
        <div className='md:col-span-9 lg:col-span-10 col-span-8 mt-5 ml-2'>
            {product=='add product'? <AddProduct/> : null}
        </div>
    </div>
  )
}

export default Auth