import oracledb from 'oracledb';

async function conectarBaseDatos() {
    try {
        const connection = await oracledb.getConnection({
            user: 'amongus',
            password: 'amongus',
            connectString: 'localhost:1521/orcl'
        });
        console.log("Conexión establecida");
        return connection;
    } catch(err) {
        console.error("Error al conectar a Oracle: " + err);
        throw err;
    }
}

async function queryDataBase() {
    const connection = await conectarBaseDatos();

    try {
        const result = await connection.execute('SELECT * FROM usuario');
        console.log("Resultado de la query: " + result.rows);
    } catch(err) {
        console.error("Error al ejecutar la query: " + err);
    } finally {
        // Cierra la conexión
        if (connection) {
            try {
                await connection.close();
                console.log('Conexión cerrada');
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
}

queryDataBase();