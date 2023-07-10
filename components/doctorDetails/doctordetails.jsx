"use client"

import { docDetatailsModel } from '@/models/docDetailsModel';
import Image from 'next/image'
import React from 'react'
import data from '@/data/data.json'
export default function DoctorDetails({ index }) {
    const param = docDetatailsModel({ params: data[index] });
    const docName = param.docName;
    const date = param.date;
    const pName = param.pName;
    const status = param.status;
    const pic = param.pic;


    const [selected, setSeleted] = React.useState(0);
    const [amount, setAmount] = React.useState("");
    const [transaction, setTransaction] = React.useState("");
    const paymentList = ["Net Banking", "Upi", "Cash"]


    return (
        <div>
            <div className='text-primary  text-2xl font-black'>Details</div>
            <div className={` w-full m-4  justify-start items-start gap-2 rounded-[20px] flex flex-row`}>

                <Image src={pic} alt='profilePic' className='h-36 w-36 items-start my-auto' width={0} height={0} layout='fit' />

                <div className='p-2 flex flex-col gap-2 justify-start items-start '>
                    <p className={`text-black text-sl font-normal`} >Doctor Name: {docName}</p>
                    <p className={`text-black text-sl font-normal`} >Contact No.: +912344556778</p>
                    <p className={`text-black text-sl font-normal`}>Email Id.: abc@abc.com</p>
                    <p className={`text-black text-sl font-normal`}>Date:{date}</p>

                </div>
            </div >
            <div className='p-2 flex flex-col gap-2 justify-start items-start  mt-5 '>
                <p className={`text-primary  text-xl font-bold`} >Patient Details </p>
                <p className={`text-black text-sl font-normal`} >Patient Name: {pName}</p>
                <p className={`text-black text-sl font-normal`} >Patient Dob: 26 /03/70</p>
                <p className={`text-black text-sl font-normal`}>Patient Age: 21</p>
                <p className={`text-black text-sl font-normal`}>Patient Contact No.: +919821234559</p>
                <p className={`text-black text-sl font-normal`}>Patient Treatment: Implant</p>

            </div>
            <div className='p-2 flex flex-col gap-2 justify-start items-start mt-5'>
                <p className={`text-primary  text-xl font-bold`} >Transaction Details</p>
                <p className="text-black text-xl">Commission Amount:</p>
                <div className=' w-1/2 flex flex-row  justify-start items-center gap-2'>
                    <p>₹</p>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} className="w-full h-[50px] bg-cyan-50 rounded-[10px] px-2 placeholder:text-black" placeholder='Enter Commission Amount in Rs (₹)' />
                </div>
                <p className="text-black text-xl">Mode of Transaction:</p>
                <div className='flex flex-row gap-4'>

                    {
                        paymentList.map((data, index) => (
                            <button className={`w-auto h-auto px-8 py-5 rounded-lg shadow-lg ${selected == index ? "bg-primary text-white font-bold" : "bg-bgcolor"} text-black`} placeholder={data} key={index} onClick={() => setSeleted(index)} type='button' >{data}</button>
                        ))
                    }
                </div>
                <p className="text-black text-xl">Transaction Id:</p>
                <input onChange={(e) => setTransaction(e.target.value)} className="w-1/2 h-[50px] bg-cyan-50 rounded-[10px] px-2 placeholder:text-black" placeholder="Enter Transaction Id" />
                <button className="w-1/2  my-4 py-2 bg-bgcolor rounded-md shadow-lg font-bold   text-cyan-500  hover:bg-secondary hover:text-white">Send</button>
            </div>

        </div>
    )
} 
