"use client"
import { BellIcon, ChatBubbleBottomCenterIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from '../firebaseconfig'

const Header = () => {
    const { data: session } = useSession()

    const db = getFirestore(app);

    useEffect(() => {
        SaveUserInfo();
    },[session])

    const SaveUserInfo = async () => {
        if (session?.user) {
            await setDoc(doc(db, "user", session.user.email), {
                UserName: session.user.name,
                Email: session.user.email,
                Image: session.user.image
              });
        }
    }



    

    return (
        <div className='flex gap-3 md:gap-2 items-center p-6'>
            <Image src='/logo.png' alt='logo' height={50} width={50}
                className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
            <button className='bg-black text-white p-2 rounded-full px-4'>Home</button>
            <button className='p-2 rounded-full px-4 font-semibold'>Create</button>
            <div className='bg-[#e9e9e9] p-3  gap-3 rounded-full items-center w-full hidden md:flex'>
                <MagnifyingGlassIcon className='h-5' />
                <input type="text" placeholder='search' className='outline-none w-full cursor-text bg-transparent' />
            </div>
            <BellIcon className='h-3 md:h-11 hover:bg-gray-300 p-2 rounded-full cursor-pointer ' />
            <ChatBubbleBottomCenterIcon className='h-3 md:h-11 hover:bg-gray-300 p-1 rounded-full cursor-pointer' />
            {session?.user ? <Image src={session?.user?.image} alt='Profile' height={50} width={50}
                className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' /> :
                <button className='p-2 rounded-full px-4 font-semibold  hover:bg-gray-300' onClick={() => signIn()}>Login</button>}

        </div>
    )
}

export default Header