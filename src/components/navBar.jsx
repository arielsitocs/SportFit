import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
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
                        <img src={gymlogo} className='user-icon' />
                    </div>

                    <div className="nav-menu" onClick={toggleMainMenu}>
                        <img src={menuicon} id='nav-menu' />
                    </div>
                </div>

                <div className="middle">
                    <div className="nav-search">
                        <input type="text" placeholder='Buscar...' />
                    </div>
                </div>

                <div className="right">
                    <div className="buttons">
                        <button>Entrar</button>
                        <button>Registrarse</button>
                    </div>

                    <div className="user" onClick={toggleUserMenu}>
                        <img src={user} className='user-icon' />
                    </div>
                </div>
            </div>

            <div className={`main-menu ${menuMainOpen ? 'active' : ''}`}>
                <ul>
                    <a href="">Productos</a>
                    <a href="">Suscripciones</a>
                    <a href="">Carro de Compras</a>
                </ul>
            </div>

            <div className={`user-menu ${menuUserOpen ? 'active' : ''}`}>
                <ul>
                    <a href="">Mi Perfil</a>
                    <a href="">Historial de Compras</a>
                    <a href="">Cerrar Sesión</a>
                </ul>
            </div>
        </main>
    )
}
