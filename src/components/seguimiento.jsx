import '../styles/seguimiento.css';

export default function generarGrid() {
    return (

        <div class="card-body">
            <div className='busqueda'>
                <input type="text" placeholder='Ingrese codigo' className='texto'/>
                    <button className='btnBuscar'>Buscar</button>
            </div>
            <div class="tabla-responsiva">
                <table width="100%" id="tabla">
                    <thead>
                        <tr>
                            <td>Código</td>
                            <td>Producto</td>
                            <td>Cantidad</td>
                            <td>Fecha Ingreso</td>
                            <td>Estado</td>
                            <td>Monto</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Camisa e payaso</td>
                            <td>15</td>
                            <td>05/05/2024</td>
                            <td>En Emision</td>
                            <td>$28.500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

