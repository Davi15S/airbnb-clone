import React, { useState } from 'react'
import Image from "next/image"
import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon,
    UsersIcon
} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from "react-date-range"
import Link from "next/link"
import Router, { useRouter } from 'next/router'

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState("")
    const [guests, setGuests] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const router = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toString(),
                endDate: endDate.toString(),
                guests
            }
        })
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>

            {/* Left */}
            <Link href={"/"}>
                <a className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit='contain'
                        objectPosition="left"
                    />
                </a>
            </Link>


            {/* Middle - Search Bar */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='pl-5 flex-grow bg-transparent outline-none' type="text" placeholder={placeholder || "Start your Search"} />
                <SearchIcon className='h-8 md:mx-2 hidden md:inline-flex bg-red-400 rounded-full text-white cursor-pointer p-2' />
            </div>


            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex border-2 rounded-full items-center space-x-2 p-2'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className="col-span-3 flex flex-col mx-auto mt-4">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />

                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl font-bold flex-grow'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                            type="number"
                            min={1}
                            className='w-12 pl-2 outline-none text-lg text-red-400'
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header