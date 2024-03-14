import React from 'react'
import useForm from '../hook/useForm'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [login, setLogin]=useForm()
    const naviget=useNavigate()

    const handelSubmit=async(e)=>{
        e.preventDefault()
        const response =  await axios.post('http://127.0.0.1:8000/api/v1/token/',{
            username:login.username,
            password:login.password,
        })
        if(response){
            const authId = await response.data.access
            localStorage.setItem('authId', authId)
            naviget('/') 
        }
        else{
            console.log('error');
        }
    }

    return (
        <div className="login h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form onSubmit={handelSubmit} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="text-white font-medium text-center text-lg ">LOGIN</p>
                            <div className="">
                                <label className="block text-sm text-white" for="email">username</label>
                                <input name='username' onChange={setLogin} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="text" id="email" placeholder="Digite o e-mail" aria-label="email" required />
                            </div>
                            <div className="mt-2">
                                <label className="block  text-sm text-white">password</label>
                                <input name='password' onChange={setLogin} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required />
                            </div>

                            <div className="mt-4 items-center flex justify-between">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                    type="submit">Entrar</button>
                                <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-black hover:text-red-400"
                                    href="#">you have not account ?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login