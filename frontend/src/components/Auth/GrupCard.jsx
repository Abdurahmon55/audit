import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthData } from '../../redux/AuthSlice';


function GrupCard({ imageGrup,
  grupName, product, id
}) {
  const [toggol, setToggol] = useState(false)
  const authData = useSelector(selectAuthData)
  const naviget = useNavigate()

  const AddProduct = async (name, id) => {
    await axios.post('http://127.0.0.1:8000/api/v1/user/grup/product/', {
      productName: name,
      grup: id,
    })
  }

  const AddGrup = async () => {
    const res = await axios.post('http://127.0.0.1:8000/api/v1/user/grup/', {
      grupName: grupName,
      authAddImage:imageGrup,
      boss: authData.id
    })
    if (res.data.id) {
      const id = res.data.id
      await product.forEach(element => {
        AddProduct(element.productName, id)
      });
    }
    window.location.reload()
  }


  useEffect(() => {
    authData.grup.forEach(element => {
      if (element.grupName == grupName) {
        setToggol(true)
      }
    });
  }, [AddGrup])
  return (
    <div className="p-1 md:p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 w-full hover:scale-105 duration-500">
      <div className=" flex items-center  justify-between p-2 md:p-4  rounded-lg bg-slate-100 shadow-indigo-50 shadow-md">
        <div>
          <h2 className="text-gray-900 md:text-lg font-bold">{grupName}</h2>
          <h3 className="mt-2 md:text-xl  font-bold text-green-500 text-left">grup</h3>
          {!toggol ? <button onClick={AddGrup} className="text-sm mt-2 lg:mt-6 px-1 md:px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">Add Grup</button> : null}
        </div>
        <div
          className="bg-gradient-to-tr from-green-500 to-green-500 lg:w-32 lg:h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
          <div>
            <img src={imageGrup} className='lg:h-32 lg:w-32 w-16 h-16 rounded-full' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrupCard