import React from 'react'

function Hero() {
    return (
        <div className='text-white w-full bg-[#ff385c] h-0 pb-[80%] md:pb-[30%] lg:pb-[25%] rounded-lg relative flex justify-center'>
            <div className='space-y-5 text-center absolute top-1/2 -translate-y-1/2 mx-6 md:mx-10'>
                <p className="font-semibold text-[26px] leading-8 md:text-3xl lg:text-4xl xl:text-5xl">Pomoz ubytovat 100 000 uprchlíků z Ukrajiny</p>
                <button className='border border-white rounded-lg hover:bg-black hover:bg-opacity-40 transition-all duration-500 px-4 py-2 font-semibold text-sm'>Další informace</button>
            </div>
        </div>
    )
}

export default Hero