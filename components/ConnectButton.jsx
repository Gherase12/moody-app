import React from 'react'
import  Image  from 'next/image';
import { BiLockAlt } from "react-icons/bi";
function ConnectButton() {
  return (
    <button className='relative group  rounded-full bg-moody-green-v2 w-[150px] h-[40px] flex items-center justify-center text-[20px] lg:w-[180px]  '>
      <div className='absolute z-50 flex items-center justify-center w-full h-full rounded-full opacity-0 hover:opacity-50 bg-moody-green-v2 '>
        < BiLockAlt className='opacity-100' />
      </div>

        <div
        
            className='w-[20px] mr-[10px]'
        >

          <Image
            src='/metamask.svg'
            alt='metamask logo'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
          />
        </div>
          CONNECT
        </button>
  )
}

export default ConnectButton