import React,{useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext'

import JS1 from '../Assets/JS programe/JS (1).jpeg'
import JS2 from '../Assets/JS programe/JS (2).jpeg'
import JS3 from '../Assets/JS programe/JS (3).jpeg'
import JS4 from '../Assets/JS programe/JS (4).jpeg'
import JS5 from '../Assets/JS programe/JS (5).jpeg'
import JS6 from '../Assets/JS programe/JS (6).jpeg'
import JS7 from '../Assets/JS programe/JS (7).jpeg'
import JS8 from '../Assets/JS programe/JS (8).jpeg'
import JS10 from '../Assets/JS programe/JS (10).jpeg'
import JS11 from '../Assets/JS programe/JS (11).jpeg'
import MSBG from '../Assets/Motivation/MSBG.png'

import VP1 from '../Assets/VP/VP (1).jpeg'
import VP2 from '../Assets/VP/VP (2).jpeg'
import VP3 from '../Assets/VP/VP (3).jpeg'
import VP4 from '../Assets/VP/VP (4).jpeg'
import VP5 from '../Assets/VP/VP (5).jpeg'

const MotivationSpeaker = () => {
  
  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  const { ref:card1Ref, inView:isCard1Visible } = useInView({triggerOnce:true});
  const { ref:card2Ref, inView:isCard2Visible } = useInView({triggerOnce:true});
  const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});


  const english = useLanguage()
  const {pathName} = useLocation()
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div>
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={MSBG} alt='' className={
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
            }><span className='text-10 pr-[5px] md:pr-[20px]' >Motivation</span> Speaker</p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >අභිප්රේරණ</span> කථිකයා</p>
          }
        </div>
      </section>
      <section className='lg:px-[100px] py-[50px] bg-30'> 
          <div>
            <div>
              {
                english?
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>Kids motivation</p>:
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>ළමා පෙළඹවීම</p>
              }
            </div>                  
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px]"
            }> 
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS10}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS11}
                  alt="image.alt_description"
                />
              </figure>
            </div>
          </div>
      </section>
      <section className='lg:px-[100px] py-[50px] bg-60'> 
          <div>
            <div>
              {
                english?
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>Vilanguvata Pera</p>:
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>විලංගුවට පේරා</p>
              }
            </div>                  
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px]"
            }> 
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={VP1}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={VP2}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={VP3}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={VP4}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={VP5}
                  alt="image.alt_description"
                />  
              </figure>
            </div>
          </div>
      </section>
      <section className='lg:px-[100px] py-[50px] bg-30'> 
          <div>
            <div>
              {
                english?
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>Jeewana Sware</p>:
                <p className='text-3xl pb-[25px] md:text-4xl font-Oswald font-medium text-10 text-center '>මාතර යුගයක්</p>
              }
            </div>                  
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px]"
            }> 
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS1}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS4}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS6}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS8}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={JS11}
                  alt="image.alt_description"
                />  
              </figure>
            </div>
          </div>
      </section>
    </div>
  )
}

export default MotivationSpeaker