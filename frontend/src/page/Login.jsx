import React from 'react'
import useForm from '../hook/useForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Login() {
    const [login, setLogin] = useForm()
    const naviget = useNavigate()
    const [error, setError] = useState(false)

    const handelSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
                username: login.username,
                password: login.password,
            })
            if (response) {
                const authId = await response.data.access
                localStorage.setItem('authId', authId)
                naviget('/')
            }
        }
        catch{
            setError(true)
        }
        
        window.location.reload()
    }

    return (
        <div className="login h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <div className="max-w-sm m-4 p-10 bg-slate-300 bg-opacity-25 rounded shadow-xl">
                            <p className="font-medium text-center text-lg ">LOGIN</p>
                            {error ? <p className="font-medium text-center text-lg text-red-500 bg-black ">error try again</p> : null}
                            <div className="">
                                <label htmlFor='username' className="block text-sm" >username</label>
                                <input name='username' onChange={setLogin} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="text" placeholder="username" required />

                            </div>
                            <div className="mt-2">
                                <label htmlFor='password' className="block  text-sm">password</label>
                                <input name='password' onChange={setLogin} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" placeholder="password" required />

                            </div>

                            <div className="mt-4 items-center flex justify-between">
                                <button onClick={handelSubmit} className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                    type="submit">Entrar</button>
                                <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-black hover:text-red-400"
                                    href="#">you have not account ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login