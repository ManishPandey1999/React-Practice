import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-slate-950 p-14'>
            <div className='flex justify-center'>
                <div className='text-white px-10'>
                    <h1 className='text-3xl font-bold pb-2'>Swiggy</h1>
                    <p>@2024 New Address tech</p>
                </div>
                <div className='text-white px-10'>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2'>Company</h1>
                    <ul className='list-none text-[16px]'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Genie</li>
                    </ul>
                </div>
                <div className='text-white px-10'>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2'>Contact Us</h1>
                    <ul className='list-none text-[16px]'>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2 pt-7'>Legal</h1>
                    <ul className='list-none text-[16px]'>
                        <li>Term & Condition</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div className='text-white px-10'>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2'>We deliver to:</h1>
                    <ul className='list-none text-[16px]'>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
