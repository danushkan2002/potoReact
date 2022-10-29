import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import BBG from '../Assets/Books/BBG.png'
import B1 from '../Assets/Books/B (1).jpeg'
import B2 from '../Assets/Books/B (2).jpeg'
import B3 from '../Assets/Books/B (3).jpeg'
import B4 from '../Assets/Books/B (4).jpeg'
import B5 from '../Assets/Books/B (5).jpeg'
import B6 from '../Assets/Books/B (6).jpeg'
import B7 from '../Assets/Books/B (7).jpeg'
import B8 from '../Assets/Books/B (8).jpeg'
import B9 from '../Assets/Books/B (9).jpeg'
import B10 from '../Assets/Books/B (10).jpeg'
import B11 from '../Assets/Books/B (11).jpeg'
import B12 from '../Assets/Books/B (12).jpeg'
import B13 from '../Assets/Books/B (13).jpeg'
import BMC from '../Assets/Books/B MCard.png'
import BWC from '../Assets/Books/B WCard.png'
import LAMC from '../Assets/Books/LA MCard.png'
import LAWC from '../Assets/Books/LA WCard.png'
import MSMMC from '../Assets/Books/MSM MCard.png'
import MSMWC from '../Assets/Books/MSM WCard.png'
import MTp1 from '../Assets/MY programe/MTp (1).jpeg'
import MTp2 from '../Assets/MY programe/MTp (2).jpeg'
import MTp3 from '../Assets/MY programe/MTp (3).jpeg'
import MTp4 from '../Assets/MY programe/MTp (4).jpeg'
import MTp5 from '../Assets/MY programe/MTp (5).jpeg'
import MTp6 from '../Assets/MY programe/MTp (6).jpeg'
import MTp7 from '../Assets/MY programe/MTp (7).jpeg'
import MTp8 from '../Assets/MY programe/MTp (8).jpeg'
import MTp9 from '../Assets/MY programe/MTp (9).jpeg'
import MTp10 from '../Assets/MY programe/MTp (10).jpeg'
import MTp11 from '../Assets/MY programe/MTp (11).jpeg'
import MTp12 from '../Assets/MY programe/MTp (12).jpeg'
import MTp13 from '../Assets/MY programe/MTp (13).jpeg'
import MTp14 from '../Assets/MY programe/MTp (14).jpeg'
import MTp15 from '../Assets/MY programe/MTp (15).jpeg'
import MTp16 from '../Assets/MY programe/MTp (16).jpeg'
import MTp17 from '../Assets/MY programe/MTp (17).jpeg'
import MTp18 from '../Assets/MY programe/MTp (18).jpeg'
import MTp19 from '../Assets/MY programe/MTp (19).jpeg'
import MTp20 from '../Assets/MY programe/MTp (20).jpeg'

import { useLanguage } from '../LanguageContext'
import { useInView } from 'react-intersection-observer';

const BookWritting = () => {
    const english = useLanguage()
    const {pathName} = useLocation()
    const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
    const { ref:card1Ref, inView:isCard1Visible } = useInView({triggerOnce:true});
    const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});

    
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div className=''>
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={BBG} alt='' className={
            isBanerVisible?
            'absolute w-full h-full object-cover duration-1000':
            'absolute w-full h-full object-cover opacity-0'
          } />
          <div className='w-full h-full absolute bg-gradient-to-t from-black to-transparent' ></div>
          {
            english ?
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold mt-[50px] opacity-0'
            }>Book writting<span className='text-10 px-[5px] md:px-[10px]'>&</span> Art</p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }>පොත් ලිවීම<span className='text-10 px-[5px] md:px-[10px]'> සහ</span> කලාව</p>
          }
        </div>
      </section>
      <section className='px-[25px] lg:px-[100px] py-[50px] md:py-[100px] bg-30'> 
        <div>
          <div ref={card1Ref} className={
            isCard1Visible?
            'grid gridgrid-cols-1 md:flex justify-center gap-[25px] duration-1000':
            'grid gridgrid-cols-1 md:flex justify-center gap-[25px] mt-[50px] opacity-0'
          }>           
              <div className='relative overflow-hidden'>
                <img src={BMC} className=' my-auto object-contain lg:hidden' />
                <img src={BWC} className=' my-auto object-contain hidden lg:block' />
                
              </div>
              <div className='relative overflow-hidden'>
                <img src={LAMC} className=' my-auto object-contain lg:hidden' />
                <img src={LAWC} className=' my-auto object-contain hidden lg:block' />
                
              </div>
              <div className='relative overflow-hidden'>
                <img src={MSMMC} className=' my-auto object-contain lg:hidden' />
                <img src={MSMWC} className=' my-auto object-contain hidden lg:block' />
                
              </div>

          </div>
        </div>
      </section>
      <section className='lg:px-[100px] py-[50px]'> 
          <div>
            <div className='mb-[25px]'>
              {
                english?
                <p className='text-3xl md:text-4xl font-Oswald font-medium text-10 text-center '>Matara Yugayak</p>:
                <p className='text-3xl md:text-4xl font-Oswald font-medium text-10 text-center '>මාතර යුගයක්</p>
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
                  src={MTp1}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp3}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp4}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp5}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp6}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp7}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp8}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp9}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp10}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp11}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp12}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp13}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp14}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp15}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp16}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp17}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp18}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={MTp20}
                  alt="image.alt_description"
                />  
              </figure>
              
            </div>
          </div>
      </section>
    </div>
  )
}

export default BookWritting








