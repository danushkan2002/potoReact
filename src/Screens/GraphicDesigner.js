import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { useInView } from 'react-intersection-observer';

import GDBG from '../Assets/GD/GDBG.png'
import GD1 from '../Assets/GD/GD (1).jpeg'
import GD2 from '../Assets/GD/GD (1).png'
import GD3 from '../Assets/GD/GD (2).jpeg'
import GD4 from '../Assets/GD/GD (2).png'
import GD5 from '../Assets/GD/GD (3).jpeg'
import GD6 from '../Assets/GD/GD (4).jpeg'
import GD7 from '../Assets/GD/GD (5).jpeg'


const GraphicDesigner = () => {
  const english = useLanguage()
  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  const {pathName} = useLocation()
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div>
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={GDBG} alt='' className={
            isBanerVisible?
            'absolute w-full h-full object-cover duration-1000':
            'absolute w-full h-full object-cover opacity-0'
          } />
          <div className='w-full h-full absolute bg-gradient-to-t from-black to-transparent' ></div>
          {
            english ?
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold mt-[50px] opacity-0'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >Graphics</span> Designer</p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >ග්‍රැෆික්</span>  නිර්මාණකරු</p>
          }
        </div>
      </section>
      <section className='py-[100px] px-[25px] lg:px-[100px] bg-30'>
        <div className='flex flex-wrap justify-center gap-[25px]'>
          <img src={GD1} alt='' className='object-contain h-[300px]' />
          <img src={GD2} alt='' className='object-contain h-[300px]' />
          <img src={GD3} alt='' className='object-contain h-[300px]' />
          <img src={GD4} alt='' className='object-contain h-[300px]' />
          <img src={GD5} alt='' className='object-contain h-[300px]' />
          <img src={GD6} alt='' className='object-contain h-[300px]' />
          <img src={GD7} alt='' className='object-contain h-[300px]' />
        </div>
      </section> 
    </div>
  )
}

export default GraphicDesigner
