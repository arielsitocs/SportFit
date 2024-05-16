import '../styles/historial.css'

export default function historial() {
    /* CAMBIAR A CONEXION BASE DE DATOS */
    const products = [
        {name: 'Zapatillas de Ballet', imageUrl: 'https://saborlatinochile.cl/res/img/zapatos-ballet.jpg', precio: '35000', fechaCompra: '04/04/24'},
        {name: 'Vestido de Baile Latino', imageUrl: 'https://saborlatinochile.cl/res/img/Vestido-Baile-Latino.jpg', precio: '60000', fechaCompra: '04/04/24'},
        {name: 'Suela para Zapatos de Flamenco', imageUrl: 'https://saborlatinochile.cl/res/img/zapato-flamenco.jpg', precio: '15000', fechaCompra: '04/04/24'},
        {name: 'Pantalón de Hip Hop', imageUrl: 'https://saborlatinochile.cl/res/img/Pantalon-Hip-Hop.jpg', precio: '23500', fechaCompra: '04/04/24'},
        {name: 'Polera Mujer Sabor Latino Chile', imageUrl: 'https://saborlatinochile.cl/res/img/women1.jpg', precio: '15000', fechaCompra: '04/04/24'},
        {name: 'Polera Hombre Sabor Latino Chile', imageUrl: 'https://saborlatinochile.cl/res/img/men1.jpg', precio: '15000', fechaCompra: '04/04/24'}        
    ];

    return (
        <div className="historial-container">
            <h1 className='titulo'>Historial de Compras</h1>
            <div className="historial-list">
                {products.map((product, index) => (
                    <div className="historial-item" key={index}>
                        <img className="item-img" src={product.imageUrl} alt={product.name} />
                        <div className="item-details">
                            <h3>{product.name}</h3>
                            <p><b>Precio: </b>${product.precio}</p>
                            <p><b>Fecha de Compra: </b>{product.fechaCompra}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
};