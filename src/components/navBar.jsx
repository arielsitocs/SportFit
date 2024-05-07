import '../styles/navBar.css';
import { useState } from 'react';
import gymlogo from '../assets/img/logo.png';
import menuicon from '../assets/img/menu-icon.png';
import user from '../assets/img/user.png';

export default function NavBar() {
    const [menuMainOpen, setMenuOpen] = useState(false);
    const [menuUserOpen, setUserOpen] = useState(false);

    const toggleMainMenu = () => {
        setMenuOpen(!menuMainOpen);
    };

    const toggleUserMenu = () => {
        setUserOpen(!menuUserOpen);
    };
    
    return (
        <main>
            <div className="navBar">
                <div className="left">
                    <div className="nav-logo">
                        <a href="/"><img src={gymlogo} className='nav-icon' /></a>
                    </div>

                    <div className="nav-menu" onClick={toggleMainMenu}>
                        <img src={menuicon} id='nav-menu-icon' />
                    </div>
                </div>

                <div className="middle">
                    <div className="nav-search">
                        <input type="text" placeholder='Buscar...' />
                    </div>
                </div>

                <div className="right">
                    <div className="buttons">
                        <a href="/login"><button>Entrar</button></a>
                        <a href="/registro"><button>Registrarse</button></a>
                    </div>

                    <div className="user" onClick={toggleUserMenu}>
                        <img src={user} className='user-icon' />
                    </div>
                </div>
            </div>

            <div className={`main-menu ${menuMainOpen ? 'active' : ''}`}>
                <ul>
                    <a href="/productos">Productos</a>
                    <a href="">Suscripciones</a>
                    <a href="">Carro de Compras</a>
                </ul>
            </div>

            <div className={`user-menu ${menuUserOpen ? 'active' : ''}`}>
                <ul>
                    <a href="/perfil">Mi Perfil</a>
                    <a href="">Historial de Compras</a>
                    <a href="">Cerrar Sesión</a>
                </ul>
            </div>
        </main>
    )
}
