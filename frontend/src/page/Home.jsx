import React from 'react'
import { useSelector } from 'react-redux'
import YouGrup from '../components/home/YouGrup'
import YourProduct from '../components/home/YourProduct'
import image from '../image/imsge.jpg'
import { selectAuthData } from '../redux/AuthSlice'
import { selectPage} from '../redux/ProductSlice'
function Home() {
  const authData = useSelector(selectAuthData)
  const page = useSelector(selectPage)
  return (
    <div>
      {/* <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-slate-100 shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">name</h2>
            <h3 className="mt-2 text-xl font-bold text-green-500 text-left">suma</h3>
            <p className="text-sm font-semibold text-gray-400">quantity</p>
            <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">Add balance</button>
          </div>
          <div
            className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <img className='h-32 rounded-full' src={image} alt="" />
            </div>
          </div>
        </div>

      </div> */}
      {page == 'grups' ? <div className='flex flex-wrap'>
        {authData && authData.grup.map((item, index) => (
          <YouGrup key={item.id}{...item} index={index} />
        ))}
      </div> : null}
      {page == 'product' ? <YourProduct /> : null}
    </div>
  )
}

export default Home