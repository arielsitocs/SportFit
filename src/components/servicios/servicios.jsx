import '../../styles/servicios.css'
import Servicio from './servicio'

export default function Servicios() {
    const servicios =
        [
            {
                name: 'Nutricionista',
                description: 'Asegura una dieta balanceada dependiendo del objetivo que quieras lograr.',
                imageUrl: 'https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg',
                precio: 20000
            },

            {
                name: 'Preparador Físico',
                description: 'Entrenamientos personalizados de acuerdo a tus metas e intereses. No importa si eres nuevo o experimentado.',
                imageUrl: 'https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg',
                precio: 20000
            },
        ]

    return (
        <div className="servicios">
            <div className="servicios-title">
                <h1>Nuestros Servicios</h1>
            </div>

            <div className="servicios-content">
                {
                    servicios.map((servicio) => (
                        <Servicio imagen={servicio.imageUrl} nombre={servicio.name} descripcion={servicio.description} precio={servicio.precio} />
                    ))
                }
            </div>
        </div>
    )
}