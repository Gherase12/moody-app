import Head from "next/head";
import Nav from "./../components/Nav";
import Marquee from "react-fast-marquee";
import { BsTwitter } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import useCountdown from "../hooks/useCountdown";

export default function Home() {
  const ourVisionRef = useRef(null);
  const roadmapRef = useRef(null);
  const teamRef = useRef(null);
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 1000, 2000, 3000],
    ["#9D5877", "#98CE82", "#9C8BC2", "#6F989C"]
  );

  const time_units = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

  const Imgs = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];
  const team_members = [
    {
      name: "RICHARD",
      ocupation: "co-founder",
      img: "/richard.png",
      link: "https://twitter.com/JamesDigiJS",
    },

    {
      name: "ANA",
      ocupation: "nft artist & co-founder",
      img: "/ana.png",
      link: "https://twitter.com/anamariaa_m26",
    },
    {
      name: "COSMIN",
      ocupation: "blockchain developer",
      img: "/cosmin.png",
      link: "https://twitter.com/CosminGherase",
    },
  ];

  return (
    <motion.div style={{ background }} className='overflow-hidden text-white '>
      <Head>
        <title>Moody app</title>
        <meta name='description' content='Moody app' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Nav
        ourVisionRef={ourVisionRef}
        roadmapRef={roadmapRef}
        teamRef={teamRef}
      />

      {/* hero */}
      <div className='w-full  flex flex-col items-center pt-[30vw] md:pt-[0.05vw]  space-y-[10vw] lg:space-y-[4vw]  '>
        {/* logo */}
        <div className='w-[60vw]  h-[30vw] lg:ml-[100px] ml-[20px] '>
          <Image
            src='/logo.svg'
            alt='moody logo'
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
          />
        </div>
        {/* count down */}
        {/* <div className='flex space-x-[20px]'>
          {time_units.map((u, i) => (
            <div
              key={i}
              className='flex flex-col items-center justify-center spcae-y-[5px]'
            >
              <p className='text-[40px]'>0</p>
              <p>{u}</p>
            </div>
          ))}
        </div> */}
        {/* mint button */}
        <button className='bg-moody-green-v2 rounded-full w-[150px] h-[40px] font-bold '>
          MINT SOON
        </button>
      </div>
      {/* nft s presentations */}
      <div className='w-full my-[10vw] '>
        <Marquee pauseOnHover={false} speed={30} gradient={false}>
          {Imgs.map((img, i) => (
            <div
              key={i}
              className='w-[20vw] h-[20vw] md:mx-[40px] mx-[10px]  rounded-[20px] '
            >
              <Image
                src={img}
                alt='moddy nft'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* info */}
      <div
        ref={ourVisionRef}
        className='grid w-full grid-cols-1 font-bold text-center text-white md:grid-cols-2 lg:grid-cols-3 justify-items-center'
      >
        
          <div>
            <h1 className='title'>OUR MISSION</h1>
            <div className='paragraf'>
              mO-Ody NFTs are the next step in emotional NFTs MO-Ody NFTs is an
              NFT project that aims to bring more emotional and human-like
              qualities to NFTs. Moody NFTs will be able to utilize its
              community of artists, who are already creating works with a wide
              range of emotions and human characteristics, to create unique
              moods for each NFT.
            </div>
          </div>
          <div>
            <h1 className='title'>THE FUTURE</h1>
            <div className='paragraf'>
              As we continue expanding our collection of NFTs and their
              features, we want our users to have access to the widest possible
              range of experiences through their favorite applications. We
              believe that the future of NFTs will be based on emotion and
              expression, not just scarcity or monetary value. With Moody NFTs
              you&apos;ll be able to experience a whole new level of immersion
              when interacting with your favorite digital collectibles. 
            </div>
          </div>
       
        {/*  */}
        
          <div>
            <h1 className='title'>SOCIAL NETWORK</h1>
            <div className='paragraf'>
              With mO-Ody we want to inspire together. That&apos;s why
              we&apos;re building a social network where anyone can monetize
              their talent with the help of NFTs. Creators can share their daily
              life, their own opinion and thoughts, their passion and be a part
              of our future collection as partners and collaborators
            </div>
          </div>
        
      </div>
      {/* roadmap */}
      {/* <div ref={roadmapRef} className='flex flex-col items-center my-[30vw] lg:my-[10vw]'>
        <h1 className='text-[10vw]  font-bold mb-[10vw] lg:mb-[1vw]'>
          ROADMAP
        </h1>
        <div className='max-w-[1000px] w-[80vw]'>
          <Image
            src='/map.svg'
            alt='roadmap'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div> */}
      {/* team */}
      <div
        ref={teamRef}
        className='flex flex-col items-center my-[30vw] lg:my-[10vw]'
      >
        <h1 className='text-[10vw]  font-bold mb-[10vw] lg:mb-[2vw]'>TEAM</h1>
        <div className='flex flex-col md:flex-row md:space-x-[100px]'>
          {team_members.map((m, i) => (
            <div
              key={i}
              className='flex flex-col items-center w-[200px] text-center space-y-[20px] mb-[50px] lg:scale-[1.2] '
            >
              <div className='rounded-full w-[100px] border-2 border-moody-green-v2 '>
                <Image
                  src={m.img}
                  alt='avatar img'
                  style={{ borderRadius: 9999 }}
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                />
              </div>
              <h1 className='text-[20px] font-bold'>{m.name}</h1>
              <h2 className='uppercase'>{m.ocupation}</h2>
              <a href={m.link}>
                <BsTwitter className='text-moody-green text-[30px] ' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
