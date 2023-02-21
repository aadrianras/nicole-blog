import Link from 'next/link';
import PropTypes from 'prop-types';
import { container } from './ButtonLink.module.css';

const ButtonLink = ({ text, toURL }) => {
  return (
    (<Link href={toURL} className={container}>

      <span>{text}</span>

    </Link>)
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  toURL: PropTypes.string.isRequired,
};

export default ButtonLink;
