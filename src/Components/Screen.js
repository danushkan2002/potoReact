import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Screen = ({children}) => {
    const {pathName} = useLocation()
    useEffect(() => {
        window.scroll(0,0);
      }, [pathName]);
    
  return (
    <div>
      {children}
    </div>
  )
}

export default Screen
