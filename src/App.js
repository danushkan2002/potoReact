import React from 'react'
import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutScreen from './Screens/AboutScreen'
import HomeScreen from './Screens/HomeScreen'
import LanguageProvider from './LanguageContext'
import SocialScreen from './Screens/SocialScreen'
import BookWritting from './Screens/BookWritting'
import FilmProduction from './Screens/FilmProduction'
import GraphicDesigner from './Screens/GraphicDesigner'
import MotivationSpeaker from './Screens/MotivationSpeaker'
import CityPolitics from './Screens/CityPolitics'
import MataraYugayak from './Screens/MataraYugayak'

export const LanguageContext = React.createContext()

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/about' element={<AboutScreen/>} />
          <Route path='/socialWork' element={<SocialScreen/>} />
          <Route path='/bookWritting&Art' element={<BookWritting/>} />
          <Route path='/filmProduction' element={<FilmProduction/> } />
          <Route path='/graphicDesign' element={<GraphicDesigner/>} />
          <Route path='/motivationSpeaker' element={<MotivationSpeaker/>} />
          <Route path='/cityPolitics' element={<CityPolitics/>} />
          <Route path='/mataraYugayak' element={<MataraYugayak/>} />
        </Routes>
        <Footer/>
      </LanguageProvider>
    </Router>
  )
}

export default App
