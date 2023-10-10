import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Services from './components/Services'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import "./styles/App.scss"
import "./styles/mediaquery.scss"

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
