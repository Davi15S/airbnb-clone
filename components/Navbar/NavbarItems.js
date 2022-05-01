import { AnimatePresence, motion } from "framer-motion";

function NavbarItems({ activeNavbarItem, handleClick, activeScroll, style, searchBarActive }) {
    return (
        <AnimatePresence>
            {!activeScroll && (
                <motion.div
                    key={"navbarMenu"}
                    initial={{ opacity: "0%", marginTop: -100, }}
                    animate={{ opacity: "100%", marginTop: 0, }}
                    exit={{ opacity: "0%", marginTop: -100, }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`space-x-5 text-white justify-center hidden ${style} ${!searchBarActive && "searchBarActive"}`}>
                    <p id={0} onClick={handleClick} className={`cursor-pointer transition-colors duration-300 ${activeNavbarItem[0] ? "active" : "navbarItem"}`}>Ubytování</p>
                    <p id={1} onClick={handleClick} className={`cursor-pointer transition-colors duration-300 ${activeNavbarItem[1] ? "active" : "navbarItem"}`}>Zážitky</p>
                    <p id={2} onClick={handleClick} className={`cursor-pointer transition-colors duration-300 ${activeNavbarItem[2] ? "active" : "navbarItem"}`}>Online zážitky</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NavbarItems