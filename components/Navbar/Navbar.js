import React, { useEffect, useState, useRef } from 'react'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserIcon } from "@heroicons/react/solid"
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline"
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from "../../hooks/useWindowSize"
import NavbarItems from './NavbarItems';
import Ubytovani from './Ubytovani';
import SignInItem from './SignInItem';
import { auth } from "../../firebase"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import NavbarBottomMobile from './NavbarBottomMobile';

function Navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false)
    const [activeNavbarItem, setActiveNavbarItem] = useState([true, false, false])
    const [mobileNavbarActive, setMobileNavbarActive] = useState(true)
    const [signInBar, setsignInBar] = useState(false)
    const [userState, setUserState] = useState({ user: null })
    const [searchBarActive, setSearchBarActive] = useState(true)

    const size = useWindowSize()
    const signInRef = useRef()
    const navbarRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarScroll(true)
                setSearchBarActive(true)
            }
            else {
                setNavbarScroll(false)
            }
        };

        const handleWindowSize = () => {
            if (size.width >= 768) {
                setMobileNavbarActive(false)
            }
            else {
                setMobileNavbarActive(true)
            }
        }

        handleScroll();
        handleWindowSize();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [size]);

    const handleClick = e => {
        const id = e.target.id
        const activateState = [false, false, false]
        activateState[id] = true;
        setActiveNavbarItem(activateState)
    }

    // Menu handleClick
    useEffect(() => {
        function handleClickOutside(event) {
            if (signInRef.current && !signInRef.current.contains(event.target)) {
                setsignInBar(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [signInRef]);

    // Navbar handleClick
    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target) && window.scrollY > 50) {
                setSearchBarActive(true)
                setNavbarScroll(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarRef]);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((res) => {
                setUserState(userState => ({
                    ...userState,
                    user: res.user
                }))
                setsignInBar(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const signOutHandle = () => {
        signOut(auth)
            .then((res) => {
                setUserState(userState => ({
                    ...userState,
                    user: null
                }))
                setsignInBar(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const navbarSearchBar = () => {
        setNavbarScroll(!navbarScroll)
        setSearchBarActive(!searchBarActive)
    }

    return (
        <div>
            <NavbarBottomMobile />
            <div ref={navbarRef} className={`p-4 px-6 fixed w-full md:px-10 xl:px-20 2xl:px-40 md:py-4 ${mobileNavbarActive && navbarScroll && "bg-white"} transition-colors duration-300 z-50`}>

                {/* Mobile Navbar */}
                <div className={`${navbarScroll ? "bg-[#f7f7f7]" : "bg-white"} text-black flex items-center justify-center font-medium rounded-full cursor-pointer transition-all p-3 duration-500 md:hidden`}>
                    <span><SearchIcon className='h-5 px-2 text-[#ff385c]' /></span>Kam se chystáš?
                </div>

                {/* Desktop Navbar */}
                <div className={`md:flex mb-5 lg:mb-0 hidden justify-between items-center ${!navbarScroll && searchBarActive ? "text-white" : "text-black"} transition-colors duration-500`}>


                    {/* Logo */}
                    <div className='flex items-center cursor-pointer space-x-3'>
                        <div className="h-8 w-8">
                            <svg
                                viewBox="0 0 1991.3 2143.2"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <path
                                    d="M1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118C1201.6 47.2 1102.9 0 997.8 0 890.5 0 794 47.2 723.1 128.7c-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8C422.8 682.1 261.9 1008.2 113.9 1330l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
                                    fill={!navbarScroll && searchBarActive ? "#ffffff" : "#e0565b"}
                                />
                            </svg>
                        </div>
                        <div className={`font-bold text-2xl ${!navbarScroll && searchBarActive ? "text-white" : "text-[#e0565b]"} hidden xl:block`}>airbnb</div>
                    </div>


                    {/* Middle */}
                    <NavbarItems activeNavbarItem={activeNavbarItem} handleClick={handleClick} activeScroll={navbarScroll} style={`hidden lg:flex absolute left-1/2 -translate-x-1/2 mt-1 ${!searchBarActive && "text-black"}`} searchBarActive={searchBarActive} />
                    <AnimatePresence>
                        {navbarScroll && (
                            <motion.div
                                onClick={navbarSearchBar}
                                key={"navbarSearchBar"}
                                initial={{ opacity: "0%", }}
                                animate={{ opacity: "100%", transition: { delay: 0.15 } }}
                                exit={{ opacity: "0%", }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                                className='border cursor-pointer w-72 flex justify-between border-gray-300 rounded-full items-center px-2 py-2 absolute left-[100px] shadow-lg hover:shadow-xl transition-shadow duration-200 lg:left-1/2 lg:-translate-x-1/2 bg-white'>
                                <p className='pl-4 font-semibold text-[#525252] text-sm'>Začni vyhledávat</p>
                                <SearchIcon className='h-8 p-2 text-white bg-[#e41d59] rounded-full' />
                            </motion.div>
                        )}
                    </AnimatePresence>


                    {/* Sign In */}
                    <div
                        className='flex items-center space-x-3 relative'>
                        <div className='flex items-center -space-x-1'>
                            <p className={`font-semibold cursor-pointer ${!navbarScroll && searchBarActive ? "hover:bg-[#262626]" : "hover:bg-[#f7f7f7]"} py-3 px-4 rounded-full`}>Stát se hostitelem</p>
                            <GlobeAltIcon className={`h-10 cursor-pointer ${!navbarScroll && searchBarActive ? "hover:bg-[#262626]" : "hover:bg-[#f7f7f7]"} p-2 rounded-full`} />
                        </div>
                        <div
                            ref={signInRef}
                            onClick={() => setsignInBar(!signInBar)}
                            className={`flex items-center bg-white border cursor-pointer border-gray-300 rounded-full gap-x-2 p-1 ${navbarScroll && "border-gray-300"} transition-all duration-300 relative hover:shadow-lg`}>
                            <MenuIcon className='h-5 text-[#595959] px-1 pointer-events-none' />
                            <div className='w-[30px] h-[30px] bg-[#717171] rounded-full flex items-center justify-center pointer-events-none'>
                                {!userState.user && <UserIcon className='h-5 rounded-full text-white pointer-events-none' />}
                                {userState.user && <Image src={"https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"} width={30} height={30} className={"rounded-full"} />}
                            </div>

                            {signInBar && (
                                <div
                                    className='bg-white text-black absolute right-0 top-14 z-50 rounded-lg py-2 border'>
                                    {!userState.user && (
                                        <div>
                                            <SignInItem txt={"Zaregistrovat se"} style="font-semibold" onClick={signInWithGoogle} />
                                            <SignInItem txt={"Přihlásit se"} onClick={signInWithGoogle} />
                                            <div className='h-[1px] my-2 w-full bg-gray-300' />
                                            <SignInItem txt={"Buď hostitelem"} />
                                            <SignInItem txt={"Staň se hostitelem zážitku"} />
                                            <SignInItem txt={"Nápověda"} />
                                        </div>
                                    )}
                                    {userState.user && (
                                        <div>
                                            <SignInItem txt={"Zprávy"} style="font-semibold" />
                                            <SignInItem txt={"Upozornění"} style="font-semibold" />
                                            <SignInItem txt={"Pobyty"} style="font-semibold" />
                                            <SignInItem txt={"Vysněné"} style="font-semibold" />
                                            <div className='h-[1px] my-2 w-full bg-gray-300' />
                                            <SignInItem txt={"Buď hostitelem"} />
                                            <SignInItem txt={"Staň se hostitelem zážitku"} />
                                            <SignInItem txt={"Doporuč hostitele"} />
                                            <SignInItem txt={"Účet"} />
                                            <div className='h-[1px] my-2 w-full bg-gray-300' />
                                            <SignInItem txt={"Nápověda"} />
                                            <SignInItem txt={"Odhlásit se"} onClick={signOutHandle} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Tablet responsive */}
                <NavbarItems activeNavbarItem={activeNavbarItem} handleClick={handleClick} activeScroll={navbarScroll} style={`md:flex lg:hidden ${!searchBarActive && "text-black"}`} searchBarActive={searchBarActive} />


                {/* White background navbar animation */}
                <AnimatePresence>
                    {navbarScroll && !mobileNavbarActive && (
                        <motion.div
                            key={"shrinkingNavbar"}
                            initial={{ height: 176, opacity: "0%" }}
                            animate={{ height: 85, opacity: "100%" }}
                            exit={{ height: 176, opacity: "0%" }}
                            transition={{ duration: size.width < 1024 ? 0.2 : 0.3 }}
                            className='absolute bg-white w-full top-0 left-0 -z-10 shadow-md' />
                    )}
                </AnimatePresence>

                {/* Search Bar Active */}
                <AnimatePresence>
                    {!navbarScroll && !mobileNavbarActive && !searchBarActive && (
                        <motion.div
                            key={"shrinkingNavbar"}
                            initial={{ height: 85, }}
                            animate={{ height: size.width < 1024 ? 220 : 176, }}
                            exit={{ height: 85, }}
                            transition={{ duration: size.width < 1024 ? 0.2 : 0.3 }}
                            className='absolute bg-white w-full top-0 left-0 -z-10 shadow-md' />
                    )}
                </AnimatePresence>

                {!searchBarActive && (
                    <div className='fixed h-full w-full left-0 bg-black -z-20 opacity-30 pointer-events-none' />
                )}

                {/* Date & Place picker */}
                <Ubytovani activeNavbar={navbarScroll} zazitky={activeNavbarItem[1]} />
            </div>
        </div>
    )
}
export default Navbar