import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { container, info, phrase, whatsapp, banner_s, blocks_s } from './HomeHero.module.css';

const HomeHero = () => {

    return (
        <div className={container}>
            <div className={info}>
                <p className={phrase}>Mantener una buena salud debería ser el objetivo principal de todos nosotros.
                </p>
                <a
                    className={whatsapp}
                    href='https://wa.me/+59178916557'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Haz una cita
                </a>
            </div>
            <div className={banner_s}>
                {
                    [...Array(25).keys()].map((b) => (<div className={blocks_s} style={{ animationDelay: `${b * 0.05}s` }} key={b}></div>))
                }

            </div>
        </div>
    );
}

export default HomeHero;