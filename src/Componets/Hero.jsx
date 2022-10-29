import React from 'react'
import Typed from 'react-typed'
import Bg from '../assets/BgE.png'

const Hero = () => {
  return (
    <div className={`text-white bg-white backgr`} style={{ 
      backgroundImage: `url(${Bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'contain',
      padding:0,
      bottom:0,
      left:0,
      backgroundPosition: 'bottom left',      
       
    }}>
        <div className='max-w-[800px] pt-32 mt-[-96px] w-full  h-screen md:mr-24  md:ml-auto text-left flex flex-col items-center md:justify-end xl:justify-center '>
          <div className='border-l-8 pl-4  mb-24 xl:mb-28  md:ml-2 border-[#4F6228]  '>   
              <h1 className='text-[#4F6228] md:text-6xl sm:text-4xl text-[1.5rem] font-bold md:py-2  font-Fire'>Photoelectric Energy <sup className='mb-10 md:text-2xl sm:text-2xl text-base text-[#4F6228] font-bold'>(Pvt)Ltd</sup></h1> 
            <Typed className='md:text-2xl text-md font-bold text-neutral-500 font-Rufina tracking-widest' strings={['Everything is Light']} typeSpeed={120} backSpeed={0}  />
          </div>
            
        </div>
    </div>
  )
}

export default Hero