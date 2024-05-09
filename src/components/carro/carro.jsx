import '../../styles/carro.css'
import ejemplo from '../../assets/img/hombre.webp'
import Producto from './productoCarro'

export default function Carro() {
    var total = 0;

    const productos = [
        {
            "codigo": "101",
            "nombre": "Zapatillas de Ballet",
            "descripcion": "Zapatillas de ballet profesionales, ideales para clases y presentaciones.",
            "stock": 30,
            "precio": 31990,
            "imagen": "https://saborlatinochile.cl/res/img/zapatos-ballet.jpg"
        },
        {
            "codigo": "102",
            "nombre": "Vestido de Baile Latino",
            "descripcion": "Vestido elegante y cómodo para clases de baile latino.",
            "stock": 15,
            "precio": 10990,
            "imagen": "https://saborlatinochile.cl/res/img/Vestido-Baile-Latino.jpg"
        },
        {
            "codigo": "103",
            "nombre": "Suela para Zapatos de Flamenco",
            "descripcion": "Suela de repuesto para zapatos de flamenco, tamaño estándar.",
            "stock": 50,
            "precio": 5990,
            "imagen": "https://saborlatinochile.cl/res/img/zapato-flamenco.jpg"
        },
        {
            "codigo": "104",
            "nombre": "Pantalón de Hip Hop",
            "descripcion": "Pantalón cómodo y resistente para clases de hip hop.",
            "stock": 25,
            "precio": 14990,
            "imagen": "https://saborlatinochile.cl/res/img/Pantalon-Hip-Hop.jpg"
        },
    ]

    return (
        <div className='carro'>
            <div className="carro-title">
                <h1>Tu Carro de Compras</h1>
            </div>
            <div className="carro-content">
                <div className="compras">
                    {
                        productos.map((producto) => (
                            <Producto key={producto.codigo} imagen={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion}
                                precio={producto.precio} cantidad={1} />
                        ))
                    }
                </div>
                <div className="carro-resultado">
                    <div className="carro-resultado-title">
                        <h2>Resultado de Compra</h2>
                        <div className="carro-resultado-content">
                            {
                                productos.map((productos) => (
                                    <h4>{productos.nombre} x{} ${productos.precio}</h4>
                                ))
                            }
                            {
                                productos.map((producto) => {
                                    total += producto.precio;
                                })
                            }
                            <p>TOTAL: ${total}</p>

                            <div className="carro-resultado-pagar">
                                <button>PAGAR</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}