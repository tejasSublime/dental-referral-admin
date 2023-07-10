"use client"

import React from 'react'
import Image from 'next/image'
import logo from '@/images/Logo.svg'
import { useRouter } from 'next/navigation'
export default function LoginPage() {
    const userouter = useRouter()
    const Login = () => {
        userouter.push("/dashboard");
    }

    return (
        <div className='text-center  flex-col justify-center items-center   mx-auto flex  bg-bgcolor w-full h-full'>
            <Image src={logo} alt='logo' className='my-5' priority={true} />
            <div className="text-center text-cyan-500 text-3xl my-5">Admin Panel</div>
            <div className=" p-10 bg-primary rounded-[25px] mx-5 w-1/3" >
                <div className="text-left text-white text-lg">User-Id</div>
                <input className="w-full h-[50px] bg-cyan-50 rounded-[10px] px-2 placeholder:text-cyan-300" placeholder='Enter your user Id' />
                <div className="text-white text-left text-lg">Password</div>
                <input className="w-full h-[50px] bg-cyan-50 rounded-[10px] px-2 placeholder:text-cyan-300" placeholder='Enter your password'
                    type='password'
                />
                <div className="text-white text-left text-base font-normal hover:cursor-pointer">forgot password ?</div>

                <button onClick={Login} className="w-9/12  mx-auto my-4 py-2 bg-bgcolor rounded-2xl   text-cyan-500  hover:bg-secondary hover:text-white">
                    <div className="text-xl font-bold">Login</div>
                </button>
                <div className="text-center hover:cursor-pointer text-white text-base font-normal">Facing issues while login?</div>
            </div>

        </div>
    )
}
