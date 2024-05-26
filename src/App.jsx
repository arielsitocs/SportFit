import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
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
import Servicios from './components/servicios/servicios'
import Api from './components/api'

export const AppContext = createContext();

function App() {
  const [login, setLogin] = useState(() => {
    const storedLogin = localStorage.getItem('login');
    return storedLogin ? JSON.parse(storedLogin) : false;
  });
  
  // Almacenar el estado de login en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  //Recupera el usuario del localstorage
  const [nombre, setNombre] = useState(() => {
    const storedNom = localStorage.getItem('nombre');
    return JSON.parse(storedNom);
  });

  useEffect(() => {
    localStorage.setItem('nombre', JSON.stringify(nombre)); 
  }, [nombre]);

  const[usuario, setUsuario] = useState(() => {
    const storedUsu = localStorage.getItem('usuario');
    return JSON.parse(storedUsu);
  });

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }, [usuario])

  // useEffect(() => {
  //   if(login !== true) {
        
  //   }
  // }, [login])

  return (
    <AppContext.Provider value={{ login, setLogin, nombre, setNombre, usuario, setUsuario }}>
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
            <Route path='/servicios' element={<Servicios />}></Route>
            <Route path='/api' element={<Api />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  )
}

export default App

