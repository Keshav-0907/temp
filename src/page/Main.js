import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import avtar from '../assets/avtar.png'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import { sendMsgToOpenAiI } from '../Openai';
import { useSpeechSynthesis } from 'react-speech-kit';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth'; 

const Main = () => {


    const [input, setinput] = useState('')
    const [chat, setchat] = useState([])
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
    const [user, setuser] = useState({})

    // onAuthStateChanged(auth, (user) => {
    //     setuser(user)
    // })

    const handlesend = async () => {
        const res = await sendMsgToOpenAiI(input)
        setchat(res)
        speak({ text: res.content })
    }

    const handlesignout = () =>{
        signOut(auth).then(alert("Signed Out"))
    }

    

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const handlereset = () => {
        resetTranscript()
        setinput('')
    }

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    // const options = async {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer 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`
    //     },
    //     body: JSON.stringify({
    //         "prompt": 'Image of Elephant',
    //         "max_tokens": 100,
    //         "size": "1024x1024",
    //         "n":4
    //     })
    // }

    // try {
    //    await fetch('https://api.openai.com/v1/images/generations', options)
    //    const data = 
    // } catch (error) {
    //     console.log(error)
    // }

    return (
        <>
        { user ? (  <div className='home-main'>
            <div class='text-white h-[80vh]'>
                <div class='text-white h-1/5  flex justify-center items-center'>
                    <div class='flex justify-between w-[80%]'>
                        <div>
                            <Link to='/'><img src={logo} alt='logo' /></Link>
                        </div>

                        <div>
                            <button class='bg-black border border-gray-500 px-7 py-2 rounded-3xl'> <Link to='/login'> Hi {user.email} </Link> </button>
                        </div>
                    </div>
                </div>

                <div class=' h-full flex flex-row'>
                    <div class='w-1/2 flex justify-around flex-col'>
                        {/* <div class='text-center font-semibold text-3xl'>
                            How Can i help you ???
                        </div> */}

                        <div class=' w-full h-full m-20 flex justify-center items-center flex-col '>
                            <div class='border-stone-600 border-2 border-collapse w-full h-[100%] rounded-2xl'>
                                {
                                    chat ? (
                                        <div className=" text-white px-3 py-1 m-3 rounded-xl">
                                            {chat.content}
                                        </div>
                                    ) : null
                                }

                            </div>

                            <div class=' w-full h-[20%] m-5'>
                                <input class='w-full h-full text-white border-stone-600 border-2 bg-black p-2 rounded-2xl' value={input || transcript} onChange={(e) => setinput(e.target.value)} type='text' placeholder='Enter text here...' />
                                <div onClick={handlereset} class="hover:cursor-pointer">
                                    RESET
                                </div>
                                <div>
                                    signout : <button onClick={handlesignout}>Signout</button>
                                </div>
                                Talk : {listening ? 'on' : 'off'}
                            </div>
                        </div>



                        <div class='flex justify-around'>
                            <button onClick={SpeechRecognition.startListening} class='bg-black border border-gray-500 px-7 py-2 rounded-3xl hover:bg-slate-900'> Speak 🎤 </button>

                            <button onClick={handlesend} class='bg-black border border-gray-500 px-7 py-2 rounded-3xl hover:bg-slate-900'> Send 📨 </button>
                            <button class='bg-black border border-gray-500 px-7 py-2 rounded-3xl hover:bg-slate-900'> Upload File  </button>
                            <input type='file' name='PDF FILE' />
                        </div>
                    </div>
                    <div class='w-1/2 flex justify-center flex-col items-center'>
                        <div>
                            Generated Image
                        </div>
                        {/* <PDF/> */}

                        <div>
                            Image
                        </div>
                    </div>
                </div>
            </div>
        </div>) : ("Not Logged In")  }
        </>
    )
}

export default Main