import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ event, openModal }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={event.previewURL}
        alt={event.tags}
        className={css.ImageGalleryItemImage}
        onClick={openModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  event: PropTypes.object.isRequired,
};
