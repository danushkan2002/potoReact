import React,{useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext'

import M1 from '../Assets/Matara Yugayak/MY (1).jpeg'
import M2 from '../Assets/Matara Yugayak/MY (2).jpeg'
import M3 from '../Assets/Matara Yugayak/MY (3).jpeg'
import M4 from '../Assets/Matara Yugayak/MY (4).jpeg'
import M5 from '../Assets/Matara Yugayak/MY (5).jpeg'
import M6 from '../Assets/Matara Yugayak/MY (6).jpeg'
import M7 from '../Assets/Matara Yugayak/MY (7).jpeg'
import M8 from '../Assets/Matara Yugayak/MY (8).jpeg'
import M9 from '../Assets/Matara Yugayak/MY (9).jpeg'
import M10 from '../Assets/Matara Yugayak/MY (10).jpeg'
import M11 from '../Assets/Matara Yugayak/MY (11).jpeg'
import M12 from '../Assets/Matara Yugayak/MY (12).jpeg'
import M13 from '../Assets/Matara Yugayak/MY (13).jpeg'
import M14 from '../Assets/Matara Yugayak/MY (14).jpeg'
import M15 from '../Assets/Matara Yugayak/MY (15).jpeg'
import M16 from '../Assets/Matara Yugayak/MY (16).jpeg'
import M17 from '../Assets/Matara Yugayak/MY (17).jpeg'
import M18 from '../Assets/Matara Yugayak/MY (18).jpeg'
import M19 from '../Assets/Matara Yugayak/MY (19).jpeg'
import M20 from '../Assets/Matara Yugayak/MY (20).jpeg'
import M21 from '../Assets/Matara Yugayak/MY (21).jpeg'
import M22 from '../Assets/Matara Yugayak/MY (22).jpeg'
import M23 from '../Assets/Matara Yugayak/MY (23).jpeg'
import M24 from '../Assets/Matara Yugayak/MY (24).jpeg'
import M25 from '../Assets/Matara Yugayak/MY (25).jpeg'
import M26 from '../Assets/Matara Yugayak/MY (26).jpeg'
import M27 from '../Assets/Matara Yugayak/MY (27).jpeg'
import M28 from '../Assets/Matara Yugayak/MY (28).jpeg'
import M29 from '../Assets/Matara Yugayak/MY (29).jpeg'
import M30 from '../Assets/Matara Yugayak/MY (30).jpeg'
import M31 from '../Assets/Matara Yugayak/MY (31).jpeg'
import M32 from '../Assets/Matara Yugayak/MY (32).jpeg'
import M33 from '../Assets/Matara Yugayak/MY (33).jpeg'
import M34 from '../Assets/Matara Yugayak/MY (34).jpeg'
import M35 from '../Assets/Matara Yugayak/MY (35).jpeg'
import M36 from '../Assets/Matara Yugayak/MY (36).jpeg'
import M37 from '../Assets/Matara Yugayak/MY (37).jpeg'
import M38 from '../Assets/Matara Yugayak/MY (38).jpeg'
import M39 from '../Assets/Matara Yugayak/MY (39).jpeg'
import M40 from '../Assets/Matara Yugayak/MY (40).jpeg'
import M41 from '../Assets/Matara Yugayak/MY (41).jpeg'
import M42 from '../Assets/Matara Yugayak/MY (42).jpeg'
import M43 from '../Assets/Matara Yugayak/MY (43).jpeg'
import M44 from '../Assets/Matara Yugayak/MY (44).jpeg'
import M45 from '../Assets/Matara Yugayak/MY (45).jpeg'
import M46 from '../Assets/Matara Yugayak/MY (46).jpeg'
import M47 from '../Assets/Matara Yugayak/MY (47).jpeg'
import M48 from '../Assets/Matara Yugayak/MY (48).jpeg'
import M49 from '../Assets/Matara Yugayak/MY (49).jpeg'
import M50 from '../Assets/Matara Yugayak/MY (50).jpeg'
import M51 from '../Assets/Matara Yugayak/MY (51).jpeg'
import M52 from '../Assets/Matara Yugayak/MY (52).jpeg'
import M53 from '../Assets/Matara Yugayak/MY (53).jpeg'
import M54 from '../Assets/Matara Yugayak/MY (54).jpeg'
import MBG from '../Assets/Matara Yugayak/MBG.png'


const MataraYugayak = () => {
  
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
          <img src={M53} alt='' className={
            isBanerVisible?
            'absolute w-full h-full object-cover duration-1000':
            'absolute w-full h-full object-cover opacity-0'
          } />
        </div>
      </section>
      <section className='lg:px-[100px] py-[50px] bg-30'> 
          <div>             
            <div ref={photosRef} class={
              isPhotosVisible?
              "md:gap-6 columns-[250px] xl:columns-[200px] md:px-[100px] lg:px-[200px] duration-1000":
              "md:gap-6 pt-[50px] columns-[250px] xl:columns-[200px] md:px-[100px] lg:px-[200px]"
            }> 
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M1}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M2}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M3}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M4}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M5}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M6}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M7}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M8}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M9}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M10}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M11}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M12}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M13}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M14}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M15}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M16}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M17}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M18}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M19}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M20}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M21}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M22}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M23}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M24}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M25}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M26}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M27}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M28}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M29}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M30}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M31}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M32}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M33}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M36}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M37}
                  alt="image.alt_description"
                />
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M38}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M39}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M40}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M41}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M42}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M43}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M44}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M45}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M46}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M47}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M48}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M49}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M50}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M51}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M52}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M53}
                  alt="image.alt_description"
                />  
              </figure>
              <figure v-for="image in images" class="my-[5px] md:my-[15px] [break-inside:avoid] duration-100 overflow-hidden">
                <img
                  class=" hover:scale-105 duration-100"
                  src={M54}
                  alt="image.alt_description"
                />  
              </figure>
            </div>
          </div>
      </section>
    </div>
  )
}

export default MataraYugayak
