import Image from 'next/image';
import React from 'react'

const UserInfo = ({userInfo}) => {
    console.log(userInfo);
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.Image} alt='userimage' height={100} width={100} className='rounded-full'/>
        <h2 className='text-3xl font-semibold'>{userInfo.UserName}</h2>
        <h2 className='text-gray-400'>{userInfo.Email}</h2>
        <button className='bg-gray-200
         p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
    </div>
  )
}

export default UserInfo