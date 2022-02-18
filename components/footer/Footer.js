import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import { container, logo_c, logo, legal_c, legal, holos, facebook, holos_link, icon } from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={container}>
            <div className={logo_c}>
                <Link href='/'>
                    <a className={logo}>
                        <Image src='/images/logo.png' alt='Logo Nicole Azurduy' layout="fill" objectFit="contain" />
                    </a>
                </Link>
                <a
                    className={facebook}
                    href="https://www.facebook.com/fisioterapia.nicole.azurduy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebookSquare} className={icon} />
                    <span>Facebook</span>
                </a>
            </div>
            <div className={legal_c}>
                <Link href='/politica-de-privacidad'>
                    <a className={legal} >POLÍTICA DE PRIVACIDAD</a>
                </Link>
            </div>
            <p className={holos}>
                Desarrollado por
                <a
                    className={holos_link}
                    href="https://holos73.media"
                    target="_blank"
                    rel="noreferrer"
                >
                    Holos 73
                </a>
            </p>
        </footer>
    );
}

export default Footer;