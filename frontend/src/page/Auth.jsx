import React from 'react'
import SidebarAuth from '../components/Auth/SidebarAuth'
import { useSelector } from 'react-redux'
import { selectHadProduct, selectProduct } from '../redux/ProductSlice'
import AddProduct from '../components/Auth/AddProduct'
import GrupCard from '../components/Auth/GrupCard'
import AddGrup from '../components/Auth/AddGrup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Auth() {
  const product = useSelector(selectProduct)
  const hadGrup = useSelector(selectHadProduct)
  const naviget = useNavigate()

  useEffect(() => {
    if (product == 'balance') {
      naviget('/balance/')
    }
  }, [product])

  return (
    <div className='grid grid-cols-12'>
      <div className='md:col-span-3 lg:col-span-2 col-span-4'>
        <SidebarAuth />
      </div>
      <div className='md:col-span-9 lg:col-span-10 col-span-8 mt-5 ml-2'>
        {product == 'add product' ? <AddProduct /> : null}
        {product == 'grup' ? <div className='flex flex-wrap'>
          {hadGrup && hadGrup.grup.map((item) => (
            <GrupCard key={item.id}{...item} item={item} />
          ))}
        </div> : null}
        {product == 'add grup' ? <AddGrup /> : null}
      </div>
    </div>
  )
}

export default Auth