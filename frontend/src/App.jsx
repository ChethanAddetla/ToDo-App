
import React from "react";
import './App.css'

import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <div>
      <Router>
      <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
     {/* <Home></Home> */}
     <Footer></Footer>
    </div>
  )
}

export default App
