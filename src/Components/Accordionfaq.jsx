import React, {useState} from 'react'

export default function Accordionfaq({title, content}) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item border-b border-gray-400 mb-5 p-2">
      <div className="accordion-title flex items-center justify-between cursor-pointer mb-2" onClick={() => setIsActive(!isActive)}>
        <div className='text-[20px] font-semibold'>{title}</div>
        <div className='text-xl'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive ? (
        <div className="accordion-content text-[17px] text-gray-700">
            {content}
        </div>
        ) : null}
    </div>
  )
}
