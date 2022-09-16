import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import ConnectButton from './ConnectButton';
function Nav() {
  const [open, setOpen] = useState(false);
  const nav_items = ["our vision", "roadmap", "team"];

  const scrollToElement = (Ref) => {
    setOpen(false);
    Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='z-50 bg-moody-red fixed w-full h-[60px]  items-center flex justify-between px-[10vw] flex-row-reverse md:flex-row'>
      <div className='flex space-x-[20px]  '>
        <a href=''>
          <img src='open-sea.svg' className='w-[40px] ' alt='open sea logo' />
        </a>
        <a href='https://twitter.com/im_just_moody'>
          <BsTwitter className='text-moody-green ' size={40} />
        </a>
        <a href='https://discord.com/channels/996003187247034390/1017124468839165982'>
          <SiDiscord className='text-moody-purple ' size={40} />
        </a>
      </div>

      <div className='hidden md:flex items-center uppercase space-x-[2vw] font-bold lg:text-[30px] '>
        {nav_items.map((i) => (
          <a>{i}</a>
        ))}
              <ConnectButton />

      </div>
      <GiHamburgerMenu
        className='text-[25px] text-white md:hidden'
        onClick={() => setOpen(true)}
      />
      <ul
        className={`${
          !open
            ? "fixed right-[100%]"
            : "pt-[40px] pl-[20px] fixed top-0 left-0 h-screen w-[60%] text-[30px]   flex  flex-col bg-moody-red text-moody-green uppercase space-y-5  duration-500 ease-in-out  "
        }  `}
      >
        <AiOutlineClose
          className='absolute top-4 right-4 text-[30px] '
          onClick={() => setOpen(false)}
        />
        {nav_items.map((i) => (
          <a>{i}</a>
        ))}
        <ConnectButton />
      </ul>
    </div>
  );
}

export default Nav;
