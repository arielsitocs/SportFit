import '../styles/carro.css';
import  React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App.jsx';
import { PayPalButtons } from '@paypal/react-paypal-js';
// import PaypalButton from './paypal/paypalButton.tsx';

export default function Carro() {
    const { usuario } = useContext(AppContext);

    const today = new Date();
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [fecha_estimada, setFecha_Estimada] = useState('');
    const [estado, setEstado] = useState('En preparación');
    const [codigo_producto, setCodigo_producto] = useState(1);
    const rut_cliente = usuario[0];

    const productos = [
        {
            "codigo": "101",
            "nombre": "Cinturón soporte lumbar",
            "descripcion": "Dispositivo diseñado para brindar estabilidad y apoyo a la región lumbar.",
            "stock": 15,
            "precio": 3,
            "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
        },
        {
            "codigo": "102",
            "nombre": "Set mancuernas sculpture 20KG",
            "descripcion": "Discos metálicos para desarrollar músculos en distintas zonas del cuerpo.",
            "stock": 10,
            "precio": 5,
            "imagen": "https://sparta.cl/media/catalog/product/s/e/set-mancuernas-body-sculpture-20kg-asa.jpg"
        },
        {
            "codigo": "103",
            "nombre": "Pesa rusa 10KG",
            "descripcion": "Permite una amplia variedad de ejercicio, como balanceo y levantamiento.",
            "stock": 11,
            "precio": 10,
            "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0uP1mVXyDDTVwOaRAp9JMT2gO8zXfi6I7Nd-pQ_U7PRRv1TMDSeS82u3hpWjQo7PQEcS-4YPfnOIe4E-frhCv-rm9kVADkav2wFjG17T5ovI-SHfJH-GSinolUK4whOyVmdKz7so&usqp=CAc"
        },
        {
            "codigo": "104",
            "nombre": "Creatina Drive 300G",
            "descripcion": "Para mejorar tu rendimiento en el ejercicio y aumentar la masa muscular",
            "stock": 27,
            "precio": 8,
            "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRva0l8HfT4lnlourDguGZW1OhpRvyUWHkYkUxSxJuOCxxXizn1jY1ICl3UrlwyVyvp0vJGX9Rf7Oyx7EyI_eeHM4ziHnP-G-AQ8Gs7b9FzBogtdKdRMswwTXKFSZXh5L5S-wZg6uk&usqp=CAc"
        },
        {
            "codigo": "105",
            "nombre": "Rodillera venda elástica",
            "descripcion": "Para mejorar tu rendimiento en el ejercicio y aumentar la masa muscular",
            "stock": 3,
            "precio": 7,
            "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqIsa0W-k-MjaPVgK-8zgWwO4wV_xoZKNG9aXTwOyF0oURgycmt24vCBkCNlRDt6xqTUP0RPnnnaMtSUGmALM3-xrzHNiVqoUw_sii_dFC39cY1BTdLaqzwhj5582xRiTxx6z1FPQ&usqp=CAc"
        },
        {
            "codigo": "106",
            "nombre": "Protector rodilleras pro",
            "descripcion": "Previene lesiones en deportes de contacto.",
            "stock": 9,
            "precio": 13,
            "imagen": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlgzDd4BTyJoiwPUE9t_Y0kLqgwh3KA6bv9T5sGpzMlsvedPwirD1OlfZAD5-1N3i7EXiBSlRRpUPNB0JjDE7nm3XDdrJd5xQtpyIppfS5DvDvezJsIrIdY8UZ-6_-1Rvqq2Q5G_M&usqp=CAc"
        },
    ];

    useEffect(() => {
        const nuevoIva = Math.round(total * 0.19);
        setIva(nuevoIva);
    }, [total]);

    const añadirProducto = (product) => {
        const nuevoTotal = total + product.precio;
        setTotal(nuevoTotal);
        setAllProducts([...allProducts, product]);
        setFecha(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`);
        today.setDate(today.getDate() + 10);
        setFecha_Estimada(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`);
    };

    const eliminarProducto = (product) => {
        const index = allProducts.findIndex((producto) => producto.codigo === product.codigo);
        if (index !== -1) {
            const nuevosProductos = [...allProducts.slice(0, index), ...allProducts.slice(index + 1)];
            const nuevoTotal = total - product.precio;
            setTotal(nuevoTotal);
            setAllProducts(nuevosProductos);
        }
    };

    const manejarCompra = async (event) => {
        if (event) {
            event.preventDefault();
        }
    
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
            alert("El carrito está vacío.");
        }
    };
    
    const PaypalButton = (props) => {
        return (
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: props.invoice,
                                amount: {
                                    currency_code: 'USD', 
                                    value: props.totalValue,
                                },
                            },
                        ],
                    });
                }}
                onApprove={ async (data, actions) => {
                    const order = await actions.order?.capture()
                    manejarCompra()
                    console.log("Orden: ", order)
                }}
                onCancel={() => {
                    setAllProducts([])
                    setTotal(0)
                }}
            />
        );
    };

    return (
        <div className='carro'>
            <div className="carro-title">
                <h1>Tu Carro de Compras</h1>
            </div>
            <div className="carro-content">
                <div className="compras">
                    {
                        productos.map((producto) => (
                            <div className="productoCarro" key={producto.codigo}>
                                <div className="producto-imagen">
                                    <img src={producto.imagen} alt={producto.nombre} />
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
                    <form method='POST' onSubmit={manejarCompra}>
                        <div className="carro-resultado-title">
                            <h2>Resultado de Compra</h2>
                        </div>
                        <div className="carro-resultado-content">
                            {
                                allProducts.length ? (
                                    <div>
                                        {
                                            allProducts.map((producto) => (
                                                <p key={producto.codigo} className='producto-resultado'>{producto.nombre} ${producto.precio} <button type="button" onClick={() => eliminarProducto(producto)} className='eliminar'>X</button></p>
                                            ))
                                        }
                                        <p className='iva'>IVA: ${iva}</p>
                                        <p className='total'>TOTAL: ${total}</p>
                                        <p className='fecha'>FECHA: {fecha}</p>
                                        <p className='fecha_entrega'>ENTREGA ESTIMADA: {fecha_estimada}</p>
                                        <input className='direccion' type="text" placeholder='Ingrese su dirección' required value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                        <div className="carro-resultado-pagar">
                                            <PaypalButton totalValue={total.toString()} invoice={'Pago SportFit'} />
                                        </div>
                                    </div>
                                ) : <p>Carro vacío.</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
