import React, { useEffect, useState } from 'react'
import fetchItems from '../Fetch_Data/Axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Homecompsecond() {

    const [moveSlide, setmoveSlide] = useState(0);

    const [itemlist, setItemlist] = useState([]);

    useEffect(() => {
        fetchItems('photos', { _limit: 20 }).then((items) => {
          setItemlist(items);
        });
    }, []);


    const movenextSlide = () => {
        console.log(itemlist.length)
        if (moveSlide > itemlist.length - 10) return false;
        setmoveSlide(moveSlide + 5);
    }

    const moveprevSlide = () => {
        console.log(itemlist.length)
        if (moveSlide <= 0) return false;
        setmoveSlide(moveSlide - 5);
    }

        return (
            <>
                <div className='w-[1000px] m-auto pt-10 pb-10'>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-semibold'>Top restaurant in your area</h1>
                        <div className='flex gap-3'>
                            <span className="flex items-center justify-center cursor-pointer text-base bg-slate-300 rounded-full h-8 w-8" onClick={moveprevSlide}><FaArrowLeft /></span>
                            <span className="flex items-center justify-center cursor-pointer text-base bg-slate-300 rounded-full h-8 w-8" onClick={movenextSlide}><FaArrowRight /></span>
                        </div>
                    </div>
                    <div className='pt-10 w-[900px] m-auto'>
                        <ul className='flex overflow-hidden'>
                            {
                                itemlist.map(item => (
                                    <li style={{
                                        transform:`translate(-${moveSlide * 100}%)`
                                    }} className='min-w-[160px] h-auto shrink-0 duration-500' key={item.id}>
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
