import React from 'react'
import Image from "next/image"

function Inspiration() {
  return (
    <div className='space-y-8 pt-10 xl:space-y-12'>
      <h2 className='px-6 md:px-10 xl:px-20 2xl:px-40 text-[#222222] font-semibold text-2xl md:hidden xl:text-3xl 2xl:text-5xl'>Inspirace pro svůj další pobyt</h2>
      <h2 className='px-6 md:px-10 xl:px-20 2xl:px-40 text-[#222222] font-semibold text-2xl hidden md:flex xl:text-3xl 2xl:text-5xl'>Najdi inspiraci pro svůj další pobyt</h2>

      <div className='gap-5 flex overflow-auto px-6 md:px-10 xl:px-20 2xl:px-40 scrollbar-hide lg:grid grid-cols-4'>
        <Card img={"https://a0.muscache.com/im/pictures/3cf8d82e-473a-4ce2-822b-ea843ff664c5.jpg?im_w=240"} city="Praha" distance="85"/>
        <Card img={"https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240"} city="Hlavní město Praha" distance="90"/>
        <Card img={"https://a0.muscache.com/im/pictures/d77e587c-d135-43b7-9449-9b69ecd55d4a.jpg?im_w=240"} city="Brno" distance="254"/>
        <Card img={"https://a0.muscache.com/im/pictures/2ce0594a-fe5c-4d88-b120-b91ff7456c1f.jpg?im_w=240"} city="Karlovy Vary" distance="45"/>
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