import Link from 'next/link';
import PropTypes from 'prop-types';
import { container } from './ButtonLink.module.css';

const ButtonLink = ({ text, toURL }) => {
  return (
    <Link href={toURL}>
      <a className={container}>
        <span>{text}</span>
      </a>
    </Link>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  toURL: PropTypes.string.isRequired,
};

export default ButtonLink;
