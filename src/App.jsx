import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login'
import Registro from './components/registro'
import NavBar from './components/navBar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
