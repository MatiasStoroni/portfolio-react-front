import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Header() {

    
    return (
        <div className='header'>
            <ul className='nav'>
                <li>Inicio</li>
                <li>Educacion</li>
                <li>Experiencia</li>
                <li>Competencias</li>
                <li>Proyectos</li>
            </ul>
            <ul className='social-media'>
                <h4>Redes</h4>
                <li><Link href="#" className='link'/></li>
                <li><Link href="#" className='link'/></li>
                <Link href="/portfolio/auth/login" className='link'><li></li></Link>
            </ul>

            <div className='header-collapsed'>
                <button className='nav-collapsed'></button>
                <button className='social-collapsed'></button>
            </div>

        </div>
    )
}