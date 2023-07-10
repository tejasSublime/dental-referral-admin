"use client"
import Image from 'next/image';
import React from 'react'

export default function DocCard({ param, selected }) {
    const docName = param.docName;
    const date = param.date;
    const pName = param.pName;
    const status = param.status;
    const pic = param.pic;


    return (
        <div className={`shadow-lg w-full m-4  justify-center items-start gap-2 rounded-[20px] flex flex-row ${selected ? 'bg-primary' : 'bg-bgcolor'}`}>

            <Image src={pic} alt='profilePic' className='h-24 w-20 items-center my-auto' width={0} height={0} layout='fit' />

            <div className='p-2
         flex flex-col gap-2  '>
                <p className={`${selected ? "text-cyan-50" : "text-primary"} text-sl font-bold`} > {docName}</p>
                <p className={`${selected ? "text-cyan-50" : "text-black"} text-sl font-normal`} >Date: {date}</p>
                <p className={`${selected ? "text-cyan-50" : "text-black"} text-sl font-normal`}>{pName}</p>
                <div className={`${selected ? "text-cyan-50" : "text-black"} text-sl font-normal`}> Transaction Status:
                    {status ? (<p className='text-green-700 font-bold'>done</p>) : (<p className='text-red-500 font-bold'>pending</p>)}
                </div>
            </div>
        </div >

    )
}
