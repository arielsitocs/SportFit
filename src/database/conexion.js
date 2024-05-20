import oracledb from 'oracledb';

async function conectarBaseDatos() {
    try {
        const connection = await oracledb.getConnection({
            user: 'sportfit',
            password: 'sportfit',
            connectString: 'localhost:1521/orcl'
        });
        console.log("Conexión establecida");
        return connection;
    } catch(err) {
        console.error("Error al conectar a Oracle: " + err);
        throw err;
    }
}

async function mostrarDatos() {
    const connection = await conectarBaseDatos();

    try {
        const result = await connection.execute('SELECT * FROM cliente');
        console.log("Resultado de la query: " + result.rows);
    } catch(err) {
        console.error("Error al seleccionar usuarios: " + err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Conexión cerrada');
            } catch (err) {
                console.error('Error al cerrar la conexión: ', err);
            }
        }
    }
}

export { conectarBaseDatos, mostrarDatos }