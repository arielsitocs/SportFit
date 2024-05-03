import '../styles/login.css';

export default function Login() {
    return (
        <div>
            <div className="login">
                <div className="tituloLogin">
                    <h1>Login de Usuario</h1>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative" id="formu">

                    <div class="card-body px-4 py-5 px-md-5" id="antesForm">
                        <form action="" className="formu">
                            <div className="usuario">
                                <label htmlFor="usuario">Nombre se Usuario</label>
                                <input type="text" name="usuario" id="usu"></input>
                            </div>
                            <div className="contrasena">
                                <label htmlFor="contrasena" >Ingrese contraseña</label>
                                <input type="password" name="password" id="password"></input>
                            </div>
                                <div className="btnIn">
                                    <button className="btnIngresar">Ingresar</button>
                                </div>

                                <div className="forgot">
                                    <a href="">¿Olvidó su contraseña?</a>
                                </div>

                                <div className="register">
                                    <a href="">Registrate aquí</a>
                                </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
} 
