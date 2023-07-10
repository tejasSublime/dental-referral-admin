"use client"
import DocCard from '@/components/doctorDetails/docCard'
import DoctorDetails from '@/components/doctorDetails/doctordetails'
import data from '@/data/data.json'
import { docDetatailsModel } from '@/models/docDetailsModel'
import React from 'react'

export default function DashboardPage() {
  const [selected, setSeleted] = React.useState(0);

  return (

    <div className=' mx-20 flex flex-row h-[80vh] w-auto'>
      <div className='bg-white flex flex-col flex-2  p-10  rounded-[20px]  h-auto w-auto overflow-scroll'>
        {
          data.map((data, index) => { return (<div onClick={() => setSeleted(index)} key={index}> <DocCard selected={selected == index} param={docDetatailsModel({ params: data, index })} /></div>) })
        }

      </div>
      <div className=' rounded-b-lg rounded-[20px]  bg-white flex flex-col flex-1 w-auto overflow-scroll p-10 mx-2'>
        <DoctorDetails  index={selected}/>
      </div>
    </div >
  )
}
