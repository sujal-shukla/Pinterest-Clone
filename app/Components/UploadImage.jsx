import { ArrowUpCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const UploadImage = () => {
  return (
    <div className='h-[450px] bg-[#e9e9e9]
    rounded-lg'>
        
        <label className='m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%] 
        border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600 '>
           

          <div className='flex items-center flex-col'>
           <ArrowUpCircleIcon className='text-[22px]'/>   
            <h2 className=' font-semibold'>Click to Upload</h2>
            </div>
    
        
            {/* <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[90%]' */}
    
            <input id="dropzone-file" type="file"
             className="hidden"  
              />
        
        </label>
    </div>
  )
}

export default UploadImage