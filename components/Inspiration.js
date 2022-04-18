import React from 'react'
import praha from "../media/praha.webp"
import prahaSky from "../media/prahaSky.webp"
import brno from "../media/brno.webp"
import karlovyVary from "../media/karlovyVary.webp"
import Image from "next/image"

function Inspiration() {
  return (
    <div className='pb-[1000px] space-y-7 pt-10'>
      <h2 className='px-6 md:px-10 xl:px-20 2xl:px-40 text-[#222222] font-semibold text-2xl md:hidden xl:text-3xl'>Inspirace pro svůj další pobyt</h2>
      <h2 className='px-6 md:px-10 xl:px-20 2xl:px-40 text-[#222222] font-semibold text-2xl hidden md:flex xl:text-3xl'>Najdi inspiraci pro svůj další pobyt</h2>

      <div className='gap-5 flex overflow-auto px-6 md:px-10 xl:px-20 2xl:px-40 scrollbar-hide lg:grid grid-cols-4'>
        <Card img={praha} city="Praha" distance="85"/>
        <Card img={prahaSky} city="Hlavní město Praha" distance="90"/>
        <Card img={brno} city="Brno" distance="254"/>
        <Card img={karlovyVary} city="Karlovy Vary" distance="45"/>
      </div>
    </div>
  )
}

function Card({ img, city, distance }) {
  return (
    <div className='h-0 pb-[80%] md:pb-[48%] bg-[#cc2d4a] min-w-[60%] rounded-xl relative cursor-pointer md:min-w-[35%] lg:w-full lg:pb-[120%]'>
      <div className='relative w-full h-0 pb-[65%]'>
        <Image src={img} className="rounded-t-xl" objectFit="cover" layout='fill'/>
      </div>
      <div className='p-5 text-white space-y-1'>
        <p className='text-xl font-semibold xl:text-3xl'>{city}</p>
        <p className="text-lg">{distance} kilometrů daleko</p>
      </div>
    </div>
  )
}

export default Inspiration