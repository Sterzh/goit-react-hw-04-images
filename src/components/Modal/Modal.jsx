import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    props.closeModal(e);
  };

  return (
    <div className={css.Overlay} onClick={props.closeModal}>
      <div className={css.Modal}>
        <img src={props.src} alt={props.alt} />
        <p className={css.Alt}>{props.alt}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
