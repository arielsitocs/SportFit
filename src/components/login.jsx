import '../styles/login.css';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const navigate = useNavigate();

  const { login, setLogin } = useContext(AppContext);
  const { usu, setUsu } = useContext(AppContext); 

  //Comprobación del cambio del estado de login
  useEffect(() => {
    if (login) {
      navigate('/');
      console.log(login);
      console.log(usu);
    }
  }, [login, navigate]);

  const manejarLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
      });

      if (response.ok) {
        setLogin(true);
        setUsu(usuario);
      } else {
        alert('Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al intentar ingresar:', error);
      alert('Error al ingresar.');
    }
  };

  return (
    <div>
      <div className="login">
        <div className="tituloLogin">
          <h1>Login de Usuario</h1>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative" id="formu">
          <div className="card-body px-4 py-5 px-md-5" id="antesForm">
            <form className="formu" onSubmit={manejarLogin}>
              <div className="usuario">
                <label htmlFor="usuario">Nombre de Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  id="usu"
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>
              <div className="contrasena">
                <label htmlFor="contrasena">Ingrese contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>
              <div className="btnIn">
                <button className="btnIngresar" type="submit">
                  Ingresar
                </button>
              </div>

              <div className="forgot">
                <a href="">¿Olvidó su contraseña?</a>
              </div>

              <div className="register">
                <a href="/registro">Registrate aquí</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
