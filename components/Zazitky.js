import React from 'react'
import Image from "next/image"

function Zazitky() {
    return (
        <div className='pt-10 px-6 md:px-10 xl:px-20 2xl:px-40 space-y-8 xl:space-y-12 xl:pt-20'>
            <h2 className='font-semibold text-2xl xl:text-3xl 2xl:text-5xl text-[#222222]'>Objev zážitky Airbnb</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:hidden'>
                <Card
                    img={"https://a0.muscache.com/im/pictures/b081750b-8f9b-426a-a4dc-cfbf06f14a4a.jpg?im_w=320"}
                    p={"Co můžeš podniknout během pobytu"}
                    btnText={"Zážitky"}
                />
                <Card
                    img={"https://a0.muscache.com/im/pictures/282ad058-cf85-4c29-bdb4-c7cfa841de61.jpg?im_w=320"}
                    p={"Co podniknout z pohodlí domova"}
                    btnText={"Online zážitky"}
                />
            </div>
            <div className='md:grid grid-cols-1 md:grid-cols-2 gap-6 hidden'>
                <Card
                    img={"https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720"}
                    p={"Co můžeš podniknout během pobytu"}
                    btnText={"Zážitky"}
                />
                <Card
                    img={"https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720"}
                    p={"Co podniknout z pohodlí domova"}
                    btnText={"Online zážitky"}
                />
            </div>
        </div>
    )
}

function Card({ img, p, btnText }) {
    return (
        <div className='relative w-full top-0 pb-[150%] md:pb-[120%]'>
            <Image src={img} layout="fill" className='rounded-2xl' />
            <div className='text-white absolute p-8 space-y-6 xl:p-20'>
                <p className='text-3xl xl:text-5xl font-semibold max-w-sm xl:max-w-xl'>{p}</p>
                <button className='text-black hover:bg-gray-200 transition-colors duration-300 bg-white rounded-lg px-6 py-3 font-semibold'>{btnText}</button>
            </div>
        </div>
    )
}

export default Zazitky