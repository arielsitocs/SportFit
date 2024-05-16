import '../../styles/productos.css'
import { useFetch } from '../../useFetch.js'
import Producto from './producto'

export default function Productos() {
     const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")
    
     return (
        <div>
            <div className="productos">
                <div className="productos-title">
                    <h1>Productos Deportivos</h1>
                </div>

                <div className="productos-content">
                    {data?.map((producto) => (
                        <Producto imagen={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} />
                    ))}
                </div>
            </div>
        </div>
    )
}