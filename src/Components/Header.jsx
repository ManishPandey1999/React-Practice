import React from 'react'

export default function Header() {
  return (
    <>
      <div className='p-9 bg-blue-700'>
        <div className='flex justify-between max-w-[1100px] mx-auto'>
          <div className='text-[25px] font-bold text-[yellow]'>My Logo</div>
          <div>
            <ul className='flex gap-10 text-white'>
              <li>Home</li>
              <li>About</li>
              <li>Solution</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
