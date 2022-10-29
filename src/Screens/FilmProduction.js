import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useLanguage } from '../LanguageContext'
import { useInView } from 'react-intersection-observer';

import F1 from '../Assets/Film/F (1).jpeg'
import F2 from '../Assets/Film/F (2).jpeg'
import F3 from '../Assets/Film/F (3).jpeg'
import F4 from '../Assets/Film/F (4).jpeg'
import F10 from '../Assets/Film/F (10).jpeg'
import F11 from '../Assets/Film/F (11).jpeg'
import F12 from '../Assets/Film/F (12).jpeg'
import F13 from '../Assets/Film/F (13).jpeg'
import F14 from '../Assets/Film/F (14).jpeg'
import F15 from '../Assets/Film/F (15).jpeg'
import FilmBG from '../Assets/Film/FilmBG.png'

const FilmProduction = () => {
  const english = useLanguage()
  const {pathName} = useLocation()
  const [ left, setLeft ] = useState(false)
  const { ref:banerRef, inView:isBanerVisible } = useInView({triggerOnce:true});
  const { ref:card1Ref, inView:isCard1Visible } = useInView({triggerOnce:true});
  const { ref:card2Ref, inView:isCard2Visible } = useInView({triggerOnce:true});
  const { ref:photosRef, inView:isPhotosVisible } = useInView({triggerOnce:true});

    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
    const leftHandler = () => {
      setLeft(!left)
    }

  return (
    <div className=''>
      <section ref={banerRef}>
        <div className='relative h-[300px] lg:h-[400px] mt-[125px]'>
          <img src={FilmBG} alt='' className={
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
            }>Script writing <span className='text-10 px-[5px] md:px-[10px]'>&</span> Film production</p>:
            <p  className={
              isBanerVisible?
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold duration-1000':
              'absolute w-full h-full flex justify-center items-end pb-[50px] font-Oswald text-white text-4xl md:text-5xl font-bold -mt-[200px]'
            }>තිර රචනය  <span className='text-10 px-[5px] md:px-[10px]'> සහ</span> චිත්‍රපට නිෂ්පාදනය</p>
          }
        </div>
      </section>
      <section className='bg-30 py-[100px] px-[25px] md:px-[100px] '>
        <div className='flex flex-col md:flex-row md:h-[300px] bg-60 justify-center items-center px-[25px] md:px-[50px] gap-[25px] md:gap-0 py-[25px] md:py-0'>
          <div className='md:w-1/2 justify-end'>
            <img className='w-[300px] md:w-[200px] md:h-[200px] object-cover rounded-[5px]' src={F1} />
          </div>
          <div className='md:w-1/2 text-white text-sm font-Montserrat'>
            {
              english ?
              <p className='text-2xl'>HANDCUFF</p>:
              <p className='text-2xl'>හෑන්ඩ් කෆ්</p>
            } 
            {
              english?
              <p className='opacity-75 mt-[25px]'>The movie ‘Handcuff’ written and directed by Malindu Gajadeera in which he plays the lead role can also be watched through the link bellow.(YouTube). </p>:
              <p className='opacity-75 mt-[25px]'>මලිදු ගජධීර වීසින් තිර රචනය කර - අධ්‍යක්ෂණය සිදුකර එහි ඔහු ප්‍රධාන චරිතය රඟදක්වමින් නිර්මාණය කරන ලද ‘හෑන්ඩ් කෆ්’ චිත්‍රපටය ද පහත සඳහන් සබැඳිය හරහා (යූටියුබ්) නැරඹීමට හැකිය.</p>
            }
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row md:h-[300px] bg-60 justify-center items-center px-[25px] md:px-[50px] gap-[25px] md:gap-[50px] py-[25px] md:py-0 mt-[50px]'>
          
        <div className='md:w-1/2 text-white text-sm font-Montserrat'>
          {
            english ?
            <p className='text-2xl'>AHARANEEYA PRARTHANA</p>:
            <p className='text-2xl'>ආදරණීය ප්‍රාර්ථනා</p>
          }
          {
            english?
            <p className='opacity-75 mt-[25px]'>The movie ‘Adharaneeya Prarthana’ scripted by Malindu Gajadeera has already started its release in Foreign Countries.</p>:
            <p className='opacity-75 mt-[25px]'>මලිදු ගජධීර විසින් තිර රචනය කළ ‘ආදරණීය ප්‍රාර්ථනා’ චිත්‍රපටය මේ වන විට වීදේශ රටවල ප්‍රදර්ශනය සදහා ආරම්භකර ඇත. </p>
          }
        </div>
          <div className='md:w-1/2 flex justify-end'>
            <img className='w-[300px] md:w-[200px] md:h-[200px] object-cover rounded-[5px]' src={F12} />
          </div>
        </div>
      </section>
      <section className='lg:px-[100px] py-[50px]'> 
          <div>           
            
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[300px] md:px-[100px] lg:px-[200px]"
            }> 
              
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={F13}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={F14}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={F15}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={F3}
                  alt="image.alt_description"
                />  
              </figure>
            </div>
          </div>
      </section>
    </div>
  )
}


export default FilmProduction








// <section ref={banerRef}>
//         <div className='h-[600px] flex'>
//           <div className='w-[50vw] flex h-full bg-10 items-center justify-center md:justify-start md:pl-[25px] lg:pl-[100px] '>
//             {
//               english ?
//               <p className={
//                 isBanerVisible?
//                 'font-Oswald text-3xl md:text-6xl rotate-[270deg] md:rotate-0 font-bold text-60 duration-1000 ':
//                 'font-Oswald text-3xl md:text-6xl rotate-[270deg] md:rotate-0 font-bold text-60 -mt-[200px]'
//               } >Script writing & film production</p>:
//               <p className={
//                 isBanerVisible?
//                 'font-Oswald text-3xl md:text-6xl rotate-[270deg] md:rotate-0 font-bold text-60 duration-1000 ':
//                 'font-Oswald text-3xl md:text-6xl rotate-[270deg] md:rotate-0 font-bold text-60 -mt-[200px]'
//               } >තිර රචනය සහ චිත්‍රපට නිෂ්පාදනය</p>
//             }
//           </div>
//           <div className='w-[50vw] flex justify-evenly relative'>
//             <div className={
//               isBanerVisible ?
//               'duration-[1000ms] h-full w-[150px] lg:w-[200px] grid grid-cols-1 overflow-hidden gap-y-[25px] ' :
//               'h-full w-[150px] lg:w-[200px] grid grid-cols-1 overflow-hidden gap-y-[200px] pt-[1000px]'
//             } >
//               <div className='bg-black w-full h-[250px] lg:h-[300px]'>
//                 <img ref={card1Ref} src={F1} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
//               <div className='bg-black w-full h-[250px] lg:h-[300px]'>
//                 <img ref={card1Ref} src={F2} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
//               <div className='bg-black w-full h-[250px] lg:h-[300px]'>
//                 <img ref={card1Ref} src={F3} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
//             </div>
//             <div className={
//               isBanerVisible ?
//               'duration-[1000ms] hidden  h-full w-[150px] lg:w-[200px] md:grid grid-cols-1 overflow-hidden gap-y-[25px]' :
//               'h-full w-[150px] lg:w-[200px] hidden  md:grid grid-cols-1 overflow-hidden gap-y-[200px] pt-[1000px]'
//             } >
//               <div className='bg-black w-full h-[250px] lg:h-[300px] -mt-[150px]'>
//                 <img ref={card1Ref} src={F4} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
//               <div className='bg-black w-full h-[250px] lg:h-[300px]'>
//                 <img ref={card1Ref} src={F5} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
//               <div className='bg-black w-full h-[250px] lg:h-[300px]'>
//                 <img ref={card1Ref} src={F5} alt='' className='h-[250px] lg:h-[300px] object-cover' /> 
//               </div>
              
//             </div>
//             <div className='absolute w-full h-full bg-gradient-to-t from-black opacity-85 to-transparent'  >
            
//             </div>
//           </div>
//         </div>
//       </section>














// <section className='py-[100px] flex flex-col items-center'>
//             <div>
//               <div>
//                 <p  className='text-center font-Oswald text-3xl font-bold text-10'>PROJECTS</p>
//               </div>
//               <div ref={card2Ref} className={
//                 isCard2Visible?
//                 'flex flex-wrap justify-center mt-[50px] gap-[50px] duration-1000':
//                 'flex flex-wrap justify-center gap-[50px] mt-[200px]'
//               }>
//                 <div className='py-[25px] w-[300px] bg-30'>
//                   <div className='mx-auto w-fit '>
//                     <img src={handcuff} alt='' className='h-[150px] w-[250px] object-cover' />
//                   </div>
//                   <div>
//                     <p className='text-center mt-[10px] font-Montserrat px-[10px] text-white font-semibold'>Hand Cuff</p>
//                     <p className='text-center mt-[10px] font-Montserrat px-[10px] text-sm text-white font-light opacity-50' >As a Writer Director and he plays the lead role</p>
//                     <a href='https://www.youtube.com/watch?app=desktop&v=8sCBIy8VMQc&feature=share' className='text-center mt-[10px] font-Montserrat px-[10px] text-sm text-blue-900 font-medium flex justify-center' >Watch Trailor</a>
//                   </div>
//                 </div>
//                 <div className='py-[25px] w-[300px] bg-30'>
//                   <div className='mx-auto w-fit '>
//                     <img src={MJOL} alt='' className='h-[150px] w-[250px] object-cover object-top' />
//                   </div>
//                   <div>
//                     <p className='text-center mt-[10px] font-Montserrat px-[10px] text-white font-semibold'>Adharaneeya Prarthana</p>
//                     <p className='text-center mt-[10px] font-Montserrat px-[10px] text-sm text-white font-light opacity-50' >Scripted by Malindu Gajadeera has already started its release in Foreign Countries.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//       </section>
      





// <div className={
//   isCard2Visible?
//   'flex flex-col  hover:scale-110 h-300px w-[300px] duration-1000':
//   'flex flex-col  hover:scale-110 h-300px w-[300px] mt-[400px]'
// }>
//   <img src={handcuff} alt='' className='w-[300px] object-cover'/>
//   {
//     english ?
//     <p className='font-Montserrat text-lg text-10 mt-[15px] font-medium '>Love Attack</p>:
//     <p className='font-Montserrat text-lg text-10 mt-[15px] font-medium '>හෑන්ඩ් කෆ්</p>
//   }
//   {
//     english?
//     <p className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light'>writter and directer and he plays the lead role can also be watched through in 
//     <a href='https://www.youtube.com/watch?app=desktop&v=8sCBIy8VMQc&feature=share' className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light text-blue-800'> (YouTube)
//     </a> </p>
//     :
//     <p className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light'>මලිදු ගජධීර වීසින් තිර රචනය කර - අධ්‍යක්ෂණය සිදුකර එහි ඔහු ප්‍රධාන චරිතය රඟදක්වමින් නිර්මාණය කරන ලද ‘හෑන්ඩ් කෆ්’ චිත්‍රපටය ද පහත සඳහන් සබැඳිය හරහා
//     <a href='https://www.youtube.com/watch?app=desktop&v=8sCBIy8VMQc&feature=share' className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light text-blue-800'>  (යූටියුබ්) 
//     </a> නැරඹීමට හැකිය.</p>
      
//   }
  
// </div>
// <div className={
//   isCard2Visible?
//   'flex flex-col  w-[300px] hover:h-300pxscale-110  duration-1000':
//   'flex flex-col  w-[300px] hover:h-300pxscale-110  mt-[400px]'
// }>
//   <img src={MJOL} alt='' className='w-[300px] object-cover'/>
//   {
//     english ?
//     <p className='font-Montserrat mt-[15px] text-lg text-10 font-medium '>Aharaneeya Prarthana</p>:
//     <p className='font-Montserrat mt-[15px] text-lg text-10 font-medium '>ආදරණීය ප්‍රාර්ථනා</p>
//   }
//   <div>
//   {
//     english?
//     <p className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light'>The movie ‘Adharaneeya Prarthana’ scripted by Malindu Gajadeera has already started its release in Foreign Countries.  
//   </p>:
//   <p className='font-Montserrat text-gray-300 mt-[10px] text-sm font-light'>මලිදු ගජධීර විසින් තිර රචනය කළ ‘ආදරණීය ප්‍රාර්ථනා’ චිත්‍රපටය මේ වන විට වීදේශ රටවල ප්‍රදර්ශනය සදහා ආරම්භකර ඇත. </p>
//   }
//   </div>
// </div>