"use client"
import React from 'react'
import logo from '@/images/Logo.svg'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
export default function Navbar() {
    const [routeHome, setRouteHome] = React.useState(true);
    const router = usePathname()
    const userouter = useRouter()

    const Logout = () => {
        userouter.push("/login");
    }

    React.useEffect(() => {
        const getPath = router.split("/");
        if (getPath[2] == "profile") {
            setRouteHome(false)
        } else {
            setRouteHome(true)
        }
    }, [router]);

    return (
        <div
            className={'flex flex-row justify-start text-primary items-center mx-20 gap-5'} >
            <Image src={logo}
                priority={true} alt='logo' className='my-2 h-20 w-auto' />
            <Link href={"/dashboard"} className={routeHome ? ' text-2xl font-bold underline-offset-8 underline' : ' text-2xl font-bold underline-offset-8'}> Home </Link>
            <Link href={"/dashboard/profile"} className={!routeHome ? ' text-2xl font-bold underline-offset-8 underline' : ' text-2xl font-bold underline-offset-8'}> Profile </Link >
            <button onClick={Logout} className=' text-2xl font-bold text-rose-500 '> Logout </button>
        </div >
    )
}
