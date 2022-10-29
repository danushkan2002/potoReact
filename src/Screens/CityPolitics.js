import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { useInView } from 'react-intersection-observer';


import CP1 from '../Assets/CP/CP (1).jpeg'
import CP2 from '../Assets/CP/CP (2).jpeg'
import CP3 from '../Assets/CP/CP (3).jpeg'
import CP4 from '../Assets/CP/CP (4).jpeg'
import CP5 from '../Assets/CP/CP (5).jpeg'
import CP6 from '../Assets/CP/CP (6).jpeg'
import CP7 from '../Assets/CP/CP (7).jpeg'
import CPBG from '../Assets/CP/CPBG.png'


const CityPolitics = () => {
  const english = useLanguage()
  const {pathName} = useLocation()
  
  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  const { ref:cardRef, inView:isCardrVisible } = useInView({triggerOnce:true});


    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div >
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={CPBG} alt='' className={
            isBanerVisible?
            'absolute w-full h-full object-cover object-left duration-1000':
            'absolute w-full h-full object-cover object-left opacity-0'
          } />
          <div className='w-full h-full absolute bg-gradient-to-t from-black to-transparent' ></div>
          {
            english ?
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold mt-[50px] opacity-0'
            }>City<span className='text-10 px-[5px] md:px-[10px]'>Politics</span></p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }>නගර <span className='text-10 px-[5px] md:px-[10px]'>දේශපාලනය</span></p>
          }
        </div>
      </section>
      <section ref={cardRef} className={
        isCardrVisible?
        'py-[100px] sm:px-[25px] lg:px-[100px] bg-30 duration-1000':
        'py-[400px] sm:px-[25px] lg:px-[100px] bg-30 '
      }>
        <div className='flex flex-col flex-wrap justify-center gap-[25px]'>
          <div className='grid grid-cols-1 justify-items-center lg:flex flex-wrap justify-center gap-[25px]'>
            <img src={CP2} alt='' className='object-cover sm:h-[300px] sm:w-[300px] md:w-[500px] lg:w-[350px]' />
            <img src={CP3} alt='' className='object-cover sm:h-[300px] sm:w-[300px] md:w-[500px] lg:w-[225px]' />
          </div>
          <div className='flex flex-wrap justify-center gap-[25px]' >
            <img src={CP4} alt='' className='object-cover sm:h-[300px] sm:w-[300px] md:w-[500px] lg:w-[250px]' />
            <img src={CP5} alt='' className='object-cover sm:h-[300px] sm:w-[300px] md:w-[500px] lg:w-[350px]' />
          </div>
        </div>
      </section>   
    </div>
  )
}

export default CityPolitics


