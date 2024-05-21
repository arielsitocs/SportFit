import { conectarBaseDatos, mostrarDatos } from './conexion.js'

async function ingresarOrden( valor, direccion, fecha, rut_cliente, codigo_producto) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'INSERT INTO orden (valor, direccion, fecha, rut_cli, cod_prod) VALUES (:valor, :direccion, :fecha, :rut_cliente, :codigo_producto)', 
            { valor, direccion, fecha, rut_cliente, codigo_producto },
            { autoCommit: true }
        );
        console.log("Orden ingresada.");
    } catch (err) {
        console.error("Error al ingresar orden: " + err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Conexión cerrada');
            } catch (err) {
                console.error('Error al cerrar la conexión :', err);
            }
        }
    }
}

export { ingresarOrden }