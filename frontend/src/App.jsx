import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { authId, selectAuthId } from './redux/AuthSlice'
import Navbar from './components/Navbar'
import Auth from './page/Auth'

function App() {
  const dispatch = useDispatch()
  const naviget = useNavigate()
  const idAuth = useSelector(selectAuthId)

  useEffect(() => {
    const token = localStorage.getItem('authId');
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authId(decoded.user_id))
    }
    else {
      naviget('/login/')
    }
  }, []);

  return (
    <div className='container m-auto' >
      {idAuth ? <Navbar /> : null}
      <Routes>
        <Route path='login/' element={<Login />} />
      </Routes>
      {authId ?
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='account/' element={<Auth />} />
        </Routes>
        : null}
    </div>
  )
}

export default App
