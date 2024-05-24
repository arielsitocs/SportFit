import { conectarBaseDatos } from './conexion.js';

async function ingresarSuscripcion(descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cliente) {
    const connection = await conectarBaseDatos();

    try {
        await connection.execute(
            'INSERT INTO suscripcion (descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cli) VALUES (:descripcion, :fecha_inicio, :fecha_exp, :tipo_plan, :valor, :rut_cliente)', 
            { descripcion, fecha_inicio, fecha_exp, tipo_plan, valor, rut_cliente },
            { autoCommit: true }
        );
        console.log("Suscripción ingresada.");
    } catch (err) {
        console.error("Error al ingresar la suscripción: " + err);
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

export { ingresarSuscripcion };