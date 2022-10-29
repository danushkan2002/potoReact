import React  from 'react'
import { useLanguage, useLanguageUpdate } from '../LanguageContext'
import { Link } from 'react-router-dom'
import malindulk from '../Assets/malindu.lk.png'

// const [english, setEnglish] = useState(true)

//   const languageHandler = () => {
//     setEnglish(!english)
//   }

const Navbar = () => {
  const english = useLanguage()
  const toggleLanguage = useLanguageUpdate()

  return (
    <div className='fixed top-0 z-50 h-[100px] lg:h-[125px] w-full backdrop-blur-lg flex items-center text-white px-[10px] lg:px-[100px]'>
      <Link to='/' className='font-Oswald focus:animate-click my-auto text-3xl w-[300px] -ml-[6px] font-semibold text-white'>
        <p>malindu.lk</p>
      </Link>
      <ul className='flex gap-[15px] lg:gap-[50px] items-center ml-auto'>
          <li className='w-[50px] lg:w-[60px] h-[20px] lg:h-[25px] rounded-full border-10 border-[2.5px] relative text-black'>
            <button onClick={toggleLanguage} className={
              english ?
              'w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] rounded-full bg-10 -mt-[7px] -ml-[5px]  absolute duration-150 flex items-center justify-center focus:animate-click' :
              'w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] rounded-full bg-10 -mt-[7px] ml-[20px] lg:ml-[30px] absolute duration-150 flex items-center justify-center'
            }>
              {
                english ?
                <p className='font-bold  lg:text-xl mb-[1px]'>A</p> :
                <p className='font-bold  lg:text-xl mb-[1px]'>අ</p> 
              }
            </button>
          </li>
      </ul>
    </div>
  )
}

export default Navbar
