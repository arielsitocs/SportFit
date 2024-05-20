import '../styles/carro.css'
import { useState } from 'react';
import { useFetch } from '../useFetch.js'

export default function Carro() {

    const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [direccion, setDireccion] = useState('');
    const rut_cliente = '212937738';

    var codigo_producto = 1;

    const añadirProducto = (product) => {
        setTotal(Math.round((total + product.precio + iva)))
        setIva(Math.round(total * 0.19))
        setAllProducts([...allProducts, product])
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
            const productos = allProducts.map(producto => producto.nombre);

            try {
                const response = await fetch('http://localhost:3000/carro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ total, direccion, rut_cliente, codigo_producto }),
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