import '../styles/seguimiento.css';
import style from '../styles/seguimiento.module.css';
import { AppContext } from '../App';
import { useContext, useEffect, useState } from 'react';

export default function GenerarGrid() {
    const { usuario } = useContext(AppContext);
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        obtenerOrden();
    }, []); 

    const obtenerOrden = async () => {
        try {
            const response = await fetch('http://localhost:3000/seguimiento', {
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
                    alert('Orden no obtenida.');
                }
            } else {
                alert('Error al obtener la respuesta del servidor.');
            }
        } catch (error) {
            console.error('Error al intentar obtener órdenes:', error);
            alert('Error al obtener órdenes.');
        }
    };

    return (
        <div className={style.contenido}>

        
        <div className="card-body" >
            <div id="carta">
                <form method="POST">
                    <div className="busqueda">
                        <input type="text" placeholder="Ingrese código" className="texto" />
                        <button type="button" className="btnBuscar" onClick={obtenerOrden}>Buscar</button>
                    </div>
                    <table className="tablita">
                        <thead className="titulos">
                            <tr>
                                <th>Código</th>
                                <th>Dirección</th>
                                <th>Fecha ingreso</th>
                                <th>Fecha entrega estimada</th>
                                <th>Estado</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordenes.length > 0 ? (
                                ordenes.map((orden) => (
                                    <tr className="contenido" key={orden.cod_orden}>
                                        <td>{orden[0]}</td>
                                        <td>{orden[2]}</td>
                                        <td>{orden[5]}</td>
                                        <td>{orden[6]}</td> 
                                        <td>{orden[7]}</td>
                                        <td>${orden[1]}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">Aún no tienes órdenes activas.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        </div>
    );
}
