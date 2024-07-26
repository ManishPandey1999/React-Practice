import React, { useEffect, useState } from 'react'
import fetchItems from '../Fetch_Data/Axiosget';
import { IoMdArrowDropdown } from "react-icons/io";

export default function Homefiltercomp() {

    const [itemlist, setItemlist] = useState([]);

    useEffect(() => {
        fetchItems('photos', { _limit: 20 }).then((items) => {
          setItemlist(items);
        });
    }, []);


        
        const [isSticky, setSticky] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
           
            if (window.scrollY > 840) {
              setSticky(true);
            } else {
              setSticky(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    
        return (
            <>
                <div className='w-[1000px] m-auto pt-10'>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-semibold'>Restaurants with online food delivery in your area</h1>
                        
                    </div>
                    <div className='pt-5'>
                        <div className={`pb-10 flex items-center gap-4 header header-filter ${isSticky ? 'sticky' : ''}`}>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Filter <IoMdArrowDropdown className='inline'/></button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Sort By <IoMdArrowDropdown  className='inline'/></button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Fast Delivery</button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>New on Swiggy</button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Rating 4.0+</button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Pure Veg</button>
                            <button className='border border-gray-300 shadow rounded-2xl px-[12px] py-[2px]'>Offers</button>
                        </div>
                        <ul className='flex flex-wrap'>
                            {
                                itemlist.map(item => (
                                    <li className='min-w-[200px] h-auto flex justify-center' key={item.id}>
                                        <a href="#">
                                            <img src={item.url} alt="image-sign" className='h-[100px] mb-3 bg-slate-400' />
                                            <p className='h-[100px]'>{item.title.slice(0, 15)}</p>
                                        </a>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    <hr/>
                </div>
            </>
        )
}