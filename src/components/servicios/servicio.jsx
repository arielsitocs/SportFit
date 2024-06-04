import '../../styles/servicios.css'
import { AppContext } from '../../App';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Servicio({ imagen, tipo_plan, descripcion, valor, fecha_inicio, fecha_exp }) {
    
    const { login } = useContext(AppContext);

    const navigate = useNavigate();

    const { usuario } = useContext(AppContext); 
    
    const comentario = '';

    const manejarSuscripcion = async (event) => {
        event.preventDefault();

        if(login) 
            {
                try {
                    const response = await fetch('http://localhost:3000/servicios', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cliente: usuario[0], comentario }), 
                    });
              
                    if (response.ok) {
                      alert('Suscripción exitosa.')
                    } else {
                      alert("Error al suscribirse.");
                    }
                  } catch (error) {
                    console.error("Error al suscribirse: " + error);
                    alert("Ocurrió un error al inscribirse.");
                  }
            } 
            else {
                navigate('/login')
            }
    }

    return (
        <div className='servicio'>
            <div className="servicio-imagen">
                <img src={imagen} />
            </div>

            <div className="servicio-content">
                <div className="servicio-title">
                    <h3>{tipo_plan}</h3>
                </div>
                
                <p>{descripcion}</p>
                <p>${valor}/mes</p>

                <p>Fecha inicio: {fecha_inicio}</p>
                <p>Fecha termino: {fecha_exp}</p>

                <div className="servicio-button">
                    <button onClick={manejarSuscripcion}>Contratar</button>
                </div>
            </div>
        </div>
    );
}