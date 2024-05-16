import '../styles/registro.css'
// import { guardarUsuario } from '../DataBase'

export default function Registro() {
    const manejarRegistro = async () => {
        var correo = document.getElementById('correo')?.value
        var usuario = document.getElementById('usuario')?.value
        var contrasena = document.getElementById('contrasena')?.value
        var confContrasena = document.getElementById('contrasenaConfirm')?.value

        if(contrasena !== confContrasena) {
            alert("Las contraseñas no coinciden.")
        } else {
            try 
            {
                // await guardarUsuario(correo, usuario, contrasena)
                alert("registrado")
            } catch(error) 
            {
                console.error("Error al guardar el usuario: "+error)
                alert("no registrao")
            }
        }
    }

    return (
        <main>
            <div className="registro">
                <h1>Registro de Usuario</h1>
                <form type='submit' className='formulario'>
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
                        <input type="password" id='contrasena' required />
                    </div>

                    <div className="contrasenaConfirm">
                        <label htmlFor="contrasenaConfirm">Confirmar contaseña</label>
                        <input type="password" id='contrasenaConfirm' required />
                    </div>

                    <div className="registrarse">
                        <button type='submit' onClick={manejarRegistro}>Registrarse</button>
                    </div>

                    <div className="links">
                        <h2>¿Ya tienes una cuenta? <a href="/login">Ingresa aquí</a></h2>
                    </div>
                </form>
            </div>
        </main>
    )
}