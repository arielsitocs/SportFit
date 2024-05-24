import { useFetch } from '../../useFetch.js'

export default function testApi() {
    const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")

    return (
        <div>
            <div className="api-titulo">
                {/* <h1>Test Api de pana</h1> */}
            </div>

            <div className="api-test">
                <ul>
                    {/* {loading && <li>cargando... y wea</li>}
                    {data?.map((producto) => (
                        <li key={producto.codigo}>{producto.codigo} {producto.nombre}</li>
                    ))} */}
                </ul>
            </div>
        </div>
    )
}