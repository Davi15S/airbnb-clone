import React from 'react'
import hero from "../media/hero.webp"
import Image from "next/image"
import heroDesktop from "../media/heroDesktop.webp"

function Hero() {
    return (
        <div className='space-y-10 md:space-y-20'>
            <div className='text-white w-full bg-[#ff385c] h-0 pb-[80%] md:pb-[30%] xl:pb-[25%] rounded-lg relative flex justify-center'>
                <div className='space-y-5 text-center absolute top-1/2 -translate-y-1/2 mx-6 md:mx-10'>
                    <p className="font-semibold text-[26px] leading-8 md:text-3xl lg:text-4xl xl:text-5xl">Pomoz ubytovat 100 000 uprchlíků z Ukrajiny</p>
                    <button className='border border-white rounded-lg hover:bg-black hover:bg-opacity-40 transition-all duration-500 px-4 py-2 font-semibold text-sm'>Další informace</button>
                </div>
            </div>
            <div className='relative w-full h-0 pb-[150%] md:pb-0 md:h-[550px] xl:h-0 xl:pb-[50%] flex justify-center'>
                <div className='md:hidden'>
                    <Image src={hero} objectFit="contain" layout='fill' className='rounded-xl' />
                </div>
                <div>
                    <Image src={heroDesktop} objectFit="cover" layout='fill' className='rounded-lg hidden md:flex' />
                </div>
                <div className='bottom-16 text-center absolute'>
                    <p className='text-white font-semibold text-[26px] sm:text-3xl mb-10 md:text-4xl xl:text-5xl'>Vydej se na cestu do neznáma</p>
                    <span className='bg-white px-5 py-3 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
                        <button className='font-bold text-sm text-transparent bg-clip-text bg-gradient-to-tr from-[#73019b] to-[#d400a6]'>Jsem flexibilní</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero