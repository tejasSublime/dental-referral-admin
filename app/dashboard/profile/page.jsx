"use client"
import React from 'react'

export default function DashboardPage() {
  const [msgForP, setMsgForP] = React.useState("Dear [Patient Name],we are referring you to Dr. [Doctor Name] for further evaluation of your[condition].He is located at[address] and can be reached at[phone number].")
  const [msgForC, setMsgForC] = React.useState("Dear Dr. [Doctor Name],  We have referred [Patient Name] to you for further evaluation of his/her [condition]. Here are Details of the Patient:  Patient Name: [Patient Name]  Age: [Age] Gender: [Gender]  Phone Number: [Phone Number] \n [Patient Name] will be contacting your clinic to schedule an appointment. ")

  return (

    <div className=" mx-20 flex flex-col w-auto">
      <div className='text-primary  text-2xl font-black'>Details</div>
      <p className="text-black text-2xl font-bold">Home</p>
      <input className="w-1/4 h-[50px] bg-white rounded-[10px] px-2 my-3 placeholder:text-black" placeholder="Enter Your Name" />
      <p className="text-black text-2xl font-bold">Contact No.:</p>
      <input className="w-1/4 h-[50px] bg-white rounded-[10px] px-2 my-3 placeholder:text-black" placeholder="Enter Your Contact No." />
      <p className="text-black text-2xl font-bold">Email Id.:</p>
      <input className="w-1/4 h-[50px] bg-white rounded-[10px] px-2 my-3 placeholder:text-black" placeholder="Enter Your Email Id." />
      <p className="text-black text-2xl font-bold">Address:</p>
      <textarea
        className=" w-1/4 bg-white rounded-[10px] p-2  my-3 placeholder:text-black"
        name="Text1" cols="40" rows="5" placeholder="Enter Your Address." />
      <div className='text-primary  text-2xl font-black'>Message Template</div>
      <div className='flex flex-row gap-4'>
        <div
          className='flex flex-col my-6'
        >
          <p className='text-black text-2xl font-bold'>

            For Patient
          </p>
          <textarea
            className=" w-3/2 bg-white rounded-[10px] p-2  my-3 placeholder:text-black"
            name="Text1" cols="40" rows="5" placeholder="Enter Your Message For Patient." value={msgForP} />
        </div>
        <div
          className='flex flex-col my-6'
        >
          <p className='text-black text-2xl font-bold'>

            For Clinic
          </p>
          <textarea
            className=" w-3/2 bg-white rounded-[10px] p-2  my-3 placeholder:text-black"
            name="Text1" cols="40" rows="5" placeholder="Enter Your Message For Patient." value={msgForP} />
        </div>
      </div>

    </div>
  )
}

