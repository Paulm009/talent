import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingBody from './components/landingbody/landingbody'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/custommers/Card'
import { CostumersSection } from './components/custommers/CostumersSection'
import { IntroSection } from './components/custommers/IntroSection'
import MetricCard from './components/custommers/MetricCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <LandingBody/>
          <Footer/>
          </>
        }>
        </Route>
        <Route path='/customers' element={
          <>
          <Header/>
          <IntroSection/>
          <CostumersSection/>          
         
          <Footer/>

          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
