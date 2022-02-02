import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { container, logo, logo_menu, menu, menu_items, menu_button, close_button_c, close_button, icon, last_link, link, selected, facebook, follow_c, follow } from './NavBar.module.css';
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

    return (
        <>
            {
                displayMenu
                &&
                (

                    <div className={`${menu} animate__animated animate__fadeInRightBig`}>
                        <div className={close_button_c}>
                            <button className={close_button} onClick={() => setDisplayMenu(false)}>
                                <FontAwesomeIcon icon={faTimes} className={icon} />
                            </button>
                        </div>
                        <div className={menu_items}>
                            <Link href='/'>
                                <a className={logo_menu}>
                                    <Image src='/images/logo.png' alt='Logo Nicole Azurduy' layout="fill" objectFit="contain" />
                                </a>
                            </Link>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <p className={`${link} ${pathname === '/' ? selected : ''}`}>Inicio</p>
                                    </a>
                                </Link>
                                <Link href='/sobre-mi'>
                                    <a>
                                        <p className={`${link} ${pathname === '/sobre-mi' ? selected : ''}`}>Sobre mí</p>
                                    </a>
                                </Link>
                                <Link href='/servicios'>
                                    <a>
                                        <p className={`${link} ${pathname === '/servicios' ? selected : ''}`}>Servicios</p>
                                    </a>
                                </Link>
                                <Link href='/'>
                                    <a>
                                        <p className={`${link} ${last_link} ${pathname === '/blog' ? selected : ''}`}>Blog</p>
                                    </a>
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
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
            <nav className={container}>
                <Link href='/'>
                    <a className={logo}>
                        <Image src='/images/logo.png' alt='Logo Nicole Azurduy' layout="fill" objectFit="contain" />
                    </a>
                </Link>
                <p
                    className={menu_button}
                    onClick={() => setDisplayMenu(true)}
                >
                    Menu
                </p>
            </nav>
        </>
    );
}

export default NavBar;