import '../styles/navBar.css';
import { useState, useContext } from 'react';
import gymlogo from '../assets/img/logo.png';
import menuicon from '../assets/img/menu-icon.png';
import user from '../assets/img/user.png';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const [menuMainOpen, setMenuOpen] = useState(false);
    const [menuUserOpen, setUserOpen] = useState(false);

    const { login, setLogin } = useContext(AppContext);
    const { usuario } = useContext(AppContext);

    const toggleMainMenu = () => {
        setMenuOpen(!menuMainOpen);
    };

    const toggleUserMenu = () => {
        setUserOpen(!menuUserOpen);
    };

    const cerrarSesion = () => {
        setLogin(false);
        navigate('/')
    }

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
                        {
                            login ?
                                <p>¡Bienvenido {usuario[2]}!</p>
                                :
                                <div>
                                    <a href="/login"><button>Entrar</button></a>
                                    <a href="/registro"><button>Registrarse</button></a>
                                </div>
                        }

                    </div>

                    {
                        login ? 
                        <div className="user" onClick={toggleUserMenu}>
                            <img src={user} className='user-icon' />
                        </div> 
                        :
                        <span></span>
                    }

                </div>
            </div>

            <div className={`main-menu ${menuMainOpen ? 'active' : ''}`}>
                <ul>
                    {
                        login ?
                            <ul>
                                <a href="/productos">Productos</a>
                                <a href="/servicios">Servicios</a>
                                <a href="/carro">Carro de Compras</a>
                            </ul>
                            :
                            <div>
                                <a href="/productos">Productos</a>
                                <a href="/servicios">Servicios</a>
                            </div>
                    }

                </ul>
            </div>


            <div className={`user-menu ${menuUserOpen ? 'active' : ''}`}>
                <ul>
                    <a href="/perfil">Mi Perfil</a>
                    <a href="/historial">Historial de Compras</a>
                    <a href="/seguimiento">Seguimiento</a>
                    <a href="" onClick={() => cerrarSesion()}>Cerrar Sesión</a>
                </ul>
            </div>
        </main>
    )
}
