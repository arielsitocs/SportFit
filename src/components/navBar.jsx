import '../styles/navBar.css'
import gymlogo from '../assets/img/logo.png'
import menuicon from '../assets/img/menu-icon.png'
import user from '../assets/img/user.png'

export default function NavBar() {
    return (
        <main>
            <div className="navBar">
                <div className="left">
                    <div className="nav-logo">
                        <img src={gymlogo} className='user-icon' />
                    </div>

                    <div className="nav-menu">
                        <img src={menuicon} />
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

                    <div className="user">
                        <img src={user} className='user-icon' />
                    </div>
                </div>
            </div>

            <div className="userMenu">

            </div>
        </main>
    )
}