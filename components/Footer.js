import React from 'react'

function Footer() {
    return (
        <div className='bg-gray-100'>
            <div className='grid grid-cols-1 gap-10 p-10 md:grid-cols-4 max-w-7xl mx-auto'>
                <div className='space-y-4 text-xs text-gry-800'>
                    <h5 className='font-bold'>ABOUT</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>

                <div className='space-y-4 text-xs text-gry-800'>
                    <h5 className='font-bold'>SUPPORT</h5>
                    <p>Help Centre</p>
                    <p>Trust & Safety</p>
                    <p>Easter Eggs</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
    )
}

export default Footer