import '../styles/registro.css'

export default function Registro() { 
    return (
        <main>
            <div className="registro">
                <h1>Registro de Usuario</h1>
                <form action="" className='formulario'>
                    <div className="correo">
                        <label htmlFor="correo">Correo</label>
                        <input type="email" id='correo' required />
                    </div>

                    <div className="usuario">
                        <label htmlFor="usuario">Nombre de Usuario</label>
                        <input type="text" id='usuario' required />
                    </div>

                    <div className="contrasena">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input type="password" id='contrasena' required/>
                    </div>

                    <div className="contrasenaConfirm">
                        <label htmlFor="contrasenaConfirm">Confirmar contaseña</label>
                        <input type="password" id='contrasenaConfirm' required />
                    </div>

                    <div className="registrarse">
                        <button>Registrarse</button>
                    </div>

                    <div className="links">
                        <h2>¿Ya tienes una cuenta? <a href="/login">Ingresa aquí</a></h2>
                    </div>
                </form>
            </div>
        </main>
    )
}