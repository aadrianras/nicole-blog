/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

import { image_s, step, content, step_title } from './Step.module.css';

const Step = ({ image, alt, number, title, desc }) => {
    return (
        <div className={step}>
            <img className={image_s} src={`/images/${image}`} alt={alt} />
            <div className={content}>
                <h3 className={step_title}><span >{number}</span>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

Step.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Step;