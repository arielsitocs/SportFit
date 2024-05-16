import '../styles/seguimiento.css';
import carro from './carro';

export default function generarGrid() {
    //capturar datos del carro
    //pasar nombres en cada celda de la tabla en un ciclo

    return (

        <div class="card-body" >
            <div id="carta">
                <div className='busqueda'>
                    <input type="text" placeholder='Ingrese codigo' className='texto' />
                    <button className='btnBuscar'>Buscar</button>
                </div>
                <table className="tablita">
                    <thead className="titulos">
                        <th>Codigo</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Fecha ingreso</th>
                        <th>Estado</th>
                        <th>Monto</th>
                    </thead>

                    <tr className="contenido">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className="contenido">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className="contenido">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

