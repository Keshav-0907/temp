import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='home-main'>
            <div class='h-[100vh] '>
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

                <div class='h-4/5 flex justify-center items-center '>
                    <div className='text-center w-[50%]'>
                        <div class=' flex justify-center m-5'>
                            <div class='bg-white p-3 rounded-full w-fit font-normal'>
                                Learn anything with InsightScripts.AI 🪄
                            </div>
                        </div>
                        <div class='text-[#ECECEE] text-4xl font-semibold'>
                            Scripting Success Through Conversation
                        </div>
                        <div class='text-gray-600  px-24 leading-loose'>
                            Empowering learners with personalized study plans, real-time feedback, and interactive coding challenges. Join the conversation and supercharge your learning journey today.
                        </div>

                        <div class='m-8'>
                            <button class='bg-black border text-white border-gray-500 px-7 py-2 rounded-3xl'> <Link to='/main'>Get Started → </Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
