import '../styles/api.css'
import { useState } from "react"

export default function api() {
    const [codigo_orden, setCodigo_orden] = useState('');
    const [estado, setEstado] = useState('');

    const manejarCambio = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/cambiar-estado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ codigo_orden, estado })
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Orden actualizada: ${result.message}`);
            } else {
                alert(`Error al actualizar la orden: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Hubo un error al enviar la solicitud');
        }
    }

    return (
        <div className='content'>
            <form method="POST">
                <h1>Actualizar Ordenes</h1>
                <div>
                    <label htmlFor="codigo_orden">Codigo de la orden</label>
                    <input type="number" id="codigo_orden" name="codigo_orden" onChange={(e) => setCodigo_orden(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="estado">Nuevo Estado</label>
                    <select className="opciones" value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="En preparación">En preparación</option>
                        <option value="Aceptada">Aceptada</option>
                        <option value="Completada">Completada</option>
                    </select>
                </div>

                <button onClick={manejarCambio}>Actualizar Orden</button>
            </form>
        </div>
    )
}