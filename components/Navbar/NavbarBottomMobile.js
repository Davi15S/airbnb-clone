import { HeartIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

function NavbarBottomMobile() {
    const [isActive, setIsActive] = useState([true, false, false])

    const handleClick = e => {
        const id = e.target.id
        const activateState = [false, false, false]
        activateState[id] = true;
        setIsActive(activateState)
        console.log(id);
    }

    return (
        <div className='bg-white md:hidden fixed h-16 w-full bottom-0 gap-10 flex justify-center items-center z-50 border-t border-gray-200'>
            <div onClick={handleClick} id={0} className='flex items-center flex-col cursor-pointer space-y-1'>
                <SearchIcon className={`h-7 ${isActive[0] ? "text-pink-500" : "text-gray-400"} pointer-events-none`} />
                <p className="text-[10px] pointer-events-none">Prozkoumat</p>
            </div>
            <div onClick={handleClick} id={1} className='flex items-center flex-col cursor-pointer space-y-1'>
                <HeartIcon className={`h-7 ${isActive[1] ? "text-pink-500" : "text-gray-400"} pointer-events-none`} />
                <p className="text-[10px] pointer-events-none">Vysněné</p>
            </div>
            <div onClick={handleClick} id={2} className='flex items-center flex-col cursor-pointer space-y-1'>
                <UserCircleIcon className={`h-7 ${isActive[2] ? "text-pink-500" : "text-gray-400"} pointer-events-none`} />
                <p className="text-[10px] pointer-events-none">Přihlásit se</p>
            </div>
        </div>
    )
}

export default NavbarBottomMobile