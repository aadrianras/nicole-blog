import Link from 'next/link';
import PropTypes from 'prop-types';
import { container, text_s } from './ButtonLinkAnimation.module.css';

const ButtonLinkAnimation = ({ text, toURL }) => {
    return (
        (<Link href={toURL} className={container}>

            <span className={text_s}>
                {text}
            </span>

        </Link>)
    );
};

ButtonLinkAnimation.propTypes = {
    text: PropTypes.string.isRequired,
    toURL: PropTypes.string.isRequired
};

export default ButtonLinkAnimation;