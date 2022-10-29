import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Components/Hero'

const HomeScreen = () => {
  const {pathName} = useLocation()
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default HomeScreen
