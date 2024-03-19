import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { IoMdImages } from "react-icons/io";
import defImage from '../../image/def.jpg'
function AddGrup() {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [isVisible, setIsVisible] = useState(false);


    const handelSumbit = async () => {
        const formData = new FormData()
        if (image) {
            formData.append('grupName', name)
            formData.append('imageGrup', image)
            formData.append('boss', 3)
        }
        else{
            formData.append('grupName', name)
            formData.append('boss', 3)
        }
        const response = await axios.post('http://127.0.0.1:8000/api/v1/user/grup/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 1000)
        }
    }

    return (
        <div>
            <div className="md:max-w-sm md:m-4 p-10 bg-slate-400 bg-opacity-25 rounded shadow-xl">
                <p className="font-medium text-center text-lg text-black">ADD GRUP</p>
                <div className="mt-2">
                    <label className="text-sm text-black">grup name</label>
                    <input onChange={(e) => setName(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none "
                        name='productName' type='text' placeholder='grup' aria-label='grup' required />
                </div>
                <div className='mt-2 text-2xl '>
                    <label className='hover:text-green-500 cursor-pointer'><IoMdImages />
                        <input onChange={(e) => setImage(e.target.files[0])} className='hidden' type='file' />
                    </label>
                </div>
                <div className="mt-4 items-center flex justify-between">
                    <button onClick={handelSumbit} className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                        type="submit">Entrar</button>
                    {isVisible ? <i className='bg-green-500 rounded-full text-white text-lg'> <GrStatusGood /></i> : null} 
                </div>
            </div>
        </div>
    )
}

export default AddGrup