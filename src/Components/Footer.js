import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='relative bottom-0 bg-10 overflow-hidden w-full flex items-center py-[50px]'>
            <div className='mx-auto'>
                <p className='text-center text-2xl md:text-4xl font-bold font-Oswald text-60'>malindu.lk</p>
                <div className='mt-[15px] md:mt-[35px] opacity-75 text-60'>
                    <p className='text-center text-sm md:text-base mt-[5px] font-bold font-Montserrat'>© Copyright 2022, All Rights Reserved</p>
                </div>
            </div>
    </div>
  )
}

export default Footer
