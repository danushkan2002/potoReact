import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { useInView } from 'react-intersection-observer';

import SWBG from '../Assets/Social/SWBG.png'
import SW1 from '../Assets/Social/SW (1).jpeg'
import SW2 from '../Assets/Social/SW (2).jpeg'
import SW3 from '../Assets/Social/SW (3).jpeg'
import SW4 from '../Assets/Social/SW (4).jpeg'
import SW5 from '../Assets/Social/SW (5).jpeg'
import SW6 from '../Assets/Social/SW (6).jpeg'
import SW7 from '../Assets/Social/SW (7).jpeg'
import SW8 from '../Assets/Social/SW (8).jpeg'
import SW9 from '../Assets/Social/SW (9).jpeg'
import SW10 from '../Assets/Social/SW (10).jpeg'
import SW11 from '../Assets/Social/SW (11).jpeg'
import SW12 from '../Assets/Social/SW (12).jpeg'
import SW13 from '../Assets/Social/SW (13).jpeg'
import SW14 from '../Assets/Social/SW (14).jpeg'
import SW15 from '../Assets/Social/SW (15).png'
import SW24 from '../Assets/Social/SW (15).jpeg'
import SW16 from '../Assets/Social/SW (16).png'
import SW17 from '../Assets/Social/SW (17).png'
import SW25 from '../Assets/Social/SW (18).jpeg'
import SW18 from '../Assets/Social/SW (18).png'
import SW26 from '../Assets/Social/SW (19).jpeg'
import SW19 from '../Assets/Social/SW (19).png'
import SW20 from '../Assets/Social/SW (20).jpeg'
import SW21 from '../Assets/Social/SW (21).jpeg'
import SW22 from '../Assets/Social/SW (22).jpeg'
import SW23 from '../Assets/Social/SW (23).jpeg'

const SocialScreen = () => {
  const english = useLanguage()
  const {pathName} = useLocation()

  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  const { ref:card1Ref, inView:isCard1Visible } = useInView({triggerOnce:true});
  const { ref:card2Ref, inView:isCard2Visible } = useInView({triggerOnce:true});
  const { ref:card3Ref, inView:isCard3Visible } = useInView({triggerOnce:true});
  const { ref:card4Ref, inView:isCard4Visible } = useInView({triggerOnce:true});
  const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});

    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    

  return (
    <div className=''>
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={SWBG} alt='' className={
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
            }><span className='text-10 pr-[5px] md:pr-[20px]' >Social</span>work</p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-center md:items-end md:pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >සමාජ </span>වැඩ</p>
          }
        </div>
      </section>
      <section>
          <div className='lg:px-[100px] py-[50px] md:py-[50px] lg:py-[100px]'>
              <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
                <div ref={card1Ref}  className={
                  isCard1Visible?
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0 duration-1000':
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[100px]'
                } >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>Also, as the chairman of the ‘MANUSATH RAWAYA’ foundation, he id building ladders for many achievements in the midst of various reader challenges.  
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`tfukau —ukqi;a rdjh˜ mokfï iNdm;sjrhd f,i úúO mdGl wNsfhda. uOHfha wOHdmk lghq;=j, ksr;jk fndfyda ore-oeßhkag iyk" YsIH;aj imhñka Tjqkaf.a wkd.; ch.%yKhkag b‚ux ;kñka isáhs' `}
                    </p>
                  }
                  <button className='px-[15px] py-[10px] border-[1.5px] border-white rounded-[5px] mt-[25px] mx-auto lg:mx-0'>
                    {
                      english ?
                      <p className='text-white text-sm lg:text-base font-Montserrat'>Show More</p>:
                      <p className='text-white text-sm lg:text-base font-Montserrat'>Show More</p>
                    }
                  </button>
                </div>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className={
                    isCard1Visible ?
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] duration-1000':
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] ml-[100px] opacity-0'
                  } src={SW16}/>
                </div>
              </div>
          </div>
      </section>
      <section className='bg-30'>
          <div className='lg:px-[100px] pb-[50px] md:py-[50px] lg:py-[100px]'>
              <div ref={card2Ref} className='flex flex-col lg:flex-row items-center justify-center lg:justify-around'>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className={
                    isCard2Visible?
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] duration-1000':
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] -ml-[100px] opacity-0'
                  } src={SW17}/>
                </div>
                <div className={
                  isCard2Visible?
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0 duration-1000':
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[100px]'
                } >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>He is still working as a people’s representative representing the Matara Municipal Council, and he has devoted a lot of time to being unique in his city, standing out from equality.    
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`ck;d fiajlfhla f,i ud;r uy k.r iNdj ksfhdackh lrkq ,nk ck;d ksfhdað;fhl= f,i fï jkúg;a lghq;= lrk Tyq iudkd;au;djh jkf;la m%dfhda.slj fmkS isáñka ;u k.rhg woaù;Shsh fjkqfjka jeä ld,hla fjkalr ;sfí'`}
                    </p>
                  }
                </div>
              </div>
          </div>
      </section>
      <section>
          <div className='lg:px-[100px] pb-[50px] md:py-[50px] lg:py-[100px]'>
              <div ref={card3Ref} className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
                <div className={
                  isCard3Visible?
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0 duration-1000':
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[100px]'
                } >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>He has intervened to provide these facilities for more than 150 families who do not have water and electricity facilities, and the free festival items he provides for the festive occasions of many city dwellers who are suffering from Economic difficulties have been a great help to those people.    
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`c," úÿ,s myiqlï fkdue;s mjq,a 150g jeã m%udKhla fjkqfjka tu myiqlï ie,iSug Tyq ueÈy;a ù isáhs' tfukau wd¾Ól ÿIalr;dj,ska fmf,k fndfyda k.rjdiSkaf.a W;aij wjia:djka i|yd Tyq úiska fkdñf,a ,ndfok W;aij NdKav tu ck;djg uy;a jQ rel=,la ù ;sfí'`}    
                    </p>
                  }
                </div>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className={
                    isCard3Visible?
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] duration-1000':
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] opacity-0 ml-100px'
                  } src={SW18}/>
                </div>
              </div>
          </div>
      </section>
      <section className='bg-30'>
          <div className='lg:px-[100px] pb-[50px] md:py-[50px] lg:py-[100px]'>
              <div ref={card4Ref} className='flex flex-col lg:flex-row items-center justify-center lg:justify-around'>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className={
                    isCard4Visible?
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] duration-1000':
                    'md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] opacity-0 -ml-[100px]'
                  } src={SW19}/>
                </div>
                <div className={
                  isCard4Visible?
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0 duration-1000':
                  'w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[100px] '
                } >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>Hr id still working on the practicality beyond the speech to fulfil many other people’s concessions.      
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`;j;a fndfyda ck;d iyk /ila m%dfhda.slj bgq lr,Sug ´kEjg jvd tyd.sh m%dfhda.sl;ajh u;af;a Tyq fï jkúg;a lghq;= lrñka isáhs'`}       
                    </p>
                  }
                </div>
              </div>
          </div>
      </section>
      <section className='lg:px-[100px] py-[50px] bg-60'> 
          <div>
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px]"
            }> 
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW1}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW4}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW6}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW8}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW10}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW11}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW24}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW25}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW17}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW18}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW19}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW20}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW21}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW22}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={SW23}
                  alt="image.alt_description"
                />  
              </figure>
            </div>
          </div>
      </section>
    </div>
  )
}

export default SocialScreen

