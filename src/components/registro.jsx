import '../styles/registro.css'
import NavBar from './navBar'
import Footer from './Footer'

export default function Registro() { 
    return (
        <main>
            <NavBar />
            <div className="registro">
                <h1>Registro de Usuario</h1>
                <form action="" className='formulario'>
                    <div className="correo">
                        <label htmlFor="correo">Correo</label>
                        <input type="email" id='correo' />
                    </div>

                    <div className="usuario">
                        <label htmlFor="usuario">Nombre de Usuario</label>
                        <input type="text" id='usuario' />
                    </div>

                    <div className="contrasena">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input type="password" id='contrasena' />
                    </div>

                    <div className="contrasenaConfirm">
                        <label htmlFor="contrasenaConfirm">Confirmar contaseña</label>
                        <input type="password" id='contrasenaConfirm' />
                    </div>

                    <div className="registrarse">
                        <button>Registrarse</button>
                    </div>

                    <div className="links">
                        <h2>¿Ya tienes una cuenta? <a href="">Ingresa aquí</a></h2>
                    </div>
                </form>


            </div>
            <Footer />
        </main>
    )
}