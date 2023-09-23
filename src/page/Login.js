import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()



    const logInWithEmailAndPassword =  (email, password) => {
           signInWithEmailAndPassword(auth, email, password).then(
            navigate('/main')
          ).catch((e)=>{
                alert(e.message)
          })
      };

    return (
        <div className='home-main'>
            <div class='h-[100vh]'>
                <div class='text-white h-1/5  flex justify-center items-center'>
                    <div class='flex justify-between w-[80%]'>
                        <div>
                            <Link to='/'><img src={logo} alt='logo' /></Link>
                        </div>

                        <div>
                            <button class='bg-black border border-gray-500 px-7 py-2 rounded-3xl'> <Link to='/login'>Login → </Link> </button>
                        </div>
                    </div>
                </div>

                <div class='h-4/5 flex justify-center items-center'>
                    <div class='bg-white w-[30%] h-[80%] rounded-2xl flex justify-center'>
                        <div class='flex flex-col justify-evenly text-center'>
                            <div class='font-semibold text-2xl'>
                                Welcome to InsightScripts.AI
                            </div>

                            <div class='border border-gray-400 p-2 rounded-xl'>
                                Login With google
                            </div>

                            <div class='text-gray-400'>
                                OR
                            </div>

                            <div class='flex flex-col h-28'>
                                <input class='border border-gray-300 m-1 p-2 rounded-xl'
                                    type='text'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                />
                                <input class='border border-gray-300 m-1 p-2 rounded-xl'
                                    type='text'
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder='Password'
                                />
                                {
                                    console.log(email, password)
                                }
                                <button class='bg-black text-white p-2 m-1 rounded-xl' onClick={logInWithEmailAndPassword}> Login </button>

                            </div>

                            <div>

                            </div>

                            <div class='flex justify-between text-sm'>
                                <div>
                                    <Link to='/signup'>Sign Up</Link>
                                </div>
                                <div>
                                    <Link to='/'>Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login