import '../../styles/productos.css'
import { useFetch } from '../../useFetch.js'
import Producto from './producto'

export default function Productos() {
    const { data, loading } = useFetch("https://www.saborlatinochile.cl/duoc/servicio_web_sportfit.php")

    const productos = [
      {
        "codigo": "101",
        "nombre": "Cinturón soporte lumbar",
        "descripcion": "Dispositivo diseñado para brindar estabilidad y apoyo a la región lumbar.",
        "stock": 15,
        "precio": 26000,
        "imagen": "https://contents.mediadecathlon.com/p2069594/k$2b03eb16b83c8c2b188d7e31d7c17908/cinturon-lumbar-musculacion-de-cuero.jpg?format=auto&quality=40&f=800x800"
      },
      {
        "codigo": "102",
        "nombre": "Set mancuernas sculpture 20KG",
        "descripcion": "Discos metálicos para desarrollar músuculos en distintas zonas del cuerpo.",
        "stock": 10,
        "precio": 50000,
        "imagen": "https://sparta.cl/media/catalog/product/s/e/set-mancuernas-body-sculpture-20kg-asa.jpg"
      },
      {
        "codigo": "103",
        "nombre": "Pesa rusa 10KG",
        "descripcion": "Permite una amplia variedad de ejercicio, como balanceo y levantamiento.",
        "stock": 11,
        "precio": 19990,
        "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0uP1mVXyDDTVwOaRAp9JMT2gO8zXfi6I7Nd-pQ_U7PRRv1TMDSeS82u3hpWjQo7PQEcS-4YPfnOIe4E-frhCv-rm9kVADkav2wFjG17T5ovI-SHfJH-GSinolUK4whOyVmdKz7so&usqp=CAc"
      },
      {
        "codigo": "104",
        "nombre": "Creatina Drive 300G",
        "descripcion": "Para mejorar tu rendimiento en el ejercicio y aumentar la masa muscular",
        "stock": 27,
        "precio": 29990,
        "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRva0l8HfT4lnlourDguGZW1OhpRvyUWHkYkUxSxJuOCxxXizn1jY1ICl3UrlwyVyvp0vJGX9Rf7Oyx7EyI_eeHM4ziHnP-G-AQ8Gs7b9FzBogtdKdRMswwTXKFSZXh5L5S-wZg6uk&usqp=CAc"
      },
      {
        "codigo": "105",
        "nombre": "Rodillera venda elástica",
        "descripcion": "Para mejorar tu rendimiento en el ejercicio y aumentar la masa muscular",
        "stock": 9,
        "precio": 7000,
        "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqIsa0W-k-MjaPVgK-8zgWwO4wV_xoZKNG9aXTwOyF0oURgycmt24vCBkCNlRDt6xqTUP0RPnnnaMtSUGmALM3-xrzHNiVqoUw_sii_dFC39cY1BTdLaqzwhj5582xRiTxx6z1FPQ&usqp=CAc"
      },
      {
        "codigo": "106",
        "nombre": "Protector rodilleras pro",
        "descripcion": "Previene lesiones en deportes de contacto.",
        "stock": 11,
        "precio": 13000,
        "imagen": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlgzDd4BTyJoiwPUE9t_Y0kLqgwh3KA6bv9T5sGpzMlsvedPwirD1OlfZAD5-1N3i7EXiBSlRRpUPNB0JjDE7nm3XDdrJd5xQtpyIppfS5DvDvezJsIrIdY8UZ-6_-1Rvqq2Q5G_M&usqp=CAc"
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