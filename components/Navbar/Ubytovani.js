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
                        initial={{ opacity: "0%", scaleX: 0 }}
                        animate={{ opacity: "100%", scaleX: "100%" }}
                        exit={{ opacity: "0%", scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='w-full bg-white flex rounded-full max-w-4xl border border-gray-300'>
                        {!zazitky && (
                            <div className='flex w-full'>
                                <UbytovaniText txt1={"Lokalita"} txt2={"Kam se chystáš?"} flex_grow="flex-grow flex-col" />
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <UbytovaniText txt1={"Příjezd"} txt2={"Přidat termín"} flex_grow="flex-grow-[0.5] flex-col" />
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <UbytovaniText txt1={"Odjezd"} txt2={"Přidat termín"} flex_grow="flex-grow-[0.5] flex-col" />
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <UbytovaniText txt1={"Odjezd"} txt2={"Přidat termín"} flex_grow="flex-grow-[0.7] items-center justify-between p-2" search={<SearchIcon className='h-11 p-3 text-white bg-[#e41d59] rounded-full' />} />
                            </div>
                        )}
                        {zazitky && (
                            <div className='flex w-full'>
                                <UbytovaniText txt1={"Lokalita"} txt2={"Kam se chystáš?"} flex_grow="flex-grow flex-col" />
                                <div className='h-[60%] w-[0.05rem] bg-[#ebebeb] flex self-center' />
                                <UbytovaniText txt1={"Datum"} txt2={"Uveď, kdy chceš vyrazit"} flex_grow="flex-grow-[0.7] items-center justify-between p-2" search={<SearchIcon className='h-11 p-3 text-white bg-[#e41d59] rounded-full' />} />
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function UbytovaniText({ txt1, txt2, flex_grow, search }) {
    return (
        <div className={`flex justify-center cursor-pointer hover:bg-[#ebebeb] rounded-full pl-6 ${flex_grow}`}>
            <div>
                <p className='text-xs font-bold'>{txt1}</p>
                <p className="whitespace-nowrap text-sm text-[#717171]">{txt2}</p>
            </div>
            {search}
        </div>
    )
}

export default Ubytovani