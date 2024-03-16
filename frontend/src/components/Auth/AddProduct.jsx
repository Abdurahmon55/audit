import React from 'react'
import useForm from '../../hook/useForm'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectHadProduct } from '../../redux/ProductSlice'
import { useState } from 'react'

function AddProduct() {
    const [value, setValue] = useForm()
    const hadData=useSelector(selectHadProduct)
    const [grupaId, setGrupId]=useState()

    const product = [
        { setName: 'productName', name: 'product', type: 'text', id: 1 },
        { setName: 'grup', name: 'grup', type: 'text', id: 2 },
    ]

    const handelSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://127.0.0.1:8000/api/v1/user/grup/product/', {
            productName: value.productName,
            grup: parseInt(value.grup),
        })  
        console.log(response);
    }

    console.log(value);
    return (
        <div>
            <form onSubmit={handelSubmit} className="md:max-w-sm md:m-4 p-10 bg-slate-400 bg-opacity-25 rounded shadow-xl">
                <p className="font-medium text-center text-lg text-black">ADD PRODUCT</p>
                
                    <div  className="mt-2">
                        <label className="text-sm text-black">product</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none "
                            name='productName' type='text' onChange={setValue} placeholder='product' aria-label='product' required />
                    </div>
                    <label className='border-2'>
                        <select name='grup' onChange={setValue}>
                            {hadData && hadData.grup.map((item)=>(
                                <option key={item.id}  value={item.id}>{item.grupName}</option>
                            ))}
                        </select>
                    </label>
                
                <div className="mt-4 items-center flex justify-between">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                        type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct