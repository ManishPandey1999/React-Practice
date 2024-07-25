import React from 'react'
import { Link } from 'react-router-dom';

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
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/swiggyone">Swiggy One</Link></li>
                        <li><Link to="/swiggyinstamart">Swiggy Instamart</Link></li>
                        <li><Link to="/swiggygenie">Swiggy Genie</Link></li>
                    </ul>
                </div>
                <div className='text-white px-10'>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2'>Contact Us</h1>
                    <ul className='list-none text-[16px]'>
                        <li><Link to="/helpsupport">Help & Support</Link></li>
                        <li><Link to="/partner">Partner with us</Link></li>
                        <li><Link to="/rideus">Ride with us</Link></li>
                    </ul>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2 pt-7'>Legal</h1>
                    <ul className='list-none text-[16px]'>
                        <li><Link to="/termcondition">Term & Condition</Link></li>
                        <li><Link to="/cookie">Cookie Policy</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/investor">Investor Relations</Link></li>
                    </ul>
                </div>
                <div className='text-white px-10'>
                    <h1 className='text-2xl font-semibold border-b border-gray-400 pb-1 mb-2'>We deliver to:</h1>
                    <ul className='list-none text-[16px]'>
                        <li><Link>Bangalore</Link></li>
                        <li><Link>Gurgaon</Link></li>
                        <li><Link>Hyderabad</Link></li>
                        <li><Link>Delhi</Link></li>
                        <li><Link>Mumbai</Link></li>
                        <li><Link>Pune</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}