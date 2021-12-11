import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import { container, logo_c, logo, legal_c, legal, holos, facebook } from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={container}>
            <div className={logo_c}>
                <h2 className={logo}>Nicole Azurduy</h2>
                <a
                    className={facebook}
                    href="https://www.facebook.com/fisioterapia.nicole.azurduy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            </div>
            <div className={legal_c}>
                <Link href='/'>
                    <a className={legal} >POLÍTICA DE PRIVACIDAD</a>
                </Link>
                <Link href='/'>
                    <a className={legal} >TERMINOS Y CONDICIONES</a>
                </Link>
            </div>
            <p className={holos}>Desarrollado por <a href="https://holos73.media" target="_blank" rel="noreferrer">Holos 73</a></p>
        </footer>
    );
}

export default Footer;