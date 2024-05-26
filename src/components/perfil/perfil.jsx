import '../../styles/perfil.css'
import hombre from '../../assets/img/hombre.webp'
import Suscripcion from '../perfil/suscripcion'
import { AppContext } from '../../App'
import { useContext, useEffect, useState } from 'react'
import suscripcion from '../perfil/suscripcion'

export default function Perfil() {
    const { usuario } = useContext(AppContext); 

    const [suscripciones, setSuscripciones] = useState([]);

    useEffect(() => {
        obtenerSuscripciones();
    }, [suscripciones, usuario])

    const obtenerSuscripciones = async () => {

        try {
            const response = await fetch('http://localhost:3000/perfil', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ rut_cliente: usuario[0] }), 
            });
      
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setSuscripciones(data.suscripcion);
                } else {
                    alert('Suscripciones no obtenidas.');
                }
            } else {
              alert("Error al obtener suscripcion.");
            }
          } catch (error) {
            console.error("Error al obtener suscripciones: " + error);
            alert("Ocurrió un error al registrar el usuario.");
          }
    }

    return (
        <div className='main'>
            <div className="perfil-top">
                <div className="perfil-foto">
                    <img src={hombre} alt="" />
                </div>

                <div className="perfil-info">
                    <h2>{usuario[2] + " " + usuario[3]}</h2>
                    <h3>{usuario[5]}</h3>
                </div>
            </div>

            <div className="perfil-middle">
                <div className="perfil-descripcion-title">
                    <h2>Sobre Mí</h2>
                </div>
                <div className="perfil-descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia eum obcaecati eligendi corporis perferendis eveniet iste nesciunt iure? Commodi tempora molestiae non tempore suscipit deserunt expedita nostrum odio libero?</p>
                </div>
            </div>

            <div className="perfil-bottom">
                <div className="perfil-suscripciones">
                    <div className="perfil-suscripciones-title">
                        <h2>Mis Suscripciones</h2>
                    </div>

                    <div className="perfil-suscripciones-contenido">
                        {
                            suscripciones.length ?
                            suscripciones.map((suscripcion) => (
                                <Suscripcion codigo_suscripcion={suscripcion[0]} tipo_plan={suscripcion[4]} descripcion={suscripcion[1]} fecha_inicio={suscripcion[2]}
                                fecha_exp={suscripcion[3]} valor={suscripcion[5]}/>
                            ))
                            :
                            <p>No tienes suscripciones activas.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}