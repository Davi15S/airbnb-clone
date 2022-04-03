import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from "date-fns"

function Search({searchResults}) {
    const router = useRouter()

    const { location, startDate, endDate, guests } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    console.log(searchResults);

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests}`}/>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {guests} guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='gap-3 hidden lg:flex mb-5 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancelation Flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/is2").
    then(res => res.json())

    return{
        props: {
            searchResults
        }
    }
}

export default Search