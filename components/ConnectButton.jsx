import React from 'react'
import { Image } from 'next/image';

function ConnectButton() {
  return (
    <button className='rounded-full bg-moody-green-v2 w-[150px] h-[40px] flex items-center justify-center text-[20px] lg:w-[180px]  '>
          <Image
            src='/metamask.svg'
            alt='metamask logo'
            className='w-[20px] mr-[10px]'
          />
          CONNECT
        </button>
  )
}

export default ConnectButton