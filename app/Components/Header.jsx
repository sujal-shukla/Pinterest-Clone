
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { BellIcon, ChatBubbleBottomCenterIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import app from '../firebaseconfig'
import { useRouter } from 'next/navigation';

function Header() {
  const { data: session } = useSession();
  const router=useRouter();
  const db = getFirestore(app);

  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo=async()=>{
    if(session?.user)
    {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }

  const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn()
    }
  }

  
  return (
    <div className='flex justify-between 
     gap-3 md:gap-2 items-center p-6 '>
        <Image src='/logo.png' alt='logo'
        width={50} height={50} onClick={()=>router.push('/')}
        className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>
        <button className='bg-black
         text-white p-3 px-6 rounded-full
          hidden md:block' onClick={()=>router.push('/')}>Home</button>
        <button className='font-semibold p-3 px-6
         rounded-full ' 
         onClick={()=>onCreateClick()}>Create</button>
        <div className='bg-[#e9e9e9] p-3 px-6
         gap-3 items-center rounded-full w-full flex'>
        <input type="text" placeholder='Search'
        className='bg-transparent outline-none w-full ' />
       
        </div>
       
      {session?.user?  
      <Image src={session.user.image} 
       onClick={()=>router.push('/'+session.user.email)}
      alt='user-image' width={60} height={60}
        className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>:

        <button className='font-semibold p-2 px-4 rounded-full bg-red-700 hover:bg-red-900 text-white'
         onClick={() => signIn()}>Login</button>}



    </div>
  )
}

export default Header