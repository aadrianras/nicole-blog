import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { container, text, button } from './ContactBox.module.css';

const ContactBox = () => {
    return (
        <div className={container}>
            <h5>Si deseas coordinar una cita o realizarme cualquier tipo de consulta</h5>
            <p className={text}>No dudes en escribirme un mensaje, te respondere con mucho gusto.</p>
            <a
                className={button}
                href="https://wa.me/+59178916557"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Enviame un mensaje</span>
            </a>
        </div>
    );
}

export default ContactBox;