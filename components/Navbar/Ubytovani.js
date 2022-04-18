import { SearchIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

function Ubytovani({ activeNavbar, zazitky }) {
    return (
        <AnimatePresence>
            {!activeNavbar && (
                <motion.div
                    key={"searchBar"}
                    initial={{ opacity: "0%", marginTop: -50, }}
                    animate={{ opacity: "100%", marginTop: 24, }}
                    exit={{ opacity: "0%", marginTop: -50, }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`md:flex hidden justify-center relative left-1/2 -translate-x-1/2`}>
                    <motion.div
                        key={"searchBarInside"}
                        initial={{ width: "0%", opacity: "0%" }}
                        animate={{ width: "100%", opacity: "100%" }}
                        exit={{ width: "0%", opacity: "0%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='w-full bg-white flex rounded-full max-w-4xl border border-gray-300'>
                        {!zazitky && (
                            <div className='flex w-full'>
                                <div className='flex-grow flex flex-col justify-center cursor-pointer hover:bg-[#ebebeb] rounded-full pl-6 overflow-x-hidden'>
                                    <p className='text-xs font-bold'>Lokalita</p>
                                    <p className="whitespace-nowrap text-sm text-[#717171]">Kam se chystáš?</p>
                                </div>
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <div className='cursor-pointer hover:bg-[#ebebeb] flex flex-col justify-center rounded-full pl-6 flex-grow-[0.5]'>
                                    <p className='text-xs font-bold'>Příjezd</p>
                                    <p className='whitespace-nowrap text-sm text-[#717171]'>Přidat termín</p>
                                </div>
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <div className='cursor-pointer hover:bg-[#ebebeb] flex flex-col justify-center rounded-full pl-6 flex-grow-[0.5]'>
                                    <p className='text-xs font-bold'>Příjezd</p>
                                    <p className='whitespace-nowrap text-sm text-[#717171]'>Přidat termín</p>
                                </div>
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <div className='flex items-center cursor-pointer hover:bg-[#ebebeb] rounded-full flex-grow-[0.7] justify-between pl-6 p-2'>
                                    <div>
                                        <p className='text-xs font-bold'>Hosté</p>
                                        <p className='whitespace-nowrap text-sm text-[#717171]'>Přidat termín</p>
                                    </div>
                                    <SearchIcon className='h-11 p-3 text-white bg-[#e41d59] rounded-full' />
                                </div>
                            </div>
                        )}
                        {zazitky && (
                            <div className='flex w-full'>
                                <div className='flex w-1/2 flex-col justify-center cursor-pointer hover:bg-[#ebebeb] rounded-full pl-6 overflow-x-hidden'>
                                    <p className='text-xs font-bold'>Lokalita</p>
                                    <p className="whitespace-nowrap text-sm text-[#717171]">Kam se chystáš?</p>
                                </div>
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <div className='flex items-center cursor-pointer hover:bg-[#ebebeb] rounded-full flex-grow justify-between pl-6 p-2'>
                                    <div>
                                        <p className='text-xs font-bold'>Datum</p>
                                        <p className='whitespace-nowrap text-sm text-[#717171]'>Uveď, kdy chceš vyrazit</p>
                                    </div>
                                    <SearchIcon className='h-11 p-3 text-white bg-[#e41d59] rounded-full' />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Ubytovani