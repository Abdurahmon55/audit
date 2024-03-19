import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import image from '../../image/imsge.jpg'
import useForm from '../../hook/useForm'
import { selectAuthData } from '../../redux/AuthSlice'
import { selectCounter, selectProducts, selectToggol, setPage } from '../../redux/ProductSlice'
import { MdErrorOutline } from "react-icons/md";
import { GrStatusGood } from 'react-icons/gr'
import useAudit from '../../hook/useAudit'
import { useEffect } from 'react'

function YourProduct() {
    const productId = useSelector(selectProducts)
    const AuthProduct = useSelector(selectAuthData)
    const toggol = useSelector(selectToggol)
    const count = useSelector(selectCounter)
    const grupaId = AuthProduct.grup[productId[0]]
    const product = grupaId.product;
    const Audit = grupaId.audit[0]
    const dispatch = useDispatch()
    const [value, setValue] = useForm()
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(false);
    const [counter, censelCount, adudit] = useAudit()

    const sendProductDetail = async (data) => {
        const formData = new FormData()
        formData.append('productName', data.productName)
        formData.append('grup', productId[1])

        if (value.totalProduct) {
            formData.append('totalProduct', parseInt(value.totalProduct))
        }
        else {
            formData.append('priceProduct', parseInt(value.priceProduct))
        }
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/v1/user/grup/product/${data.id}/`, formData, {
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
        catch {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000)
        }
    }

    const present = () => {
        window.location.reload()
    }


    return (
        <div >
            <div className='flex gap-4 pl-4 flex-wrap' style={{
                backgroundImage: `url('${productId[2] ? productId[2] : image}')`,
                backgroundPosition: 'center',
                width: 'full',
                height: '20vh',
            }}>
                <button onClick={() => dispatch(setPage('grups'))} className='px-2 h-8 text-white font-semibold rounded-lg hover:bg-red-500 bg-green-500 my-5'>grup</button>
                <span className='px-2  font-semibold rounded-lg h-10 text-white bg-green-500  my-5 flex flex-col'><span className='text-xs'>last audit</span>{Audit ? Audit.totalMoney : 'not audit yet'}</span>
                <button onClick={counter} className='px-2 h-8 text-white font-semibold rounded-lg hover:bg-red-500 bg-green-500 my-5'>counter</button>
                {toggol ? <div className='flex gap-4 ' action="">
                    <button onClick={adudit} className='px-2 h-8 text-white font-semibold rounded-lg hover:bg-red-500 bg-green-500 my-5'>sendAudit</button>
                    <span onClick={censelCount} className='px-2 h-8 pt-1 cursor-pointer text-white font-semibold rounded-lg hover:bg-green-500 bg-red-500 my-5'>censel</span>
                    <span className='px-2 h-8  pt-1 text-white font-semibold rounded-lg bg-green-500 my-5'>{count} sum</span>
                </div> : null}
            </div>
            <div className='flex gap-4 ml-2 m-2'>
                <button onClick={present} className="text-sm mt-2 px-4 py-1 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">present</button>
                {isVisible ? <div className='h-5 flex items-center gap-2 text-green-500 pl-4 text-lg my-2'>send <i><GrStatusGood /></i></div> : null}
                {error ? <div className='h-5 flex items-center gap-2 text-red-500 pl-4 text-lg my-2'>send <i><MdErrorOutline /></i></div> : null}
            </div>

            <div className='flex flex-wrap '>
                {product && product.map((item) => (
                    <div key={item.id} className="p-1 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                        <div className=" flex items-center  justify-between p-4  rounded-lg bg-slate-100 shadow-indigo-50 shadow-md">
                            <div>
                                <h2 className="text-gray-900 text-lg font-bold">{item.productName}</h2>
                                <div className='flex flex-col gap-2'>
                                    <div className="">
                                        <label className="  text-green-500 text-left">suma</label>
                                        <input onChange={setValue} name='priceProduct' className="w-1/2 px-5 ml-8  bg-gray-300 text-red-700 font-semibold rounded focus:outline-none focus:bg-white" type="number" aria-label="suma" placeholder={item.priceProduct} required />
                                    </div>
                                    <div >
                                        <label className="text-gray-400">quantity</label>
                                        <input onChange={setValue} name='totalProduct' className="w-1/2 px-5 ml-3 text-red-700 font-semibold bg-gray-300 rounded focus:outline-none focus:bg-white"
                                            type="number" arial-label="quantity" placeholder={item.totalProduct} />
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    {item.totalProduct == 0 ? <button onClick={() => sendProductDetail(item)} className="text-sm mt-2 px-4 py-1 bg-red-500  text-white rounded-lg  tracking-wider hover:bg-green-400 outline-none">Sumbmit</button> : <button onClick={() => sendProductDetail(item)} className="text-sm mt-2 px-4 py-1 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">Sumbmit</button>}

                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-tr from-green-500 to-green-500 md:min-w-32 md:h-32 w-16 h-16 rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
                                <div>
                                    <img className='md:h-32 md:w-32 h-12 w-12 rounded-full' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default YourProduct