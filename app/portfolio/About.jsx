import './About.css'
import line from "../assets/images/line-dark-nobg.png"
import star from "../assets/images/star-dark-nobg.png"

export default function About() {


    return (
        <div className="about">
            <h2 className="section-title">ACERCA DE MÍ...</h2>
            <div className='page-divider'>
                <img id="line" src={line.src} /> <img id="star" src={star.src} /> <img id="line" src={line.src} />
            </div>
            <div className='description'>
                <p className='about-paragraph'>Soy un estudiante de Ingeniería con un gran interés en Programación.
                    Tengo gran capacidad para adaptarme a todo tipo de entornos y aportar siempre lo mejor de mí.</p>
                <p className='about-paragraph'>Me caracterizo por mi facilidad para el trabajo en equipo y mi entusiasmo por
                    aprender y desarrollar mis habilidades.
                    Estoy en busca de una oportunidad laboral en la que adquirir más experiencia.</p>
            </div>
            <a>
                <button>Descargar CV</button>
            </a>

        </div>
    )
}