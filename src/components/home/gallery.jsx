import '../../styles/gallery.css'

export default function gallery() {
    const products = [
        {name: 'Zapatillas de Ballet', imageUrl: 'https://saborlatinochile.cl/res/img/zapatos-ballet.jpg'},
        {name: 'Vestido de Baile Latino', imageUrl: 'https://saborlatinochile.cl/res/img/Vestido-Baile-Latino.jpg'},
        {name: 'Suela para Zapatos de Flamenco', imageUrl: 'https://saborlatinochile.cl/res/img/zapato-flamenco.jpg'},
        {name: 'Pantalón de Hip Hop', imageUrl: 'https://saborlatinochile.cl/res/img/Pantalon-Hip-Hop.jpg'},
        {name: 'Polera Mujer Sabor Latino Chile', imageUrl: 'https://saborlatinochile.cl/res/img/women1.jpg'},
        {name: 'Polera Hombre Sabor Latino Chile', imageUrl: 'https://saborlatinochile.cl/res/img/men1.jpg'}        
    ];

    return (
        <div className="product-gallery">
            <div className='titulo'>
                <h1>Productos destacados</h1>
            </div>

          <div className="grid-container" id='productos'>
            {products.map((product, index) => (
              <div key={index} className="grid-item">
                <img src={product.imageUrl} alt={product.name} />
                <div className="product-name">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      );
};