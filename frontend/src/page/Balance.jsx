import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectAuthData } from '../redux/AuthSlice'
import { resCount, selectCounter, selectPage, setCount, setPage, setProducts, } from '../redux/ProductSlice';

function Balance() {
  const authData = useSelector(selectAuthData)
  const page = useSelector(selectPage)
  const result = useSelector(selectCounter)
  const dispatch = useDispatch()
  const naviget=useNavigate()

  const count = () => {
    dispatch(resCount())
    const audit = authData && authData.grup.forEach(element => {
      if (element.audit[0]) {
        const result = element.audit[0].totalMoney
        dispatch(setCount(result))
      }
    })
  }

  const products=(item, index)=>{
    dispatch(setProducts([index, item.id, item.authAddImage ]))
    dispatch(setPage('product'))
    naviget('/')
}

  return (
    <div>
      <div className='flex gap-4 ml-4'>
        <button onClick={count}  className="text-sm mt-2 px-4 py-1 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">GetRsult</button>
        {result>0 ? <span className="text-sm mt-2 px-4 py-1 bg-green-400  text-white rounded-lg">{result} sum</span> : null}
      </div>
      <div className='flex flex-wrap'>
      {authData && authData.grup.map((item, index) => (
        <div key={item.id} className="p-1 md:p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 w-full hover:scale-105 duration-500">
          <div className=" flex items-center  justify-between p-2 md:p-4  rounded-lg bg-slate-100 shadow-indigo-50 shadow-md">
            <div>
              <div className='flex gap-2'>
                <span className=' md:text-xl  font-bold text-green-500 text-left'>grup:</span>
                <h2 onClick={()=>products(item, index)} className="text-gray-900 md:text-lg font-bold cursor-pointer hover:text-red-500">{item.grupName}</h2>
              </div>
              <div className='flex mt-2 gap-2'>
                <h3 className=" md:text-xl  font-bold text-green-500 text-left">last audit:</h3>
                {item.audit[0] ? <h2 className="text-gray-900 md:text-lg font-bold">{item.audit[0].totalMoney}</h2> : <h2 className="text-gray-900 md:text-lg font-bold text-xs ">not yet audited</h2>}
              </div>
              <div>
              </div>
            </div>
            <div
              className="bg-gradient-to-tr from-green-500 to-green-500 lg:w-32 lg:h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
                <img src={item.authAddImage} className='lg:h-32 lg:w-32 w-16 h-16 rounded-full' alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Balance