import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login'
import Registro from './components/registro'
import Perfil from './components/perfil/perfil'
import Productos from './components/productos/productos'
import Carro from './components/carro'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import Historial from './components/historial'
import Seguimiento from './components/seguimiento'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/carro" element={<Carro />}/>
          <Route path="/historial" element={<Historial />}/>
          <Route path="/seguimiento" element={<Seguimiento />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

