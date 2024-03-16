import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { authId, selectAuthData, setAuthData} from './redux/AuthSlice'
import Navbar from './components/Navbar'
import Auth from './page/Auth'
import axios from 'axios'
import { setHadProduct } from './redux/ProductSlice'

function App() {
  const dispatch = useDispatch()
  const naviget = useNavigate()
  const idAuth = useSelector(selectAuthData)


  useEffect(() => {
    const getInfo =async () => {
      const token =  localStorage.getItem('authId');
      if (token) {
        const decoded = jwtDecode(token);
        await axios.get(`http://127.0.0.1:8000/api/v1/user/?id=${decoded.user_id}`)
        .then(res=>dispatch(setAuthData(res.data[0])))
        await axios.get('http://127.0.0.1:8000/api/v1/user/?id=3')
        .then(res=>dispatch(setHadProduct(res.data[0]))) 
      }
      else {
        naviget('/login/')
      }
    }
    getInfo()
  }, []);
  

  return (
    <div className='container m-auto' >
      {idAuth ? <Navbar /> : null}
      <Routes>
        <Route path='login/' element={<Login />} />
        {authId ? <Route path='/' element={<Home />} /> : null}
        {authId ? <Route path='account/' element={<Auth />} />: null}
      </Routes>
        
    </div>
  )
}

export default App
