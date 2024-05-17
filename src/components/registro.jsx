import '../styles/registro.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confContrasena, setConfContrasena] = useState('');

  const navigate = useNavigate();

  const manejarRegistro = async (event) => {
    event.preventDefault();

    if (contrasena !== confContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, usuario, contrasena }), 
      });

      if (response.ok) {
        alert("Usuario registrado.");
        navigate('/login');
      } else {
        alert("Error al registrar el usuario.");
        console.log(response);
      }
    } catch (error) {
      console.error("Error al guardar el usuario: " + error);
      alert("Ocurrió un error al registrar el usuario.");
    }
  };

  return (
    <main>
      <div className="registro">
        <h1>Registro de Usuario</h1>
        <form className='formulario' onSubmit={manejarRegistro}>
          <div className="correo">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id='correo'
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="usuario">
            <label htmlFor="usuario">Nombre Completo</label>
            <input
              type="text"
              id='usuario'
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="contrasena">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id='contrasena'
              required
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <div className="contrasenaConfirm">
            <label htmlFor="contrasenaConfirm">Confirmar contaseña</label>
            <input
              type="password"
              id='contrasenaConfirm'
              required
              value={confContrasena}
              onChange={(e) => setConfContrasena(e.target.value)}
            />
          </div>

          <div className="registrarse">
            <button type='submit'>Registrarse</button>
          </div>

          <div className="links">
            <h2>¿Ya tienes una cuenta? <a href="/login">Ingresa aquí</a></h2>
          </div>
        </form>
      </div>
    </main>
  );
}