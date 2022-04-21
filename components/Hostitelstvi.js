import React from 'react'
import Image from "next/image"

function Hostitelstvi() {
    return (
        <div className='pt-10 xl:pt-20'>
            <div className='relative h-full pb-[135%] md:pb-[50%] 2xl:xl:mx-40 2xl:pb-[42%]'>
                <div className='md:hidden'>
                    <Image src={"https://a0.muscache.com/im/pictures/8262da55-f57f-460a-88cd-67a1d07b6f80.jpg?im_w=320"} layout="fill" />
                </div>
                <div className='md:flex hidden 2xl:hidden'>
                    <Image src={"https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=720"} layout="fill" />
                </div>
                <div className='2xl:flex hidden'>
                    <Image src={"https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200"} layout="fill" className='rounded-3xl'/>
                </div>

                <div className='px-6 md:px-10 absolute pt-10 2xl:p-20'>
                    <p className='text-white font-semibold text-4xl max-w-xs 2xl:max-w-lg md:text-5xl 2xl:text-8xl'>Máš dotazy ohledně hostitelství?</p>
                </div>

                <button className='mx-6 md:mx-10 2xl:mx-20 absolute bottom-10 2xl:bottom-20 bg-white px-5 py-[11px] font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300'>Zeptej se Superhostitele</button>
            </div>
        </div>
    )
}

export default Hostitelstvi