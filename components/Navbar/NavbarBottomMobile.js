import { HeartIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

function NavbarBottomMobile() {
    const [isActive, setIsActive] = useState([true, false, false])
    const [currentScrollPos, setCurrentScrollPos] = useState(0)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [mobileNavbarActive, setMobileNavbarActive] = useState(true)

    const handleClick = e => {
        const id = e.target.id
        const activateState = [false, false, false]
        activateState[id] = true;
        setIsActive(activateState)
    }

    useEffect(() => {
        const handleScroll = () => {
            currentScrollPos = window.scrollY

            if (prevScrollPos + 200 <= currentScrollPos) {
                setMobileNavbarActive(false)
                mobileNavbarActive = false
            }
            if (currentScrollPos < prevScrollPos) {
                setMobileNavbarActive(true)
                mobileNavbarActive = true
                prevScrollPos = currentScrollPos
            }
            if (!mobileNavbarActive) {
                prevScrollPos = currentScrollPos
            }
            console.log(currentScrollPos);
            console.log(prevScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {mobileNavbarActive && (
                <motion.div
                    key={"mobileNavbar"}
                    initial={{ bottom: -50 }}
                    animate={{ bottom: 0 }}
                    exit={{ bottom: -50 }}
                    transition={{ duration: 0.15 }}
                    className='bg-white md:hidden fixed h-16 w-full bottom-0 gap-10 flex justify-center items-center z-50 border-t border-gray-200'>
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
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NavbarBottomMobile