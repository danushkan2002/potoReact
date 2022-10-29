import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext'

import A1 from '../Assets/About/A (1).jpeg'
import A2 from '../Assets/About/A (2).jpeg'
import A3 from '../Assets/About/A (3).jpeg'
import A4 from '../Assets/About/A (4).jpeg'

import CP1 from '../Assets/CP/CP (1).jpeg'
import CP2 from '../Assets/CP/CP (2).jpeg'
import CP3 from '../Assets/CP/CP (3).jpeg'
import CP4 from '../Assets/CP/CP (4).jpeg'
import CP5 from '../Assets/CP/CP (5).jpeg'
import CP6 from '../Assets/CP/CP (6).jpeg'
import CP7 from '../Assets/CP/CP (7).jpeg'

import B7 from '../Assets/Books/B (7).jpeg'

import F1 from '../Assets/Film/F (1).jpeg'
import F2 from '../Assets/Film/F (2).jpeg'
import F3 from '../Assets/Film/F (3).jpeg'
import F10 from '../Assets/Film/F (10).jpeg'
import F11 from '../Assets/Film/F (11).jpeg'

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
import SW16 from '../Assets/Social/SW (16).png'
import SW17 from '../Assets/Social/SW (17).png'
import SW18 from '../Assets/Social/SW (18).png'
import SW19 from '../Assets/Social/SW (19).png'

import { Link } from 'react-router-dom'


import ABG from '../Assets/Social/ABG.png'


import M1 from '../Assets/Motivation/M (1).jpeg'
import M2 from '../Assets/Motivation/M (2).jpeg'
import M3 from '../Assets/Motivation/M (3).jpeg'
import M4 from '../Assets/Motivation/M (4).jpeg'
import M5 from '../Assets/Motivation/M (5).jpeg'
import M6 from '../Assets/Motivation/M (6).jpeg'
import M7 from '../Assets/Motivation/M (7).jpeg'


const AboutScreen = () => {
  const english = useLanguage()

  const {pathName} = useLocation()
  const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});
  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  // const { ref:aboutPRef, inView:isAboutPVisible } = useInView({triggerOnce:true});
  // const { ref:photos1Ref, inView:isPhotos1Visible } = useInView({triggerOnce:true});
  
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div >
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={ABG} alt='' className={
            isBanerVisible?
            'absolute w-full h-full object-cover object-left duration-1000':
            'absolute w-full h-full object-cover object-left opacity-0'
          } />
          <div className='w-full h-full absolute ' ></div>
          {
            english ?
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center md:justify-end items-end md:items-center pb-[50px] md:pb-0 font-Oswald text-white text-2xl sm:text-3xl md:text-5xl font-bold lg:px-[100px] duration-1000':
              'absolute w-full h-full flex justify-center md:justify-end items-end md:items-center pb-[50px] md:pb-0 font-Oswald text-white text-2xl sm:text-3xl md:text-5xl font-bold lg:px-[100px] -mt-[200px]'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >Who is malindu gajadeera ?</span></p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-2xl sm:text-3xl md:text-5xl font-bold lg:px-[100px] duration-1000':
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-2xl sm:text-3xl md:text-5xl font-bold lg:px-[100px] -mt-[200px]'
            }><span className='text-10 pr-[5px] md:pr-[20px]' >කවුද මලිඳු ගජධීර?</span></p>
          }
        </div>
      </section>
      <section>
          <div className='lg:px-[100px] py-[50px] md:py-[50px] lg:py-[100px]'>
              <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
                <div className='w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0' >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>Born on 25.08.1984 Malindu Gajadeera in Matara city.He did his primary education at Olcat Vidyalaya,The school in Weheragampita
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`1984'08'25 Èk Wm; ,o u,sÿ .cër - ud;r k.rfha mÈxÑj isáhs' ud;r fjfyr.ïmsg .ïudkfha wOHdmkh yodrd we;' `}
                    </p>
                  }
                  <a target="_blank" href='https://www.facebook.com/malindu.gajadeera' className='px-[15px] py-[10px] border-[1.5px] border-white rounded-[5px] mt-[25px] mx-auto lg:mx-0 opacity-50 hover:opacity-75'>
                    {
                      english ?
                      <p className='text-white text-sm lg:text-base font-Montserrat'>Show More</p>:
                      <p className='text-white text-sm lg:text-base font-Montserrat'>තව පෙන්වන්න</p>
                    }
                  </a>
                </div>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] object-cover' src={SW6}/>
                </div>
              </div>
          </div>
      </section>
      <section className='bg-30'>
          <div className='lg:px-[100px] pb-[50px] md:py-[50px] lg:py-[100px]'>
              <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-around'>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] object-cover' src={SW8}/>
                </div>
                <div className='w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0' >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>He did secondary education Biology & Agro – Technical subjects, he pursued a Diploma in Computer Graphics. 
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`ud;r Ydka; f;dauia l=ur úoHd,fhka ;u oaù;shsl wOHdmkh yodrd we;' Wiia fm< Ôj úoHdj iy lDIs ;dlaIKh úIhkaf.ka yeoErE Tyq wk;=rej mß.Kl .%e*sla Ys,amh ms<sn|j ämaf,daudj yodrd we;'`}
                    </p>
                  }
                </div>
              </div>
          </div>
      </section>
      <section>
          <div className='lg:px-[100px] pb-[50px] md:py-[50px] lg:py-[100px]'>
              <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around'>
                <div className='w-full px-[25px] md:px-[100px] lg:px-0 lg:w-[350px] flex flex-col items-start mt-[25px] lg:mt-0' >
                  {
                    english?
                    <p className='font-Montserrat text-white text-sm lg:text-base opacity-75 text-center lg:text-justify'>After finishing school ,he worked professionally as a cartoonist for several magazines.     
                    </p> :
                    <p className='font-FMAbhaya text-white text-2xl opacity-75 text-center lg:text-justify'>{`mdi,a iuh ksu ùu;a iu.u Tyq i.rd lsysmhl ldgqka Ñ;% Ys,amsfhl= f,i jD;a;Suh jYfhka fh§ we;'`}
                    </p>
                  }
                </div>
                <div className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] flex justify-center'>
                  <img className='md:w-[300px] lg:w-[350px] md:h-[300px] lg:h-[350px] object-cover' src={B7}/>
                </div>
              </div>
          </div>
      </section>
      <section className='bg-30 py-[100px]'>
            {
              english ?
              <p className='text-4xl font-Oswald font-bold text-center text-10'>PHOTOS</p>:
              <p className='text-4xl font-Oswald font-bold text-center text-10'>ඡායාරූප</p>
            }
            
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "gap-6 pt-2 columns-3xs px-[25px] md:px-[100px] lg:px-[200px] mt-[50px] duration-1000":
              "gap-6 pt-2 columns-3xs px-[25px] md:px-[100px] lg:px-[200px] mt-[200px]"
            }>
              
              <figure v-for="image in images" class="py-4 [break-inside:avoid] hover:scale-105 duration-100">
                <img
                  class="rounded-[5px]"
                  src={A1}
                  alt="image.alt_description"
                />  
              </figure>
              
              <figure v-for="image in images" class="py-4 [break-inside:avoid] hover:scale-105 duration-100">
                <img
                  class="rounded-[5px]"
                  src={A2}
                  alt="image.alt_description"
                />
              </figure>

              <figure v-for="image in images" class="py-4 [break-inside:avoid] hover:scale-105 duration-100">
                <img
                  class="rounded-[5px]"
                  src={A3}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="py-4 [break-inside:avoid] hover:scale-105 duration-100">
                <img
                  class="rounded-[5px]"
                  src={A4}
                  alt="image.alt_description"
                />  
              </figure>
              
            </div>
      </section>

    </div>
  )
}

export default AboutScreen








// <div className='flex justify-center lg:px-[8vw] flex-wrap gap-[1vw] mt-[50px]'>
//               <div ref={photos1Ref} className='w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw]'>
//                 <img src={wSpeech} alt='' className={
//                   isPhotos1Visible ?
//                   'w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] object-cover duration-[2000ms]':
//                   'w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] object-cover scale-50'
//                 } />
//               </div>
//               <div className='w-[40vw] md:w-[20vw] h-[80vw] md:h-[40vw]'>
//                 <img src={socialImg} alt='' className={
//                   isPhotos1Visible ?
//                   'w-[40vw] md:w-[20vw] h-[80vw] md:h-[40vw] object-cover object-left md:object-center duration-[1500ms]' :
//                   'w-[40vw] md:w-[20vw] h-[80vw] md:h-[40vw] object-cover mt-[400px]'
//                 }/>              
//               </div>
//               <div className='md:hidden w-[40vw] md:w-[20vw] h-[40vw] md:h-[20vw] -mt-[40vw]'>
//                 <img src={motivationImg} alt='' className={
//                   isPhotos1Visible ?
//                   'w-[40vw] md:w-[20vw] h-[40vw] md:h-[20vw] object-cover duration-1000 -ml-[21vw] md:ml-0' :
//                   'w-[40vw] md:w-[20vw] h-[40vw] md:h-[20vw] object-cover scale-75'
//                 } />
//               </div>
//               <div ref={photos1Ref} className='w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw]'>
//                 <img src={allImg} alt='' className={
//                   isPhotos1Visible ?
//                   'w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw] object-cover duration-1000':
//                   'w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw] object-cover scale-50'
//                 }/>              
//               </div>
//               <div className='hidden md:block w-[20vw] h-[20vw] md:-mt-[20vw]'>
//                 <img src={motivationImg} alt='' className={
//                   isPhotos1Visible ?
//                   'w-[20vw] h-[20vw] object-cover duration-1000':
//                   'w-[20vw] h-[20vw] object-cover scale-0'
//                 } />
//               </div>
//               <div  ref={photos1Ref} className=' w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw] md:ml-[21vw]  md:-mt-[20vw]'>
//               <img src={allImg2} alt='' className={
//                 isPhotos1Visible ?
//                 'w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw] object-cover object-top md:object-center duration-1000' :
//                 'w-[80vw] md:w-[40vw] h-[40vw] md:h-[20vw] object-cover object-top md:object-center scale-50'
//               }/>
//               </div>
//             </div>