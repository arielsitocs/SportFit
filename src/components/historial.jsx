import '../styles/historial.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App';

export default function Historial() {
    const { usuario } = useContext(AppContext);
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        obtenerHistorial();
    }, []);

    const obtenerHistorial = async () => {
        try {
            const response = await fetch('http://localhost:3000/historial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rut_cliente: usuario[0] }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setOrdenes(data.orden);
                } else {
                    alert('Historial no obtenido.');
                }
            } else {
                alert('Error al obtener la respuesta del servidor.');
            }
        } catch (error) {
            console.error('Error al intentar obtener el historial:', error);
            alert('Error al obtener historial.');
        }
    };

    return (
        <div className="historial-container">
            <h1 className='titulo'>Historial de Compras</h1>
            {
                ordenes.length ?
                        <div className="historial-list">
                            {ordenes.map((orden) => (
                                <div className="historial-item" key={orden[0]}>
                                    <div className="item-details">
                                        <h3>Codigo de orden: {orden[0]}</h3>
                                        <p><b>Monto: </b>${orden[1]}</p>
                                        <p><b>Fecha de entrega: </b>{orden[6]}</p>
                                        <p>Estado: entregada.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                    <p>No tienes compras anteriores.</p>
            }

        </div>
    );
}
