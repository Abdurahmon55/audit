import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  selectProducts, setPage, setProducts } from '../../redux/ProductSlice'

function YouGrup({
    grupName, authAddImage, index, id, 
}) {
    const productId = useSelector(selectProducts)
    const dispatch = useDispatch()
    const naviget = useNavigate()

    const products=()=>{
        dispatch(setProducts([index, id, authAddImage ]))
        dispatch(setPage('product'))
    }

    const deleteGrup=()=>{
        axios.delete(`http://127.0.0.1:8000/api/v1/user/grup/${id}/`)
        window.location.reload()
      }
    return (
        <div className="p-1 md:p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 w-full hover:scale-105 duration-500">
            <div className=" flex items-center  justify-between p-2 md:p-4  rounded-lg bg-slate-100 shadow-indigo-50 shadow-md">
                <div>
                    <h2 className="text-gray-900 md:text-lg font-bold">{grupName}</h2>
                    <h3 className="mt-2 md:text-xl  font-bold text-green-500 text-left">grup</h3>
                    <div className='flex gap-2'>
                       <button onClick={products} className="text-sm mt-2 lg:mt-6 px-1 md:px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none ">entry in grup</button> 
                       <button onClick={deleteGrup} className="text-sm mt-2 lg:mt-6 px-1 md:px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">delete</button> 
                    </div>
                    
                </div>
                <div
                    className="bg-gradient-to-tr from-green-500 to-green-500 lg:w-32 lg:h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                        <img src={authAddImage} className='lg:h-32 lg:w-32 w-16 h-16 rounded-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouGrup