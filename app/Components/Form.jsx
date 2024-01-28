"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import UploadImage from './UploadImage'
import UserTag from './UserTag'
import { useSession } from 'next-auth/react'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from '../firebaseconfig'


const Form = () => {
    const { data: session } = useSession()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [link, setLink] = useState()
    const [file, setFile] = useState()

    const storage = getStorage(app);


    const onSave = () => {
        console.log("Title",title,"Desc",desc,"Link",link);
        console.log("File",file);
        uploadFile();
    }


    const uploadFile = () => {
        const storageRef = ref(storage, 'pinterest/'+file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          }).then(resp => {
            getDownloadURL(storageRef).then(url => {
                console.log("Downloadurl",url);
            })
          })
          
    }


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
                <button onClick={() => onSave()} 
                className='bg-red-500 p-2
        text-white font-semibold px-3 
        rounded-lg'>Save</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <UploadImage setFile={(file) => setFile(file)}/>


                <div className="col-span-2">
                    <div className='w-[100%]'>
                        <input type="text" placeholder='Add your title'
                            onChange={(e) => setTitle(e.target.value)}
                            className='text-[35px] outline-none font-bold w-full
    border-b-[2px] border-gray-400 placeholder-gray-400'/>
                        <h2 className='text-[12px] mb-8 w-full  text-gray-400'>The first 40 Charaters are
                            what usually show up in feeds</h2>
                        <UserTag />
                        <textarea type="text"
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder='Tell everyone what your pin is about'
                            className=' outline-none  w-full mt-8 pb-4 text-[14px]
    border-b-[2px] border-gray-400 placeholder-gray-400'/>
                        <input type="text"
                            onChange={(e) => setLink(e.target.value)}
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