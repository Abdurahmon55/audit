import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useAudit from '../hook/useAudit'
import { selectCounter } from '../redux/ProductSlice'

function BalanceGrup({sum}) {
    const count = useSelector(selectCounter)
    const [counter, censelCount, adudit]=useAudit()

    
    return (
        <div>
          {sum ?  <div className='flex gap-2'>
             <span className="text-sm mt-2 lg:mt-6 px-1 md:px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider outline-none ">{count ? count : sum}</span> 
            <button onClick={counter} className="text-sm mt-2 lg:mt-6 px-1 md:px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">count</button>
        </div>
        : null}  
        </div>
    )
}

export default BalanceGrup