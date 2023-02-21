import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { container, logo, logo_menu, menu, menu_items, menu_button, close_button_c, close_button, close_icon, icon, last_link, link, selected, facebook, follow_c, follow } from './NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const { pathname } = useRouter();

    const handleClick = (e) => {
        if (displayMenu) {
            e?.target?.className?.includes(`${menu}`) === false ? setDisplayMenu(false) : null;
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    });

    return <>
        {
            displayMenu
            &&
            (

                <div className={`${menu} animate__animated animate__fadeInRightBig`}>
                    <div className={close_button_c}>
                        <button className={close_button} onClick={() => setDisplayMenu(false)}>
                            <FontAwesomeIcon icon={faTimes} className={close_icon} />
                        </button>
                    </div>
                    <div className={menu_items}>
                        <Link href='/' className={logo_menu}>

                            <Image src='/images/logo.png' alt='Logo Nicole Azurduy' layout="fill" objectFit="contain" />

                        </Link>
                        <div>
                            <Link href='/'>

                                <p className={`${link} ${pathname === '/' ? selected : ''}`}>Inicio</p>

                            </Link>
                            <Link href='/sobre-mi'>

                                <p className={`${link} ${pathname === '/sobre-mi' ? selected : ''}`}>Sobre mí</p>

                            </Link>
                            <Link href='/servicios'>

                                <p className={`${link} ${pathname === '/servicios' ? selected : ''}`}>Servicios</p>

                            </Link>
                            <Link href='/blog'>

                                <p className={`${link} ${last_link} ${pathname === '/blog' ? selected : ''}`}>Blog</p>

                            </Link>
                        </div>
                        <div className={follow_c}>
                            <p className={follow}>Sigueme en</p>
                            <a
                                className={facebook}
                                href="https://www.facebook.com/fisioterapia.nicole.azurduy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebookSquare} className={icon} />
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            )
        }

        <nav className={container}>
            <Link href='/' className={logo}>

                <Image src='/images/logo.png' alt='Logo Nicole Azurduy' layout="fill" objectFit="contain" />

            </Link>
            <p
                className={menu_button}
                onClick={() => setDisplayMenu(true)}
            >
                Menu
            </p>
        </nav>
    </>;
}

export default NavBar;