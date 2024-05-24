import '../../styles/servicios.css'
import Servicio from './servicio'

export default function Servicios() {

    const today = new Date();
    const fechaTermino = new Date();
    fechaTermino.setDate(today.getDate() + 62);


    const servicios =
        [
            {
                tipo_plan: 'Nutricionista',
                descripcion: 'Asegura una dieta balanceada dependiendo del objetivo que quieras lograr.',
                imageUrl: 'https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg',
                valor: 20000,
                fecha_inicio: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
                fecha_exp: `${fechaTermino.getFullYear()}-${(fechaTermino.getMonth() + 1).toString().padStart(2, '0')}-${fechaTermino.getDate().toString().padStart(2, '0')}`
            },

            {
                tipo_plan: 'Preparador Físico',
                descripcion: 'Entrenamientos personalizados de acuerdo a tus metas e intereses. No importa si eres nuevo o experimentado.',
                imageUrl: 'https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg',
                valor: 30000,
                fecha_inicio: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
                fecha_exp: `${fechaTermino.getFullYear()}-${(fechaTermino.getMonth() + 1).toString().padStart(2, '0')}-${fechaTermino.getDate().toString().padStart(2, '0')}`
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
                        <Servicio imagen={servicio.imageUrl} tipo_plan={servicio.tipo_plan} descripcion={servicio.descripcion} valor={servicio.valor}
                            fecha_inicio={servicio.fecha_inicio}
                            fecha_exp={servicio.fecha_exp} />
                    ))
                }
            </div>
        </div>
    )
}