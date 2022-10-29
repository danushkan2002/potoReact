import React from 'react'
import solor from '../assets/Bg-solor.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={solor} alt='/' />
            <div className='mx-auto'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-10 '>How Solar Works</h1>
                
                  <p className='mb-2 ml-4'>1. Your solar power system converts sunlight into usable electricity </p>

                
                  <p className='mb-2 ml-4'>2. Your home uses whatever electricity it needs</p>

                
                  <p className='mb-2 ml-4'>3. You get paid for the electricity you generate that you don’t use  </p>
                <button className='text-[#4F6228] text-sm md:text-base mt-10 rounded-md border-2 border-[#4F6228] font-bold my-6 py-2 mx-auto md:mx-0 px-4 hover:bg-[#4F6228] transition-colors hover:text-white'>Check if my home qualifies</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics