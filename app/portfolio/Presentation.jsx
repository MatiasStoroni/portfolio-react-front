import './Presentation.css'
import perfil from "../assets/images/perfil.jpg"
import line from "../assets/images/line-nobg.png"
import star from "../assets/images/star-white-nobg.png"

export default function Presentation() {

    return (
        <div className="presentation">
            <img id="profile" src={perfil.src} width="250px" height="250px" />
            <h2 className='section-title'>MATIAS STORONI</h2>
            <div className='page-divider'>
                <img id="line" src={line.src}  /> <img id="star" src={star.src} /> <img id="line" src={line.src} />
            </div>
            <p>Estudiante Ing. Sistemas - Fullstack Developer</p>
        </div>
    )

}