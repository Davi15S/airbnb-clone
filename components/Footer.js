import { GlobeAltIcon } from '@heroicons/react/solid'
import React from 'react'

function Footer() {
    return (
        <div className='bg-[#f7f7f7] px-5 pt-3'>
            <div className='py-3'>
                <div>
                    <FooterTitle txt={"Podpora"} />
                    <div className='grid grid-cols-1'>
                        <FooterItem txt={"Centrum nápovědy"} />
                        <FooterItem txt={"Bezpečnostní pokyny"} />
                        <FooterItem txt={"Možnosti zrušení rezervace"} />
                        <FooterItem txt={"Naše reakce na COVID-19"} />
                        <FooterItem txt={"Podpora osob s handicapem"} />
                        <FooterItem txt={"Nahlásit problém v okolí"} />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-4" />
                </div>
                <div>
                    <FooterTitle txt={"komunita"} />
                    <div className='grid grid-cols-1'>
                        <FooterItem txt={"Airbnb.org: pomoc v nouzi"} />
                        <FooterItem txt={"Podpořit afghánské uprchlíky"} />
                        <FooterItem txt={"Boj proti diskriminaci"} />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-4" />
                </div>
                <div>
                    <FooterTitle txt={"Hostitelství"} />
                    <div className='grid grid-cols-1'>
                        <FooterItem txt={"Vyzkoušet hostitelství"} />
                        <FooterItem txt={"BezpAirCover: krytí pro hostiteleečnostní"} />
                        <FooterItem txt={"Projít si hostitelské zdroje"} />
                        <FooterItem txt={"Navštívit komunitní fórum"} />
                        <FooterItem txt={"Jak hostit zodpovědně"} />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-4" />
                </div>
                <div>
                    <FooterTitle txt={"Informace"} />
                    <div className='grid grid-cols-1'>
                        <FooterItem txt={"Redakce"} />
                        <FooterItem txt={"Víc o nových funkcích"} />
                        <FooterItem txt={"Dopis od našich zakladatelů"} />
                        <FooterItem txt={"Zaměstnání"} />
                        <FooterItem txt={"Investoři"} />
                        <FooterItem txt={"Airbnb Luxe"} />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 my-4" />
                </div>
                <div className='flex my-1 space-x-7'>
                    <div className='flex items-center group cursor-pointer space-x-2'>
                        <GlobeAltIcon className='h-5 group-hover:opacity-90 text-[#222222]'/>
                        <p className='h-[21px] text-[#222222] border-[#222222] group-hover:opacity-90 border-b font-semibold'>Čeština (CZ)</p>
                    </div>
                    <div className='flex space-x-2 group cursor-pointer'>
                        <div>Kč</div>
                        <div className='h-[21px] text-[#222222] border-[#222222] group-hover:opacity-90 border-b font-semibold'>CZK</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FooterTitle({ txt }) {
    return (
        <p className='font-semibold my-1'>{txt}</p>
    )
}

function FooterItem({ txt }) {
    return (
        <span className='hover:border-b h-[21px] my-1 cursor-pointer text-[#222222] border-[#222222] max-w-fit'>{txt}</span>
    )
}

export default Footer