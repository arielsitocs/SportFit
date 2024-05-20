import '../../styles/perfil.css'
import hombre from '../../assets/img/hombre.webp'
import Suscripcion from '../perfil/suscripcion'
import { AppContext } from '../../App'
import { useContext } from 'react'

export default function Perfil() {
    const { nombre, setNombre } = useContext(AppContext);

    return (
        <div className='main'>
            <div className="perfil-top">
                <div className="perfil-foto">
                    <img src={hombre} alt="" />
                </div>

                <div className="perfil-info">
                    <h2>{nombre}</h2>
                    <h3>Cliente SportFit</h3>
                </div>
            </div>

            <div className="perfil-middle">
                <div className="perfil-descripcion-title">
                    <h2>Sobre Mí</h2>
                </div>
                <div className="perfil-descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia eum obcaecati eligendi corporis perferendis eveniet iste nesciunt iure? Commodi tempora molestiae non tempore suscipit deserunt expedita nostrum odio libero?</p>
                </div>
            </div>

            <div className="perfil-bottom">
                <div className="perfil-suscripciones">
                    <div className="perfil-suscripciones-title">
                        <h2>Mis Suscripciones</h2>
                    </div>

                    <div className="perfil-suscripciones-contenido">
                        <Suscripcion nombre='Nutricionista'
                            descripcion='Asegura una dieta balanceada dependiendo del objetivo que quieras lograr. Contratar' />
                        <Suscripcion nombre='Preparador Físico'
                            descripcion='Entrenamientos personalizados de acuerdo a tus metas e intereses. No importa si eres nuevo o experimentado.' />
                        <Suscripcion nombre='Servicio Random'
                            descripcion='When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.' />
                    </div>
                </div>
            </div>
        </div>
    )
}