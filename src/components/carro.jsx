import '../styles/carro.css'
import { useContext, useState } from 'react';
import { useFetch } from '../useFetch.js'
import { AppContext } from '../App.jsx';

export default function Carro() {

    const { usuario, setUsuario } = useContext(AppContext);

    const today = new Date();
    const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [fecha_estimada, setFecha_Estimada] = useState('');
    const [estado, setEstado] = useState('En preparación')
    const rut_cliente = usuario[0];

    var codigo_producto = 1;

    const añadirProducto = (product) => {
        setTotal(Math.round((total + product.precio + iva)))
        setIva(Math.round(total * 0.19))
        setAllProducts([...allProducts, product])

        setFecha(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`)
        today.setDate(today.getDate() + 10);
        setFecha_Estimada(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`)
    }

    const eliminarProducto = (product) => {
        var index;

        // Se encuentra el indice del producto que coincide con la condicion y lo elimina del array //
        index = allProducts.findIndex((producto) => producto.codigo === product.codigo)
        setAllProducts([...allProducts.slice(0, index), ...allProducts.slice(index + 1)]);

        // Se actualiza total e iva al eliminar //
        const nuevoTotal = total - product.precio;
        setTotal(Math.round(nuevoTotal));
        setIva(Math.round(nuevoTotal * 0.19));
    }

    const manejarCompra = async (event) => {
        event.preventDefault();

        if (allProducts.length !== 0) {
            try {
                const response = await fetch('http://localhost:3000/carro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ total, direccion, rut_cliente, codigo_producto, fecha, fecha_estimada, estado }),
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        alert("Orden ingresada!");
                        setAllProducts([]);
                        setDireccion('');
                    } else {
                        alert('Orden no ingresada.');
                    }
                } 
            } catch (error) {
                console.error('Error al intentar ingresar:', error);
                alert('Error al ingresar.');
            }
        } else {
            alert("El carrito está vacio.")
        }
    };

    return (
        <div className='carro'>
            <div className="carro-title">
                <h1>Tu Carro de Compras</h1>
            </div>
            <div className="carro-content">
                <div className="compras">
                    {
                        data?.map((producto) => (
                            <div className="productoCarro" key={producto.codigo}>
                                <div className="producto-imagen">
                                    <img src={producto.imagen} />
                                </div>
                                <div className="producto-detalle">
                                    <h2>{producto.nombre}</h2>
                                    <p>{producto.descripcion}</p>
                                    <p>${producto.precio}</p>
                                </div>
                                <div className="producto-info">

                                    <div className='producto-cantidad'>
                                        <div>
                                            <button onClick={() => añadirProducto(producto)}>Añadir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="carro-resultado">
                    <form method='POST'>
                        <div className="carro-resultado-title">
                            <h2>Resultado de Compra</h2>
                        </div>

                        <div className="carro-resultado-content">
                            {
                                allProducts.length ? (
                                    <div>
                                        {
                                            allProducts.map((producto) => (
                                                <p key={producto.codigo} className='producto-resultado'>{producto.nombre} ${producto.precio} <button onClick={() => eliminarProducto(producto)} className='eliminar'>X</button></p>
                                            ))
                                        }
                                        <p className='iva'>IVA: ${iva}</p>
                                        <p className='total'>TOTAL: ${total}</p>
                                        <p className='fecha'>FECHA: {fecha}</p>
                                        <p className='fecha_entrega'>ENTREGA ESTIMADA: {fecha_estimada}</p>
                                        <input className='direccion' type="text" placeholder='Ingrese su dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                        <div className="carro-resultado-pagar">
                                            <button onClick={manejarCompra}>PAGAR</button>
                                        </div>
                                    </div>
                                ) : <p>Carro vacio.</p>
                            }
                        </div>
                    </form >
                </div>
            </div>
        </div>

    )
}