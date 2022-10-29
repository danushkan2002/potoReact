import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {GrUserWorker} from 'react-icons/gr'
import {BsDisplay} from 'react-icons/bs'
import {TbMicrophone2, TbSocial} from 'react-icons/tb'
import {FaBookReader, FaCity} from 'react-icons/fa'
import {FcFilmReel} from 'react-icons/fc'
import {TbLetterM} from 'react-icons/tb'

import heroBG from '../Assets/heroBG.png'
import matara from '../Assets/matara.jpeg'

import programe from '../Assets/programe.jpg'
import loveattack from '../Assets/loveattack.jpeg'
import mama from '../Assets/mama.jpeg'
import bHero from '../Assets/bHero.png'
import { useLanguage } from '../LanguageContext'
import {HiArrowLeft} from 'react-icons/hi'
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';

const Hero = () => {
  const english = useLanguage()
  const { ref:heroRef, inView:isHeroVisible } = useInView({triggerOnce:true});
  const { ref:heroImgRef, inView:isHeroImgVisible } = useInView({triggerOnce:true});
  const { ref:categoryRef, inView:isCategoryVisible } = useInView({triggerOnce:true});
  const { ref:categoryRoxRef, inView:isCategoryRBoxVisible } = useInView({triggerOnce:true});
  const { ref:categoryImgRef, inView:isCategoryImgVisible } = useInView({triggerOnce:true});
  const { ref:cardRef, inView:isCardVisible } = useInView({triggerOnce:true});
  const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});


  const [category , setCategory] = useState(false)
  const [categoryLink , setCategoryLink] = useState('socialWork')
  const [socialWorks , setSocialWorks] = useState(true)
  const [filmProduction , setFilmProduction] = useState(false)
  const [cityPolitics , setCityPolitics] = useState(false)
  const [bookWritting , setBookWritting] = useState(false)
  const [motivationSpeaker , setMotivationSpeaker] = useState(false)
  const [graphicDesigner , setGraphicDesigner] = useState(false) 

  const categoryHandler = () => {
    setCategory(!category)
  }

  const socialWorksHandler = () => {
    if (socialWorks) {
      setCategoryLink('socialWork')
      setSocialWorks(true)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    } else {
      setCategoryLink('socialWork')
      setSocialWorks(true)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    }
  }

  const filmProductionHandler = () => {
    if (filmProduction) {
      setCategoryLink('filmProduction')
      setSocialWorks(false)
      setFilmProduction(true)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    } else {
      setCategoryLink('filmProduction')
      setSocialWorks(false)
      setFilmProduction(true)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    }
  }

  const cityPoliticsHandler = () => {
    if (cityPolitics) {
      setCategoryLink('cityPolitics')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(true)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    } else {
      setCategoryLink('cityPolitics')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(true)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    }
  }

  const bookWrittingHandler = () => {
    if (bookWritting) {
      setCategoryLink('bookWritting&Art')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(true)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    } else {
      setCategoryLink('bookWritting&Art')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(true)
      setMotivationSpeaker(false)
      setGraphicDesigner(false)
    }
  }

  const motivationSpeakerHandler = () => {
    if (motivationSpeaker) {
      setCategoryLink('motivationSpeaker')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(true)
      setGraphicDesigner(false)
    } else {
      setCategoryLink('motivationSpeaker')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(true)
      setGraphicDesigner(false)
    }
  }

  const graphicDesignerHandler = () => {
    if (graphicDesigner) {
      setCategoryLink('graphicDesign')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(true)
    } else {
      setCategoryLink('graphicDesign')
      setSocialWorks(false)
      setFilmProduction(false)
      setCityPolitics(false)
      setBookWritting(false)
      setMotivationSpeaker(false)
      setGraphicDesigner(true)
    }
  }

  const {pathName} = useLocation()
    
  useEffect(() => {
    window.scroll(0,0);
  }, [pathName]);


  return (
    <div className=''>
      <section ref={heroRef} className='mt-[75px] md:mt-[100px] pt-[100px] md:pt-[50px] lg:px-[100px] bg-60'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center'>
            <p className={
              isHeroVisible?
              'font-Oswald text-5xl lg:text-6xl xl:text-7xl  md:text-right font-bold text-10 text-end duration-[2000ms] md:tracking-widest':
              'font-Oswald text-5xl lg:text-6xl xl:text-7xl  md:text-right font-bold text-white text-end tracking-widest md:tracking-[45px]'
            }>
              I AM DREAMER
            </p>
            <p className='font-Montserrat md:text-xl lg:text-2xl text-right mt-[10px] text-white duration-1000'>{
              english ?
              <p>MALINDU GAJADEERA</p> :
              <p className='font-Sinhala text-5xl text-right text-white '> {`u<sÿ .cër`}  </p>

            }</p>
            <Link to={'/about'} className={
              isHeroVisible?
              'rounded-[5px] font-semibold px-[25px] text-sm md:text-base md:px-[35px] py-[5px] md:py-[10px] mt-[25px] md:mt-[50px] border border-10 font-Montserrat text-10 hover:bg-10 hover:text-black duration-100':
              'rounded-[5px] font-semibold px-[25px] text-sm md:text-base md:px-[35px] py-[5px] md:py-[10px] mt-[25px] md:mt-[50px] hover:scale-105 bg-10 font-Montserrat duration-200'
            }>
              About
            </Link>
          </div>
          <div className={
            isHeroVisible?
            'px-[25px] md:px-0 duration-1000':
            'px-[25px] md:px-0 duration-1000 scale-0'
          }>
            <img alt='' src={heroBG} className='mt-[50px] w-[600px] object-cover'/>
          </div>
        </div>
      </section>
      
      <section  className=' bg-30 py-[50px] md:py-[100px]'>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:px-[100px] gap-y-[25px] md:gap-y-[50px] duration-1000'>
            <Link ref={categoryRef}   to={'/socialWork'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <TbSocial className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  Social Works
                </p>:
                <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                  සමාජ වැඩ
                </p>
                }
              </div>
            </Link>
            <Link to={'/bookWritting&Art'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <FaBookReader className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english ?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  Book writting & art
                </p>:
                <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                පොත් ලිවීම සහ කලාව
                </p>
                }
              </div>
            </Link>
            <Link to={'/cityPolitics'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <FaCity className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english ?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  City politics
                </p>:
                <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                  නගර දේශපාලනය
                </p>
                }
              </div>
            </Link>
            <Link to={'/motivationSpeaker'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <TbMicrophone2 className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english ?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                Motivation speaker
                </p>:
                <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                අභිප්රේරණ කථිකයා
                </p>
                }
              </div>
            </Link>
            <Link to={'/filmProduction'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <FcFilmReel className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  Script writing & film production
                  </p>:
                  <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                  තිර රචනය සහ චිත්‍රපට නිෂ්පාදනය
                  </p>
                }
              </div>
            </Link>
            <Link to={'/graphicDesign'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <BsDisplay className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english ?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  Graphic designer
                  </p>:
                  <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                  ග්‍රැෆික් නිර්මාණකරු
                  </p>
                }
              </div>
            </Link>
            <Link to={'/mataraYugayak'} className='bg-60 focus:animate-click shadow-lg hover:scale-105 duration-100 flex items-center w-[300px] md:w-[275px] xl:w-[300px] h-[100px] rounded-[5px] hover:bg-10'>
              <div className={
                isCategoryVisible?
                'w-2/5 flex items-center justify-center duration-[1000ms]':
                'w-2/5 flex items-center justify-center scale-0 '
              }>
                <TbLetterM className='text-4xl text-white opacity-50' />
              </div>
              <div className='w-[1px] my-[10px] h-[80px] bg-white opacity-10'>
                
              </div>
              <div className={
                isCategoryVisible?
                'w-3/5 px-[15px] duration-[1000ms]':
                'w-3/5 px-[15px] scale-0'
              }>
                {
                  english ?
                  <p className='text-sm md:text-base text-white font-Montserrat font-medium '>
                  Matara Yugayak
                  </p>:
                  <p className='text-sm md:text-base font-semibold tracking-wider text-white font-Montserrat '>
                  මාතර යුගයක්
                  </p>
                }
              </div>
            </Link>
        </div>  
      </section>     
      <section className='bg-60 py-[100px]'>
        <div  className='flex'>
          {
            english ?
            <p className='font-Oswald text-3xl text-white mx-auto font-semibold'>NEW <span className='text-10' >PROJECTS</span></p>:
            <p className='font-Oswald text-3xl text-white mx-auto font-semibold'>නව  <span className='text-10' >ව්යාපෘති</span></p>
          }
        </div>
            
        
        <div ref={photosRef}  class={
          isPhotosVisible?
          "gap-6 columns-3xs px-[25px] md:px-[100px] lg:px-[200px] flex flex-wrap justify-center items-center pt-[50px] duration-[1000ms]":
          "gap-6 columns-3xs px-[25px] md:px-[100px] lg:px-[200px] flex flex-wrap justify-center items-center pt-[400px]"
        }>
          
          <Link to={'/bookWritting&Art'} className='px-[25px] py-[25px] bg-30 duration-100 w-[300px] hover:scale-105 flex items-center justify-center'>
            <img
              class="rounded-[5px] w-[100px] h-[150px]  object-cover"
              src={loveattack}
              alt="image.alt_description"
            />
            <div className='w-[5px] mx-auto h-[50px] text-white opacity-25 flex'></div>
            <div className='flex flex-col justify-center pl-[5px] pr-[25px]'>
            <p className='font-Montserrat text-white font-medium'>Love Attack</p>
            <p className='text-white font-Montserrat text-sm opacity-50 mt-[5px]'>Book</p>
            </div>
          </Link>
          <Link to={'/bookWritting&Art'} className='px-[25px] py-[25px] bg-30 duration-100 w-[300px] hover:scale-105 flex items-center justify-center'>
                  <img
                    class="rounded-[5px] w-[100px] h-[150px]  object-cover"
                    src={mama}
                    alt="image.alt_description"
                  />
                  <div className='w-[5px] mx-auto h-[50px] text-white opacity-25 flex'></div>
                  <div className='flex flex-col justify-center pl-[5px] pr-[25px]'>
                  <p className='font-Montserrat text-white font-medium'>Mama Soyana Mama</p>
                  <p className='text-white font-Montserrat text-sm opacity-50 mt-[5px]'>Book</p>
                  </div>
          </Link>
          <Link to={'/motivationSpeaker'} className='px-[25px] py-[25px] bg-30 duration-100 w-[300px] hover:scale-105 flex items-center justify-center'>
                  <img
                    class="rounded-[5px] w-[100px] h-[150px]  object-cover"
                    src={matara}
                    alt="image.alt_description"
                  />
                  <div className='w-[5px] mx-auto h-[50px] text-white opacity-25 flex'></div>
                  <div className='flex flex-col justify-center pl-[5px] pr-[25px]'>
                  <p className='font-Montserrat text-white font-medium'>Matara Yugayak</p>
                  <p className='text-white font-Montserrat text-sm opacity-50 mt-[5px]'>Programme</p>
                  </div>
          </Link>
          <Link to={'/motivationSpeaker'} className='px-[25px] py-[25px] bg-30 duration-100 w-[300px] hover:scale-105 flex items-center justify-center'>
                  <img
                    class="rounded-[5px] w-[100px] h-[150px]  object-cover"
                    src={programe}
                    alt="image.alt_description"
                  />
                  <div className='w-[5px] mx-auto h-[50px] text-white opacity-25 flex'></div>
                  <div className='flex flex-col justify-center pl-[5px] pr-[25px]'>
                  <p className='font-Montserrat text-white font-medium'>Jeevana Swara</p>
                  <p className='text-white font-Montserrat text-sm opacity-50 mt-[5px]'>Motivation Programme</p>
                  </div>
          </Link>
        </div>
      </section>
    </div>
  )
}


export default Hero



// <section className='my-[75px] md:my-[100px] pt-[100px] md:pt-[50px] '>
//         <div ref={heroImgRef} className='flex h-[500px] flex-col-reverse md:flex-row justify-center items-center gap-[25px] lg:gap-[50px] xl:gap-[100px]'>
//           <div className={
//             isHeroImgVisible ?
//             'px-[25px] md:px-0 duration-1000 delay-[2000ms]' :
//             'px-[25px] md:px-0 mt-[200px] scale-0'
//           }>
//             <img alt='' src={heroBG} className='mt-[50px] md:mt-0'/>
//           </div>
//           <div className={
//             isHeroImgVisible?
//             'mt-[50px] md:mt-0 flex flex-col md:items-end items-center duration-1000 delay-[2000ms]':
//             'mt-[50px] md:mt-0 flex flex-col items-center'
//           }>
//             <p className={
//               isHeroImgVisible?
//               'font-Oswald text-5xl lg:text-6xl xl:text-7xl text-center md:text-right font-bold text-10 delay-[2000ms] duration-1000 ':
//               'font-Oswald text-5xl opacity-50  lg:text-6xl xl:text-7xl text-center md:text-right font-bold text-white '
//             }>
//               I AM DREAMER
//             </p>
//             <p className='font-Montserrat md:text-xl lg:text-2xl text-right mt-[10px] text-white duration-1000'>{
//               english ?
//               <p>MALINDU GAJADEERA</p> :
//               <p className='font-Sinhala text-5xl text-right text-white '> {`u<sÿ .cër`}  </p>

//             }</p>
//             <Link to={'/about'} className={
//               isHeroImgVisible?
//               'md:ml-auto rounded-[5px] font-semibold px-[25px] text-sm md:text-base md:px-[35px] py-[5px] md:py-[10px] mt-[50px] hover:scale-105 bg-10 font-Montserrat duration-1000 delay-1000':
//               'rounded-[5px] font-semibold px-[25px] text-sm md:text-base md:px-[35px] py-[5px] md:py-[10px] mt-[50px] hover:scale-105 bg-10 font-Montserrat duration-200'
//             }>
//               About
//             </Link>
//           </div>
//         </div>
//       </section>