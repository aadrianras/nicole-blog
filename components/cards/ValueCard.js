/* eslint-disable @next/next/no-img-element */
import { container, flower } from './ValueCard.module.css';

const ValueCard = ({ image, title, text }) => {
    return (
        <div className={container}>
            <img className={flower} src={`/images/${image}`} alt='Dibujo de flor rosa' />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default ValueCard;