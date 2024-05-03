import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import Banner from './components/banner'
import Gallery from './components/gallery'
import Cards from './components/cards'
import Login from './components/login'
import Registro from './components/registro'
import Perfil from './components/perfil'

function App() {
  return (
    <main> 
      <NavBar />

      <Banner />

      <Gallery />

      <Cards />

      <Footer />

      <Login/>

      <Registro/>
    </main>
  )
}

export default App
