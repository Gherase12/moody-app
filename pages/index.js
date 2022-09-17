import Head from "next/head";
import Nav from "./../components/Nav";
import Marquee from "react-fast-marquee";
import { BsTwitter } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 1000, 2000, 3000],
    ["#9D5877", "#98CE82", "#9C8BC2", "#6F989C"]
  );

  const time_units = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
  const Imgs = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

  const team_members = [
    {
      name: "Richard",
      ocupation: "founder & marketing meneger",
      img: "https://pbs.twimg.com/profile_images/1569414243228827651/zW8UbZ-5_400x400.jpg",
      link: "https://twitter.com/JamesDigiJ",
    },
    {
      name: "Richard",
      ocupation: "founder & marketing meneger",
      img: "https://pbs.twimg.com/profile_images/1569414243228827651/zW8UbZ-5_400x400.jpg",
      link: "https://twitter.com/JamesDigiJ",
    },
    {
      name: "Richard",
      ocupation: "founder & marketing meneger",
      img: "https://pbs.twimg.com/profile_images/1569414243228827651/zW8UbZ-5_400x400.jpg",
      link: "https://twitter.com/JamesDigiJ",
    },
    {
      name: "Richard",
      ocupation: "founder & marketing meneger",
      img: "https://pbs.twimg.com/profile_images/1569414243228827651/zW8UbZ-5_400x400.jpg",
      link: "https://twitter.com/JamesDigiJ",
    },
  ];

  return (
    <motion.div style={{ background }} className='overflow-hidden text-white '>
      <Head>
        <title>Moody app</title>
        <meta name='description' content='Moody app' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Nav />

      {/* hero */}
      <div className='w-full  flex flex-col items-center pt-[30vw] lg:pt-[10vw] space-y-[10vw] lg:space-y-[4vw]  '>
        {/* logo */}
        <Image src='logo.svg' alt='moody logo' className='max-w-[60vw]' />
        {/* count down */}
        <div className='flex space-x-[20px]'>
          {time_units.map((u, i) => (
            <div
              key={i}
              className='flex flex-col items-center justify-center spcae-y-[5px]'
            >
              <p className='text-[40px]'>00</p>
              <p>{u}</p>
            </div>
          ))}
        </div>
        {/* mint button */}
        <button className='bg-moody-green-v2 rounded-full w-[150px] h-[40px] font-bold '>
          MINT SOON
        </button>
      </div>
      {/* nft s presentations */}
      <div className='w-full my-[10vw] '>
        <Marquee pauseOnHover={false} speed={30} gradient={false}>
          {Imgs.map((img, i) => (
            <Image
              key={i}
              src={img}
              className='w-[20vw] h-[20vw] md:mx-[40px] mx-[10px]  rounded-[20px] '
              alt='moddy nft'
            />
          ))}
        </Marquee>
      </div>
      {/* info */}
      <div className='grid w-full grid-cols-1 font-bold text-center text-white md:grid-cols-2 '>
        <div className='flex flex-col items-center'>
          <div>
            <h1 className='title'>Our Mission</h1>
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
            <h1 className='title'>The future</h1>
            <div className='paragraf'>
              As we continue expanding our collection of NFTs and their
              features, we want our users to have access to the widest possible
              range of experiences through their favorite applications. We
              believe that the future of NFTs will be based on emotion and
              expression, not just scarcity or monetary value.With Moody NFTs
              you&apos;ll be able to experience a whole new level of immersion
              when interacting with your favorite digital collectibles who can
              provide a range of access to mental health support.
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col items-center md:mt-[300px]'>
          <div>
            <h1 className='title'>Social Network</h1>
            <div className='paragraf'>
              With mO-Ody we want to inspire together. That&apos;s why
              we&apos;re building a social network where anyone can monetize
              their talent with the help of NFTs. Creators can share their daily
              life, their own opinion and thoughts, their passion and be a part
              of our future collection as partners and collaborators
            </div>
          </div>
          <div>
            <h1 className='title'>Utility</h1>
            <div className='paragraf'>
              mO-Ody holders will be rewarded with free mints of existing and
              upcoming Web3 projects. Our community will get to decide each
              month which projects we should support.We will also reallocate 50
              % of the monthly royalties into our mo-ody &apos;savings&apos;
              wallet and the purchased NFTs will be airdopped to the
              winners.Phase 2 of the project will provide exclusive mh help and
              support services for the mO-Ody holders.
            </div>
          </div>
        </div>
      </div>
      {/* roadmap */}
      <div className='flex flex-col items-center my-[30vw] lg:my-[10vw]'>
        <h1 className='text-[10vw]  font-bold mb-[10vw] lg:mb-[1vw]'>
          ROADMAP
        </h1>
        <Image
          src='map.svg '
          className='max-w-[1000px] w-[80vw]'
          alt='roadmap'
        />
      </div>
      {/* team */}
      <div className='flex flex-col items-center my-[30vw] lg:my-[10vw]'>
        <h1 className='text-[10vw]  font-bold mb-[10vw] lg:mb-[2vw]'>TEAM</h1>
        <div className='flex flex-col md:flex-row md:space-x-[100px]'>
          {team_members.map((m, i) => (
            <div
              key={i}
              className='flex flex-col items-center w-[200px] text-center space-y-[20px] mb-[50px] lg:scale-[1.2] '
            >
              <Image
                src={m.img}
                alt='avatar img'
                className='rounded-full w-[100px] border-2 border-moody-green-v2 '
              />
              <h1 className='text-[20px] font-bold'>{m.name}</h1>
              <h2>{m.ocupation}</h2>
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
