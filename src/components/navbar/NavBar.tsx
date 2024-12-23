import { Dumbbell } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 bg-zinc-800 text-white items-center p-3 '>
        <div className='max-w-6xl mx-auto flex justify-between '>
            <div className=' text-2xl flex gap-3'>
                <Dumbbell className='text-red-500 h-6 w-6'/>FITNESXIA
            </div>
            <div className='flex gap-4 items-center'>
                <ul className='md:flex  gap-5 hidden'>
                <a href='#' className='hover:text-red-700'>Home</a>
                <a href='#aboutus'  className='hover:text-red-700'>About Us</a>
                <a href='#program' className='hover:text-red-700'>Program</a>
                <a href='#membership' className='hover:text-red-700'>Membership</a>
                <a href='#testimonials' className='hover:text-red-700'>Testimonials</a>
                </ul>
                <button className='bg-red-700 p-2 rounded-lg hover:text-black'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar