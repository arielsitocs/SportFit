import '../../styles/carro.css'
import ejemplo from '../../assets/img/hombre.webp'

export default function Carro() {
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
                {
                    productos.map((producto) => (
                        <div key={producto.codigo}>
                            <h1>{producto.nombre}</h1>
                            <p>{producto.descripcion}</p>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <p>Stock: {producto.stock}</p>
                            <p>Precio: {producto.precio}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}