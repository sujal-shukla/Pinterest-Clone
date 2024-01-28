import Image from 'next/image';
import React from 'react'
import { signOut,useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import app from '../firebaseconfig'


function UserInfo({userInfo}) {
    console.log(userInfo);
    const router=useRouter();
    const {data:session}=useSession()
    const onLogoutClick=()=>{
      signOut();
      router.push("/")
    }
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
        alt='userImage'
        width={100}
        height={100}
        className='rounded-full'/>

        <h2 className='text-[30px]
        font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <div className='flex gap-4'>
        <button className='bg-gray-200
         p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
        <button className='bg-gray-200
         p-2 px-3 font-semibold mt-5 rounded-full'
         onClick={()=>onLogoutClick()}>Logout</button>
      </div>
    </div>
  )
}

export default UserInfo