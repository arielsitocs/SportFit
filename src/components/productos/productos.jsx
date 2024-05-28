import '../../styles/productos.css'
import { useFetch } from '../../useFetch.js'
import Producto from './producto'

export default function Productos() {
    const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")

    const productos = [
       {
        "codigo": "101",
        "nombre": "Cinturón soporte lumbar",
        "descripcion": "Zapatillas de ballet profesionales, ideales para clases y presentaciones.",
        "stock": 15,
        "precio": 26000,
        "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
      },
      {
        "codigo": "102",
        "nombre": "Cinturón soporte lumbar",
        "descripcion": "Zapatillas de ballet profesionales, ideales para clases y presentaciones.",
        "stock": 15,
        "precio": 26000,
        "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
      },
      {
        "codigo": "103",
        "nombre": "Cinturón soporte lumbar",
        "descripcion": "Zapatillas de ballet profesionales, ideales para clases y presentaciones.",
        "stock": 15,
        "precio": 26000,
        "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
      },
      {
        "codigo": "104",
        "nombre": "Cinturón soporte lumbar",
        "descripcion": "Zapatillas de ballet profesionales, ideales para clases y presentaciones.",
        "stock": 15,
        "precio": 26000,
        "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
      },
     ]

return (
    <div>
        <div className="productos">
            <div className="productos-title">
                <h1>Productos Deportivos</h1>
            </div>

            <div className="productos-content">
                {productos.map((producto) => (
                    <Producto imagen={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} />
                ))}
            </div>
        </div>
    </div>
)
}