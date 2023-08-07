import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom"
import  Blue  from './components/Blue'
import  Red  from './components/Red'
import Home from './components/Home'
import Yellow from './components/Yellow'
import Green from './components/Green'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
        <div id="container">
          <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to={"/home"}>Home</Link>
          <Link to={"/blue"}>Blue</Link >
          <Link to={"/red"}>Red</Link>
          <Link to={"/yellow"}>Yellow</Link>
          <Link to={"/green"}>Green</Link>              
        </div>

        <div id="main-section">

          <Routes>
            <Route path="/home" element={<Home/>} /> 
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/yellow" element={<Yellow/>}/>
            <Route path="/green" element={<Green/>}/>
          </Routes>
          
        </div>

        <div className='footer-section'>

          <footer className='footer'>

            <Link to={"/home"}>Home</Link>
            <Link to={"/blue"}>Blue</Link >
            <Link to={"/red"}>Red</Link>
            <Link to={"/yellow"}>Yellow</Link>
            <Link to={"/green"}>Green</Link>  
            
          </footer>

        </div>

    </div>
      </BrowserRouter>
   
  )
}

export default App
