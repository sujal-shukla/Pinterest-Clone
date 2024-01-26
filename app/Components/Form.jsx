import Image from 'next/image'
import React from 'react'
import UploadImage from './UploadImage'
import UserTag from './UserTag'

const Form = () => {
    return (
        <div className=' bg-white p-16 rounded-2xl '>
            <div className='flex justify-end mb-6'>
                {/* <button
                    className='bg-red-500 p-2
        text-white font-semibold px-3 
        rounded-lg'>
                    <Image src="/loading-indicator.png"
                        width={30}
                        height={30}
                        alt='loading'
                        className='animate-spin' />:
                    <span>Save</span></button> */}
                    <button className='bg-red-500 p-2
        text-white font-semibold px-3 
        rounded-lg'>Save</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <UploadImage />


                <div className="col-span-2">
                    <div className='w-[100%]'>
                        <input type="text" placeholder='Add your title'
                            className='text-[35px] outline-none font-bold w-full
    border-b-[2px] border-gray-400 placeholder-gray-400'/>
                        <h2 className='text-[12px] mb-8 w-full  text-gray-400'>The first 40 Charaters are
                            what usually show up in feeds</h2>
                            <UserTag  />
                        <textarea type="text"
                            placeholder='Tell everyone what your pin is about'
                            className=' outline-none  w-full mt-8 pb-4 text-[14px]
    border-b-[2px] border-gray-400 placeholder-gray-400'/>
                        <input type="text"
                            placeholder='Add a Destination Link'
                            className=' outline-none  w-full  pb-4 mt-[90px]
    border-b-[2px] border-gray-400 placeholder-gray-400'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form