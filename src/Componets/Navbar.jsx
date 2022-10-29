import React, {useEffect,useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = ({children}) => {
  const [nav, setNav] = useState(true)

  const handleNavbar = () => {
    setNav(!nav)
  }
    return (
      <div className='flex  items-center h-24 max-w-[1500px] px-4 md:px-10 mx-auto bg-gray-600  text-black z-100'>
        <ul className='hidden md:flex ml-auto font-bold'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About Us</li>
          <li className='p-4'>Contact Us</li>
          <li className='p-4'>Product and Service</li>
          <li className='p-4'>knowledge</li>
        </ul>
        <div onClick={handleNavbar} className={'block md:hidden ml-auto'}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
          <ul className=' p-4 text-white'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About Us</li>
            <li className='p-4 border-b border-gray-600'>Contact Us</li>
            <li className='p-4 border-b border-gray-600'>Product and Service</li>
            <li className='p-4 border-b border-gray-600'>knowledge</li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar